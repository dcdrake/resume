(function(e){function t(t){for(var o,s,i=t[0],l=t[1],c=t[2],u=0,f=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},r=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/resume/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],s=(n("5c0b"),n("2877")),i={},l=Object(s["a"])(i,a,r,!1,null,null,null),c=l.exports,d=n("9483");Object(d["a"])("".concat("/resume/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var u=n("8c4f"),f=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-container",{attrs:{fluid:""}},[o("b-row",{staticClass:"page-header justify-content-center"},[o("b-col",{staticClass:"col-lg-9"},[o("b-row",[o("b-col",{staticClass:"text-left col-lg-4"},[o("img",{staticClass:"profile-picture",staticStyle:{height:"225px",width:"300px","border-radius":"10%"},attrs:{alt:"Dylan picture",src:n("b965")}})]),o("b-col",{staticClass:"text-left"},[o("h1",[e._v("Dylan Drake")]),o("hr"),o("p",[o("b-icon",{attrs:{icon:"geo-alt-fill"}}),e._v(" Richmond, VA")],1),o("p",[e._v(" I write code and I'm motivated by making people look smart, and feel confident using the software I develop. ")]),o("b-icon",{attrs:{icon:"envelope-fill"}}),o("a",{staticClass:"mr-3",attrs:{href:"mailto:dylan.c.drake@gmail.com"}},[e._v(" Email")]),o("b-icon",{attrs:{icon:"linkedin"}}),o("a",{staticClass:"mr-3",attrs:{href:"https://www.linkedin.com/in/dylancdrake/"}},[e._v(" LinkedIn")])],1)],1)],1)],1),o("b-row",{staticClass:"first-container justify-content-center"},[o("b-col",{staticClass:"col-lg-9"},[o("div",{staticClass:"section-header text-left"},[e._v("Education")]),o("hr"),o("school-entry",{attrs:{schoolName:"The College of William and Mary",startYear:2010,endYear:2014,degree:"BS Computer Science"}}),o("school-entry",{attrs:{schoolName:"Thomas Jefferson High School for Science and Technology",startYear:2006,endYear:2010,degree:"It was high school, but a small world. Listed in case you, dear reader, and I have this in common."}})],1)],1),o("b-row",{staticClass:"second-container justify-content-center"},[o("b-col",{staticClass:"col-lg-9"},[o("div",{staticClass:"section-header text-left"},[e._v("Career")]),o("hr"),o("job-entry",{attrs:{companyName:"MITRE",city:"McLean",state:"VA",startYear:2016,endYear:"Current",jobTitle:"Senior Software Engineer",description:"I develop software in support of Federal Aviation Administration, \n        and international civil aviation research efforts. I am a generalist, and may \n        use 2-3 different languages and frameworks on a daily basis. I've lead small \n        teams of developers to write individual applications, and I helped lead a project \n        to improve the software development processes for a group of 15+ engineers."}}),o("job-entry",{attrs:{companyName:"Unisys",city:"Hampton",state:"VA - NASA Langley Research Center",startYear:2014,endYear:2016,jobTitle:"Software Engineer",description:"Wrote code for 6-DOF flight simulators in C++. Learned about the\n            discipline needed to write software in 'the real world' including\n            writing design documents, holding code reviews, and testing so you\n            don't trash a multi-million dollar piece of hardware."}})],1)],1),o("b-row",{staticClass:"first-container justify-content-center"},[o("b-col",{staticClass:"col-lg-9"},[o("div",{staticClass:"section-header text-left"},[e._v("Skills and Knowledge")]),o("hr"),o("b-row",{staticClass:"mb-4"},[o("b-col",{staticClass:"text-left"},[o("h4",[e._v("Web")]),o("div",[e._v("VueJS")]),o("div",[e._v("AngularJS")]),o("div",[e._v("NodeJS")]),o("div",[e._v("Flask")])]),o("b-col",{staticClass:"text-left"},[o("h4",[e._v("Languages")]),o("div",[e._v("C++")]),o("div",[e._v("Python")]),o("div",[e._v("Javascript")]),o("div",[e._v("Java")]),o("div",[e._v("Kotlin")])])],1),o("b-row",{staticClass:"mb-4"},[o("b-col",{staticClass:"text-left"},[o("h4",[e._v("Revision Control")]),o("div",[e._v("git")]),o("div",[e._v("svn")])]),o("b-col",{staticClass:"text-left"},[o("h4",[e._v("Databases")]),o("div",[e._v("MongoDB")]),o("div",[e._v("MySQL")])])],1),o("b-row",{staticClass:"mb-4"},[o("b-col",{staticClass:"text-left"},[o("h4",[e._v("Tools")]),o("div",[e._v("Atlassian")]),o("div",[e._v("GitLab")]),o("div",[e._v("Jupyter")])]),o("b-col",{staticClass:"text-left"},[o("h4",[e._v("Containerization")]),o("div",[e._v("Docker")])])],1)],1)],1)],1)},p=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",{staticClass:"mb-2"},[n("b-col",{staticClass:"text-left"},[n("h4",[e._v(e._s(e.companyName))]),n("p",[e._v(e._s(e.city)+", "+e._s(e.state))]),n("p",[e._v(e._s(e.startYear)+" - "+e._s(e.endYear))])]),n("b-col",{staticClass:"text-left"},[n("p",[n("strong",[e._v(" "+e._s(e.jobTitle))])]),n("p",[e._v(" "+e._s(e.description)+" ")])])],1)},b=[],h=o["default"].extend({name:"JobEntry",props:["companyName","city","state","startYear","endYear","jobTitle","description"],components:{}}),m=h,g=Object(s["a"])(m,v,b,!1,null,null,null),_=g.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",{staticClass:"mb-2"},[n("b-col",{staticClass:"text-left"},[n("h4",[e._v(e._s(e.schoolName))]),n("p",[e._v(e._s(e.startYear)+" - "+e._s(e.endYear))])]),n("b-col",{staticClass:"text-left"},[n("p",[e._v(e._s(e.degree))])])],1)},w=[],C=o["default"].extend({name:"SchoolEntry",props:["schoolName","startYear","endYear","degree"],components:{}}),x=C,j=Object(s["a"])(x,y,w,!1,null,null,null),S=j.exports,k={name:"Home",components:{JobEntry:_,SchoolEntry:S}},O=k,Y=(n("68c3"),Object(s["a"])(O,f,p,!1,null,"2f28a6fc",null)),E=Y.exports;o["default"].use(u["a"]);var N=[{path:"/",name:"Home",component:E}],A=new u["a"]({mode:"history",base:"/resume/",routes:N}),T=A,I=n("2f62");o["default"].use(I["a"]);var J=new I["a"].Store({state:{},mutations:{},actions:{},modules:{}}),M=n("5f5b"),L=n("b1e0");n("f9e3"),n("2dd8");o["default"].use(M["a"]),o["default"].use(L["a"]),o["default"].config.productionTip=!1,new o["default"]({router:T,store:J,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"68c3":function(e,t,n){"use strict";n("b607")},"9c0c":function(e,t,n){},b607:function(e,t,n){},b965:function(e,t,n){e.exports=n.p+"img/dylan_shuttle_photo.c632ea84.jpg"}});
//# sourceMappingURL=app.14cfc9d6.js.map