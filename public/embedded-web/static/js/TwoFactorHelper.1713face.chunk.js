(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{607:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return c});var o={},n=function(e,t){var a;window[e]?a=o[e]:(a=o[e]=[],window[e]=function(){var e=arguments;a.forEach(function(t){t.apply(null,e)})}),a.push(t)},c=function(e,t){var a=o[e];if(a)if(t){var n=a.findIndex(function(e){return e===t});a.splice(n,1)}else a.length=0}},651:function(e,t,a){e.exports={twoFactorHelper:"TwoFactorHelper_twoFactorHelper__2LoU_",textWrapper:"TwoFactorHelper_textWrapper__2d03K",title:"TwoFactorHelper_title__1-dvS",content:"TwoFactorHelper_content__i2DLx",block:"TwoFactorHelper_block__Kkvnh",item:"TwoFactorHelper_item__QLES5",order:"TwoFactorHelper_order__3pjHo",titleSeparator:"TwoFactorHelper_titleSeparator__1jw6q",messageSeparator:"TwoFactorHelper_messageSeparator__1lpAK",backupSeparator:"TwoFactorHelper_backupSeparator__1O-Mg",messageBtn:"TwoFactorHelper_messageBtn__2MDks",useBackupBtn:"TwoFactorHelper_useBackupBtn__26yHA",completeBtn:"TwoFactorHelper_completeBtn__1_qUn"}},718:function(e,t,a){"use strict";a.r(t);var o=a(33),n=a(195),c=a(14),r=a(15),s=a(22),i=a(20),l=a(21),p=a(0),u=a.n(p),m=a(580),d=a.n(m),b=a(116),_=a(58),w=a(590),g=a(57),f=a(726),k=a(585),v=a(607),h=a(112),E=a(574),T=a(578),B=a(583),F=a(575),j=a(194),y=a(651),H=a.n(y),C=!1,O="",S="",N="mac"===w.a.getQueryParams("from"),M=new k.a,I=b.a.BRIGE_CALLBACK_NAME_FOR_GET_REMAINING_TIME,x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).goBack=function(){a.props.history.go(-1)},a.state={inMac:!1,vercodeBtnUseable:!0},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"postMessageToMac",value:function(e,t){try{N&&window.webkit.messageHandlers[e].postMessage(t)}catch(a){console.log(a)}}},{key:"remainingTimeCallback",value:function(e){console.log(e),M.startTimer({count:e,stepCallback:function(e){console.log(e)}})}},{key:"componentDidMount",value:function(){S=d.a.get("registrationSpeechAccount"),this.setState({inMac:N}),Object(v.a)(I,this.remainingTimeCallback),this.postMessageToMac("remainingTime",{callback:I})}},{key:"closeCurPage",value:function(e){window.opener=null,window.open("","_self"),window.close(),this.postMessageToMac("closeWindow","")}},{key:"getVerCodeByType",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"voiceotp",t=this;if(S&&!C){C=!0;var a,c=S,r=Object(n.a)({recipient:c},e,"");O&&(r=Object.assign({},r,{speechSessionId:O})),a=w.a.getSignByParam(r),Object(g.get)(E.g,{params:Object(o.a)({sig:a},r)}).then(function(e){var t=Object(f.a)(e,"data.sessionId"),a=Object(f.a)(e,"data.errors[0].code");if(t)O=t,d.a.set("speechSessionId",t,{expires:1/24/6});else if(a)switch(a){case"otp.too.often.error":Object(j.a)({content:h.gb});break;case"otp.limit.reached.error":Object(j.a)({content:h.fb})}}).catch(function(e){console.log(e)}).finally(function(){C=!1,t.goBack()})}}},{key:"componentWillUnmount",value:function(){Object(v.b)(I,this.remainingTimeCallback)}},{key:"render",value:function(){var e=this.props.twoFactorInfo.twoFactorHint,t=Object(T.a)(h.pb);return t[1]=e,u.a.createElement("div",{className:H.a.twoFactorHelper},u.a.createElement("div",{className:H.a.textWrapper},u.a.createElement("div",{className:H.a.title},h.Ab),u.a.createElement(B.a,{pure:!0,className:H.a.titleSeparator}),u.a.createElement("div",{className:H.a.content},u.a.createElement("div",{className:H.a.block},u.a.createElement("div",{className:H.a.item},u.a.createElement("div",{className:H.a.order},"1. "),u.a.createElement("div",null,t.join(""))),u.a.createElement(F.a,{text:h.ub,buttonWrapperClass:H.a.messageBtn,onClick:this.getVerCodeByType.bind(this,"textotp")}),u.a.createElement(F.a,{text:h.I,buttonWrapperClass:H.a.messageBtn,onClick:this.getVerCodeByType.bind(this,"voiceotp")})),u.a.createElement(B.a,{pure:!0,className:H.a.messageSeparator}),u.a.createElement("div",{className:H.a.block},u.a.createElement("div",{className:H.a.item},u.a.createElement("div",{className:H.a.order},"2. "),u.a.createElement("div",null,h.Fb))))),u.a.createElement(F.a,{text:h.Eb,buttonWrapperClass:H.a.useBackupBtn,onClick:this.goBack}),u.a.createElement(B.a,{pure:!0,className:H.a.backupSeparator}),u.a.createElement(F.a,{text:h.t,buttonWrapperClass:H.a.completeBtn,onClick:this.goBack}))}}]),t}(p.Component);t.default=Object(_.b)(function(e){return{wechatSessionId:e.wechatSessionId,twoFactorInfo:e.twoFactorInfo}})(x)}}]);
//# sourceMappingURL=TwoFactorHelper.1713face.chunk.js.map