"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[1867],{8569:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=t(4848),r=t(8453);const o={},a="PostgreSQL",i={id:"workloads/postgresql/postgresql",title:"PostgreSQL",description:"PostgreSQL is a powerful, open source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads.",source:"@site/docs/workloads/postgresql/postgresql.md",sourceDirName:"workloads/postgresql",slug:"/workloads/postgresql/",permalink:"/VirtualClient/docs/workloads/postgresql/",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/postgresql/postgresql.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenSSL Workload Profiles",permalink:"/VirtualClient/docs/workloads/openssl/openssl-profiles"},next:{title:"PostgreSQL Workload Profiles",permalink:"/VirtualClient/docs/workloads/postgresql/postgresql-profiles"}},l={},d=[{value:"What is Being Measured?",id:"what-is-being-measured",level:2},{value:"Workload Metrics",id:"workload-metrics",level:2},{value:"Useful PostgreSQL Server Commands",id:"useful-postgresql-server-commands",level:2}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"postgresql",children:"PostgreSQL"}),"\n",(0,n.jsx)(s.p,{children:"PostgreSQL is a powerful, open source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://www.postgresql.org/about/",children:"Official PostgreSQL Documentation"})}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["The following is the widely used tools for benchmarking performance of a PostgreSQL server include:\n",(0,n.jsx)(s.a,{href:"https://www.hammerdb.com/docs/index.html",children:"HammerDB Tool"})]}),"\n",(0,n.jsx)(s.h2,{id:"what-is-being-measured",children:"What is Being Measured?"}),"\n",(0,n.jsx)(s.p,{children:"HammerDB is used to generate various traffic patterns against Redis instances. These toolsets performs creation of Database and perform transactions against\nthe PostgreSQL server and provides NOPM (number of orders per minute), and TPM (transactions per minute)."}),"\n",(0,n.jsx)(s.h2,{id:"workload-metrics",children:"Workload Metrics"}),"\n",(0,n.jsx)(s.p,{children:"The following metrics are examples of those captured by the Virtual Client when running the HammerDB tool against a\nPostgreSQL server."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Metric Name"}),(0,n.jsx)(s.th,{children:"Value"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Number Of Operations Per Minute"}),(0,n.jsx)(s.td,{children:"12855"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Transactions Per Minute"}),(0,n.jsx)(s.td,{children:"29441"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"useful-postgresql-server-commands",children:"Useful PostgreSQL Server Commands"}),"\n",(0,n.jsx)(s.p,{children:"The following section contains commands that were useful when onboarding this workload that help in the process of investigations and debugging."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"# Key files and directories associated with PostgreSQL version 14\n# - /usr/lib/postgresql/14/bin/\n#   The directory where the  'psql' toolset noted/used below is installed.\n#\n# - /etc/postgresql/14/main/pg_hba.conf\n#   The configuration file that defines the IP addresses on which the PostgreSQL server listens.\n#\n# - /etc/postgresql/14/main/postgresql.conf\n#   The configuration file for the PostgreSQL server itself. Most of the server-wide settings are defined in this file.\n\n# Show PostgreSQL server online status. Use the password for the current logged in user.\n/etc/init.d/postgresql status\n\n# Show PostgreSQL service/daemon status.\nsudo systemctl status postgresql\n\n# or\nsudo systemctl --type=service | grep postgresql\n\n# Show user/account under which the PostgreSQL service is running.\nsystemctl show -p UID -p User postgresql.service\n\n# Set password for PostgreSQL super user (e.g. 'postgres') account in environment variable. This environment variable is used \n# by the 'psql' command when the password is not provided on the command line.\nexport PGPASSWORD={pwd}\n\n# Enter PostgreSQL terminal. Note that any of the commands below using 'psql' directly can be executed from the\n# terminal. Using the terminal saves you from having to type the password multiple times.\nexport PGPASSWORD={pwd}\npsql -U postgres\n\npostgres-# \\l\npostgres-# \\du\n\n# Show all databases\npsql -U postgres -c \"\\l\"\n\n# Show all users for a PostgreSQL Server.\npsql -U postgres -c \"\\du\"\n\n# List PostgreSQL database tables\npsql -U postgres -d hammerdbtest -c \"\\dt\"\n\n# List PostgreSQL database tablespaces\npsql -U postgres -c \"\\db+\"\n\n# Show PostgreSQL configuration file contents\n~/virtualclient/content/linux-x64$ sudo cat /etc/postgresql/14/main/pg_hba.conf\n~/virtualclient/content/linux-x64$ sudo cat /etc/postgresql/14/main/postgresql.conf\n\n"})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>i});var n=t(6540);const r={},o=n.createContext(r);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);