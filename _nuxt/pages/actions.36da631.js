(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1578:function(e,t,n){e.exports=n.p+"assets/notify.mp3"},1585:function(e,t,n){"use strict";n(188),n(12),n(8),n(15),n(670),n(432);var o=n(3);var r,c=n(114);t.a=(r="container",o.a.extend({name:"v-".concat(r),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,t){var n=t.props,data=t.data,o=t.children;data.staticClass="".concat(r," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(e){if("slot"===e)return!1;var t=c[e];return e.startsWith("data-")?(data.attrs[e]=t,!1):t||"string"==typeof t}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),e(n.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(e,t){var n,o=t.props,data=t.data,r=t.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(e){if("slot"===e)return!1;var t=l[e];return e.startsWith("data-")?(data.attrs[e]=t,!1):t||"string"==typeof t}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),e(o.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(n||[])}),r)}})},1609:function(e,t,n){"use strict";n.r(t);n(17),n(14);var o=n(47),r=(n(48),n(49),n(12),n(15),n(129),n(5)),c=(n(56),n(2)),l=(n(8),n(146)),d=n(18);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y=function(e){return new Promise((function(t){return setTimeout(t,e)}))},v={components:{},data:function(){return{loginPinTimeLeft:0,loginPinTimeLeftAmber:0,copyPinOverlay:!1}},computed:f({},Object(l.c)(["curAccountDocId","curActionRequest","lastRequest"])),created:function(){!1===this.$store.state.name.isRegistered&&(window.location.href="/"),this.resetDoc(),this.freshLoginPins(),this.pollDocumentActionRequest(),this.pollPaymentRequest(),this.pollPaymentRequestPOS()},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$store.watch((function(e){return e.loginPinTimeLeft}),(function(){var t=e.$store.state.loginPinTimeLeft;e.loginPinTimeLeft=100-t/3e5*100,e.loginPinTimeLeftAmber=100-t/3e4*100}));case 1:case"end":return t.stop()}}),t)})))()},methods:f(f({},Object(l.b)(["initWallet","getMagicInternetMoney","registerIdentity","registerIdentityOnceBalance","showSnackbar","getContract","queryDocuments","freshLoginPins","verifyAppRequest","approveAppRequest","showSnackbar","processActionRequestPayload","setCurActionRequest","setCurActionRequestLoading","sendDash","clientIsReady","getAddressSummary"])),{},{copyPinToClipboard:function(){var e=this;try{var t=document.createElement("textarea");t.value=this.$store.state.loginPin,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.copyPinOverlay=!0,setTimeout((function(){e.copyPinOverlay=!1}),700)}catch(e){this.showSnackbar({text:e.message})}},showAmberProgress:function(){return Boolean(this.$store.state.loginPinTimeLeft<3e4)},playNotification:function(){document.getElementById("notificationSound").play()},rejectDoc:function(){this.resetDoc()},resetDoc:function(){this.$store.commit("resetCurActionRequest")},approveRequest:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$store.commit("setCurActionRequestLoading",!0),n=e.curActionRequest,console.log({curActionRequest:n}),o=n.doc.$type,console.log({$type:o}),t.t0=o,t.next="DocumentActionRequest"===t.t0?8:"PaymentRequest"===t.t0?10:13;break;case 8:return e.approveActionRequest(),t.abrupt("break",14);case 10:return console.log("approving payment"),e.approvePaymentRequest(),t.abrupt("break",14);case 13:return t.abrupt("break",14);case 14:case"end":return t.stop()}}),t)})))()},approvePaymentRequest:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,o,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.curActionRequest,o=n.doc,r=o.toAddress,c=o.satoshis,console.log("toAddress :>> ",r),console.log("satoshis :>> ",c),r||(console.log("no address"),r=n.doc.encAddress),c||(console.log("no satoshis"),c=n.needToPaySatoshis),console.log("toAddress :>> ",r),console.log("satoshis :>> ",c),c=parseInt(c),e.$store.commit("setCurActionRequestLoading",!0),t.next=12,e.sendDash({toAddress:r,satoshis:c});case 12:e.$store.commit("setCurActionRequestLoading",!1),e.resetDoc();case 14:case"end":return t.stop()}}),t)})))()},approveActionRequest:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.curActionRequest,e.$store.commit("setCurActionRequestLoading",!0),t.prev=2,o=n.doc.payload,r=Object.keys(o)[0],t.next=7,e.processActionRequestPayload({actionRequest:n});case 7:console.log("WE AWAITED THE SUBMIT"),e.showSnackbar({text:"Approved ".concat(r),color:"green"}),e.resetDoc(),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(2),e.showSnackbar({text:t.t0.message}),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[2,12]])})))()},pollPaymentRequestPOS:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c,l,m,f,v,R,P,h,A,O,x,w,S,I,$,D,k,C,j,_,L,N,T,V,B;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("/actions"==e.$router.currentRoute.path){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.clientIsReady();case 4:if(t.sent){t.next=11;break}return console.log("No client available, waiting for connection.."),t.next=9,y(1e3);case 9:return e.pollPaymentRequestPOS(),t.abrupt("return");case 11:if(e.$store.state.name.isRegistered){t.next=13;break}return t.abrupt("return");case 13:return console.log("pollingPaymentRequestPOS()",Date(Date.now()).toString()),n=e.curAccountDocId,console.log("curAccountDocId for pollingPaymentRequest",n),r={limit:"1",startAt:"1",orderBy:[["timestamp","desc"]],where:[["requesteeUserId","==",e.$store.state.name.docId]]},console.log("this.$store.state.identityId :>> ",e.$store.state.name.docId),t.next=20,e.queryDocuments({dappName:"PaymentRequest",typeLocator:"PaymentRequest",queryOpts:r});case 20:if(c=t.sent,console.log({documents:c}),l=Object(o.a)(c,1),!(m=l[0])){t.next=59;break}return console.log({paymentRequest:m}),m=m.toJSON(),console.log({paymentRequestJSON:m}),f=m.uidPin,v=e.$store.state.loginPin,console.log({uidPin:f}),t.next=32,e.$store.dispatch("decryptRequestPin",{identityId:m.$ownerId});case 32:if(R=t.sent,console.log("decryptedRequestPin :>> ",R),P=R===v,console.log({loginPin:v}),console.log({isPinVerified:P}),h=!1,(A=e.lastRequest({contractId:m.contractId,type:m.$type}))&&A.$id==m.$id||(h=!0),console.log("lastPaymentRequest :>> ",A),console.log("paymentRequest :>> ",m),console.log({isPaymentRequestNew:h}),!h){t.next=59;break}if(x=(O=m).memo,w=O.refId,O.requesteeUserId,O.requesteeUserName,O.requesterUserId,S=O.requesterUserName,O.timestamp,I=O.encAddress,$=O.encSatoshis,D=O.encFiatAmount,k=O.encFiatSymbol,console.log("lastPaymentRequest :>> ",A),"0"!==$){t.next=50;break}(null==A?void 0:A.refId)===w&&e.rejectDoc(),t.next=57;break;case 50:if(!(parseInt($)>0)){t.next=57;break}return C=parseInt($),t.next=54,e.getAddressSummary(I);case 54:j=t.sent,(_=C-j.totalBalanceSat)>0?(L=d.Unit.fromSatoshis(_).to(d.Unit.BTC),N=parseFloat(D),T=N/d.Unit.fromSatoshis($).toBTC(),V=Math.round(T*L*100)/100,(B={needToPaySatoshis:_}).doc=m,B.overline=m.dappName,B.headline="PaymentRequest",B.payload="Pay ".concat(V," ").concat(k," to ").concat(S," with memo: ").concat(x,". (").concat(L," Dash)"),B.actionRequired=!0,console.log({signDoc:B}),e.$store.commit("setCurActionRequest",B),e.playNotification()):(null==A?void 0:A.refId)===w&&e.rejectDoc();case 57:console.log({paymentRequest:m}),e.$store.commit("setLastRequest",m);case 59:return t.next=61,y(5e3);case 61:e.pollPaymentRequestPOS();case 62:case"end":return t.stop()}}),t)})))()},pollPaymentRequest:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c,l,m,f,v,R,P,h,A,O,x,w,S,I;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("/actions"==e.$router.currentRoute.path){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.clientIsReady();case 4:if(t.sent){t.next=11;break}return console.log("No client available, waiting for connection.."),t.next=9,y(5e3);case 9:return e.pollPaymentRequest(),t.abrupt("return");case 11:if(e.$store.state.name.isRegistered){t.next=13;break}return t.abrupt("return");case 13:return console.log("pollingPaymentRequest()",Date(Date.now()).toString()),n=e.curAccountDocId,console.log("curAccountDocId for pollingPaymentRequest",n),r={limit:"1",startAt:"1",orderBy:[["$createdAt","desc"]],where:[["accountDocId","==",n]]},t.next=19,e.queryDocuments({dappName:"primitives",typeLocator:"PaymentRequest",queryOpts:r});case 19:if(c=t.sent,console.log({documents:c}),l=Object(o.a)(c,1),!(m=l[0])){t.next=43;break}return console.log({paymentRequest:m}),m=m.toJSON(),console.log({paymentRequestJSON:m}),f=m.uidPin,v=e.$store.state.loginPin,console.log({uidPin:f}),t.next=31,e.$store.dispatch("decryptRequestPin",{identityId:m.$ownerId});case 31:R=t.sent,console.log("decryptedRequestPin :>> ",R),P=R===v,console.log({loginPin:v}),console.log({isPinVerified:P}),h=!1,(A=e.lastRequest({contractId:m.contractId,type:m.$type}))&&A.$id==m.$id||(h=!0),console.log("lastPaymentRequest :>> ",A),console.log("paymentRequest :>> ",m),console.log({isPaymentRequestNew:h}),h&&(x=(O=m).satoshis,w=O.toAddress,S=d.Unit.fromSatoshis(x).to(d.Unit.BTC),(I={}).doc=m,I.overline=m.dappName,I.headline="PaymentRequest",I.payload="Send ".concat(S," Dash to ").concat(w),I.actionRequired=!0,console.log({signDoc:I}),e.$store.commit("setCurActionRequest",I),e.playNotification(),console.log({paymentRequest:m}),e.$store.commit("setLastRequest",m));case 43:return t.next=45,y(5e3);case 45:e.pollPaymentRequest();case 46:case"end":return t.stop()}}),t)})))()},pollDocumentActionRequest:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c,l,d,m,f,v,R,P,h,A,O;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("/actions"==e.$router.currentRoute.path){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.clientIsReady();case 4:if(t.sent){t.next=11;break}return console.log("No client available, waiting for connection.."),t.next=9,y(5e3);case 9:return e.pollDocumentActionRequest(),t.abrupt("return");case 11:if(n=e.curActionRequest,e.$store.state.name.isRegistered){t.next=14;break}return t.abrupt("return");case 14:return console.log("pollingDocumentActionRequest()",Date(Date.now()).toString()),r={limit:"1",startAt:"1",orderBy:[["$createdAt","desc"]],where:[["accountDocId","==",e.curAccountDocId]]},t.next=18,e.queryDocuments({dappName:"primitives",typeLocator:"DocumentActionRequest",queryOpts:r});case 18:if(c=t.sent,console.log({documents:c}),l=Object(o.a)(c,1),!(d=l[0])){t.next=45;break}return console.log({actionRequest:d}),d=d.toJSON(),console.log({actionRequestJSON:d}),m=JSON.parse(JSON.parse('"'+d.JSONDocString+'"')),console.log("actionRequest.JSONDocString :>> ",d.JSONDocString),console.log("payload :>> ",m),f=d.uidPin,v=e.$store.state.loginPin,console.log({uidPin:f}),t.next=33,e.$store.dispatch("decryptRequestPin",{encRequestPin:f,identityId:d.$ownerId});case 33:R=t.sent,console.log("decryptedRequestPin :>> ",R.data),P=R.data===v,console.log({loginPin:v}),console.log({isPinVerified:P}),h=!1,A=e.lastRequest({contractId:d.contractId,type:d.$type}),console.log("lastActionRequest :>> ",A),console.log("actionRequest.$id :>> ",d.$id),A&&A.$id==d.$id||(h=!0),console.log({isActionRequestNew:h}),P&&h&&(console.log("THIS SHOULD SHOW IN THE VIEWPORT"),(O={}).doc=d,O.doc.payload=m,O.overline=d.dappName,O.headline=Object.keys(m)[0],O.payload="",O.actionRequired=!0,e.$store.commit("setCurActionRequest",O),console.log("THIS SHOULD SHOW IN THE VIEWPORT",n),e.playNotification(),console.log({actionRequest:d}),e.$store.commit("setLastRequest",d));case 45:return t.next=47,y(5e3);case 47:e.pollDocumentActionRequest();case 48:case"end":return t.stop()}}),t)})))()}})},R=n(145),P=n(187),h=n.n(P),A=n(263),O=n(419),x=n(221),w=n(1585),S=n(418),I=n(262),$=n(170),D=n(423),k=n(420),C=n(1576),component=Object(R.a)(v,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("audio",{attrs:{id:"notificationSound",src:n(1578)}}),e._v(" "),o("v-card",{staticClass:"mx-auto my-5",attrs:{"max-width":"344",outlined:""}},[o("v-list-item",[o("v-list-item-content",[o("div",{staticClass:"overline mb-4"},[e._v("Welcome")]),e._v(" "),o("v-list-item-title",{staticClass:"headline mb-1 text-center"},[e._v("\n          "+e._s(this.$store.state.name.label)+"\n        ")])],1)],1)],1),e._v(" "),o("v-card",{staticClass:"mx-auto my-5",attrs:{"max-width":"344",outlined:""},on:{click:e.copyPinToClipboard}},[o("v-list-item",[o("v-list-item-content",[o("v-overlay",{attrs:{absolute:!0,value:e.copyPinOverlay}},[o("v-btn",{attrs:{color:"#787878"},on:{onclick:function(t){e.copyPinOverlay=!1}}},[o("v-icon",[e._v("mdi-clipboard")]),e._v("Copied!\n          ")],1)],1),e._v(" "),o("div",{staticClass:"overline mb-4"},[e._v("PIN for dapp actions")]),e._v(" "),o("v-list-item-title",{staticClass:"headline mb-1 text-center"},[o("span",{ref:"loginpin",staticStyle:{"letter-spacing":"0.1em"}},[e._v(e._s(this.$store.state.loginPin))])])],1)],1),e._v(" "),o("v-progress-linear",{attrs:{color:"primary",reactive:""},model:{value:e.loginPinTimeLeft,callback:function(t){e.loginPinTimeLeft=t},expression:"loginPinTimeLeft"}}),e._v(" "),e.showAmberProgress()?o("v-progress-linear",{attrs:{height:"10",color:"amber",reactive:""},model:{value:e.loginPinTimeLeftAmber,callback:function(t){e.loginPinTimeLeftAmber=t},expression:"loginPinTimeLeftAmber"}}):e._e()],1),e._v(" "),o("v-card",{staticClass:"mx-auto my-5",attrs:{"max-width":"344",outlined:""}},[o("v-list-item",{attrs:{"three-line":""}},[o("v-list-item-content",[o("div",{staticClass:"overline mb-4"},[e._v("\n          "+e._s(e.curActionRequest.overline)+"\n        ")]),e._v(" "),o("v-list-item-title",{staticClass:"headline mb-1"},[e._v("\n          "+e._s(e.curActionRequest.headline)+"\n        ")]),e._v(" "),o("v-list-item-subtitle",[e._v("\n          "+e._s(e.curActionRequest.payload)+"\n        ")])],1)],1),e._v(" "),e.curActionRequest.actionRequired?o("v-card-actions",[o("v-btn",{attrs:{outlined:"",color:"error",large:""},on:{click:function(t){return e.rejectDoc()}}},[o("v-icon",{attrs:{left:""}},[e._v(" mdi-cancel ")]),e._v("\n\n        Cancel\n      ")],1),e._v(" "),o("v-spacer"),e._v(" "),o("v-btn",{attrs:{loading:e.curActionRequest.loading,color:"success",large:""},on:{click:function(t){return e.approveRequest()}}},[o("v-icon",{attrs:{left:""}},[e._v(" mdi-check-bold ")]),e._v("Confirm\n      ")],1)],1):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VBtn:A.a,VCard:O.a,VCardActions:x.a,VContainer:w.a,VIcon:S.a,VListItem:I.a,VListItemContent:$.a,VListItemSubtitle:$.b,VListItemTitle:$.c,VOverlay:D.a,VProgressLinear:k.a,VSpacer:C.a})}}]);