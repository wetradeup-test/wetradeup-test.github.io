(this.webpackJsonpsignup=this.webpackJsonpsignup||[]).push([[0],{43:function(e,t,a){e.exports=a(58)},48:function(e,t,a){},50:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),o=a.n(l),c=(a(48),a(49),a(9)),i=a(4);a(50);function s(e){var t=e.schoolName,a=e.programName,n=e.programLength,l=e.startingSalary,o=e.location,i=e.description;return r.a.createElement("div",{className:"card shadow"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a))),r.a.createElement("hr",null),r.a.createElement("div",{className:"card-info"},r.a.createElement("p",null,r.a.createElement("b",null,"Program length:")," ",n),r.a.createElement("p",null,r.a.createElement("b",null,"Starting salary:")," ",l),r.a.createElement("p",null,r.a.createElement("b",null,"Location:")," ",o),r.a.createElement("p",null,r.a.createElement("b",null,"Description:")," ",i)),r.a.createElement("div",{className:"card-button-container"},r.a.createElement(c.b,{to:"/meratas"},r.a.createElement("button",null,"Apply Now")),r.a.createElement("button",null,"Learn More")))}var m=[{id:"1",schoolName:"American Diesel Training Center",field:"Industrial",programName:"Diesel Training",programLength:"6 months",startingSalary:"$40,000 - $45,000 / yr",location:"Online Only",description:"This program sucks. 0/10"},{id:"2",schoolName:"CE Global",field:"Allied Health",programName:"Pharmacology",programLength:"6 months",startingSalary:"$40,000 - $45,000 / yr",location:"Dallas, TX",description:"This program couldn't have been worse. -1/10"},{id:"3",schoolName:"Dental Assistant Academy of Chicago",field:"Allied Health",programName:"Dental Assistant",programLength:"2 months",startingSalary:"$40,000 - $45,000 / yr",location:"Chicago, IL",description:"This program left a lot to be desired. 2/10"},{id:"4",schoolName:"Peterbilt Technical Institute",field:"Industrial",programName:"Diesel Training",programLength:"12 months",startingSalary:"$40,000 - $45,000 / yr",location:"Nashville, TN",description:"This program was ok. 4/10"},{id:"5",schoolName:"NextPoint",field:"Industrial",programName:"HVAC Technician",programLength:"4 months",startingSalary:"$40,000 - $45,000 / yr",location:"New York City, NY",description:"This program is decent. 5/10"}],u=["Austin, TX","Nashville, TN","Online Only"],d={"Industrial Trades":["Diesel Mechanic","HVAC Technician","Plumber","Bricklayer"],"Allied Health":["Dental Assistant","Pharmacologist","Nurse"],Aviation:["Pilot","Not pilot"]},p=["Online distance learning","Hands on technical training","Classroom-style study"],h=["1-3 months","4-6 months","7-9 months","10-12 months","Over a year"],g=["American Diesel Training Center","Dental Assistant Academy of Chicago","CE Global","NextPoint"];function E(){return r.a.createElement("div",{className:"card-gallery-container"},r.a.createElement("div",{className:"card-gallery-header"},r.a.createElement("h2",null,"Here's what we found based on your search:"),r.a.createElement(c.b,{to:"/"},r.a.createElement("button",null,"Start a new search"))),r.a.createElement("div",{className:"card-gallery"},m.map((function(e){return r.a.createElement(s,{schoolName:e.schoolName,programName:e.programName,programLength:e.programLength,startingSalary:e.startingSalary,location:e.location,description:e.location})}))))}var N=a(29),f=a(67),y=a(14),v=a.n(y);function b(){var e=v.a.map(g,(function(e){return{key:e,value:e,text:e}}));return r.a.createElement("div",{className:"school"},r.a.createElement("div",{className:"school-text-container"},r.a.createElement("div",{className:"school-text"},r.a.createElement("p",null,"School Name"),r.a.createElement(f.a,{placeholder:"Choose the school you're attending",fluid:!0,search:!0,selection:!0,className:"selector",options:e})),r.a.createElement(c.b,{to:"/meratas"},r.a.createElement("button",{className:"button-center button-large green-button"},"Apply Now"))))}function w(){var e=Object(n.useContext)(A),t=e.stage,a=e.setStage,l="apply"===t?"Great! Lets do this!":"Awesome! Lets get started.",o="apply"===t?"Which program are you attending?":"Tell us about your interests!",c="apply"===t?"description browse-disc text-white":"description apply-disc text-white";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:c},r.a.createElement("div",{className:"description-text"},r.a.createElement("button",{className:"back-button",onClick:function(){return a("intro")}},"Back"),r.a.createElement("div",null,r.a.createElement("p",null,l),r.a.createElement("h1",null,o)))))}function k(e){var t=e.pos,a=Object(n.useContext)(A).setStage,l="left"===t?"I know the program I'd like to apply to.":"I need help finding a good program.",o="left"===t?"Apply Directly":"Browse Programs",c="left"===t?"apply":"browse",i="left"===t?"left-option shadow text-white":"right-option shadow text-white";return r.a.createElement("div",{className:i},r.a.createElement("div",null,r.a.createElement("h1",{className:"option-header"}," ",l," "),r.a.createElement("button",{className:"button-large green-button",onClick:function(){return a(c)}},o)))}function x(){var e=v.a.map(u,(function(e){return{key:e,value:e,text:e}})),t=Object.keys(d),a=[],n=v.a.map(t,(function(e){return d[e].forEach((function(e){return a.push({key:e,value:e,text:e})})),{key:e,value:e,text:e}})),l=v.a.map(p,(function(e){return{key:e,value:e,text:e}})),o=v.a.map(h,(function(e){return{key:e,value:e,text:e}}));return r.a.createElement("div",{className:"browse"},r.a.createElement("div",{className:"drop-down-container"},r.a.createElement("div",{className:"drop-down"},r.a.createElement("p",null,"Where are you located?"),r.a.createElement(f.a,{placeholder:"Choose your city",search:!0,selection:!0,className:"selector",options:e})),r.a.createElement("div",{className:"drop-down"},r.a.createElement("p",null,"What fields are you interested in working in?"),r.a.createElement(f.a,{placeholder:"Pick a field",search:!0,selection:!0,className:"selector",options:n})),r.a.createElement("div",{className:"drop-down"},r.a.createElement("p",null,"What programs would you like to look at?"),r.a.createElement(f.a,{placeholder:"Pick a job in that field",search:!0,multiple:!0,selection:!0,className:"selector",options:a})),r.a.createElement("div",{className:"drop-down"},r.a.createElement("p",null,"How do you prefer to learn?"),r.a.createElement(f.a,{placeholder:"Online vs. in-person",search:!0,selection:!0,className:"selector",options:l})),r.a.createElement("div",{className:"drop-down"},r.a.createElement("p",null,"How long should the program be?"),r.a.createElement(f.a,{placeholder:"Program length",search:!0,multiple:!0,selection:!0,className:"selector",options:o})),r.a.createElement("div",null,r.a.createElement(c.b,{to:"/explore"},r.a.createElement("button",{className:"button-large green-button button-center"},"Search")))))}var A=Object(n.createContext)();function C(){var e=Object(n.useState)("intro"),t=Object(N.a)(e,2),a=t[0],l=t[1];return r.a.createElement(A.Provider,{value:{stage:a,setStage:l}},r.a.createElement("div",{className:"landing-container-container"},r.a.createElement("div",{className:"landing-container",id:"mainWrapper"},r.a.createElement("div",{className:"left-container",id:"leftContainer"},function(){switch(a){case"intro":return r.a.createElement(k,{pos:"left"});default:return r.a.createElement(w,null)}}()),r.a.createElement("div",{className:"right-container",id:"rightContainer"},function(){switch(a){case"intro":return r.a.createElement(k,{pos:"right"});case"apply":return r.a.createElement(b,null);case"browse":default:return r.a.createElement(x,null)}}()))))}function T(){return r.a.createElement("p",null,"404 not found")}function S(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/landing",component:C}),r.a.createElement(i.b,{path:"/explore",component:E}),r.a.createElement(i.b,{path:"/meratas",component:function(){return window.location.href="https://www.meratas.com",null}}),r.a.createElement(i.b,{path:"/not-found",component:T}),r.a.createElement(i.a,{from:"/",to:"/landing",exact:!0}),r.a.createElement(i.a,{to:"/not-found"}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("applyroot")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.2d3a6f9d.chunk.js.map