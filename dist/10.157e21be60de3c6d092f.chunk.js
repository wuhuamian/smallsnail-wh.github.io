webpackJsonp([10],{51:function(e,t,n){var i=n(20)(n(62),n(86),null,null);i.options.__file="F:\\github-server\\wh-web\\src\\views\\sys\\menu.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] menu.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},62:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{menuId:null,count:null,groupId:null,newModal:!1,modifyModal:!1,total:0,loading:!0,pageInfo:{page:0,pageSize:10},menu:{id:null,name:null,url:null,parentId:null,sort:null,remark:null,icon:null},menuNew:{id:null,name:null,url:null,parentId:null,sort:null,remark:null,icon:null},menuModify:{id:null,name:null,url:null,parentId:null,sort:null,remark:null,icon:null},ruleNew:{name:[{type:"string",required:!0,message:"输入菜单名",trigger:"blur"}],url:[{type:"string",required:!0,message:"输入路径",trigger:"blur"}],parentId:[{required:!0,message:"输入父类ID",trigger:"blur"},{validator:function(e,t,n){Number.isInteger(+t)?n():n(new Error("请输入数字"))},trigger:"blur"}],sort:[{required:!0,message:"输入排序",trigger:"blur"},{validator:function(e,t,n){Number.isInteger(+t)?n():n(new Error("请输入数字"))},trigger:"blur"}],icon:[{type:"string",required:!0,message:"输入图标",trigger:"blur"}]},ruleModify:{name:[{type:"string",required:!0,message:"输入菜单名",trigger:"blur"}],url:[{type:"string",required:!0,message:"输入路径",trigger:"blur"}],parentId:[{required:!0,message:"输入父类ID",trigger:"blur"},{validator:function(e,t,n){Number.isInteger(+t)?n():n(new Error("请输入数字"))},trigger:"blur"}],sort:[{required:!0,message:"输入排序",trigger:"blur"},{validator:function(e,t,n){Number.isInteger(+t)?n():n(new Error("请输入数字"))},trigger:"blur"}],icon:[{type:"string",required:!0,message:"输入图标",trigger:"blur"}]},menuList:[],columns1:[{type:"selection",width:60,align:"center"},{title:"菜单ID",key:"id"},{title:"菜单名称",key:"name"},{title:"地址",key:"url"},{title:"上级菜单id",key:"parentId"},{title:"排序",key:"sort"},{title:"图标",key:"icon"}],data1:[]}},mounted:function(){this.getTable({pageInfo:this.pageInfo,menuId:this.menuId}),this.axios({method:"get",url:"/menus/parentId",params:{parentId:0}}).then(function(e){for(var t=e.data,n=0;n<t.length;n++)this.menuList.push({value:t[n].id,label:t[n].name})}.bind(this)).catch(function(e){alert(e)})},methods:{initPageInfo:function(){this.pageInfo.page=0,this.pageInfo.pageSize=10},initMenu:function(){this.menu.id=null,this.menu.name=null,this.menu.url=null,this.menu.parentId=null,this.menu.sort=null,this.menu.remark=null,this.menu.icon=null},initMenuNew:function(){this.menuNew.id=null,this.menuNew.name=null,this.menuNew.url=null,this.menuNew.parentId=null,this.menuNew.sort=null,this.menuNew.remark=null,this.menuNew.icon=null},initMenuModify:function(){this.menuModify.id=null,this.menuModify.name=null,this.menuModify.url=null,this.menuModify.parentId=null,this.menuModify.sort=null,this.menuModify.remark=null,this.menuModify.icon=null},menuSet:function(e){this.menu.id=e.id,this.menu.name=e.name,this.menu.url=e.url,this.menu.parentId=e.parentId,this.menu.sort=e.sort,this.menu.remark=e.remark,this.menu.icon=e.icon},menuNewSet:function(e){this.menuNew.id=e.id,this.menuNew.name=e.name,this.menuNew.url=e.url,this.menuNew.parentId=e.parentId,this.menuNew.sort=e.sort,this.menuNew.remark=e.remark,this.menuNew.icon=e.icon},menuModifySet:function(e){this.menuModify.id=e.id,this.menuModify.name=e.name,this.menuModify.url=e.url,this.menuModify.parentId=e.parentId+"",this.menuModify.sort=e.sort+"",this.menuModify.remark=e.remark,this.menuModify.icon=e.icon},getTable:function(e){this.axios({method:"get",url:"/menus",params:{page:e.pageInfo.page,pageSize:e.pageInfo.pageSize,menuId:e.menuId}}).then(function(e){this.data1=e.data.data,this.total=e.data.totalCount}.bind(this)).catch(function(e){alert(e)})},search:function(){this.initPageInfo(),this.getTable({pageInfo:this.pageInfo,menuId:this.menuId})},pageSearch:function(e){this.pageInfo.page=e-1,this.getTable({pageInfo:this.pageInfo,menuId:this.menuId})},openNewModal:function(){this.newModal=!0,this.initMenuNew(),this.data1.sort(),this.count=0,this.groupId=null},newOk:function(e){var t=this;this.$refs[e].validate(function(e){e?(t.initMenu(),t.menuSet(t.menuNew),t.axios({method:"post",url:"/menus/menu",data:t.menu}).then(function(e){this.initMenuNew(),this.getTable({pageInfo:this.pageInfo,menuId:this.menuId}),this.$Message.info("新建成功")}.bind(t)).catch(function(e){alert(e)}),t.newModal=!1):setTimeout(function(){t.loading=!1,t.$nextTick(function(){t.loading=!0})},1e3)})},openModifyModal:function(){this.count>1||this.count<1?(this.modifyModal=!1,this.$Message.warning("请至少选择一项(且只能选择一项)")):this.modifyModal=!0},modifyOk:function(e){var t=this;this.$refs[e].validate(function(e){e?(t.initMenu(),t.menuSet(t.menuModify),t.axios({method:"put",url:"/menus/"+t.menu.id,data:t.menu}).then(function(e){this.initMenuNew(),this.getTable({pageInfo:this.pageInfo,menuId:this.menuId}),this.$Message.info("修改成功")}.bind(t)).catch(function(e){alert(e)}),t.modifyModal=!1):(t.$Message.error("表单验证失败!"),setTimeout(function(){t.loading=!1,t.$nextTick(function(){t.loading=!0})},1e3))})},cancel:function(){this.$Message.info("点击了取消")},change:function(e){1==e.length&&this.menuModifySet(e[0]),this.setGroupId(e)},setGroupId:function(e){this.groupId=[],this.count=e.length;for(var t=0;t<=e.length-1;t++)this.groupId.push(e[t].id)},del:function(){null!=this.groupId&&""!=this.groupId&&this.axios({method:"delete",url:"/menus",data:this.groupId}).then(function(e){this.getTable({pageInfo:this.pageInfo,menuId:this.menuId}),this.groupId=null,this.count=0,this.$Message.info("删除成功")}.bind(this)).catch(function(e){alert(e)})},dblclick:function(e){this.menuModifySet(e),this.modifyModal=!0,this.data1.sort()}}}},86:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{margin:"20px"}},[n("div",[n("Row",{staticStyle:{"margin-bottom":"25px"}},[n("Col",{attrs:{span:"8"}},[e._v("菜单名称：\n                    "),n("Select",{staticStyle:{width:"200px"},attrs:{filterable:"",clearable:""},model:{value:e.menuId,callback:function(t){e.menuId=t},expression:"menuId"}},e._l(e.menuList,function(t){return n("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("Button",{attrs:{type:"primary",shape:"circle",icon:"ios-search"},on:{click:function(t){e.search()}}},[e._v("搜索")])],1)],1)],1),e._v(" "),n("div",[n("ul",[n("li",[n("Button",{attrs:{type:"primary",icon:"plus-round"},on:{click:function(t){e.openNewModal()}}},[e._v("新建")]),e._v(" "),n("Button",{attrs:{type:"success",icon:"wrench"},on:{click:function(t){e.openModifyModal()}}},[e._v("修改")]),e._v(" "),n("Button",{attrs:{type:"error",icon:"trash-a"},on:{click:function(t){e.del()}}},[e._v("删除")])],1),e._v(" "),n("li",[n("div",{staticStyle:{padding:"10px 0"}},[n("Table",{attrs:{border:"",columns:e.columns1,data:e.data1,height:400},on:{"on-selection-change":function(t){e.change(t)},"on-row-dblclick":function(t){e.dblclick(t)}}})],1)]),e._v(" "),n("li",[n("div",{staticStyle:{"text-align":"right"}},[n("Page",{attrs:{total:e.total,"page-size":e.pageInfo.pageSize,"show-elevator":"","show-total":""},on:{"on-change":function(t){e.pageSearch(t)}}})],1)])])]),e._v(" "),n("Modal",{attrs:{"mask-closable":!1,visible:e.newModal,loading:e.loading,width:"600",title:"新建"},on:{"update:visible":function(t){e.newModal=t},"on-ok":function(t){e.newOk("menuNew")},"on-cancel":function(t){e.cancel()}},model:{value:e.newModal,callback:function(t){e.newModal=t},expression:"newModal"}},[n("Form",{ref:"menuNew",attrs:{model:e.menuNew,rules:e.ruleNew,"label-width":80}},[n("Row",[n("Col",{attrs:{span:"12"}},[n("Form-item",{attrs:{label:"菜单名称:",prop:"name"}},[n("Input",{staticStyle:{width:"204px"},model:{value:e.menuNew.name,callback:function(t){e.$set(e.menuNew,"name",t)},expression:"menuNew.name"}})],1)],1),e._v(" "),n("Col",{attrs:{span:"12"}},[n("Form-item",{attrs:{label:"路径:",prop:"url"}},[n("Input",{staticStyle:{width:"204px"},model:{value:e.menuNew.url,callback:function(t){e.$set(e.menuNew,"url",t)},expression:"menuNew.url"}})],1)],1)],1),e._v(" "),n("Row",[n("Col",{attrs:{span:"12"}},[n("Form-item",{attrs:{label:"父类ID:",prop:"parentId"}},[n("Input",{staticStyle:{width:"204px"},model:{value:e.menuNew.parentId,callback:function(t){e.$set(e.menuNew,"parentId",t)},expression:"menuNew.parentId"}})],1)],1),e._v(" "),n("Col",{attrs:{span:"12"}},[n("Form-item",{attrs:{label:"排序号:",prop:"sort"}},[n("Input",{staticStyle:{width:"204px"},model:{value:e.menuNew.sort,callback:function(t){e.$set(e.menuNew,"sort",t)},expression:"menuNew.sort"}})],1)],1)],1),e._v(" "),n("Row",[n("Col",{attrs:{span:"12"}},[n("Form-item",{attrs:{label:"图标:",prop:"icon"}},[n("Input",{staticStyle:{width:"204px"},model:{value:e.menuNew.icon,callback:function(t){e.$set(e.menuNew,"icon",t)},expression:"menuNew.icon"}})],1)],1)],1),e._v(" "),n("Form-item",{attrs:{label:"描述:",prop:"remark"}},[n("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5}},model:{value:e.menuNew.remark,callback:function(t){e.$set(e.menuNew,"remark",t)},expression:"menuNew.remark"}})],1)],1)],1),e._v(" "),n("Modal",{attrs:{"mask-closable":!1,visible:e.modifyModal,loading:e.loading,width:"600",title:"修改"},on:{"update:visible":function(t){e.modifyModal=t},"on-ok":function(t){e.modifyOk("menuModify")},"on-cancel":function(t){e.cancel()}},model:{value:e.modifyModal,callback:function(t){e.modifyModal=t},expression:"modifyModal"}},[n("Form",{ref:"menuModify",attrs:{model:e.menuModify,rules:e.ruleModify,"label-width":80}},[n("Row",[n("Col",{attrs:{span:"12"}},[n("Form-item",{attrs:{label:"菜单名称:",prop:"name"}},[n("Input",{staticStyle:{width:"204px"},model:{value:e.menuModify.name,callback:function(t){e.$set(e.menuModify,"name",t)},expression:"menuModify.name"}})],1)],1),e._v(" "),n("Col",{attrs:{span:"12"}},[n("Form-item",{attrs:{label:"路径:",prop:"url"}},[n("Input",{staticStyle:{width:"204px"},model:{value:e.menuModify.url,callback:function(t){e.$set(e.menuModify,"url",t)},expression:"menuModify.url"}})],1)],1)],1),e._v(" "),n("Row",[n("Col",{attrs:{span:"12"}},[n("Form-item",{attrs:{label:"父类ID:",prop:"parentId"}},[n("Input",{staticStyle:{width:"204px"},model:{value:e.menuModify.parentId,callback:function(t){e.$set(e.menuModify,"parentId",t)},expression:"menuModify.parentId"}})],1)],1),e._v(" "),n("Col",{attrs:{span:"12"}},[n("Form-item",{attrs:{label:"排序号:",prop:"sort"}},[n("Input",{staticStyle:{width:"204px"},model:{value:e.menuModify.sort,callback:function(t){e.$set(e.menuModify,"sort",t)},expression:"menuModify.sort"}})],1)],1)],1),e._v(" "),n("Row",[n("Col",{attrs:{span:"12"}},[n("Form-item",{attrs:{label:"图标:",prop:"icon"}},[n("Input",{staticStyle:{width:"204px"},model:{value:e.menuModify.icon,callback:function(t){e.$set(e.menuModify,"icon",t)},expression:"menuModify.icon"}})],1)],1)],1),e._v(" "),n("Form-item",{attrs:{label:"描述:",prop:"remark"}},[n("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5}},model:{value:e.menuModify.remark,callback:function(t){e.$set(e.menuModify,"remark",t)},expression:"menuModify.remark"}})],1)],1)],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});