(this.webpackJsonpfe=this.webpackJsonpfe||[]).push([[0],{59:function(e,t,a){e.exports=a(89)},64:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(13),o=a.n(c),u=(a(64),a(21)),s=a(22),l=a(25),i=a(26),m=a(15),d=a.n(m),O=a(14),b=a(49),f=a(11),E=a(10),p={loading:!1,error:null,success:null,status:"LOGIN"},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_LOGIN_REQUEST":return Object(E.a)({},e,{loading:!0});case"AUTH_LOGIN_COMPLETED":return Object(E.a)({},e,{user:t.user,loading:!1});case"AUTH_FALTURE":return console.log(t),Object(E.a)({},e,{loading:!1,error:t.error});case"AUTH_LOGOUT":return Object(E.a)({},e,{user:""});case"REGISTER_COMPLETED":return Object(E.a)({},e,{success:t.success});default:return e}},j=a(57),g={arrJob:[],numOfJob:1,keyword:"",pages:1,sortByName:0,sortByActive:0,status:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,a=Object(E.a)({},t);switch(delete a.type,t.type){case"GET_JOB":case"SEARCH_JOB":return Object.assign(e,a);case"ADD_JOB":return Object(E.a)({},e,{arrJob:[].concat(Object(j.a)(e.arrJob),[t.item])});case"DELETE_JOB":return Object(E.a)({},e,{arrJob:e.arrJob.filter((function(e){return e._id!==t._id}))});case"PAGINATION":return Object.assign(e,a);case"CHANGE_STATUS":return Object(E.a)({},e,{status:!e.status});case"UPDATE_JOB":return e.arrJob.filter((function(e){return e._id===t.item._id?Object.assign(e,t.item):e})),e;case"SORT_BY_NAME":case"SORT_BY_ACTIVE":return Object.assign(e,a);default:return e}},T=Object(f.c)({auth:h,job:v}),_=Object(f.e)(T,Object(f.d)(Object(f.a)(b.a))),w=a(31),y=a(12),A=a(19),k=a(97),L=a(92),J=a(93),U=a(94),I=a(54),S=a(96),C=a(95),G=a(33),N=a.n(G),R=a(50),B=function(e){return{type:"AUTH_FALTURE",error:e}},x=function(){return{auth:Object(O.c)((function(e){return e.auth}))}},H=function(){var e=Object(r.useState)(""),t=Object(A.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)(""),u=Object(A.a)(o,2),s=u[0],l=u[1],i=Object(r.useState)(""),m=Object(A.a)(i,2),b=m[0],f=m[1],E=Object(r.useState)(""),p=Object(A.a)(E,2),h=p[0],j=p[1],g=Object(r.useRef)(),v=Object(r.useRef)(),T=x().auth,_=Object(O.b)(),w=function(e){return e.preventDefault(),""===a?(f("Email kh\xf4ng h\u1ee3p l\u1ec7."),g.current.focus(),!1):(f(""),""===s?(j("Password kh\xf4ng \u0111\u01b0\u1ee3c tr\u1ed1ng."),!1):(j(""),void _(function(e,t){return function(){var a=Object(R.a)(N.a.mark((function a(r){var n;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:"AUTH_LOGIN_REQUEST"}),a.next=4,d.a.post("/login",{email:e,password:t});case 4:(n=a.sent).data.error?r(B(n.data.error)):r({type:"AUTH_LOGIN_COMPLETED",user:n.data.user}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),a.t0.response?r(B(a.t0.response.data)):r(B(a.t0));case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(a,s))))};return T.user&&""!=T.user?n.a.createElement(y.a,{to:"/"}):T.loading?n.a.createElement(L.a,{animation:"grow",variant:"primary"}):n.a.createElement(J.a,null,n.a.createElement(U.a,{className:"justify-content-md-center"},n.a.createElement(I.a,{md:6},n.a.createElement("h1",null,"\u0110\u0103ng nh\u1eadp Todo Job"),n.a.createElement(S.a,null,n.a.createElement(S.a.Group,{controlId:"controlEmail"},n.a.createElement(S.a.Label,null,"Email address"),n.a.createElement(S.a.Control,{type:"email",name:"email",ref:g,placeholder:"Enter email",onChange:function(e){return c(e.target.value)},required:!0}),n.a.createElement(S.a.Text,{className:"text-danger"},b)),n.a.createElement(S.a.Group,{controlId:"controlEmail"},n.a.createElement(S.a.Label,null,"Password"),n.a.createElement(S.a.Control,{type:"password",name:"password",placeholder:"Enter password",ref:v,onChange:function(e){return l(e.target.value)},required:!0}),n.a.createElement(S.a.Text,{className:"text-danger"},h)),function(){if(T.error)return n.a.createElement(k.a,{show:!0,variant:"danger"},T.error)}(),n.a.createElement(S.a.Group,null,n.a.createElement(C.a,{variant:"primary",type:"submit",onClick:function(e){return w(e)}},"Login"))))))},D=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement(H,null)}}]),a}(r.Component);d.a.defaults.baseURL="http://localhost:8000",d.a.interceptors.request.use((function(e){if("/login"===window.location.href)return e;var t=localStorage.getItem("tokenKey");return t&&(e.headers["x-access-token"]=t),e})),d.a.interceptors.response.use((function(e){var t;if("/login"===window.location.href)return e;var a=null===(t=e.data)||void 0===t?void 0:t.token;return a&&localStorage.setItem("tokenKey",a),e}),(function(e){return Promise.reject(e)}));var P=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return console.log("aa"),n.a.createElement(O.a,{store:_},n.a.createElement(w.a,null,n.a.createElement(y.b,{path:"/login",exact:"true",component:D})))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.dccdbf99.chunk.js.map