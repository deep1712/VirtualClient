﻿// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

namespace VirtualClient.Actions
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Runtime.InteropServices;
    using System.Threading;
    using System.Threading.Tasks;
    using Microsoft.Azure.Amqp.Framing;
    using Microsoft.Extensions.DependencyInjection;
    using VirtualClient.Common;
    using VirtualClient.Common.Extensions;
    using VirtualClient.Common.Platform;
    using VirtualClient.Common.Telemetry;
    using VirtualClient.Contracts;
    using VirtualClient.Contracts.Metadata;

    /// <summary>
    /// The MLPerf Training workload executor.
    /// </summary>
    [UnixCompatible]
    public class MLPerfTrainingExecutor : VirtualClientComponent
    {
        private const string AccuracySummary = nameof(MLPerfTrainingExecutor.AccuracySummary);
        private const string PerformanceSummary = nameof(MLPerfTrainingExecutor.PerformanceSummary);
        private string executionPath; 

        private IStateManager stateManager;
        private ISystemManagement systemManager;

        /// <summary>
        /// Constructor for <see cref="MLPerfTrainingExecutor"/>
        /// </summary>
        /// <param name="dependencies">Provides required dependencies to the component.</param>
        /// <param name="parameters">Parameters defined in the profile or supplied on the command line.</param>
        public MLPerfTrainingExecutor(IServiceCollection dependencies, IDictionary<string, IConvertible> parameters)
             : base(dependencies, parameters)
        {
            this.systemManager = this.Dependencies.GetService<ISystemManagement>();
            this.stateManager = this.systemManager.StateManager;
        }

        /// <summary>
        /// Disk filter string to filter disks to format.
        /// </summary>
        public string DiskFilter
        {
            get
            {
                string filter = this.Parameters.GetValue<string>(nameof(MLPerfTrainingExecutor.DiskFilter), "SizeGreaterThan:1000gb");
                filter = $"{filter}&OSDisk:false";
                return filter;
            }

            set
            {
                this.Parameters[nameof(MLPerfTrainingExecutor.DiskFilter)] = value;
            }
        }

        /// <summary>
        /// The MLPerf Training model name (e.g. bert, rnnt, ssd-mobilenet).
        /// </summary>
        public string Model
        {
            get
            {
                return this.Parameters.GetValue<string>(nameof(this.Model), "bert");
            }
        }

        /// <summary>
        /// The current running user.
        /// </summary>
        public string Username
        {
            get
            {
                string username = this.Parameters.GetValue<string>(nameof(MLPerfExecutor.Username), string.Empty);
                if (string.IsNullOrWhiteSpace(username))
                {
                    username = Environment.UserName;
                }

                return username;
            }
        }

        /// <summary>
        /// ML specific parameter used to control size of training samples
        /// </summary>
        public string BatchSize
        {
            get
            {
                return this.Parameters.GetValue<string>(nameof(this.BatchSize), "40");
            }
        }

        /// <summary>
        /// The framework used for the implementation. It will be a sub directory in the model/implementations directory
        /// </summary>
        public string Implementation
        {
            get
            {
                return this.Parameters.GetValue<string>(nameof(this.Implementation), "pytorch-22.09");
            }
        }

        /// <summary>
        /// Container image name
        /// </summary>
        public string ContainerName
        {
            get
            {
                return this.Parameters.GetValue<string>(nameof(this.ContainerName), "language_model");
            }
        }

        /// <summary>
        /// Name of zip file without .zip. It will be the name of the folder where the model package is extracted to
        /// </summary>
        public string DataPath
        {
            get
            {
                return this.Parameters.GetValue<string>(nameof(this.DataPath), "mlperf-training-data-bert.1.0.0");
            }
        }

        /// <summary>
        /// Number of GPUs to be utilized
        /// </summary>
        public int GPUCount
        {
            get
            {
                return this.Parameters.GetValue<int>(nameof(this.GPUCount), 8);
            }
        }

        /// <summary>
        /// Config file for MLPerf Training
        /// </summary>
        public string ConfigFile
        {
            get
            {
                return this.Parameters.GetValue<string>(nameof(this.ConfigFile), "config_DGXA100_1x8x56x1.sh");
            }
        }

        /// <summary>
        /// Initializes the environment for execution of the MLPerf Training workload.
        /// </summary>
        protected override async Task InitializeAsync(EventContext telemetryContext, CancellationToken cancellationToken)
        {
            this.Logger.LogTraceMessage($"{this.TypeName}.InitializationStarted", telemetryContext);

            await this.LogIfUnixDistroNotSupportedAsync(cancellationToken)
                .ConfigureAwait(false);

            IPackageManager packageManager = this.Dependencies.GetService<IPackageManager>();
            DependencyPath workloadPackage = await packageManager.GetPlatformSpecificPackageAsync(this.PackageName, this.Platform, this.CpuArchitecture, cancellationToken)
                .ConfigureAwait(false);
            this.executionPath = this.PlatformSpecifics.Combine(workloadPackage.Path, "NVIDIA", "benchmarks", this.Model, "implementations", this.Implementation);

            MLPerfTrainingState state = await this.stateManager.GetStateAsync<MLPerfTrainingState>($"{nameof(MLPerfTrainingState)}", cancellationToken)
                ?? new MLPerfTrainingState();

            if (!state.Initialized)
            {
                // Setup Environment
                await this.SetupDocker(telemetryContext, cancellationToken);

                state.Initialized = true;
                await this.stateManager.SaveStateAsync<MLPerfTrainingState>($"{nameof(MLPerfTrainingState)}", state, cancellationToken);
            }
        }

        /// <summary>
        /// Creates setup for MLPerf Training workload.
        /// </summary>
        protected async Task SetupDocker(EventContext telemetryContext, CancellationToken cancellationToken)
        {
            // add user in docker group
            await this.ExecuteCommandAsync("sudo", $"usermod -aG docker {this.Username}", this.executionPath, telemetryContext, cancellationToken);

            string dockerImageCommand = $"docker build --pull -t {this.GetContainerName()} .";
            string dockerRunCommand = $"docker run --runtime=nvidia {this.GetContainerName()}";

            await this.ExecuteCommandAsync("sudo", dockerImageCommand, this.executionPath, telemetryContext, cancellationToken);
            await this.ExecuteCommandAsync("sudo", dockerRunCommand, this.executionPath, telemetryContext, cancellationToken);
        }

        /// <summary>
        /// Gets the container name created by MLPerf Training.
        /// </summary>
        protected string GetContainerName()
        {
            // Update this function to accomodate other architectures
            if (this.Platform == PlatformID.Unix && this.CpuArchitecture == Architecture.X64)
            {
                return $"mlperf-training-{this.Username}-x86_64:{this.ContainerName}";
            }
            else
            {
                throw new WorkloadException(
                    $"The container name is not defined for the current platform/architecture " +
                    $"{PlatformSpecifics.GetPlatformArchitectureName(this.Platform, this.CpuArchitecture)}.",
                    ErrorReason.PlatformNotSupported);
            }
        }

        /// <summary>
        /// Executes the MLPerf Training workload.
        /// </summary>
        protected override async Task ExecuteAsync(EventContext telemetryContext, CancellationToken cancellationToken)
        {
            string shardsPath = this.PlatformSpecifics.Combine("/mlperftraining0", $"{this.DataPath}", "mlperf-training-package", "hdf5", "training-4320");
            string evalPath = this.PlatformSpecifics.Combine("/mlperftraining0", $"{this.DataPath}", "mlperf-training-package", "hdf5", "eval_varlength");
            string checkpointPath = this.PlatformSpecifics.Combine("/mlperftraining0", $"{this.DataPath}", "mlperf-training-package", "phase1");

            using (BackgroundOperations profiling = BackgroundOperations.BeginProfiling(this, cancellationToken))
            {
                List<string> commands = new List<string>
                {
                    @"sudo chmod \+x ""/home/user/tools/VirtualClient/packages/hpcg/runhpcg.sh""",
                    @"sudo bash /home/user/tools/VirtualClient/packages/hpcg/runhpcg.sh"
                };
                string execCommand = $"su -c \"source {this.ConfigFile}; " + 
                                     $"env BATCHSIZE={this.BatchSize} " +
                                     $"DGXNGPU={this.GPUCount} " + 
                                     $"CUDA_VISIBLE_DEVICES=\"{string.Join(',', Enumerable.Range(0, this.GPUCount).ToArray())}\" " + 
                                     $"CONT={this.GetContainerName()} DATADIR={shardsPath} DATADIR_PHASE2={shardsPath} EVALDIR={evalPath} CHECKPOINTDIR={checkpointPath} CHECKPOINTDIR_PHASE1={checkpointPath} ./run_with_docker.sh\"";

                using (IProcessProxy process = await this.ExecuteCommandAsync("sudo", execCommand, this.executionPath, telemetryContext, cancellationToken))
                {
                    if (!cancellationToken.IsCancellationRequested)
                    {
                        await this.LogProcessDetailsAsync(process, telemetryContext, logToFile: true);

                        process.ThrowIfErrored<WorkloadException>(errorReason: ErrorReason.WorkloadFailed);

                        this.CaptureMetrics(process, telemetryContext, cancellationToken);
                    }
                }
            }
        }

        /// <summary>
        /// Returns true/false whether the component is supported on the current
        /// OS platform and CPU architecture.
        /// </summary>
        protected override bool IsSupported()
        {
            bool isSupported = base.IsSupported()
                && (this.Platform == PlatformID.Unix)
                && (this.CpuArchitecture == Architecture.X64);

            if (!isSupported)
            {
                this.Logger.LogNotSupported("MLPerf", this.Platform, this.CpuArchitecture, EventContext.Persisted());
            }

            return isSupported;
        }

        /// <summary>
        /// Parse metrics and push to telemetry
        /// </summary>
        private void CaptureMetrics(IProcessProxy process, EventContext telemetryContext, CancellationToken cancellationToken)
        {
            this.MetadataContract.AddForScenario(
                "MLPerf",
                process.FullCommand(),
                toolVersion: null);

            this.MetadataContract.Apply(telemetryContext);
            // Convert StandardOutput to string
            string logs = string.Concat(process.StandardOutput.ToString(), Environment.NewLine);

            MLPerfTrainingMetricsParser parser = new MLPerfTrainingMetricsParser(logs);
            IList<Metric> metrics = parser.Parse();

            this.Logger.LogMetrics(
                "MLPerf Training",
                this.Scenario,
                process.StartTime,
                process.ExitTime,
                metrics,
                "MLPerfTrainingPerformance",
                process.FullCommand(),
                this.Tags,
                telemetryContext);
        }

        /// <summary>
        /// Unsupported Linux error handling.
        /// </summary>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        /// <exception cref="WorkloadException"></exception>
        private async Task LogIfUnixDistroNotSupportedAsync(CancellationToken cancellationToken)
        {
            if (this.Platform == PlatformID.Unix)
            {
                var linuxDistributionInfo = await this.systemManager.GetLinuxDistributionAsync(cancellationToken)
                    .ConfigureAwait(false);

                switch (linuxDistributionInfo.LinuxDistribution)
                {
                    case LinuxDistribution.Ubuntu:
                    case LinuxDistribution.Debian:
                    case LinuxDistribution.CentOS7:
                    case LinuxDistribution.RHEL7:
                    case LinuxDistribution.SUSE:
                        break;
                    default:
                        this.Logger.LogNotSupported("MLPerf", this.Platform, this.CpuArchitecture, EventContext.Persisted());
                        break;
                }
            }
        }

        internal class MLPerfTrainingState : State
        {
            public MLPerfTrainingState(IDictionary<string, IConvertible> properties = null)
                : base(properties)
            {
            }

            public bool Initialized
            {
                get
                {
                    return this.Properties.GetValue<bool>(nameof(MLPerfTrainingState.Initialized), false);
                }

                set
                {
                    this.Properties[nameof(MLPerfTrainingState.Initialized)] = value;
                }
            }
        }
    }
}