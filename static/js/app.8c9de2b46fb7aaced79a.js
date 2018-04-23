webpackJsonp([1],{"8DrQ":function(e,t){},EvWm:function(e,t){},"Jh+v":function(e,t){},"KDL/":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),s=a("Sazm"),n=a.n(s),o={name:"navbar",data:function(){return{isLoggedIn:!1,currentUser:null}},created:function(){n.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=n.a.auth().currentUser.email)},methods:{logout:function(){var e=this;n.a.auth().signOut().then(function(){e.$router.push("login")})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("div",{staticClass:"nav-wrapper green"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[e._v("Employee Manager")]),e._v(" "),a("ul",{staticClass:"right"},[a("li",[a("span",{staticClass:"email black-text"},[e._v(e._s(e.currentUser))])]),e._v(" "),e.isLoggedIn?a("li",[a("router-link",{attrs:{to:"/"}},[e._v("Dashboard")])],1):e._e(),e._v(" "),e.isLoggedIn?e._e():a("li",[a("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),e._v(" "),e.isLoggedIn?e._e():a("li",[a("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1),e._v(" "),e.isLoggedIn?a("li",[a("button",{staticClass:"btn black",on:{click:e.logout}},[e._v("Logout")])]):e._e()])],1)])])},staticRenderFns:[]};var l={name:"App",components:{navbar:a("VU/8")(o,r,!1,function(e){a("KDL/")},"data-v-05dc7c78",null).exports}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("navbar"),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]};var c=a("VU/8")(l,d,!1,function(e){a("EvWm")},null,null).exports,u=a("/ocq"),p=(a("3VHS"),n.a.initializeApp({apiKey:"AIzaSyADArkw90ZtqlVYWUQaJMexCJO_VfHp6sk",authDomain:"usermanager-6f22b.firebaseapp.com",databaseURL:"https://usermanager-6f22b.firebaseio.com",projectId:"usermanager-6f22b",storageBucket:"usermanager-6f22b.appspot.com",messagingSenderId:"69788367732"}));p.firestore().settings({timestampsInSnapshots:!0});var m=p.firestore(),v={name:"dashboard",data:function(){return{employees:[]}},created:function(){var e=this;m.collection("employees").orderBy("dept").get().then(function(t){t.forEach(function(t){var a={id:t.id,employee_id:t.data().employee_id,name:t.data().name,dept:t.data().dept,position:t.data().position};e.employees.push(a)})})}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dashboard"}},[a("ul",{staticClass:"collection with-header"},[e._m(0),e._v(" "),e._l(e.employees,function(t){return a("li",{key:t.id,staticClass:"collection-item"},[a("div",{staticClass:"chip"},[e._v(e._s(t.dept))]),e._v("\n      "+e._s(t.employee_id)+":"+e._s(t.name)+"\n      "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-employee",params:{employee_id:t.employee_id}}}},[a("i",{staticClass:"material-icons"},[e._v("remove_red_eye")])])],1)})],2),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large waves-effect waves-light red",attrs:{to:"/new"}},[a("i",{staticClass:"material-icons"},[e._v("add")])])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"collection-header"},[t("h4",[this._v("Employees")])])}]};var _=a("VU/8")(v,f,!1,function(e){a("UMiU")},null,null).exports,h={name:"new-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},methods:{saveEmployee:function(){var e=this;m.collection("employees").add({employee_id:this.employee_id,name:this.name,dept:this.dept,position:this.position}).then(function(t){return e.$router.push("/")}).catch(function(e){return console.log(err)})}}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"new-employee"}},[a("h3",[e._v("New Employee")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],staticClass:"validate",attrs:{type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:""}},[e._v("Employee ID#")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"validate",attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:""}},[e._v("Name")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],staticClass:"validate",attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:""}},[e._v("Department")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],staticClass:"validate",attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:""}},[e._v("Position")])])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]};var y=a("VU/8")(h,g,!1,function(e){a("Jh+v")},null,null).exports,C={name:"view-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,a){m.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;m.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},deleteEmployee:function(){var e=this;confirm("Are you sure?")&&m.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/")})})}}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"view-employee"}},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h4",[e._v(e._s(e.name))])]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Employee ID#: "+e._s(e.employee_id))]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Department: "+e._s(e.dept))]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Position: "+e._s(e.position))])]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Back")]),e._v(" "),a("button",{staticClass:"btn red",on:{click:e.deleteEmployee}},[e._v("Delete")]),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large waves-effect waves-light red",attrs:{to:{name:"edit-employee",params:{employee_id:e.employee_id}}}},[a("i",{staticClass:"material-icons"},[e._v("edit")])])],1)],1)},staticRenderFns:[]};var b=a("VU/8")(C,w,!1,function(e){a("w4C5")},null,null).exports,x={name:"edit-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,a){m.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;m.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position,M.updateTextFields()})})},updateEmployee:function(){var e=this;m.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.update({employee_id:e.employee_id,name:e.name,dept:e.dept,position:e.position}).then(function(){e.$router.push({name:"view-employee",params:{employee_id:e.employee_id}})})})})}},updated:function(){M.updateTextFields()}},E={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"edit-employee"}},[a("h3",[e._v("Edit Employee")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.updateEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],staticClass:"validate",attrs:{type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:""}},[e._v("Employee ID#")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"validate",attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:""}},[e._v("Name")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],staticClass:"validate",attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:""}},[e._v("Department")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],staticClass:"validate",attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:""}},[e._v("Position")])])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]};var k=a("VU/8")(x,E,!1,function(e){a("TdxK")},null,null).exports,q={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(){var e=this;n.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(t){alert("You are logged in as "+t.email),e.$router.push("/")},function(e){alert(e.message)})}}},D={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel green white-text center"},[a("h3",[e._v("Login")]),e._v(" "),a("form",{on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"validate",attrs:{type:"text",id:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"email"}},[e._v("Email")])]),e._v(" "),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("lock")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"validate",attrs:{type:"password",id:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"password"}},[e._v("Password")])]),e._v(" "),a("button",{staticClass:"btn-large grey lighten-4 black-text"},[e._v("Login")])])])])])])])},staticRenderFns:[]};var P=a("VU/8")(q,D,!1,function(e){a("nH9K")},"data-v-267b991d",null).exports,U={name:"register",data:function(){return{email:"",password:""}},methods:{register:function(){var e=this;n.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(t){alert("Account created for "+t.email),e.$router.push("/")},function(e){alert(e.message)})}}},$={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel grey lighten-4 black-text center"},[a("h3",[e._v("Register")]),e._v(" "),a("form",{on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"validate",attrs:{type:"text",id:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"email"}},[e._v("Email")])]),e._v(" "),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("lock")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"validate",attrs:{type:"password",id:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"password"}},[e._v("Password")])]),e._v(" "),a("button",{staticClass:"btn-large grey lighten-4 black-text"},[e._v("Register")])])])])])])])},staticRenderFns:[]};var A=a("VU/8")(U,$,!1,function(e){a("8DrQ")},"data-v-b5dbbe90",null).exports;i.a.use(u.a);var N=new u.a({mode:"history",routes:[{path:"/",name:"dashboard",component:_,meta:{requiresAuth:!0}},{path:"/new",name:"new-employee",component:y,meta:{requiresAuth:!0}},{path:"/edit/:employee_id",name:"edit-employee",component:k,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:P,meta:{requiresGuest:!0}},{path:"/register",name:"register",component:A,meta:{requiresGuest:!0}},{path:"/:employee_id",name:"view-employee",component:b,meta:{requiresAuth:!0}}]});N.beforeEach(function(e,t,a){e.matched.some(function(e){return e.meta.requiresAuth})?n.a.auth().currentUser?a():a({path:"/login",query:{redirect:e.fullPath}}):e.matched.some(function(e){return e.meta.requiresGuest})&&n.a.auth().currentUser?a({path:"/",query:{redirect:e.fullPath}}):a()});var I=N;i.a.config.productionTip=!1;n.a.auth().onAuthStateChanged(function(e){new i.a({el:"#app",router:I,components:{App:c},template:"<App/>"})})},TdxK:function(e,t){},UMiU:function(e,t){},nH9K:function(e,t){},w4C5:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.8c9de2b46fb7aaced79a.js.map