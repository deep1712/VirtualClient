"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[6362],{7911:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=r(4848),t=r(8453);const s={},a="MLPerf Trainging Bert Preprocessing Data",o={id:"workloads/mlperf/mlperf-trainining-bert-preprocessing-data",title:"MLPerf Trainging Bert Preprocessing Data",description:"The following document will show steps ran for Downloading,Preprocessing and Packaging the training data used in Bert training.",source:"@site/docs/workloads/mlperf/mlperf-trainining-bert-preprocessing-data.md",sourceDirName:"workloads/mlperf",slug:"/workloads/mlperf/mlperf-trainining-bert-preprocessing-data",permalink:"/VirtualClient/docs/workloads/mlperf/mlperf-trainining-bert-preprocessing-data",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/mlperf/mlperf-trainining-bert-preprocessing-data.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MLPerf Workload Profiles",permalink:"/VirtualClient/docs/workloads/mlperf/mlperf-profiles"},next:{title:"NAS Parallel",permalink:"/VirtualClient/docs/workloads/nasparallel/"}},l={},d=[{value:"VM Configuration used",id:"vm-configuration-used",level:2},{value:"Steps followed to preprocess data",id:"steps-followed-to-preprocess-data",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"mlperf-trainging-bert-preprocessing-data",children:"MLPerf Trainging Bert Preprocessing Data"}),"\n",(0,i.jsx)(n.p,{children:"The following document will show steps ran for Downloading,Preprocessing and Packaging the training data used in Bert training."}),"\n",(0,i.jsx)(n.h2,{id:"vm-configuration-used",children:"VM Configuration used"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"VMSKU: Standard ND96asr v4 (96 vcpus, 900 GiB memory)"}),"\n",(0,i.jsx)(n.li,{children:"Operating System : Ubuntu 20.04"}),"\n",(0,i.jsx)(n.li,{children:"OS Disk Size: 256 GB"}),"\n",(0,i.jsxs)(n.li,{children:["Dats Disk Size : 8TB (Mounted on ",(0,i.jsx)(n.code,{children:"/data/mlperf/bert"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"steps-followed-to-preprocess-data",children:"Steps followed to preprocess data"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Git cloned ",(0,i.jsx)(n.a,{href:"https://github.com/mlcommons/training_results_v2.1",children:"MLPerfTraining"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Visit ",(0,i.jsx)(n.a,{href:"https://github.com/mlcommons/training_results_v2.1/tree/main/NVIDIA/benchmarks/bert/implementations/pytorch-22.09",children:"Bert Benchmark"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:['Update "',(0,i.jsx)(n.a,{href:"https://github.com/mlcommons/training_results_v2.1/blob/main/NVIDIA/benchmarks/bert/implementations/pytorch-22.09/requirements.txt",children:"requirements.txt"}),'" gdown section\n"gdown==4.4.0" to "gdown==4.7.1" (Current Latest)\nTo avoid failure of download from Google Drive.']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run following commands:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker build --pull -t mlperf-training:language_model .\n\ndocker push mlperf-training:language_model\n\ndocker run --runtime=nvidia --ipc=host -v /data/mlperf/bert:/workspace/bert_data mlperf-training:language_model\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Inside docker container run following commands:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd /workspace/bert\n./input_preprocessing/prepare_data.sh --outputdir /workspace/bert_data\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Inside container follow steps to package data ",(0,i.jsx)(n.a,{href:"https://github.com/mlcommons/training_results_v2.1/tree/main/NVIDIA/benchmarks/bert/implementations/pytorch-22.09/input_preprocessing/packed_data",children:"link"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Exit container and zip ",(0,i.jsx)(n.code,{children:"/data/mlperf/bert"})]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var i=r(6540);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);