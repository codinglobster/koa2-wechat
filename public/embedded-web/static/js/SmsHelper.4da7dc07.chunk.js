(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{601:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return s});var a={},o=function(e,t){var n;window[e]?n=a[e]:(n=a[e]=[],window[e]=function(){var e=arguments;n.forEach(function(t){t.apply(null,e)})}),n.push(t)},s=function(e,t){var n=a[e];if(n)if(t){var o=n.findIndex(function(e){return e===t});n.splice(o,1)}else n.length=0}},641:function(e,t,n){e.exports={smsHelper:"SmsHelper_smsHelper__1yUE-",textWrapper:"SmsHelper_textWrapper__1kLfb",title:"SmsHelper_title__3Zgzg",content:"SmsHelper_content__1Cl8v",block:"SmsHelper_block__2Wh7N",SmsBtn:"SmsHelper_SmsBtn__2klia",CompleteBtn:"SmsHelper_CompleteBtn__3kM9q"}},711:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return T});var a=n(33),o=n(14),s=n(15),c=n(21),i=n(20),r=n(22),l=n(0),u=n.n(l),p=n(577),m=n.n(p),d=n(101),f=n(587),g=n(56),b=n.n(g),_=n(582),h=n(601),k=n(112),v=n(570),w=n(572),C=n(571),E=n(641),M=n.n(E),S=!1,y="",H="",B="mac"===f.a.getQueryParams("from"),I=new _.a,O=d.a.BRIGE_CALLBACK_NAME_FOR_GET_REMAINING_TIME,T=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).goBack=function(){n.closeCurPage()},n.state={inMac:!1,vercodeBtnUseable:!0},n}return Object(r.a)(t,e),Object(s.a)(t,[{key:"postMessageToMac",value:function(e,t){try{B&&window.webkit.messageHandlers[e].postMessage(t)}catch(n){console.log(n)}}},{key:"remainingTimeCallback",value:function(e){console.log(e),I.startTimer({count:e,stepCallback:function(e){console.log(e)}})}},{key:"componentDidMount",value:function(){H=m.a.get("registrationSpeechAccount"),this.setState({inMac:B}),Object(h.a)(O,this.remainingTimeCallback),this.postMessageToMac("remainingTime",{callback:O})}},{key:"closeCurPage",value:function(){window.opener=null,window.open("","_self"),window.close(),this.postMessageToMac("closeWindow","")}},{key:"getSpeechVerCode",value:function(){var e=this;if(H&&!S){S=!0;var t,n;n=y?{sessionId:y,recipient:H,voiceotp:""}:{recipient:H,voiceotp:""},t=f.a.getSignByParam(n),b.a.get(v.g,{params:Object(a.a)({sig:t},n)}).then(function(t){if(t&&t.data&&t&&t.data.success)t.data.sessionId&&(y=t.data.sessionId,m.a.set("speechSessionId",t.data.sessionId,{expires:1/24/6}),e.postMessageToMac("sendCode",{sessionId:y,c:t.data.c||""}),e.closeCurPage());else if(t.data.errors&&t.data.errors.length>0)switch(t.data.errors[0].code){case"otp.too.often.error":Object(C.a)({content:k.fb});break;case"otp.limit.reached.error":Object(C.a)({content:k.eb})}}).catch(function(e){console.log(e)}).finally(function(){S=!1})}}},{key:"componentWillUnmount",value:function(){Object(h.b)(O,this.remainingTimeCallback)}},{key:"render",value:function(){return u.a.createElement("div",{className:M.a.smsHelper},u.a.createElement("div",{className:M.a.textWrapper},u.a.createElement("div",{className:M.a.title},k.q),u.a.createElement("ol",{className:M.a.content},u.a.createElement("li",{className:M.a.block},u.a.createElement("div",null,k.J)),u.a.createElement("li",null,u.a.createElement("div",null,k.Hb)))),u.a.createElement(w.a,{text:k.H,buttonWrapperClass:M.a.SmsBtn,onClick:this.getSpeechVerCode.bind(this)}),u.a.createElement(w.a,{text:k.t,buttonWrapperClass:M.a.CompleteBtn,onClick:this.goBack}))}}]),t}(l.Component)}}]);
//# sourceMappingURL=SmsHelper.4da7dc07.chunk.js.map