(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{597:function(e,t,a){"use strict";var n=a(14),c=a(15),r=a(22),o=a(20),s=a(113),i=a(21),u=a(0),p=a.n(u),d=a(57),l=a(720),f=a(575),v=(a(276),a(146)),h=a(112),m=a(572),g=a(598),T=a.n(g),b=v.d.DEFAULT,y=v.d.ERROR,O=v.c.ACCOUNT,w=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).onBlur=function(){a.props.onBlur()},a.state={account:"",tipLevel:b,verifyTip:""},a.onFocus=a.onFocus.bind(Object(s.a)(a)),a.onChange=a.onChange.bind(Object(s.a)(a)),a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.verifyTip,a=e.tipLevel,n=e.inputType,c=e.account,r=e.resetInput;n===O&&this.setState({verifyTip:t,tipLevel:a}),r&&this.setState({account:c})}},{key:"onFocus",value:function(){this.setState({tipLevel:b,verifyTip:""})}},{key:"onChange",value:function(e){var t=e.target.value,a=this.props.onChange;this.setState({account:t}),a(e)}},{key:"verifyInput",value:function(){var e,t,a=this,n=this.state.account,c=this.props,r=c.accountWasDisableTip,o=c.forgetCheck,s="",i="";return n?(e={identity:n,checkIdentity:""},t=Object(d.get)(m.e,{params:e}).then(function(){return Promise.reject()}).catch(function(e){var t=Object(l.a)(e,"response.status");if(e)switch(t){case 409:i=b,s="";break;case 412:i=y,s=r;break;default:i=y,s=h.s}else i=y,s=h.b;return i===b?o?Object(l.a)(e,"response.data"):n:Promise.reject(new Error(s))})):(i=y,s=h.K,t=Promise.reject(new Error(s))),t.finally(function(){a.setState({verifyTip:s,tipLevel:i})})}},{key:"render",value:function(){var e=this.state,t=e.tipLevel,a=e.verifyTip,n=e.account;return p.a.createElement("div",{className:T.a.loginAccountInput},p.a.createElement(f.a,{placeHolder:h.L,tipLevel:t,value:n,onFocus:this.onFocus,onChange:this.onChange,onBlur:this.onBlur},a))}}]),t}(u.Component);w.defaultProps={account:"",resetInput:!1,accountWasDisableTip:"",onChange:function(){},onBlur:function(){}},t.a=w},598:function(e,t,a){},600:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(112),o=a(574),s=a(576),i=a(601),u=a.n(i);t.a=function(e){var t=Object(s.a)(r.d),a=e.account;return c.a.createElement("span",null,t.map(function(e,t){var n="";switch(t){case 1:n=a;break;case 3:n=c.a.createElement("a",{className:u.a.reactivateLink,href:o.c,key:t},e);break;default:n=e}return n}))}},601:function(e,t,a){e.exports={reactivateLink:"DisableAccountTip_reactivateLink__2mLSq"}},649:function(e,t,a){e.exports={forgetPassword:"ForgetPassword_forgetPassword__1SxVn",descTitle:"ForgetPassword_descTitle__3csaV",sendMessage:"ForgetPassword_sendMessage__9BI1j",canNotGetVercodeWrapper:"ForgetPassword_canNotGetVercodeWrapper__2YAdK",resetBtn:"ForgetPassword_resetBtn__wjFfK",checkboxWrapper:"ForgetPassword_checkboxWrapper__KgQvF",passwordInputWrapper:"ForgetPassword_passwordInputWrapper__3XDgt",passwordBlock:"ForgetPassword_passwordBlock__e7PW6",linkWrapper:"ForgetPassword_linkWrapper__3QiFL",helpWrapper:"ForgetPassword_helpWrapper__3ZZuA"}},715:function(e,t,a){"use strict";a.r(t);var n=a(33),c=a(14),r=a(15),o=a(22),s=a(20),i=a(113),u=a(21),p=a(0),d=a.n(p),l=a(710),f=a(578),v=a.n(f),h=a(58),m=a(103),g=a.n(m),T=a(57),b=a(720),y=a(102),O=a(588),w=a(572),I=a(146),_=a(147),C=a(135),S=a(112),E=(a(607),a(573)),k=a(597),j=a(600),P=a(608),N=a(194),A=a(649),W=a.n(A),F=a(576),L=I.d.DEFAULT,V=I.d.ERROR,D=I.c.VERCODE,R=I.c.DEFAULT,U=(I.a.FORGET_PASSWORD,{INPUT_ACCOUNT:0,INPUT_CODE:1,INPUT_PASSWORD:2}),B="reset.password.pre.signature.error",x="validation.required.valueNotPresent",H="one.time.password.invalid",G=!1,K=!1,q=!1,M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,u=new Array(r),p=0;p<r;p++)u[p]=arguments[p];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(u)))).state={account:"",accountTipLevel:L,accountVerifyTip:"",vercode:"",vercodeTipLevel:L,vercodeVerifyTip:"",inputType:R,checked:!1,requesting:!1,resetInput:!1,resetStep:U.INPUT_ACCOUNT,phoneNumber:"",vercodeTimeRemainToSave:0,vercodeTimeRemainToGet:0},a.onAccountInputChange=function(e){var t=e.target.value;a.setState({account:t})},a.checkAccount=function(){G||(G=!0,a.refs.accountInput.verifyInput().then(function(e){var t=e.accountType,n=e.phoneNumber;"PHONENUMBER"===t?(a.saveAccountForSmsHelpPage(),a.setState({resetStep:U.INPUT_CODE,phoneNumber:n},function(){return a.refs.vercodeInput.getVercode()})):a.sendEmail()}).catch(function(e){console.log(e)}).finally(function(){G=!1}))},a.checkVercode=function(){q||(q=!0,a.refs.vercodeInput.verifyInput().then(function(e){var t=v.a.get("speechSessionId"),c={sessionId:t||a.state.smsSessionId,otp:e,timeStamp:(new Date).getTime(),recipient:a.state.account},r=O.a.getSignByParam(c);return Object(T.get)(w.d,{params:Object(n.a)({sig:r},c)})}).then(function(e){if(Object(b.a)(e,"data"))if(Object(b.a)(e,"data.success"))window.location.href=y.a.baseUrl+Object(b.a)(e,"data.path");else{var t=Object(b.a)(e,"data.errors");if(t.length)switch(t[0].code){case B:case x:case H:a.setState({vercodeVerifyTip:S.U,vercodeTipLevel:V,inputType:D})}}}).catch(function(e){console.log(e)}).finally(function(){q=!1}))},a.verifyAccountAndPassword=function(){return Promise.resolve({account:a.state.account})},a.updateSmsSessionId=function(e){a.setState({smsSessionId:e}),v.a.set("smsSessionId",e,{expires:1/24/60}),e&&v.a.remove("speechSessionId")},a.onVercodeTimeChange=function(e){a.setState({vercodeTimeRemainToSave:e})},a.sendEmail=function(){var e=a.props.saveBindLoginInfo,t=a.state.account,n=Object(i.a)(a),c=(new Date).getTime();K||(K=!0,Object(T.get)(w.f,{params:{identifier:t,timeStamp:c,sig:g()(t+c+y.a.reqKey),dbm:"yxdbm"}}).then(function(a){Object(b.a)(a,"data")&&Object(b.a)(a,"data.success")&&(e({account:t}),Object(N.a)({content:S.C,operates:function(){return n.props.history.push("/bind-existed")}}))}).catch(function(e){console.log(e)}).finally(function(){K=!1}))},a.redirectToTwoFactorHelper=function(){a.props.history.push("/two-factor-helper")},a.redirectToCodeTips=function(){a.props.history.push("/forget-password/sms-helper")},a.inputAccount=function(){var e=a.state,t=e.account,n=e.accountTipLevel,c=e.accountVerifyTip,r=e.inputType,o=e.resetInput,s=d.a.createElement(j.a,{account:t});return d.a.createElement("div",{className:W.a.accountInputWrapper},d.a.createElement("div",{className:W.a.descTitle},S.E),d.a.createElement(k.a,{ref:"accountInput",tipLevel:n,verifyTip:c,inputType:r,account:t,accountWasDisableHooks:a.accountWasDisable,accountNotExistedHooks:a.accountNotExisted,accountWasDisableTip:s,onChange:a.onAccountInputChange,resetInput:o,forgetCheck:!0}),d.a.createElement(E.a,{text:S.sb,buttonWrapperClass:W.a.resetBtn,onClick:a.checkAccount,loading:q}))},a.inputVercode=function(){var e=a.state,t=e.inputType,n=e.vercodeVerifyTip,c=e.vercodeTipLevel,r=e.phoneNumber;return d.a.createElement("div",{className:W.a.inputWrapper},d.a.createElement("div",{className:W.a.sendMessage},Object(F.a)(S.g)[0]+r),d.a.createElement(P.a,{ref:"vercodeInput",verify:a.verifyAccountAndPassword,updateSmsSessionId:a.updateSmsSessionId,verifyTip:n,tipLevel:c,inputType:t,updateCountState:function(){},onVercodeTimeChange:a.onVercodeTimeChange}),d.a.createElement(E.a,{text:S.ab,buttonWrapperClass:W.a.resetBtn,onClick:a.checkVercode,loading:q}),d.a.createElement("div",{className:W.a.canNotGetVercodeWrapper},d.a.createElement(E.a,{text:S.p,buttonWrapperClass:W.a.linkWrapper,onClick:a.redirectToCodeTips})))},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"saveAccountForSmsHelpPage",value:function(){var e=this.state.account;v.a.set("registrationSpeechAccount",e,{expires:1/24/60})}},{key:"render",value:function(){var e=this.state.resetStep,t=this.props.match,a=t.path,n=Object(C.a)(t.path)[0],c=U.INPUT_ACCOUNT,r=U.INPUT_CODE;return d.a.createElement("div",{className:W.a.forgetPassword},e===c&&this.inputAccount(),e===r&&this.inputVercode(),d.a.createElement("div",{className:W.a.helpWrapper},d.a.createElement(l.a,{path:"".concat(a,"/").concat(n.path),component:n.component})))}}]),t}(p.Component),J={saveBindLoginInfo:function(e){return Object(_.a)(e)}};t.default=Object(h.b)(function(e){return{bindRegistrationInfo:e.bindRegistrationInfo}},J)(M)}}]);
//# sourceMappingURL=ForgetPassword.890b3660.chunk.js.map