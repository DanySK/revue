"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[804],{9265:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=n(4848),r=n(8453);const s={},d="Domain Driven Design",c={id:"report/ddd",title:"Domain Driven Design",description:"Event Storming",source:"@site/docs/report/02-ddd.md",sourceDirName:"report",slug:"/report/ddd",permalink:"/revue/docs/report/ddd",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/revue/docs/report/requirements"},next:{title:"Architecture",permalink:"/revue/docs/report/architecture"}},l={},a=[{value:"Event Storming",id:"event-storming",level:2},{value:"Bounded Contexts",id:"bounded-contexts",level:2},{value:"Device Monitoring",id:"device-monitoring",level:3},{value:"Ubiquitous Language",id:"ubiquitous-language",level:4},{value:"Alarm e recognition",id:"alarm-e-recognition",level:3},{value:"Ubiquitous Language",id:"ubiquitous-language-1",level:4},{value:"Security",id:"security",level:3},{value:"Ubiquitous Language",id:"ubiquitous-language-2",level:4},{value:"Users",id:"users",level:3},{value:"Ubiquitous Language",id:"ubiquitous-language-3",level:4},{value:"Location",id:"location",level:3},{value:"Ubiquitous Language",id:"ubiquitous-language-4",level:4},{value:"Log",id:"log",level:3},{value:"Ubiquitous Language",id:"ubiquitous-language-5",level:4},{value:"Notification",id:"notification",level:3},{value:"Ubiquitous Language",id:"ubiquitous-language-6",level:4}];function h(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"domain-driven-design",children:"Domain Driven Design"}),"\n",(0,t.jsx)(i.h2,{id:"event-storming",children:"Event Storming"}),"\n",(0,t.jsx)(i.p,{children:"------- immagine di noi alla lavagna -------"}),"\n",(0,t.jsx)(i.h2,{id:"bounded-contexts",children:"Bounded Contexts"}),"\n",(0,t.jsx)(i.p,{children:"Discussioni che abbiamo fatto su quanti e quali Bounded context.\nBusiness functionalities vs technical functionalities.\nMetodo diverso per disaccoppiare."}),"\n",(0,t.jsx)(i.h3,{id:"device-monitoring",children:"Device Monitoring"}),"\n",(0,t.jsx)(i.p,{children:"API OPERATIONS:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"GET /devices"})}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"ubiquitous-language",children:"Ubiquitous Language"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Term"}),(0,t.jsx)(i.th,{children:"Meaning"}),(0,t.jsx)(i.th,{children:"Synonyms"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Camera"}),(0,t.jsx)(i.td,{children:"Device that records an environment and transmit the stream to the system"}),(0,t.jsx)(i.td,{children:"Video Camera"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Device"}),(0,t.jsx)(i.td,{children:"Device sensing data from an environment (e.g. temperature)"}),(0,t.jsx)(i.td,{children:"-"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Device"}),(0,t.jsx)(i.td,{children:"Either a Camera or a Device"}),(0,t.jsx)(i.td,{children:"-"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Device/Camera settings"}),(0,t.jsx)(i.td,{children:"User-modifiable configuration of data relative to a specific device"}),(0,t.jsx)(i.td,{children:"-"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Transmission interval"}),(0,t.jsx)(i.td,{children:"The amount of time between to consecutive measurement transmission"}),(0,t.jsx)(i.td,{children:"-"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Capability"}),(0,t.jsx)(i.td,{children:"What a sensor is able to perceive and transmit"}),(0,t.jsx)(i.td,{children:"-"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Video Stream"}),(0,t.jsx)(i.td,{children:"Stream of video data produced by a camera"}),(0,t.jsx)(i.td,{children:"Stream, Transmission"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Measurement"}),(0,t.jsx)(i.td,{children:"Data produced by a sensor"}),(0,t.jsx)(i.td,{children:"Environment data, Device data"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Sensor"}),(0,t.jsx)(i.td,{children:"Device sensing data from an environment (e.g. temperature)"}),(0,t.jsx)(i.td,{children:"-"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Device"}),(0,t.jsx)(i.td,{children:"Either a Camera or a Sensor"}),(0,t.jsx)(i.td,{children:"-"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Sensor/Camera settings"}),(0,t.jsx)(i.td,{children:"User-modifiable configuration of data relative to a specific device"}),(0,t.jsx)(i.td,{children:"-"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Transmission interval"}),(0,t.jsx)(i.td,{children:"The amount of time between to consecutive measurement transmission"}),(0,t.jsx)(i.td,{children:"-"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Capability"}),(0,t.jsx)(i.td,{children:"What a sensor is able to perceive and transmit"}),(0,t.jsx)(i.td,{children:"-"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Video Stream"}),(0,t.jsx)(i.td,{children:"Stream of video data produced by a camera"}),(0,t.jsx)(i.td,{children:"Stream, Transmission"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Measurement"}),(0,t.jsx)(i.td,{children:"Data produced by a sensor"}),(0,t.jsx)(i.td,{children:"Environment data, Sensor data"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Numerical measurment"}),(0,t.jsxs)(i.td,{children:["A ",(0,t.jsx)(i.code,{children:"Measurement"})," with a single numerical value and a ",(0,t.jsx)(i.code,{children:"Measurement Type"})]}),(0,t.jsx)(i.td,{children:"-"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Measurement Type"}),(0,t.jsx)(i.td,{children:"A physical dimension with its unit of measure (e.g. temperature in Celsius)"}),(0,t.jsx)(i.td,{children:"-"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"alarm-e-recognition",children:"Alarm e recognition"}),"\n",(0,t.jsx)(i.h4,{id:"ubiquitous-language-1",children:"Ubiquitous Language"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Term"}),(0,t.jsx)(i.th,{children:"Meaning"}),(0,t.jsx)(i.th,{children:"Synonyms"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Security rule"}),(0,t.jsx)(i.td,{children:"A condition that if not satisfied will trigger an anomaly"}),(0,t.jsx)(i.td,{children:"Rule"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Intrusion rule"}),(0,t.jsx)(i.td,{children:"A condition that specify that in a video stream no object of a specific object class can be recognized"}),(0,t.jsx)(i.td,{children:"-"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Object class"}),(0,t.jsx)(i.td,{children:"Type of object that the system is able to recognize"}),(0,t.jsx)(i.td,{children:"Category, Object"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Range rule"}),(0,t.jsx)(i.td,{children:"A condition that will trigger an Outlier if the value of a Numerical measurement is out of a determined range"}),(0,t.jsx)(i.td,{children:"-"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Anomaly"}),(0,t.jsx)(i.td,{children:"Is either an intrusion or an outlier"}),(0,t.jsx)(i.td,{children:"-"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Intrusion"}),(0,t.jsx)(i.td,{children:"Detection of an unauthorized object"}),(0,t.jsx)(i.td,{children:"-"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Outlier"}),(0,t.jsxs)(i.td,{children:["Numerical measurement with a value in contrast with a particular ",(0,t.jsx)(i.code,{children:"Range rule"})]}),(0,t.jsx)(i.td,{children:"-"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"security",children:"Security"}),"\n",(0,t.jsx)(i.h4,{id:"ubiquitous-language-2",children:"Ubiquitous Language"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Term"}),(0,t.jsx)(i.th,{children:"Meaning"}),(0,t.jsx)(i.th,{children:"Synonyms"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Role"}),(0,t.jsx)(i.td,{children:"Role assigned to a specific user, only two values are admitted: Admin and Guardian"}),(0,t.jsx)(i.td,{children:"-"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Admin"}),(0,t.jsx)(i.td,{children:"A user with the maximum level of authority, it can manage permissions of other Guardian users"}),(0,t.jsx)(i.td,{children:"-"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Guardian"}),(0,t.jsx)(i.td,{children:"A user that can only view the video stream and visualize the data produced by sensors to which he has access"}),(0,t.jsx)(i.td,{children:"Monitor"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"User"}),(0,t.jsx)(i.td,{children:"Either an admin or a guardian"}),(0,t.jsx)(i.td,{children:"-"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Permission"}),(0,t.jsx)(i.td,{children:"A grant to view streams and data from devices in a particular location"}),(0,t.jsx)(i.td,{children:"-"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"users",children:"Users"}),"\n",(0,t.jsx)(i.h4,{id:"ubiquitous-language-3",children:"Ubiquitous Language"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Term"}),(0,t.jsx)(i.th,{children:"Meaning"}),(0,t.jsx)(i.th,{children:"Synonyms"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"User"}),(0,t.jsx)(i.td,{children:"Generic term to refer to anyone can access to the system"}),(0,t.jsx)(i.td,{children:"-"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Contact"}),(0,t.jsx)(i.td,{children:"Contact on which the specific user will be notified when one anomaly occours"}),(0,t.jsx)(i.td,{children:"-"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Contact Type"}),(0,t.jsx)(i.td,{children:"Contact type of a single contact, two values are admitted: SMS and EMAIL"}),(0,t.jsx)(i.td,{children:"-"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"location",children:"Location"}),"\n",(0,t.jsx)(i.h4,{id:"ubiquitous-language-4",children:"Ubiquitous Language"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Term"}),(0,t.jsx)(i.th,{children:"Meaning"}),(0,t.jsx)(i.th,{children:"Synonyms"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Building"}),(0,t.jsx)(i.td,{children:"Coarse grained concept of location referring to a structure (e.g. home, warehouse)"}),(0,t.jsx)(i.td,{children:"-"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Room"}),(0,t.jsx)(i.td,{children:"Fine grained concept of location referring to a single space (e.g. living room, entrance, exit)"}),(0,t.jsx)(i.td,{children:"-"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Location"}),(0,t.jsx)(i.td,{children:"Generic term to refer to a place"}),(0,t.jsx)(i.td,{children:"-"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"log",children:"Log"}),"\n",(0,t.jsx)(i.h4,{id:"ubiquitous-language-5",children:"Ubiquitous Language"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Term"}),(0,t.jsx)(i.th,{children:"Meaning"}),(0,t.jsx)(i.th,{children:"Synonyms"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Anomaly(?)"}),(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{})]})})]}),"\n",(0,t.jsx)(i.h3,{id:"notification",children:"Notification"}),"\n",(0,t.jsx)(i.h4,{id:"ubiquitous-language-6",children:"Ubiquitous Language"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Term"}),(0,t.jsx)(i.th,{children:"Meaning"}),(0,t.jsx)(i.th,{children:"Synonyms"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Notification"}),(0,t.jsxs)(i.td,{children:["Message sent to a ",(0,t.jsx)(i.code,{children:"User"})," using its ",(0,t.jsx)(i.code,{children:"Recipient"}),"s"]}),(0,t.jsx)(i.td,{children:"Alert"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Outlier Notification"}),(0,t.jsx)(i.td,{children:"Notification reguarding an Outlier anomaly"}),(0,t.jsx)(i.td,{children:"-"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Intrusion Notification"}),(0,t.jsx)(i.td,{children:"Notification reguarding an Intrusion anomaly"}),(0,t.jsx)(i.td,{children:"-"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Recipient"}),(0,t.jsx)(i.td,{children:"The notification target user's contact"}),(0,t.jsx)(i.td,{})]})]})]})]})}function o(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>d,x:()=>c});var t=n(6540);const r={},s=t.createContext(r);function d(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);