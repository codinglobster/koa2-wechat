(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{601:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return r});var n={},o=function(e,t){var a;window[e]?a=n[e]:(a=n[e]=[],window[e]=function(){var e=arguments;a.forEach(function(t){t.apply(null,e)})}),a.push(t)},r=function(e,t){var a=n[e];if(a)if(t){var o=a.findIndex(function(e){return e===t});a.splice(o,1)}else a.length=0}},645:function(e,t,a){e.exports={twoFactorHelper:"TwoFactorHelper_twoFactorHelper__2LoU_",textWrapper:"TwoFactorHelper_textWrapper__2d03K",title:"TwoFactorHelper_title__1-dvS",content:"TwoFactorHelper_content__i2DLx",block:"TwoFactorHelper_block__Kkvnh",item:"TwoFactorHelper_item__QLES5",order:"TwoFactorHelper_order__3pjHo",titleSeparator:"TwoFactorHelper_titleSeparator__1jw6q",messageSeparator:"TwoFactorHelper_messageSeparator__1lpAK",backupSeparator:"TwoFactorHelper_backupSeparator__1O-Mg",messageBtn:"TwoFactorHelper_messageBtn__2MDks",useBackupBtn:"TwoFactorHelper_useBackupBtn__26yHA",completeBtn:"TwoFactorHelper_completeBtn__1_qUn"}},710:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return S});var n=a(33),o=a(192),r=a(14),c=a(15),s=a(21),l=a(20),i=a(22),p=a(0),u=a.n(p),m=a(574),d=a.n(m),_=a(107),b=a(585),g=a(57),w=a(716),f=a(580),k=a(601),v=a(111),h=a(569),E=a(578),T=a(571),B=a(570),y=a(645),C=a.n(y),H=!1,j="",F="",O="mac"===b.a.getQueryParams("from"),N=new f.a,M=_.a.BRIGE_CALLBACK_NAME_FOR_GET_REMAINING_TIME,S=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).goBack=function(){a.props.history.go(-1)},a.state={inMac:!1,vercodeBtnUseable:!0},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"postMessageToMac",value:function(e,t){try{O&&window.webkit.messageHandlers[e].postMessage(t)}catch(a){console.log(a)}}},{key:"remainingTimeCallback",value:function(e){console.log(e),N.startTimer({count:e,stepCallback:function(e){console.log(e)}})}},{key:"componentDidMount",value:function(){F="18592074084",this.setState({inMac:O}),Object(k.a)(M,this.remainingTimeCallback),this.postMessageToMac("remainingTime",{callback:M})}},{key:"closeCurPage",value:function(e){window.opener=null,window.open("","_self"),window.close(),this.postMessageToMac("closeWindow","")}},{key:"getVerCodeByType",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"voiceotp",t=this;if(F&&!H){H=!0;var a,r=F,c=Object(o.a)({recipient:r},e,"");j&&(c=Object.assign({},c,{speechSessionId:j})),a=b.a.getSignByParam(c),Object(g.get)(h.g,{params:Object(n.a)({sig:a},c)}).then(function(e){var t=Object(w.a)(e,"data.sessionId"),a=Object(w.a)(e,"data.errors[0].code");if(t)j=t,d.a.set("speechSessionId",t,{expires:1/24/6});else if(a)switch(a){case"otp.too.often.error":Object(B.a)({content:v.db});break;case"otp.limit.reached.error":Object(B.a)({content:v.cb})}}).catch(function(e){console.log(e)}).finally(function(){H=!1,t.goBack()})}}},{key:"componentWillUnmount",value:function(){Object(k.b)(M,this.remainingTimeCallback)}},{key:"render",value:function(){return u.a.createElement("div",{className:C.a.twoFactorHelper},u.a.createElement("div",{className:C.a.textWrapper},u.a.createElement("div",{className:C.a.title},v.xb),u.a.createElement(E.a,{pure:!0,className:C.a.titleSeparator}),u.a.createElement("div",{className:C.a.content},u.a.createElement("div",{className:C.a.block},u.a.createElement("div",{className:C.a.item},u.a.createElement("div",{className:C.a.order},"1. "),u.a.createElement("div",null,v.mb)),u.a.createElement(T.a,{text:v.rb,buttonWrapperClass:C.a.messageBtn,onClick:this.getVerCodeByType.bind(this,"textotp")}),u.a.createElement(T.a,{text:v.G,buttonWrapperClass:C.a.messageBtn,onClick:this.getVerCodeByType.bind(this,"voiceotp")})),u.a.createElement(E.a,{pure:!0,className:C.a.messageSeparator}),u.a.createElement("div",{className:C.a.block},u.a.createElement("div",{className:C.a.item},u.a.createElement("div",{className:C.a.order},"2. "),u.a.createElement("div",null,v.Db))))),u.a.createElement(T.a,{text:v.Cb,buttonWrapperClass:C.a.useBackupBtn,onClick:this.goBack}),u.a.createElement(E.a,{pure:!0,className:C.a.backupSeparator}),u.a.createElement(T.a,{text:v.s,buttonWrapperClass:C.a.completeBtn,onClick:this.goBack}))}}]),t}(p.Component)}}]);
//# sourceMappingURL=TwoFactorHelper.d7c1fd91.chunk.js.map