webpackJsonp([6],{55:function(e,t,n){n(70);var o=n(20)(n(66),n(81),null,null);o.options.__file="F:\\github-server\\wh-web\\src\\views\\test.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] test.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},66:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{value:null}},methods:{click:function(){this.$store.dispatch("userLogin",{user_name:"test1",user_password:"123",router:this.$router}),this.$router.push({path:"base"})},click2:function(){this.axios({method:"post",url:"/test",data:{test:"123456"}}).then(function(e){this.value=e.data}.bind(this)).catch(function(e){console.log(e)})}}}},70:function(e,t){},81:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"test"},[n("Button",{attrs:{type:"warning"},on:{click:function(t){e.click()}}},[e._v("test")]),e._v(" "),n("Button",{attrs:{type:"warning"},on:{click:function(t){e.click2()}}},[e._v("测试")]),e._v(" "),n("Input",{attrs:{type:"textarea",rows:4,placeholder:"Enter something..."},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});