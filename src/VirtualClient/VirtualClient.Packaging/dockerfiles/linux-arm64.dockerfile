ARG REPO=mcr.microsoft.com/dotnet/runtime
# Ubuntu 20.04 image.
FROM ${REPO}:5.0.9-focal-arm64v8

COPY out/bin/Release/ARM64/VirtualClient.Main/net9.0/linux-arm64/publish/. ./VirtualClient/