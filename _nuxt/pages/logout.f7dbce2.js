(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1582:function(t,n,r){var content=r(1596);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("7d794ce2",content,!0,{sourceMap:!1})},1585:function(t,n,r){"use strict";r(188),r(12),r(8),r(15),r(670),r(432);var e=r(3);var o,c=r(114);n.a=(o="container",e.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,n){var r=n.props,data=n.data,e=n.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var d=Object.keys(c).filter((function(t){if("slot"===t)return!1;var n=c[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}));d.length&&(data.staticClass+=" ".concat(d.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,e)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var r,e=n.props,data=n.data,o=n.children,d=data.attrs;return d&&(data.attrs={},r=Object.keys(d).filter((function(t){if("slot"===t)return!1;var n=d[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}))),e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),o)}})},1594:function(t,n,r){t.exports=r.p+"img/white-d-1000.4564a0d.png"},1595:function(t,n,r){"use strict";var e=r(1582);r.n(e).a},1596:function(t,n,r){(n=r(21)(!1)).push([t.i,".backmation[data-v-c38580b6]{background:linear-gradient(-45deg,#111921,#0b0f3b,#012060,#008de4,#008de4,#fff,#fff);background-size:800% 800%;-webkit-animation:gradient-data-v-c38580b6 20s ease infinite;animation:gradient-data-v-c38580b6 20s ease infinite}@-webkit-keyframes gradient-data-v-c38580b6{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}@keyframes gradient-data-v-c38580b6{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}",""]),t.exports=n},1613:function(t,n,r){"use strict";r.r(n);r(1595);var e=r(145),o=r(187),c=r.n(o),d=r(1585),f=r(327),l=r(1575),component=Object(e.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("v-container",{staticClass:"backmation",attrs:{"fill-height":"",fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-img",{staticClass:"text-center",attrs:{justify:"center","max-width":"400",src:r(1594)}}),this._v(" "),n("br"),this._v(" "),n("span",{staticClass:"display-2",staticStyle:{color:"#ffffff59","font-family":"'Montserrat', sans-serif !important"}},[this._v("\n      EvoWallet\n    ")])],1),this._v(" "),n("v-row",{attrs:{align:"center",justify:"center"}})],1)}),[],!1,null,"c38580b6",null);n.default=component.exports;c()(component,{VContainer:d.a,VImg:f.a,VRow:l.a})}}]);