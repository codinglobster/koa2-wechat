(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{607:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return o});var n={},s=function(e,t){var a;window[e]?a=n[e]:(a=n[e]=[],window[e]=function(){var e=arguments;a.forEach(function(t){t.apply(null,e)})}),a.push(t)},o=function(e,t){var a=n[e];if(a)if(t){var s=a.findIndex(function(e){return e===t});a.splice(s,1)}else a.length=0}},647:function(e,t,a){e.exports={smsHelper:"SmsHelper_smsHelper__1yUE-",textWrapper:"SmsHelper_textWrapper__1kLfb",title:"SmsHelper_title__3Zgzg",content:"SmsHelper_content__1Cl8v",block:"SmsHelper_block__2Wh7N",SmsBtn:"SmsHelper_SmsBtn__2klia",CompleteBtn:"SmsHelper_CompleteBtn__3kM9q"}},716:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return j});var n=a(33),s=a(14),o=a(15),c=a(21),i=a(20),r=a(22),l=a(0),p=a.n(l),u=a(580),m=a.n(u),d=a(112),f=a(590),g=a(57),b=a.n(g),h=a(585),k=a(607),_=a(107),v=a(574),C=a(575),E=a(149),S=a(647),w=a.n(S),y=!1,M="",B="",H="mac"===f.a.getQueryParams("from"),I=new h.a,O=d.a.BRIGE_CALLBACK_NAME_FOR_GET_REMAINING_TIME,j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).goBack=function(){a.props.history.go(-1)},a.state={inMac:!1,vercodeBtnUseable:!0},a}return Object(r.a)(t,e),Object(o.a)(t,[{key:"postMessageToMac",value:function(e,t){try{H&&window.webkit.messageHandlers[e].postMessage(t)}catch(a){console.log(a)}}},{key:"remainingTimeCallback",value:function(e){console.log(e),I.startTimer({count:e,stepCallback:function(e){console.log(e)}})}},{key:"componentDidMount",value:function(){B=m.a.get("registrationSpeechAccount"),this.setState({inMac:H}),Object(k.a)(O,this.remainingTimeCallback),this.postMessageToMac("remainingTime",{callback:O})}},{key:"closeCurPage",value:function(){this.props.history.go(-1)}},{key:"getSpeechVerCode",value:function(){var e=this;if(B&&!y){y=!0;var t,a;a=M?{sessionId:M,recipient:B,voiceotp:""}:{recipient:B,voiceotp:""},t=f.a.getSignByParam(a),b.a.get(v.g,{params:Object(n.a)({sig:t},a)}).then(function(t){if(t&&t.data&&t&&t.data.success)t.data.sessionId&&(M=t.data.sessionId,m.a.set("speechSessionId",t.data.sessionId,{expires:1/24/6}),e.postMessageToMac("sendCode",{sessionId:M,c:t.data.c||""}),e.goBack());else if(t.data.errors&&t.data.errors.length>0)switch(t.data.errors[0].code){case"otp.too.often.error":Object(E.a)({content:_.fb});break;case"otp.limit.reached.error":Object(E.a)({content:_.eb})}}).catch(function(e){console.log(e)}).finally(function(){y=!1})}}},{key:"componentWillUnmount",value:function(){Object(k.b)(O,this.remainingTimeCallback)}},{key:"render",value:function(){return p.a.createElement("div",{className:w.a.smsHelper},p.a.createElement("div",{className:w.a.textWrapper},p.a.createElement("div",{className:w.a.title},_.q),p.a.createElement("ol",{className:w.a.content},p.a.createElement("li",{className:w.a.block},p.a.createElement("div",null,_.J)),p.a.createElement("li",null,p.a.createElement("div",null,_.Hb)))),p.a.createElement(C.a,{text:_.H,buttonWrapperClass:w.a.SmsBtn,onClick:this.getSpeechVerCode.bind(this)}),p.a.createElement(C.a,{text:_.t,buttonWrapperClass:w.a.CompleteBtn,onClick:this.goBack}))}}]),t}(l.Component)}}]);
//# sourceMappingURL=SmsHelper.dc9cf5a1.chunk.js.map