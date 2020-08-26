(this["webpackJsonpuser-login"]=this["webpackJsonpuser-login"]||[]).push([[0],{29:function(e,a,t){e.exports=t(51)},34:function(e,a,t){},35:function(e,a,t){},41:function(e,a,t){},43:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(15),l=t.n(s),c=(t(34),t(35),t(17)),o=t(2),m=t(5),u=t(11),i=t(1),d=t.n(i),p=t(3),E="http://localhost:4000",f=function(){var e=Object(p.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(E,"/users/"));case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(p.a)(d.a.mark((function e(a){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(E,"/users"),{body:JSON.stringify(a),method:"POST",headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),h=function(){var e=Object(p.a)(d.a.mark((function e(a,t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(E,"/users/").concat(t),{body:JSON.stringify(a),method:"PUT",headers:{"Content-Type":"application/json"}});case 2:return r=e.sent,e.abrupt("return",r.json());case 4:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),v=function(){var e=Object(p.a)(d.a.mark((function e(a){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(E,"/users/").concat(a),{method:"DELETE"});case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),N=function(){var e=Object(p.a)(d.a.mark((function e(a,t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(E,"/users?email=").concat(a,"&password=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.json());case 4:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),g=t(18),w={LOAD_USERS:"LOAD_USERS"};t(41);var y=t(12);y.DataTable=t(26);var O=function(){var e=Object(r.useState)("Add"),a=Object(m.a)(e,2),t=a[0],s=a[1],l=Object(r.useState)(0),c=Object(m.a)(l,2),i=c[0],d=c[1],p=Object(r.useRef)(),E=Object(r.useRef)(),N=Object(o.f)(),O=Object(u.c)(),j=Object(g.a)(),x=j.handleSubmit,S=j.register,A=j.errors,U=j.watch,q=j.setValue,_=Object(u.d)((function(e){return e.usersReducer.users}),u.b),k=function(){f().then((function(e){O({type:w.LOAD_USERS,payload:e}),y(p.current).DataTable()}))};Object(r.useEffect)((function(){k(),window.localStorage.getItem("user")||N.push("/")}),[]);var C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"show",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"show";y(E.current).modal(a),s("show"===e?"Add":"Update")};return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",null,n.a.createElement("div",{className:"navbar navbar-dark bg-dark box-shadow"},n.a.createElement("div",{className:"container d-flex justify-content-between"},n.a.createElement("a",{className:"navbar-brand d-flex align-items-center"},n.a.createElement("strong",null,"User Management")),n.a.createElement("ul",{className:"navbar-nav"},n.a.createElement("li",{className:"nav-item text-right"},n.a.createElement("a",{className:"nav-link",href:"#",onClick:function(){return window.localStorage.removeItem("user"),void N.push("/")}},"Log out")))))),n.a.createElement("main",{className:"container mt-4 mb-4"},n.a.createElement("div",{className:"text-right mb-2"},n.a.createElement("button",{type:"button",className:"btn fs-16 btn-outline-primary",onClick:function(){return C()}},"Add User")),n.a.createElement("table",{ref:p,className:"table fs-16 table-striped table-bordered w-100"},n.a.createElement("thead",null,n.a.createElement("tr",{className:"text-center"},n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Age"),n.a.createElement("th",null,"Gender"),n.a.createElement("th",null,"Email"),n.a.createElement("th",null,"Phone No"),n.a.createElement("th",null,"Action"))),n.a.createElement("tbody",null,_.map((function(e,a){return n.a.createElement("tr",{key:a},n.a.createElement("td",null,e.userName),n.a.createElement("td",null,e.age),n.a.createElement("td",null,e.gender),n.a.createElement("td",null,e.email),n.a.createElement("td",null,e.phoneNumber),n.a.createElement("td",{className:"text-center"},n.a.createElement("button",{type:"button",onClick:function(){!function(e){for(var a in C("Update","show"),d(e.id),e)"password"!==a&&q(a,e[a])}(e)},className:"btn btn-sm btn-outline-warning"},"Edit"),n.a.createElement("button",{type:"button",onClick:function(){var a;a=e,window.confirm("Are you want delete this user?")&&v(a.id).then((function(e){alert("User Deleted successfully..."),k(),C("Update","hide")}))},className:"btn btn-sm btn-outline-danger ml-2"},"Delete")))})))),n.a.createElement("div",{className:"modal fade",ref:E},n.a.createElement("div",{className:"modal-dialog"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("form",{onSubmit:x((function(e){delete e.cpassword,"Add"===t?b(e).then((function(e){alert("User Added successfully..."),k(),C("Add","hide")})):h(e,i).then((function(e){alert("User Updated successfully..."),k(),C("Update","hide")}))})),autoComplete:"off"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("h5",{className:"modal-title"},t," User"),n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7")),n.a.createElement("div",{className:"modal-body fs-16"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"usr"},"User name"),n.a.createElement("input",{type:"text",name:"userName",className:"form-control",ref:S({required:!0})}),n.a.createElement("p",{className:"errors mt-2"},A.userName&&"User Name is required")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"usr"},"Age"),n.a.createElement("input",{type:"number",name:"age",className:"form-control",ref:S({required:"Age is required",min:{value:1,message:"Mininum age value is 1"},max:{value:99,message:"Max age value is 99"}})}),n.a.createElement("p",{className:"errors mt-2"},A.age&&A.age.message))),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"usr"},"Gender"),n.a.createElement("select",{className:"form-control",name:"gender",ref:S({required:!0})},n.a.createElement("option",{value:""},"Select gender"),n.a.createElement("option",{value:"Male"},"Male"),n.a.createElement("option",{value:"Female"},"Female")),n.a.createElement("p",{className:"errors mt-2"},A.gender&&"Gender is required")))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"usr"},"Email"),n.a.createElement("input",{type:"email",name:"email",className:"form-control",ref:S({required:"Email id is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Enter valid email id"}})}),n.a.createElement("p",{className:"errors mt-2"},A.email&&A.email.message)),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"usr"},"Phone No"),n.a.createElement("input",{type:"text",name:"phoneNumber",className:"form-control",ref:S({required:"Phone number is required",minLength:{value:10,message:"Enter valid phone number(Min 10)"},maxLength:{value:10,message:"Enter valid phone number(Max 10)"}})}),n.a.createElement("p",{className:"errors mt-2"},A.phoneNumber&&A.phoneNumber.message)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"usr"},"Password"),n.a.createElement("input",{type:"password",name:"password",autoComplete:"off",className:"form-control",ref:S({required:"Password is required"})}),n.a.createElement("p",{className:"errors mt-2"},A.password&&A.password.message))),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"usr"},"Confirm Password"),n.a.createElement("input",{type:"password",name:"cpassword",autoComplete:"off",className:"form-control",ref:S({required:"Confirm Password is required",validate:function(e){return e===U("password")||"Confirm Password doesn't match with password"}})}),n.a.createElement("p",{className:"errors mt-2"},A.cpassword&&A.cpassword.message))))),n.a.createElement("div",{className:"modal-footer"},"Add"===t?n.a.createElement("button",{type:"submit",className:"btn btn-success"},"Add"):n.a.createElement("button",{type:"submit",className:"btn btn-success"},"Update"))))))))};t(43);var j=function(){var e=Object(o.f)(),a=Object(g.a)(),t=a.handleSubmit,s=a.register,l=a.errors;return Object(r.useEffect)((function(){window.localStorage.getItem("user")&&e.push("/users")}),[]),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row d-flex justify-content-center mt-200"},n.a.createElement("div",{className:"card w-350 border-0 shadow"},n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"text-center"},n.a.createElement("b",null,"User Management")),n.a.createElement("form",{onSubmit:t((function(a){N(a.email,a.password).then((function(a){1===a.length?(e.push("/users"),window.localStorage.setItem("user",a[0].id)):alert("Invalid user")}))})),autoComplete:"off"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"usr"},"Email:"),n.a.createElement("input",{type:"email",name:"email",className:"form-control",ref:s({required:"Email id is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Enter valid email id"}})}),n.a.createElement("p",{className:"errors mt-2"},l.email&&l.email.message)),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"pwd"},"Password:"),n.a.createElement("input",{type:"password",name:"password",className:"form-control",ref:s({required:"Password is required"})}),n.a.createElement("p",{className:"errors mt-2"},l.password&&l.password.message)),n.a.createElement("div",{className:"text-center"},n.a.createElement("button",{type:"submit",className:"border-0 btn w-100 btn-primary center"},"Login")))))))};var x=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement(o.c,null,n.a.createElement(o.a,{path:"/users"},n.a.createElement(O,null)),n.a.createElement(o.a,{path:"/"},n.a.createElement(j,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(44),t(45),t(46),t(47),t(49),t(50);var S=t(8),A=t(28),U={users:[]},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case w.LOAD_USERS:e=Object(A.a)({},e,{users:a.payload})}return e},_=Object(S.c)({usersReducer:q}),k=Object(S.e)(_,Object(S.d)(Object(S.a)(),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u.a,{store:k},n.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.8bedbdd5.chunk.js.map