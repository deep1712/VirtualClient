"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[1208],{7587:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var i=r(4848),s=r(8453);const n={},o="Prime95",l={id:"workloads/prime95/prime95",title:"Prime95",description:"Prime95 has been a popular choice for stress/torture testing a CPU since its introduction, especially with overclockers",source:"@site/docs/workloads/prime95/prime95.md",sourceDirName:"workloads/prime95",slug:"/workloads/prime95/",permalink:"/VirtualClient/docs/workloads/prime95/",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/prime95/prime95.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL Workload Profiles",permalink:"/VirtualClient/docs/workloads/postgresql/postgresql-profiles"},next:{title:"Prime95 Workload Profiles",permalink:"/VirtualClient/docs/workloads/prime95/prime95-profiles"}},a={},d=[{value:"Reasons Why Prime95 Workload Might Find Problems?",id:"reasons-why-prime95-workload-might-find-problems",level:2},{value:"What is Being Measured?",id:"what-is-being-measured",level:2},{value:"Workload Metrics",id:"workload-metrics",level:2}];function h(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"prime95",children:"Prime95"}),"\n",(0,i.jsx)(t.p,{children:"Prime95 has been a popular choice for stress/torture testing a CPU since its introduction, especially with overclockers\nand system builders. The software feeds the the processor a barrage of integer and floating-point calculations that can be\nconsistently verified with the goal of testing the stability of the CPU and L1/L2/L3 processor caches. Additionally, it utilizes all of the cores\non the system to ensure a consistently high stress test environment."}),"\n",(0,i.jsx)(t.p,{children:"Prime95 is designed to run indefinately on a system till any error is encountered. The workload is onboarded to the Virtual Client with the goal\nof supporting a dual-purpose: to test the performance/timing of the CPU in computing the calculations while also placing it under stress."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.mersenne.org/download/",children:"Prime95 Documentation"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"reasons-why-prime95-workload-might-find-problems",children:"Reasons Why Prime95 Workload Might Find Problems?"}),"\n",(0,i.jsx)(t.p,{children:'If system is not being overclocked, the most likely cause is memory. It is not uncommon\nfor memory to not run correctly at its rated speed (incorrectly "binned").  This is\nmost easily tested by swapping it with memory from another compatible computer and\nretesting. Overheating is another possible source of problems. CPU temperature can be\nmonitored to make sure it is under the limits.'}),"\n",(0,i.jsx)(t.p,{children:"Occasionally, the power supply is incapable of supplying sufficient power to the\nsystem under heavy load, this can be diagnosed by monitoring the 12v, 5v and\n3.3v voltages - there might be a substantial drop in these voltages when\nputting the system under load and generally means the PSU itself needs to be replaced\nwith a more capable unit."}),"\n",(0,i.jsx)(t.p,{children:"If system is being overclocked, the most likely problems are either the CPU core\nvoltage being set too low or drooping too far under heavy low. Another frequently seen\nissue is the motherboard failing to set a suitable voltage for the memory controller\nwhen an XMP profile is enabled."}),"\n",(0,i.jsx)(t.p,{children:"The above are just some possible causes, and actual problem might require thorough diagnosis."}),"\n",(0,i.jsx)(t.p,{children:"It might be noted that the faster prime95 finds a hardware error the more likely it is\nthat other programs running on the system will experience problems."}),"\n",(0,i.jsx)(t.h2,{id:"what-is-being-measured",children:"What is Being Measured?"}),"\n",(0,i.jsx)(t.p,{children:'The Prime95 "torture test" continuously stresses the CPU on the system with calculations for primality across varying FFT size. It checks whether\nthe calculations are within certain parameters while they are in progress and compares the computer\'s final results to results that are known to be\ncorrect. The time-to-compute the calculations is captured as well. Any mismatch is treated as an error indicating Hardware issues.'}),"\n",(0,i.jsx)(t.p,{children:"The following list describes the measurements captured by the workload running across different FFT sizes:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Number of Tests passed."}),"\n",(0,i.jsx)(t.li,{children:"Number of Tests failed."}),"\n",(0,i.jsx)(t.li,{children:"Time-to-Compute the Tests (in seconds)."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"workload-metrics",children:"Workload Metrics"}),"\n",(0,i.jsx)(t.p,{children:"The following metrics are examples of those captured by the Virtual Client when running the Prime95 workload."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Note that if the failed test count is greater than 0, it denotes an overall Prime95 test failure and some harware error. The test time is the time\nfor which the system was stressed with torture test. A higher the test time without error typically indicates more confidence in Prime95 results."})})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Metric Name"}),(0,i.jsx)(t.th,{children:"Example Value (min)"}),(0,i.jsx)(t.th,{children:"Example Value (max)"}),(0,i.jsx)(t.th,{children:"Example Value (avg)"}),(0,i.jsx)(t.th,{children:"Unit"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"failTestCount"}),(0,i.jsx)(t.td,{children:"0.0"}),(0,i.jsx)(t.td,{children:"0.0"}),(0,i.jsx)(t.td,{children:"0.0"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"passTestCount"}),(0,i.jsx)(t.td,{children:"32.0"}),(0,i.jsx)(t.td,{children:"192.0"}),(0,i.jsx)(t.td,{children:"115.45833333333333"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"testTime"}),(0,i.jsx)(t.td,{children:"3600.0031989"}),(0,i.jsx)(t.td,{children:"3601.679443"}),(0,i.jsx)(t.td,{children:"3600.23347608125"}),(0,i.jsx)(t.td,{children:"seconds"})]})]})]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>l});var i=r(6540);const s={},n=i.createContext(s);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);