"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[3065],{3655:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var t=n(4848),r=n(8453);const i={},l="SPECjbb",c={id:"workloads/specjbb/specjbb",title:"SPECjbb",description:"The SPECjbb\xae 2015 benchmark has been developed from the ground up to measure performance based on the latest Java application features.",source:"@site/docs/workloads/specjbb/specjbb.md",sourceDirName:"workloads/specjbb",slug:"/workloads/specjbb/",permalink:"/VirtualClient/docs/workloads/specjbb/",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/specjbb/specjbb.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SPEC CPU Workload Profiles",permalink:"/VirtualClient/docs/workloads/speccpu/speccpu-profiles"},next:{title:"SPECjbb Workload Profiles",permalink:"/VirtualClient/docs/workloads/specjbb/specjbb-profiles"}},d={},o=[{value:"How to package SPECjbb",id:"how-to-package-specjbb",level:2},{value:"What is Being Measured?",id:"what-is-being-measured",level:2},{value:"Workload Metrics",id:"workload-metrics",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"specjbb",children:"SPECjbb"}),"\n",(0,t.jsx)(s.p,{children:"The SPECjbb\xae 2015 benchmark has been developed from the ground up to measure performance based on the latest Java application features.\nIt is relevant to all audiences who are interested in Java server performance, including JVM vendors, hardware developers,\nJava application developers, researchers and members of the academic community."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://www.spec.org/jbb2015/docs/userguide.pdf",children:"SPECjbb Documentation"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://pro.spec.org/private/osg/incoming/",children:"SPECjbb Download"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://pro.spec.org/private/wiki/bin/view/Java/SPECjbb2015_103_Update",children:"SPECjbb2015 Release"})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"how-to-package-specjbb",children:"How to package SPECjbb"}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.p,{children:"Specjbb2015 is a commercial workload. VirtualClient cannot distribute the license and binary. You need to follow the following steps to package this workload and make it available locally or in a storage that you own."})}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["SPECjbb can be downloaded here ",(0,t.jsx)(s.a,{href:"https://pro.spec.org/private/osg/incoming/",children:"https://pro.spec.org/private/osg/incoming/"}),", with SPEC credentials. Download the desired SPECjbb version like ",(0,t.jsx)(s.code,{children:"specjbb2015-1.03.zip"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Please preserve the file structure, except insert one ",(0,t.jsx)(s.code,{children:"specjbb2015.vcpkg"})," json file."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-treeview",metastring:"{6}",children:"  specjbb2015-1.03\n  \u2502   run_composite.bat\n  \u2502   run_composite.sh\n  \u2502   etc...\n  \u2502   specjbb2015.jar\n  \u2502   specjbb2015.vcpkg\n  \u2502   SPECjbb2015_license.txt\n  \u2502   SPECjbb2015_readme.txt\n  \u2502   src.zip\n  \u2502   version.txt\n  \u251c\u2500\u2500\u2500config/\n  \u251c\u2500\u2500\u2500docs/\n  \u251c\u2500\u2500\u2500lib/\n  \u2514\u2500\u2500\u2500redistributable_sources/\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"specjbb2015.vcpkg"})," json example"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "name": "specjbb2015",\n  "description": "SPECjbb 2015 benchmark workload toolsets.",\n  "version": "2015",\n  "metadata": {}\n}\n'})}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsxs)(s.li,{children:["Zip the specjbb2015-1.03 directory into ",(0,t.jsx)(s.code,{children:"specjbb2015-1.03.zip"}),", make sure that no extra ",(0,t.jsx)(s.code,{children:"/specjbb2015-1.03/"})," top directory is created."]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"7z a specjbb2015-1.03.zip ./specjbb2015-1.03/*\n"})}),"\n",(0,t.jsx)(s.p,{children:"or"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"cd specjbb2015-1.03; zip -r ../specjbb2015-1.03.zip *\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"5",children:["\n",(0,t.jsxs)(s.li,{children:["Modify the ",(0,t.jsx)(s.a,{href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-SPECjBB.json",children:"SPECjbb profile"})," as needed. If you are using your own blob storage, you can use the profile as is. If you are copying the zip file locally under ",(0,t.jsx)(s.code,{children:"vc/packages"}),", you can simply remove the DependencyPackageInstallation step."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"what-is-being-measured",children:"What is Being Measured?"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://www.spec.org/jbb2015/docs/SPECjbb2015-Result_File_Fields.html#max-jops",children:"max-jops"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://www.spec.org/jbb2015/docs/SPECjbb2015-Result_File_Fields.html#critical-jops",children:"critical-jops"})}),"\n"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Unit"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"hbIR (max attempted)"}),(0,t.jsx)(s.td,{children:"jOPS"}),(0,t.jsx)(s.td,{children:"High Bound Injection Rate (HBIR) (Approximate High Bound of throughput) maximum"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"hbIR (settled)"}),(0,t.jsx)(s.td,{children:"jOPS"}),(0,t.jsx)(s.td,{children:"CHigh Bound Injection Rate (HBIR) (Approximate High Bound of throughput) settled."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"max-jOPS"}),(0,t.jsx)(s.td,{children:"jOPS"}),(0,t.jsx)(s.td,{children:"RT(Response-Throughput) step levels close to max-jOPS."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"critical-jOPS"}),(0,t.jsx)(s.td,{children:"jOPS"}),(0,t.jsx)(s.td,{children:"Geometric mean of jOPS at these SLAs represent the critical-jOPS metric."})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"workload-metrics",children:"Workload Metrics"}),"\n",(0,t.jsx)(s.p,{children:"The following metrics are examples of those captured by the Virtual Client when running the SPECjbb workload."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Metric Name"}),(0,t.jsx)(s.th,{children:"Example Value (min)"}),(0,t.jsx)(s.th,{children:"Example Value (max)"}),(0,t.jsx)(s.th,{children:"Example Value (avg)"}),(0,t.jsx)(s.th,{children:"Unit"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"critical-jOPS"}),(0,t.jsx)(s.td,{children:"915.0"}),(0,t.jsx)(s.td,{children:"11579.0"}),(0,t.jsx)(s.td,{children:"3946.5767634854776"}),(0,t.jsx)(s.td,{children:"jOPS"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"hbIR (max attempted)"}),(0,t.jsx)(s.td,{children:"1949.0"}),(0,t.jsx)(s.td,{children:"23838.0"}),(0,t.jsx)(s.td,{children:"10757.738589211618"}),(0,t.jsx)(s.td,{children:"jOPS"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"hbIR (settled)"}),(0,t.jsx)(s.td,{children:"1814.0"}),(0,t.jsx)(s.td,{children:"22823.0"}),(0,t.jsx)(s.td,{children:"9998.61825726141"}),(0,t.jsx)(s.td,{children:"jOPS"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"max-jOPS"}),(0,t.jsx)(s.td,{children:"1799.0"}),(0,t.jsx)(s.td,{children:"21454.0"}),(0,t.jsx)(s.td,{children:"9114.796680497926"}),(0,t.jsx)(s.td,{children:"jOPS"})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>c});var t=n(6540);const r={},i=t.createContext(r);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);