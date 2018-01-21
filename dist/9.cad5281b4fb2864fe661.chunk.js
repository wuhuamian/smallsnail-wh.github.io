webpackJsonp([9],{52:function(e,o,t){var i=t(20)(t(63),t(83),null,null);i.options.__file="F:\\githubpage\\src\\views\\sys\\role.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] role.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},63:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){var e=this;return{count:null,groupId:null,newModal:!1,modifyModal:!1,settingModal:!1,total:0,loading:!0,pageInfo:{page:0,pageSize:10},role:{id:null,name:null,modules:null,describe:null},roleNew:{id:null,name:null,modules:null,describe:null},roleModify:{id:null,name:null,modules:null,describe:null},ruleNew:{name:[{type:"string",required:!0,message:"输入角色名",trigger:"blur"}]},ruleModify:{name:[{type:"string",required:!0,message:"输入角色名",trigger:"blur"}]},columns1:[{type:"selection",width:60,align:"center"},{title:"角色名",key:"name"},{title:"描述",key:"describe"},{title:"操作",key:"action",width:180,align:"center",render:function(o,t){return o("div",[o("Button",{props:{icon:"gear-b"},style:{border:"none",background:"none"},on:{click:function(){e.setting(t.row)}}})])}}],data1:[],columns2:[{title:"权限",key:"name"},{title:"操作",align:"center",render:function(o,t){return o("div",[o("i-switch",{attrs:{value:t.row.value},on:{"on-change":function(o){var i=e.moduleArr.indexOf(t.row.id+"");o?-1==i&&e.moduleArr.push(t.row.id+""):-1!=i&&e.moduleArr.splice(i,1)}}})])}}],data2:[],moduleArr:[],submenusList:[]}},mounted:function(){this.data1=[{id:1,name:"管理员",modules:"4;5;6;",describe:"管理员"},{id:2,name:"test1",modules:"7;",describe:"测试1"},{id:3,name:"test2",modules:"9;8;",describe:"测试2"}],this.total=3,this.submenusList=[{id:4,name:"用户管理",url:"/base/user",parentId:1,sort:1,remark:null,icon:"ios-person",children:null},{id:5,name:"菜单管理",url:"/base/menu",parentId:1,sort:2,remark:null,icon:"android-list",children:null},{id:6,name:"角色管理",url:"/base/role",parentId:1,sort:3,remark:null,icon:"ios-people",children:null},{id:7,name:"子菜单22",url:"/base/test4",parentId:2,sort:2,remark:null,icon:"ios-reverse-camera-outline",children:null},{id:8,name:"子菜单31",url:"/base/test5",parentId:3,sort:1,remark:null,icon:"ios-eye",children:null},{id:9,name:"子菜单32",url:"/base/test6",parentId:3,sort:2,remark:null,icon:"ios-eye-outline",children:null}]},methods:{initPageInfo:function(){this.pageInfo.page=0,this.pageInfo.pageSize=10},initRole:function(){this.role.id=null,this.role.name=null,this.role.modules=null,this.role.describe=null},initRoleNew:function(){this.roleNew.id=null,this.roleNew.name=null,this.roleNew.modules=null,this.roleNew.describe=null},initRoleModify:function(){this.roleModify.id=null,this.roleModify.name=null,this.roleModify.modules=null,this.roleModify.describe=null},roleSet:function(e){this.role.id=e.id,this.role.name=e.name,this.role.modules=e.modules,this.role.describe=e.describe},roleNewSet:function(e){this.roleNew.id=e.id,this.roleNew.name=e.name,this.roleNew.modules=e.modules,this.roleNew.describe=e.describe},roleModifySet:function(e){this.roleModify.id=e.id,this.roleModify.name=e.name,this.roleModify.modules=e.modules,this.roleModify.describe=e.describe},getTable:function(e){this.info()},pageSearch:function(e){this.pageInfo.page=e-1,this.getTable({pageInfo:this.pageInfo})},openNewModal:function(){this.newModal=!0,this.initRoleNew(),this.data1.sort(),this.count=0,this.groupId=null},newOk:function(e){var o=this;this.$refs[e].validate(function(e){e?(o.initRole(),o.roleSet(o.roleNew),o.info(),o.newModal=!1):setTimeout(function(){o.loading=!1,o.$nextTick(function(){o.loading=!0})},1e3)})},openModifyModal:function(){this.count>1||this.count<1?(this.modifyModal=!1,this.$Message.warning("请至少选择一项(且只能选择一项)")):this.modifyModal=!0},modifyOk:function(e){var o=this;this.$refs[e].validate(function(e){e?(o.initRole(),o.roleSet(o.roleModify),o.info(),o.modifyModal=!1):(o.$Message.error("表单验证失败!"),setTimeout(function(){o.loading=!1,o.$nextTick(function(){o.loading=!0})},1e3))})},setting:function(e){this.data1.sort(),this.settingModal=!0,this.roleModifySet(e),null==e.modules||""==e.modules?this.moduleArr=[]:this.moduleArr=e.modules.split(";");for(var o=[],t=0;t<this.submenusList.length;t++)-1==this.moduleArr.indexOf(this.submenusList[t].id+"")?o.push({id:this.submenusList[t].id,name:this.submenusList[t].name,value:!1}):o.push({id:this.submenusList[t].id,name:this.submenusList[t].name,value:!0});this.data2=o},settingOk:function(){var e="";for(var o in this.moduleArr)""!=this.moduleArr[o]&&null!=this.moduleArr&&(e=e+this.moduleArr[o]+";");this.roleModify.modules=e,this.initRole(),this.roleSet(this.roleModify),this.info()},cancel:function(){this.$Message.info("点击了取消")},change:function(e){1==e.length&&this.roleModifySet(e[0]),this.setGroupId(e)},setGroupId:function(e){this.groupId=[],this.count=e.length;for(var o=0;o<=e.length-1;o++)this.groupId.push(e[o].id)},del:function(){null!=this.groupId&&""!=this.groupId&&this.info()},dblclick:function(e){this.roleModifySet(e),this.modifyModal=!0,this.data1.sort()},info:function(){this.$Notice.info({title:"此功能无法使用",desc:"此页面只用于展示项目的大概功能，无后台和数据库，所以涉及到后台数据交换的功能无法使用。敬请原谅",duration:6})}}}},83:function(e,o,t){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticStyle:{margin:"20px"}},[t("div",[t("ul",[t("li",[t("Button",{attrs:{type:"primary",icon:"plus-round"},on:{click:function(o){e.openNewModal()}}},[e._v("新建")]),e._v(" "),t("Button",{attrs:{type:"success",icon:"wrench"},on:{click:function(o){e.openModifyModal()}}},[e._v("修改")]),e._v(" "),t("Button",{attrs:{type:"error",icon:"trash-a"},on:{click:function(o){e.del()}}},[e._v("删除")])],1),e._v(" "),t("li",[t("div",{staticStyle:{padding:"10px 0"}},[t("Table",{attrs:{border:"",columns:e.columns1,data:e.data1,height:400},on:{"on-selection-change":function(o){e.change(o)},"on-row-dblclick":function(o){e.dblclick(o)}}})],1)]),e._v(" "),t("li",[t("div",{staticStyle:{"text-align":"right"}},[t("Page",{attrs:{total:e.total,"page-size":e.pageInfo.pageSize,"show-elevator":"","show-total":""},on:{"on-change":function(o){e.pageSearch(o)}}})],1)])])]),e._v(" "),t("Modal",{attrs:{"mask-closable":!1,visible:e.newModal,loading:e.loading,width:"600",title:"新建"},on:{"update:visible":function(o){e.newModal=o},"on-ok":function(o){e.newOk("roleNew")},"on-cancel":function(o){e.cancel()}},model:{value:e.newModal,callback:function(o){e.newModal=o},expression:"newModal"}},[t("Form",{ref:"roleNew",attrs:{model:e.roleNew,rules:e.ruleNew,"label-width":80}},[t("Form-item",{attrs:{label:"角色名:",prop:"name"}},[t("Input",{staticStyle:{width:"204px"},model:{value:e.roleNew.name,callback:function(o){e.$set(e.roleNew,"name",o)},expression:"roleNew.name"}})],1),e._v(" "),t("Form-item",{attrs:{label:"描述:",prop:"describe"}},[t("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5}},model:{value:e.roleNew.describe,callback:function(o){e.$set(e.roleNew,"describe",o)},expression:"roleNew.describe"}})],1)],1)],1),e._v(" "),t("Modal",{attrs:{"mask-closable":!1,visible:e.modifyModal,loading:e.loading,width:"600",title:"修改"},on:{"update:visible":function(o){e.modifyModal=o},"on-ok":function(o){e.modifyOk("roleModify")},"on-cancel":function(o){e.cancel()}},model:{value:e.modifyModal,callback:function(o){e.modifyModal=o},expression:"modifyModal"}},[t("Form",{ref:"roleModify",attrs:{model:e.roleModify,rules:e.ruleModify,"label-width":80}},[t("Form-item",{attrs:{label:"角色名:",prop:"name"}},[t("Input",{staticStyle:{width:"204px"},model:{value:e.roleModify.name,callback:function(o){e.$set(e.roleModify,"name",o)},expression:"roleModify.name"}})],1),e._v(" "),t("Form-item",{attrs:{label:"描述:",prop:"describe"}},[t("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5}},model:{value:e.roleModify.describe,callback:function(o){e.$set(e.roleModify,"describe",o)},expression:"roleModify.describe"}})],1)],1)],1),e._v(" "),t("Modal",{attrs:{width:"400",title:"配置权限","mask-closable":!1},on:{"on-ok":function(o){e.settingOk()},"on-cancel":function(o){e.cancel()}},model:{value:e.settingModal,callback:function(o){e.settingModal=o},expression:"settingModal"}},[t("Row",[t("Col",{attrs:{span:"24"}},[t("Table",{attrs:{border:"",columns:e.columns2,data:e.data2}})],1)],1)],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});