(function(e){function t(t){for(var o,s,i=t[0],c=t[1],l=t[2],u=0,f=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/resume/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034b":function(e,t,n){},"2d57":function(e,t,n){"use strict";n("034b")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],s=(n("5c0b"),n("2877")),i={},c=Object(s["a"])(i,r,a,!1,null,null,null),l=c.exports,d=n("9483");Object(d["a"])("".concat("/resume/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var u=n("8c4f"),f=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-container",{attrs:{fluid:""}},[o("b-row",{staticClass:"page-header justify-content-center"},[o("b-col",{staticClass:"col-lg-9"},[o("b-row",[o("b-col",{staticClass:"text-left col-lg-4"},[o("img",{staticClass:"profile-picture",staticStyle:{height:"225px",width:"300px","border-radius":"10%"},attrs:{alt:"Dylan picture",src:n("b965")}})]),o("b-col",{staticClass:"text-left"},[o("h1",[e._v("Dylan Drake")]),o("hr"),o("p",[o("b-icon",{attrs:{icon:"geo-alt-fill"}}),e._v(" Richmond, VA")],1),o("p",[e._v(" I write code, and I'm motivated by making people look smart, and feel confident using the software I create. ")]),o("b-icon",{attrs:{icon:"envelope-fill"}}),o("a",{staticClass:"mr-3",attrs:{href:"mailto:dylan.c.drake@gmail.com"}},[e._v(" Email")]),o("b-icon",{attrs:{icon:"linkedin"}}),o("a",{staticClass:"mr-3",attrs:{href:"https://www.linkedin.com/in/dylancdrake/"}},[e._v(" LinkedIn")]),o("b-icon",{attrs:{icon:"github"}}),o("a",{staticClass:"mr-3",attrs:{href:"https://github.com/dcdrake/resume"}},[e._v(" GitHub")])],1)],1)],1)],1),o("b-row",{staticClass:"first-container justify-content-center"},[o("b-col",{staticClass:"col-lg-9"},[o("div",{staticClass:"section-header text-left"},[e._v("Education")]),o("hr"),o("school-entry",{attrs:{schoolName:"The College of William and Mary",startYear:2010,endYear:2014,degree:"BS Computer Science"}}),o("school-entry",{attrs:{schoolName:"Thomas Jefferson High School for Science and Technology",startYear:2006,endYear:2010,degree:""}})],1)],1),o("b-row",{staticClass:"second-container justify-content-center"},[o("b-col",{staticClass:"col-lg-9"},[o("div",{staticClass:"section-header text-left"},[e._v("Career")]),o("hr"),e._l(e.jobs,(function(e,t){return o("job-entry",{key:t,attrs:{companyName:e.companyName,city:e.city,state:e.state,startYear:e.startYear,endYear:e.endYear,jobTitle:e.jobTitle,description:e.description}})}))],2)],1),o("b-row",{staticClass:"first-container justify-content-center"},[o("b-col",{staticClass:"col-lg-9"},[o("div",{staticClass:"section-header text-left"},[e._v("Skills and Knowledge")]),o("hr"),o("b-row",{staticClass:"mb-4"},[o("b-col",{staticClass:"text-left"},[o("h4",[e._v("Web")]),o("div",[e._v("VueJS")]),o("div",[e._v("NodeJS")]),o("div",[e._v("Flask")])]),o("b-col",{staticClass:"text-left"},[o("h4",[e._v("Languages")]),o("div",[e._v("C++")]),o("div",[e._v("Python")]),o("div",[e._v("Javascript")]),o("div",[e._v("Java")]),o("div",[e._v("Kotlin")])])],1),o("b-row",{staticClass:"mb-4"},[o("b-col",{staticClass:"text-left"},[o("h4",[e._v("RCS")]),o("div",[e._v("git")]),o("div",[e._v("svn")])]),o("b-col",{staticClass:"text-left"},[o("h4",[e._v("Databases")]),o("div",[e._v("MongoDB")]),o("div",[e._v("MySQL")])])],1),o("b-row",{staticClass:"mb-4"},[o("b-col",{staticClass:"text-left"},[o("h4",[e._v("Tools")]),o("div",[e._v("Atlassian")]),o("div",[e._v("GitLab")]),o("div",[e._v("Jupyter")])]),o("b-col",{staticClass:"text-left"},[o("h4",[e._v("Containers")]),o("div",[e._v("Docker")]),o("div",[e._v("Podman")])])],1)],1)],1),o("b-link",{attrs:{href:"https://github.com/dcdrake/resume"}},[e._v("See the code behind this page")])],1)},p=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",{staticClass:"mb-2"},[n("b-col",{staticClass:"text-left"},[n("h4",[e._v(e._s(e.companyName))]),n("p",[e._v(e._s(e.city)+", "+e._s(e.state))]),n("p",[e._v(e._s(e.startYear)+" - "+e._s(e.endYear))])]),n("b-col",{staticClass:"text-left"},[n("p",[n("strong",[e._v(" "+e._s(e.jobTitle))])]),n("ul",e._l(e.description,(function(t,o){return n("li",{key:o},[e._v(e._s(t))])})),0)])],1)},v=[],m=o["default"].extend({name:"JobEntry",props:["companyName","city","state","startYear","endYear","jobTitle","description"],components:{}}),h=m,g=Object(s["a"])(h,b,v,!1,null,null,null),_=g.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",{staticClass:"mb-2"},[n("b-col",{staticClass:"text-left"},[n("h4",[e._v(e._s(e.schoolName))]),n("p",[e._v(e._s(e.startYear)+" - "+e._s(e.endYear))])]),n("b-col",{staticClass:"text-left"},[n("p",[n("strong",[e._v(e._s(e.degree))])])])],1)},w=[],C=o["default"].extend({name:"SchoolEntry",props:["schoolName","startYear","endYear","degree"],components:{}}),x=C,j=Object(s["a"])(x,y,w,!1,null,null,null),k=j.exports,S={name:"Home",components:{JobEntry:_,SchoolEntry:k},data:function(){return{jobs:[{companyName:"MITRE",city:"McLean",state:"VA",startYear:"2016",endYear:"Current",jobTitle:"Senior Software Engineer",description:["Led creation of software development guidelines for 15 engineers","Sped up post-experiment data analysis by a factor of 10","Reduced downtime of core lab software, and project code from weekly to semi-monthly by implementing automated testing","Eliminated months of duplicated work by using scrum workflows","Substituted web frameworks for C++ GUIs, reducing time to develop prototype displays from weeks to days","Mentored (and was mentored by) junior engineers"]},{companyName:"Unisys",city:"Hampton",state:"VA - NASA Langley Research Center",startYear:"2014",endYear:"2016",jobTitle:"Software Engineer",description:["Learned how to present simulation concepts, and technologies to groups with differing levels of technical expertise","Learned how to present a design review","Learned how to participate in a code review","Learned how to integrate external software into internal codebase"]}]}}},Y=S,O=(n("2d57"),Object(s["a"])(Y,f,p,!1,null,"1a843835",null)),E=O.exports;o["default"].use(u["a"]);var N=[{path:"/",name:"Home",component:E}],T=new u["a"]({mode:"history",base:"/resume/",routes:N}),L=T,J=n("2f62");o["default"].use(J["a"]);var M=new J["a"].Store({state:{},mutations:{},actions:{},modules:{}}),A=n("5f5b"),P=n("b1e0");n("f9e3"),n("2dd8");o["default"].use(A["a"]),o["default"].use(P["a"]),o["default"].config.productionTip=!1,new o["default"]({router:L,store:M,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},b965:function(e,t,n){e.exports=n.p+"img/dylan_shuttle_photo.c632ea84.jpg"}});
//# sourceMappingURL=app.0d5c67f4.js.map