webpackJsonp([1],{49:function(e,t,n){n(73);var r=n(20)(n(59),n(87),"data-v-7beecc34",null);r.options.__file="F:\\githubpage\\src\\views\\base\\base.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] base.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{userName:null,menuList:[],menuSub:[],breadcrumbData:[]}},mounted:function(){this.userName="管理员",this.menuList=[{id:1,name:"系统管理",url:null,parentId:0,sort:1,remark:null,icon:"ios-flower",children:[{id:4,name:"用户管理",url:"/base/user",parentId:1,sort:1,remark:null,icon:"ios-person",children:null},{id:5,name:"菜单管理",url:"/base/menu",parentId:1,sort:2,remark:null,icon:"android-list",children:null},{id:6,name:"角色管理",url:"/base/role",parentId:1,sort:3,remark:null,icon:"ios-people",children:null}]},{id:2,name:"菜单2",url:null,parentId:0,sort:2,remark:null,icon:"ios-flower-outline",children:[{id:7,name:"子菜单22",url:"/base/test4",parentId:2,sort:2,remark:null,icon:"ios-reverse-camera-outline",children:null}]},{id:3,name:"菜单3",url:null,parentId:0,sort:3,remark:null,icon:"ios-rose",children:[{id:8,name:"子菜单31",url:"/base/test5",parentId:3,sort:1,remark:null,icon:"ios-eye",children:null},{id:9,name:"子菜单32",url:"/base/test6",parentId:3,sort:2,remark:null,icon:"ios-eye-outline",children:null}]}];for(var e in this.menuList)for(var t in this.menuList[e].children)this.menuSub.push(this.menuList[e].children[t])},methods:{select:function(e){var t=this.menuSub.filter(function(t){return null!=t.url&&""!=t.url&&t.id==e});this.$router.push(t[0].url),this.breadcrumbData.splice(0,1,t[0])},dropdownSelect:function(e){this.$store.dispatch("users/loginOUt",{router:this.$router})}}}},73:function(e,t){},78:function(e,t,n){e.exports=n.p+"aef5b502e8e3c8956e0495c725cd6f9a.jpg"},79:function(e,t,n){e.exports=n.p+"31394b8ca50dd2067fdbc40ec4aa5836.jpg"},87:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"layout"},[r("Row",{staticStyle:{position:"absolute",left:"0",top:"0",width:"100%"},attrs:{type:"flex"}},[r("Col",{staticClass:"layout-menu-left",attrs:{span:"4"}},[r("div",{staticClass:"layout-logo-left"},[r("img",{attrs:{src:n(78)}}),e._v(" "),r("strong",[e._v("smallsnail-Wh")])]),e._v(" "),r("Menu",{attrs:{"active-name":"1-2",theme:"dark",width:"auto","open-names":["1"]},on:{"on-select":function(t){e.select(t)}}},e._l(e.menuList,function(t){return r("Submenu",{key:t.id,attrs:{name:t.id}},[r("template",{slot:"title"},[r("Icon",{attrs:{type:t.icon}}),e._v("\n                        "+e._s(t.name)+"\n                    ")],1),e._v(" "),e._l(t.children,function(t){return r("MenuItem",{key:t.id,attrs:{name:t.id}},[r("Icon",{attrs:{type:t.icon}}),e._v("\n                        "+e._s(t.name)+"\n                    ")],1)})],2)}))],1),e._v(" "),r("Col",{attrs:{span:"20"}},[r("div",{staticClass:"layout-header"},[r("strong",[e._v(e._s(e.userName))]),e._v(" "),r("Dropdown",{staticStyle:{"margin-right":"50px"},attrs:{trigger:"click"},on:{"on-click":function(t){e.dropdownSelect(t)}}},[r("img",{attrs:{src:n(79)}}),e._v(" "),r("DropdownMenu",{staticClass:"dropdown-menu",attrs:{slot:"list"},slot:"list"},[r("DropdownItem",[e._v("退出")])],1)],1)],1),e._v(" "),r("div",{staticClass:"layout-breadcrumb"},[r("Breadcrumb",[r("BreadcrumbItem",{attrs:{to:"/base/welcome"}},[e._v("Home")]),e._v(" "),e._l(e.breadcrumbData,function(t){return r("BreadcrumbItem",{key:t.id,attrs:{to:t.url}},[e._v(e._s(t.name))])})],2)],1),e._v(" "),r("div",{staticClass:"layout-content"},[r("router-view")],1),e._v(" "),r("div",{staticClass:"layout-copy"},[e._v("\n                2017-2018 © smallsnail-wh\n            ")])])],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});