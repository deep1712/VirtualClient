"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[1443],{9761:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>l,contentTitle:()=>n,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=s(4848),t=s(8453);const i={},n="Performance Counter Metrics",c={id:"monitors/0100-perf-counter-metrics",title:"Performance Counter Metrics",description:"The following sections describe the various types of performance counters that are captured by the Virtual Client while running any of the",source:"@site/docs/monitors/0100-perf-counter-metrics.md",sourceDirName:"monitors",slug:"/monitors/0100-perf-counter-metrics",permalink:"/VirtualClient/docs/monitors/0100-perf-counter-metrics",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/monitors/0100-perf-counter-metrics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Atop",permalink:"/VirtualClient/docs/monitors/0001-atop"},next:{title:"Monitor Profiles",permalink:"/VirtualClient/docs/monitors/0200-monitor-profiles"}},l={},h=[{value:"Capture Intervals",id:"capture-intervals",level:2},{value:"Counters (Windows Systems)",id:"counters-windows-systems",level:2},{value:"Additional Counters (Windows Systems)",id:"additional-counters-windows-systems",level:2},{value:"Counters (Linux Systems)",id:"counters-linux-systems",level:2}];function x(e){const d={h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.h1,{id:"performance-counter-metrics",children:"Performance Counter Metrics"}),"\n",(0,r.jsx)(d.p,{children:"The following sections describe the various types of performance counters that are captured by the Virtual Client while running any of the\nvarious workloads supported. This is a standard set of performance counters captured in both the Guest/VM as well as the Azure Host scenarios."}),"\n",(0,r.jsx)(d.h2,{id:"capture-intervals",children:"Capture Intervals"}),"\n",(0,r.jsx)(d.p,{children:"Performance counters are captured on Windows systems every 1 second and are aggregated/averaged out on 10 minute intervals by default. This allows\nthe Virtual Client to have a large number of samples over the interval of time when calculating averages. This in turn increases the accuracy and\nvalidity of the performance measurements."}),"\n",(0,r.jsx)(d.h2,{id:"counters-windows-systems",children:"Counters (Windows Systems)"}),"\n",(0,r.jsx)(d.p,{children:"The following performance counters are captured during the duration of the Virtual Client execution on Azure VMs running a Windows operating system.\nThese counters are tracked the entire time the Virtual Client is running on the intervals noted above."}),"\n",(0,r.jsx)(d.p,{children:"Counters are captured on Windows systems using the out-of-box support in the .NET SDK for the performance counter sub-system."}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Counter Name"}),(0,r.jsx)(d.th,{children:"Example Value (min)"}),(0,r.jsx)(d.th,{children:"Example Value (max)"}),(0,r.jsx)(d.th,{children:"Example Value (avg)"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\IPv4\\Datagrams Received/sec"}),(0,r.jsx)(d.td,{children:"1.9394553899765015"}),(0,r.jsx)(d.td,{children:"523.2702026367188"}),(0,r.jsx)(d.td,{children:"7.459091585073898"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\IPv4\\Datagrams Sent/sec"}),(0,r.jsx)(d.td,{children:"1.4957220554351807"}),(0,r.jsx)(d.td,{children:"59.85932540893555"}),(0,r.jsx)(d.td,{children:"2.4022125797220039"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\IPv4\\Datagrams/sec"}),(0,r.jsx)(d.td,{children:"3.435187339782715"}),(0,r.jsx)(d.td,{children:"583.6214599609375"}),(0,r.jsx)(d.td,{children:"9.862171525062344"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Available Bytes"}),(0,r.jsx)(d.td,{children:"137898049536.0"}),(0,r.jsx)(d.td,{children:"254628593664.0"}),(0,r.jsx)(d.td,{children:"173305532521.59568"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Cache Bytes"}),(0,r.jsx)(d.td,{children:"65195400.0"}),(0,r.jsx)(d.td,{children:"117965808.0"}),(0,r.jsx)(d.td,{children:"98183972.33649932"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Cache Faults/sec"}),(0,r.jsx)(d.td,{children:"6.581874847412109"}),(0,r.jsx)(d.td,{children:"2068.153564453125"}),(0,r.jsx)(d.td,{children:"47.935744725541798"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Committed Bytes"}),(0,r.jsx)(d.td,{children:"24908865536.0"}),(0,r.jsx)(d.td,{children:"142634614784.0"}),(0,r.jsx)(d.td,{children:"106716024126.17639"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Demand Zero Faults/sec"}),(0,r.jsx)(d.td,{children:"58.619815826416019"}),(0,r.jsx)(d.td,{children:"43696.21484375"}),(0,r.jsx)(d.td,{children:"2503.7350609105189"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Page Faults/sec"}),(0,r.jsx)(d.td,{children:"88.71714782714844"}),(0,r.jsx)(d.td,{children:"43664.671875"}),(0,r.jsx)(d.td,{children:"3343.535956591085"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Page Reads/sec"}),(0,r.jsx)(d.td,{children:"0.06315436959266663"}),(0,r.jsx)(d.td,{children:"200.9219207763672"}),(0,r.jsx)(d.td,{children:"8.28668747248894"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Page Writes/sec"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"0.0"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Pages Input/sec"}),(0,r.jsx)(d.td,{children:"3.1273350715637209"}),(0,r.jsx)(d.td,{children:"739.6574096679688"}),(0,r.jsx)(d.td,{children:"34.66781720506935"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Pages Output/sec"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"0.0"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Pages/sec"}),(0,r.jsx)(d.td,{children:"3.127346992492676"}),(0,r.jsx)(d.td,{children:"739.6596069335938"}),(0,r.jsx)(d.td,{children:"34.62828928862161"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Transition Faults/sec"}),(0,r.jsx)(d.td,{children:"26.764577865600587"}),(0,r.jsx)(d.td,{children:"15638.5693359375"}),(0,r.jsx)(d.td,{children:"1067.3553226527884"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\PhysicalDisk(_Total)% Disk Read Time"}),(0,r.jsx)(d.td,{children:"0.00955707672983408"}),(0,r.jsx)(d.td,{children:"29.516769409179689"}),(0,r.jsx)(d.td,{children:"0.8819494984394478"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\PhysicalDisk(_Total)% Disk Time"}),(0,r.jsx)(d.td,{children:"51.839927673339847"}),(0,r.jsx)(d.td,{children:"166866.28125"}),(0,r.jsx)(d.td,{children:"99921.0147311186"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\PhysicalDisk(_Total)% Disk Write Time"}),(0,r.jsx)(d.td,{children:"51.685264587402347"}),(0,r.jsx)(d.td,{children:"166867.515625"}),(0,r.jsx)(d.td,{children:"99920.55515474607"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\PhysicalDisk(_Total)% Idle Time"}),(0,r.jsx)(d.td,{children:"60.85190963745117"}),(0,r.jsx)(d.td,{children:"79.03485870361328"}),(0,r.jsx)(d.td,{children:"65.25808287249169"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\PhysicalDisk(_Total)\\Avg. Disk Queue Length"}),(0,r.jsx)(d.td,{children:"2.591966390609741"}),(0,r.jsx)(d.td,{children:"8343.2822265625"}),(0,r.jsx)(d.td,{children:"4995.99608238096"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\PhysicalDisk(_Total)\\Avg. Disk Read Queue Length"}),(0,r.jsx)(d.td,{children:"0.000477842811960727"}),(0,r.jsx)(d.td,{children:"1.4758336544036866"}),(0,r.jsx)(d.td,{children:"0.04409263106464223"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\PhysicalDisk(_Total)\\Avg. Disk Write Queue Length"}),(0,r.jsx)(d.td,{children:"2.584221124649048"}),(0,r.jsx)(d.td,{children:"8343.2177734375"}),(0,r.jsx)(d.td,{children:"4995.97360443713"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\PhysicalDisk(_Total)\\Avg. Disk sec/Read"}),(0,r.jsx)(d.td,{children:"0.00040244602132588625"}),(0,r.jsx)(d.td,{children:"0.03853315860033035"}),(0,r.jsx)(d.td,{children:"0.00549412016542641"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\PhysicalDisk(_Total)\\Avg. Disk sec/Transfer"}),(0,r.jsx)(d.td,{children:"0.0033158184960484506"}),(0,r.jsx)(d.td,{children:"0.43584492802619936"}),(0,r.jsx)(d.td,{children:"0.26414447839326368"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\PhysicalDisk(_Total)\\Avg. Disk sec/Write"}),(0,r.jsx)(d.td,{children:"0.0033161116298288109"}),(0,r.jsx)(d.td,{children:"0.43584486842155459"}),(0,r.jsx)(d.td,{children:"0.2641487668149598"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\PhysicalDisk(_Total)\\Disk Bytes/sec"}),(0,r.jsx)(d.td,{children:"57389760.0"}),(0,r.jsx)(d.td,{children:"219434048.0"}),(0,r.jsx)(d.td,{children:"189502656.385346"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\PhysicalDisk(_Total)\\Disk Read Bytes/sec"}),(0,r.jsx)(d.td,{children:"15437.5947265625"}),(0,r.jsx)(d.td,{children:"10281823.0"}),(0,r.jsx)(d.td,{children:"378520.7838961266"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\PhysicalDisk(_Total)\\Disk Reads/sec"}),(0,r.jsx)(d.td,{children:"0.08935023844242096"}),(0,r.jsx)(d.td,{children:"160.9096221923828"}),(0,r.jsx)(d.td,{children:"6.552046077555928"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\PhysicalDisk(_Total)\\Disk Transfers/sec"}),(0,r.jsx)(d.td,{children:"745.4456176757813"}),(0,r.jsx)(d.td,{children:"20848.3984375"}),(0,r.jsx)(d.td,{children:"17039.31111275454"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\PhysicalDisk(_Total)\\Disk Write Bytes/sec"}),(0,r.jsx)(d.td,{children:"57268104.0"}),(0,r.jsx)(d.td,{children:"219379984.0"}),(0,r.jsx)(d.td,{children:"189124374.94708277"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\PhysicalDisk(_Total)\\Disk Writes/sec"}),(0,r.jsx)(d.td,{children:"743.5797119140625"}),(0,r.jsx)(d.td,{children:"20848.20703125"}),(0,r.jsx)(d.td,{children:"17036.208734941352"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor(_Total)% Idle Time"}),(0,r.jsx)(d.td,{children:"5.271390438079834"}),(0,r.jsx)(d.td,{children:"91.41498565673828"}),(0,r.jsx)(d.td,{children:"71.42914129983441"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor(_Total)% Interrupt Time"}),(0,r.jsx)(d.td,{children:"0.04631827771663666"}),(0,r.jsx)(d.td,{children:"0.8421745896339417"}),(0,r.jsx)(d.td,{children:"0.1747746500300198"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor(_Total)% Privileged Time"}),(0,r.jsx)(d.td,{children:"1.960703730583191"}),(0,r.jsx)(d.td,{children:"8.808183670043946"}),(0,r.jsx)(d.td,{children:"2.981151686756388"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor(_Total)% Processor Time"}),(0,r.jsx)(d.td,{children:"7.651301383972168"}),(0,r.jsx)(d.td,{children:"93.05585479736328"}),(0,r.jsx)(d.td,{children:"25.865997984742536"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor(_Total)% User Time"}),(0,r.jsx)(d.td,{children:"5.649149417877197"}),(0,r.jsx)(d.td,{children:"84.65630340576172"}),(0,r.jsx)(d.td,{children:"22.879608902872986"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor(_Total)\\Interrupts/sec"}),(0,r.jsx)(d.td,{children:"28545.078125"}),(0,r.jsx)(d.td,{children:"224772.9375"}),(0,r.jsx)(d.td,{children:"87820.70197485584"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\System\\Context Switches/sec"}),(0,r.jsx)(d.td,{children:"50054.0703125"}),(0,r.jsx)(d.td,{children:"637204.4375"}),(0,r.jsx)(d.td,{children:"182084.66010854819"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\System\\Processes"}),(0,r.jsx)(d.td,{children:"64.98281860351563"}),(0,r.jsx)(d.td,{children:"86.70774841308594"}),(0,r.jsx)(d.td,{children:"70.201976011116"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\System\\System Calls/sec"}),(0,r.jsx)(d.td,{children:"82747.8828125"}),(0,r.jsx)(d.td,{children:"1651668.5"}),(0,r.jsx)(d.td,{children:"366946.69737957938"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\System\\Threads"}),(0,r.jsx)(d.td,{children:"5358.17138671875"}),(0,r.jsx)(d.td,{children:"6486.013671875"}),(0,r.jsx)(d.td,{children:"5983.371521823128"})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"additional-counters-windows-systems",children:"Additional Counters (Windows Systems)"}),"\n",(0,r.jsx)(d.p,{children:"For Windows systems that are running Hyper-V (e.g. hosting VMs), Virtual Client captures counters from the following additional counter\ncategories."}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsxs)(d.li,{children:["\n",(0,r.jsx)(d.p,{children:"Hyper-V Hypervisor Logical Processor"}),"\n"]}),"\n",(0,r.jsxs)(d.li,{children:["\n",(0,r.jsx)(d.p,{children:"Hyper-V Hypervisor Root Virtual Processor"}),"\n"]}),"\n",(0,r.jsxs)(d.li,{children:["\n",(0,r.jsx)(d.p,{children:"Hyper-V Hypervisor Virtual Processor"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.strong,{children:"Examples"})}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Counter Name"}),(0,r.jsx)(d.th,{children:"Example Value (min)"}),(0,r.jsx)(d.th,{children:"Example Value (max)"}),(0,r.jsx)(d.th,{children:"Example Value (avg)"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Hyper-V Hypervisor Logical Processor(_Total)\\% Hypervisor Run Time"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"2.4485373497009277"}),(0,r.jsx)(d.td,{children:"0.38610789290128766"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Hyper-V Hypervisor Logical Processor(_Total)\\% Total Run Time"}),(0,r.jsx)(d.td,{children:"1.1285661458969117"}),(0,r.jsx)(d.td,{children:"64.74947357177735"}),(0,r.jsx)(d.td,{children:"11.292482366028356"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Hyper-V Hypervisor Logical Processor(_Total)\\Hypervisor Microarchitectural Buffer Flushes/sec"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"357720.78125"}),(0,r.jsx)(d.td,{children:"471.17181096330438"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Hyper-V Hypervisor Root Virtual Processor(_Total)\\% Total Run Time"}),(0,r.jsx)(d.td,{children:"0.8170837759971619"}),(0,r.jsx)(d.td,{children:"9.768498420715332"}),(0,r.jsx)(d.td,{children:"2.877983896330881"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Hyper-V Hypervisor Virtual Processor(_Total)\\% Total Run Time"}),(0,r.jsx)(d.td,{children:"0.11696118116378784"}),(0,r.jsx)(d.td,{children:"99.21871948242188"}),(0,r.jsx)(d.td,{children:"44.5632012688273"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(d.h2,{id:"counters-linux-systems",children:"Counters (Linux Systems)"}),"\n",(0,r.jsx)(d.p,{children:"The following performance counters are captured during the duration of the Virtual Client execution on Azure VMs running a Linux operating system.\nThese counters are tracked the entire time the Virtual Client is running on the intervals noted above."}),"\n",(0,r.jsx)(d.p,{children:"Counters are captured on Linux systems using the Atop toolset/application. Atop is a package that can be installed on any Linux distribution that\nenables a wide range of performance aspects of the system to be captured. The Virtual Client integrates Atop into most workload profile scenarios\nby default."}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Counter Name"}),(0,r.jsx)(d.th,{children:"Example Value (min)"}),(0,r.jsx)(d.th,{children:"Example Value (max)"}),(0,r.jsx)(d.th,{children:"Example Value (avg)"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Disk(sda)# Reads"}),(0,r.jsx)(d.td,{children:"209.0"}),(0,r.jsx)(d.td,{children:"49276.0"}),(0,r.jsx)(d.td,{children:"8220.819889922186"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Disk(sda)# Writes"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"373653.0"}),(0,r.jsx)(d.td,{children:"37056.128107800345"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Disk(sda)% Busy Time"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"78.0"}),(0,r.jsx)(d.td,{children:"2.199658379199089"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Disk(sda)\\Avg. Request Time"}),(0,r.jsx)(d.td,{children:"0.62"}),(0,r.jsx)(d.td,{children:"23.1"}),(0,r.jsx)(d.td,{children:"1.7087094325298902"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Disk(sdb)# Reads"}),(0,r.jsx)(d.td,{children:"209.0"}),(0,r.jsx)(d.td,{children:"49123.0"}),(0,r.jsx)(d.td,{children:"8721.350161320934"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Disk(sdb)# Writes"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"377891.0"}),(0,r.jsx)(d.td,{children:"49333.23363066996"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Disk(sdb)% Busy Time"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"78.0"}),(0,r.jsx)(d.td,{children:"4.555133801480356"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Disk(sdb)\\Avg. Request Time"}),(0,r.jsx)(d.td,{children:"0.63"}),(0,r.jsx)(d.td,{children:"26.0"}),(0,r.jsx)(d.td,{children:"2.230874928829001"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Disk(sdc)# Reads"}),(0,r.jsx)(d.td,{children:"209.0"}),(0,r.jsx)(d.td,{children:"37301.0"}),(0,r.jsx)(d.td,{children:"5218.567319716549"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Disk(sdc)# Writes"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"272345.0"}),(0,r.jsx)(d.td,{children:"56918.71029595665"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Disk(sdc)% Busy Time"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"78.0"}),(0,r.jsx)(d.td,{children:"18.264693622342646"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Disk(sdc)\\Avg. Request Time"}),(0,r.jsx)(d.td,{children:"0.64"}),(0,r.jsx)(d.td,{children:"26.5"}),(0,r.jsx)(d.td,{children:"4.556898707794915"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Disk# Reads"}),(0,r.jsx)(d.td,{children:"14757.0"}),(0,r.jsx)(d.td,{children:"181046.0"}),(0,r.jsx)(d.td,{children:"39070.70260011387"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Disk# Writes"}),(0,r.jsx)(d.td,{children:"22549.0"}),(0,r.jsx)(d.td,{children:"4031907.0"}),(0,r.jsx)(d.td,{children:"455077.6113114443"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Disk\\Avg. % Busy Time"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"69.27777777777777"}),(0,r.jsx)(d.td,{children:"8.526122393032623"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Disk\\Avg. Request Time"}),(0,r.jsx)(d.td,{children:"0.73"}),(0,r.jsx)(d.td,{children:"23.66388888888889"}),(0,r.jsx)(d.td,{children:"2.7740474157019059"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Buffers Bytes"}),(0,r.jsx)(d.td,{children:"87556096.0"}),(0,r.jsx)(d.td,{children:"360185856.0"}),(0,r.jsx)(d.td,{children:"139338396.85526667"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Cached Bytes"}),(0,r.jsx)(d.td,{children:"3006477107.2"}),(0,r.jsx)(d.td,{children:"63887638528.0"}),(0,r.jsx)(d.td,{children:"12306316238.597668"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Free Bytes"}),(0,r.jsx)(d.td,{children:"412404940.8"}),(0,r.jsx)(d.td,{children:"13099650252.8"}),(0,r.jsx)(d.td,{children:"10407128820.115832"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Kernel Bytes"}),(0,r.jsx)(d.td,{children:"194825420.8"}),(0,r.jsx)(d.td,{children:"3328599654.4"}),(0,r.jsx)(d.td,{children:"665495325.8609982"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Page Reclaims"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"0.0"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Page Scans"}),(0,r.jsx)(d.td,{children:"21827000.0"}),(0,r.jsx)(d.td,{children:"456560000.0"}),(0,r.jsx)(d.td,{children:"294238175.0"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Page Steals"}),(0,r.jsx)(d.td,{children:"21550000.0"}),(0,r.jsx)(d.td,{children:"456000000.0"}),(0,r.jsx)(d.td,{children:"294089618.42105266"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Swap Space Free Bytes"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"0.0"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Swap Space Reads"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"0.0"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Swap Space Total Bytes"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"0.0"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Swap Space Virtual Committed Bytes"}),(0,r.jsx)(d.td,{children:"649278259.2"}),(0,r.jsx)(d.td,{children:"5798205849.6"}),(0,r.jsx)(d.td,{children:"1358700600.9040044"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Swap Space Virtual Limit Bytes"}),(0,r.jsx)(d.td,{children:"8375186227.2"}),(0,r.jsx)(d.td,{children:"33715493273.6"}),(0,r.jsx)(d.td,{children:"12030269422.353611"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Swap Space Writes"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"0.0"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Memory\\Total Bytes"}),(0,r.jsx)(d.td,{children:"16750372454.4"}),(0,r.jsx)(d.td,{children:"67430986547.2"}),(0,r.jsx)(d.td,{children:"24060538844.707223"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Network(eth0)% Usage"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"0.0"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Network(eth0)\\KB/sec Received"}),(0,r.jsx)(d.td,{children:"299.0"}),(0,r.jsx)(d.td,{children:"8819.0"}),(0,r.jsx)(d.td,{children:"2165.781094527363"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Network(eth0)\\KB/sec Transmitted"}),(0,r.jsx)(d.td,{children:"16.0"}),(0,r.jsx)(d.td,{children:"39.0"}),(0,r.jsx)(d.td,{children:"20.4958238420653"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Network(eth0)\\Packets Received"}),(0,r.jsx)(d.td,{children:"472504.0"}),(0,r.jsx)(d.td,{children:"1364828.0"}),(0,r.jsx)(d.td,{children:"945803.7923310554"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Network(eth0)\\Packets Transmitted"}),(0,r.jsx)(d.td,{children:"20515.0"}),(0,r.jsx)(d.td,{children:"233996.0"}),(0,r.jsx)(d.td,{children:"77819.65110098709"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Network\\Avg. % Usage"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"0.0"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Network\\Avg. KB/sec Received"}),(0,r.jsx)(d.td,{children:"299.0"}),(0,r.jsx)(d.td,{children:"8819.0"}),(0,r.jsx)(d.td,{children:"2165.781094527363"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Network\\Avg. KB/sec Transmitted"}),(0,r.jsx)(d.td,{children:"16.0"}),(0,r.jsx)(d.td,{children:"39.0"}),(0,r.jsx)(d.td,{children:"20.4958238420653"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Network\\IP Datagrams Delivered"}),(0,r.jsx)(d.td,{children:"24124.0"}),(0,r.jsx)(d.td,{children:"208809.0"}),(0,r.jsx)(d.td,{children:"78577.88325740319"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Network\\IP Datagrams Forwarded"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"0.0"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Network\\IP Datagrams Received"}),(0,r.jsx)(d.td,{children:"24128.0"}),(0,r.jsx)(d.td,{children:"208843.0"}),(0,r.jsx)(d.td,{children:"78586.3122627183"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Network\\IP Datagrams Transmitted"}),(0,r.jsx)(d.td,{children:"21317.0"}),(0,r.jsx)(d.td,{children:"239448.0"}),(0,r.jsx)(d.td,{children:"78745.12566438876"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Network\\Packets Received"}),(0,r.jsx)(d.td,{children:"472504.0"}),(0,r.jsx)(d.td,{children:"1364828.0"}),(0,r.jsx)(d.td,{children:"945803.7923310554"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Network\\Packets Transmitted"}),(0,r.jsx)(d.td,{children:"20515.0"}),(0,r.jsx)(d.td,{children:"233996.0"}),(0,r.jsx)(d.td,{children:"77819.65110098709"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Network\\TCP Segments Received"}),(0,r.jsx)(d.td,{children:"23124.0"}),(0,r.jsx)(d.td,{children:"200989.0"}),(0,r.jsx)(d.td,{children:"77267.61958997722"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Network\\TCP Segments Transmitted"}),(0,r.jsx)(d.td,{children:"21787.0"}),(0,r.jsx)(d.td,{children:"262562.0"}),(0,r.jsx)(d.td,{children:"85337.28777524678"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Network\\UDP Segments Received"}),(0,r.jsx)(d.td,{children:"340.0"}),(0,r.jsx)(d.td,{children:"7842.0"}),(0,r.jsx)(d.td,{children:"1222.9104024297647"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Network\\UDP Segments Transmitted"}),(0,r.jsx)(d.td,{children:"383.0"}),(0,r.jsx)(d.td,{children:"7888.0"}),(0,r.jsx)(d.td,{children:"1266.553720577069"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor Information(_Total)% IOWait Time"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"3.8833333333333335"}),(0,r.jsx)(d.td,{children:"0.12962962962962963"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor Information(_Total)% IOWait Time Min"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"0.0"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor Information(_Total)% IOWait Time Max"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"3.8833333333333335"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor Information(_Total)% IOWait Time Median"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"0.13962962962962963"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor Information(_Total)% IRQ Time"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"7.0"}),(0,r.jsx)(d.td,{children:"0.6301707779886148"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor Information(_Total)% IRQ Time Min"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"0.0"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor Information(_Total)% IRQ Time Max"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"1.0"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor Information(_Total)% IRQ Time Median"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"0.6"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor Information(_Total)% Idle Time"}),(0,r.jsx)(d.td,{children:"25.0"}),(0,r.jsx)(d.td,{children:"1311.0"}),(0,r.jsx)(d.td,{children:"356.6918406072106"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor Information(_Total)% Idle Time Min"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"0.0"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor Information(_Total)% Idle Time Max"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"55.983333333333337"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor Information(_Total)% Idle Time Median"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"11.7639876540"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor Information(_Total)% System Time"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"35.0"}),(0,r.jsx)(d.td,{children:"4.337950664136622"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor Information(_Total)% System Time Min"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"1.727689476"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor Information(_Total)% System Time Max"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"15.717548975"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor Information(_Total)% System Time Median"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"5.875463786"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor Information(_Total)% User Time"}),(0,r.jsx)(d.td,{children:"2.0"}),(0,r.jsx)(d.td,{children:"373.0"}),(0,r.jsx)(d.td,{children:"96.4203036053131"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor Information(_Total)% User Time Min"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"24.016666666666667"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor Information(_Total)% User Time Max"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"89.25"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor Information(_Total)% User Time Median"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"---"}),(0,r.jsx)(d.td,{children:"78.10371380471381"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor Information(_Total)\\Available Threads (Avg1)"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"50.37"}),(0,r.jsx)(d.td,{children:"6.382355285632948"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor Information(_Total)\\Available Threads (Avg15)"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"47.26"}),(0,r.jsx)(d.td,{children:"5.097149364205731"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor Information(_Total)\\Available Threads (Avg5)"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"49.53"}),(0,r.jsx)(d.td,{children:"6.206646422471061"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor Information(_Total)\\CSwitches"}),(0,r.jsx)(d.td,{children:"649314.0"}),(0,r.jsx)(d.td,{children:"142975000.0"}),(0,r.jsx)(d.td,{children:"17557335.682482445"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor Information(_Total)\\Serviced Interrupts"}),(0,r.jsx)(d.td,{children:"188069.0"}),(0,r.jsx)(d.td,{children:"59030000.0"}),(0,r.jsx)(d.td,{children:"5904357.514329094"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor(cpu000)% IOWait Time"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"70.0"}),(0,r.jsx)(d.td,{children:"8.112523719165086"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor(cpu000)% IRQ Time"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"2.0"}),(0,r.jsx)(d.td,{children:"0.14648956356736243"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor(cpu000)% Idle Time"}),(0,r.jsx)(d.td,{children:"6.0"}),(0,r.jsx)(d.td,{children:"96.0"}),(0,r.jsx)(d.td,{children:"67.25483870967742"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor(cpu000)% System Time"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"2.0"}),(0,r.jsx)(d.td,{children:"0.3020872865275142"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor(cpu000)% User Time"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"93.0"}),(0,r.jsx)(d.td,{children:"23.901518026565467"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor(cpu001)% IOWait Time"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"69.0"}),(0,r.jsx)(d.td,{children:"7.474952561669829"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor(cpu001)% IRQ Time"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"0.0"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor(cpu001)% Idle Time"}),(0,r.jsx)(d.td,{children:"6.0"}),(0,r.jsx)(d.td,{children:"97.0"}),(0,r.jsx)(d.td,{children:"68.14667931688804"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor(cpu001)% System Time"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"1.0"}),(0,r.jsx)(d.td,{children:"0.19259962049335864"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor(cpu001)% User Time"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"93.0"}),(0,r.jsx)(d.td,{children:"23.965085388994308"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor(cpu002)% IOWait Time"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"70.0"}),(0,r.jsx)(d.td,{children:"7.7612903225806459"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor(cpu002)% IRQ Time"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"0.0"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor(cpu002)% Idle Time"}),(0,r.jsx)(d.td,{children:"6.0"}),(0,r.jsx)(d.td,{children:"97.0"}),(0,r.jsx)(d.td,{children:"67.74288425047439"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor(cpu002)% System Time"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"2.0"}),(0,r.jsx)(d.td,{children:"0.3189753320683112"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\\Processor(cpu002)% User Time"}),(0,r.jsx)(d.td,{children:"0.0"}),(0,r.jsx)(d.td,{children:"93.0"}),(0,r.jsx)(d.td,{children:"23.96584440227704"})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,t.R)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},8453:(e,d,s)=>{s.d(d,{R:()=>n,x:()=>c});var r=s(6540);const t={},i=r.createContext(t);function n(e){const d=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),r.createElement(i.Provider,{value:d},e.children)}}}]);