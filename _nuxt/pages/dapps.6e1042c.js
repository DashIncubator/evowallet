(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1579:function(t,e,n){var content=n(1590);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("a1a9f3d2",content,!0,{sourceMap:!1})},1589:function(t,e,n){"use strict";var r=n(1579);n.n(r).a},1590:function(t,e,n){(e=n(21)(!1)).push([t.i,".signup-actions[data-v-191ffb24]{color:#012060}.signup-actions[data-v-191ffb24]:hover{color:#008de4}",""]),t.exports=e},1611:function(t,e,n){"use strict";n.r(e);n(17),n(14),n(12),n(8),n(15),n(129);var r=n(5),c=n(2),o=n(146);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{}},computed:l({},Object(o.c)(["signups"])),created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchSignups();case 2:return e.next=4,t.fetchSignupContracts();case 4:case"end":return e.stop()}}),e)})))()},methods:l({},Object(o.b)(["fetchSignups","fetchSignupContracts"]))},d=(n(1589),n(145)),m=n(187),h=n.n(m),_=n(263),O=n(419),w=n(221),j=n(418),y=n(327),C=n(262),V=n(422),x=n(425),S=n(170),I=n(1576),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{on:{click:t.fetchSignups}},[t._v("Fetch Signups")]),t._v(" "),n("v-btn",{on:{click:t.fetchSignupContracts}},[t._v("Fetch SignupContracts")]),t._v(" "),t._l(t.signups,(function(e,i){return n("v-card",{key:i,staticClass:"mx-auto my-6",attrs:{"max-width":"344"}},[n("v-list-item",[n("v-list-item-avatar",[n("v-img",{attrs:{src:e.dappIcon}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline"},[t._v(t._s(e.dappName))]),t._v(" "),n("v-list-item-subtitle",[t._v("by Publisher")])],1),t._v(" "),n("v-list-item-action",{attrs:{color:"#008de4"}},[n("v-btn",{attrs:{dark:"",nuxt:"",color:"#008de4"}},[t._v(" open ")])],1)],1),t._v(" "),n("v-card-text",[t._v(" These are the dApps that power the tubes. ")]),t._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"signup-actions",attrs:{text:""}},[t._v(" 5 Reviews ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",{staticClass:"signup-actions"},[t._v("mdi-heart")])],1),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",{staticClass:"signup-actions"},[t._v("mdi-share-variant")])],1)],1)],1)}))],2)}),[],!1,null,"191ffb24",null);e.default=component.exports;h()(component,{VBtn:_.a,VCard:O.a,VCardActions:w.a,VCardText:w.b,VIcon:j.a,VImg:y.a,VListItem:C.a,VListItemAction:V.a,VListItemAvatar:x.a,VListItemContent:S.a,VListItemSubtitle:S.b,VListItemTitle:S.c,VSpacer:I.a})}}]);