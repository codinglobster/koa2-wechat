(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{595:function(e,t,n){"use strict";var a=n(14),c=n(15),o=n(21),r=n(20),s=n(111),i=n(22),u=n(0),p=n.n(u),d=n(56),l=n(717),f=n(573),v=(n(273),n(144)),h=n(110),m=n(569),g=n(596),T=n.n(g),b=v.d.DEFAULT,y=v.d.ERROR,O=v.c.ACCOUNT,I=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(r.a)(t).call(this,e))).onBlur=function(){n.props.onBlur()},n.state={account:"",tipLevel:b,verifyTip:""},n.onFocus=n.onFocus.bind(Object(s.a)(n)),n.onChange=n.onChange.bind(Object(s.a)(n)),n}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.verifyTip,n=e.tipLevel,a=e.inputType,c=e.account,o=e.resetInput;a===O&&this.setState({verifyTip:t,tipLevel:n}),o&&this.setState({account:c})}},{key:"onFocus",value:function(){this.setState({tipLevel:b,verifyTip:""})}},{key:"onChange",value:function(e){var t=e.target.value,n=this.props.onChange;this.setState({account:t}),n(e)}},{key:"verifyInput",value:function(){var e,t,n=this,a=this.state.account,c=this.props,o=c.accountWasDisableTip,r=c.forgetCheck,s="",i="";return a?(e={identity:a,checkIdentity:""},t=Object(d.get)(m.e,{params:e}).then(function(){return Promise.reject()}).catch(function(e){var t=Object(l.a)(e,"response.status");if(e)switch(t){case 409:i=b,s="";break;case 412:i=y,s=o;break;default:i=y,s=h.r}else i=y,s=h.b;return i===b?r?Object(l.a)(e,"response.data"):a:Promise.reject(new Error(s))})):(i=y,s=h.J,t=Promise.reject(new Error(s))),t.finally(function(){n.setState({verifyTip:s,tipLevel:i})})}},{key:"render",value:function(){var e=this.state,t=e.tipLevel,n=e.verifyTip,a=e.account;return p.a.createElement("div",{className:T.a.loginAccountInput},p.a.createElement(f.a,{placeHolder:h.K,tipLevel:t,value:a,onFocus:this.onFocus,onChange:this.onChange,onBlur:this.onBlur},n))}}]),t}(u.Component);I.defaultProps={account:"",resetInput:!1,accountWasDisableTip:"",onChange:function(){},onBlur:function(){}},t.a=I},596:function(e,t,n){},598:function(e,t,n){"use strict";var a=n(0),c=n.n(a),o=n(110),r=n(572),s=n(575),i=n(599),u=n.n(i);t.a=function(e){var t=Object(s.a)(o.d),n=e.account;return c.a.createElement("span",null,t.map(function(e,t){var a="";switch(t){case 1:a=n;break;case 3:a=c.a.createElement("a",{className:u.a.reactivateLink,href:r.d,key:t},e);break;default:a=e}return a}))}},599:function(e,t,n){e.exports={reactivateLink:"DisableAccountTip_reactivateLink__2mLSq"}},647:function(e,t,n){e.exports={forgetPassword:"ForgetPassword_forgetPassword__1SxVn",descTitle:"ForgetPassword_descTitle__3csaV",sendMessage:"ForgetPassword_sendMessage__9BI1j",canNotGetVercodeWrapper:"ForgetPassword_canNotGetVercodeWrapper__2YAdK",resetBtn:"ForgetPassword_resetBtn__wjFfK",checkboxWrapper:"ForgetPassword_checkboxWrapper__KgQvF",passwordInputWrapper:"ForgetPassword_passwordInputWrapper__3XDgt",passwordBlock:"ForgetPassword_passwordBlock__e7PW6",helpBtn:"ForgetPassword_helpBtn__3VDca"}},711:function(e,t,n){"use strict";n.r(t);var a=n(33),c=n(14),o=n(15),r=n(21),s=n(20),i=n(111),u=n(22),p=n(0),d=n.n(p),l=n(574),f=n.n(l),v=n(57),h=n(100),m=n.n(h),g=n(56),T=n(717),b=n(99),y=n(585),O=n(569),I=n(144),w=n(146),S=n(110),_=n(605),P=n(571),j=n(595),C=n(598),E=n(606),k=n(570),N=n(647),A=n.n(N),F=n(575),L=I.d.DEFAULT,D=I.d.ERROR,V=I.c.VERCODE,W=I.c.DEFAULT,B=I.a.FORGET_PASSWORD,R={INPUT_ACCOUNT:0,INPUT_CODE:1,INPUT_PASSWORD:2},U="reset.password.pre.signature.error",x="validation.required.valueNotPresent",H="one.time.password.invalid",q=!1,G=!1,K=!1,M=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,u=new Array(o),p=0;p<o;p++)u[p]=arguments[p];return(n=Object(r.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(u)))).state={account:"",accountTipLevel:L,accountVerifyTip:"",vercode:"",vercodeTipLevel:L,vercodeVerifyTip:"",inputType:W,checked:!1,requesting:!1,resetInput:!1,resetStep:R.INPUT_ACCOUNT,phoneNumber:"",vercodeTimeRemainToSave:0,vercodeTimeRemainToGet:0},n.onAccountInputChange=function(e){var t=e.target.value;n.setState({account:t})},n.checkAccount=function(){q||(q=!0,n.refs.accountInput.verifyInput().then(function(e){var t=e.accountType,a=e.phoneNumber;"PHONENUMBER"===t?(n.saveAccountForSmsHelpPage(),n.setState({resetStep:R.INPUT_CODE,phoneNumber:a},function(){return n.refs.vercodeInput.getVercode()})):n.sendEmail()}).catch(function(e){console.log(e)}).finally(function(){q=!1}))},n.checkVercode=function(){K||(K=!0,n.refs.vercodeInput.verifyInput().then(function(e){var t=f.a.get("speechSessionId"),c={sessionId:t||n.state.smsSessionId,otp:e,timeStamp:(new Date).getTime(),recipient:n.state.account},o=y.a.getSignByParam(c);return Object(g.get)(O.d,{params:Object(a.a)({sig:o},c)})}).then(function(e){if(Object(T.a)(e,"data"))if(Object(T.a)(e,"data.success"))window.location.href=b.a.baseUrl+Object(T.a)(e,"data.path");else{var t=Object(T.a)(e,"data.errors");if(t.length)switch(t[0].code){case U:case x:case H:n.setState({vercodeVerifyTip:S.T,vercodeTipLevel:D,inputType:V})}}}).catch(function(e){console.log(e)}).finally(function(){K=!1}))},n.verifyAccountAndPassword=function(){return Promise.resolve({account:n.state.account})},n.updateSmsSessionId=function(e){n.setState({smsSessionId:e}),f.a.set("smsSessionId",e,{expires:1/24/60}),e&&f.a.remove("speechSessionId")},n.onVercodeTimeChange=function(e){n.setState({vercodeTimeRemainToSave:e})},n.sendEmail=function(){var e=n.props.saveBindLoginInfo,t=n.state.account,a=Object(i.a)(n),c=(new Date).getTime();G||(G=!0,Object(g.get)(O.f,{params:{identifier:t,timeStamp:c,sig:m()(t+c+b.a.reqKey),dbm:"yxdbm"}}).then(function(n){Object(T.a)(n,"data")&&Object(T.a)(n,"data.success")&&(e({account:t}),Object(k.a)({content:S.B,operates:function(){return a.props.history.push("/bind-existed")}}))}).catch(function(e){console.log(e)}).finally(function(){G=!1}))},n.redirectToTwoFactorHelper=function(){n.props.history.push("/two-factor-helper")},n.inputAccount=function(){var e=n.state,t=e.account,a=e.accountTipLevel,c=e.accountVerifyTip,o=e.inputType,r=e.resetInput,s=d.a.createElement(C.a,{account:t});return d.a.createElement("div",{className:A.a.accountInputWrapper},d.a.createElement("div",{className:A.a.descTitle},S.D),d.a.createElement(j.a,{ref:"accountInput",tipLevel:a,verifyTip:c,inputType:o,account:t,accountWasDisableHooks:n.accountWasDisable,accountNotExistedHooks:n.accountNotExisted,accountWasDisableTip:s,onChange:n.onAccountInputChange,resetInput:r,forgetCheck:!0}),d.a.createElement(P.a,{text:S.qb,buttonWrapperClass:A.a.resetBtn,onClick:n.checkAccount,loading:K}))},n.inputVercode=function(){var e=n.state,t=e.inputType,a=e.vercodeVerifyTip,c=e.vercodeTipLevel,o=e.phoneNumber;return d.a.createElement("div",{className:A.a.inputWrapper},d.a.createElement("div",{className:A.a.sendMessage},Object(F.a)(S.g)[0]+o),d.a.createElement(E.a,{ref:"vercodeInput",verify:n.verifyAccountAndPassword,updateSmsSessionId:n.updateSmsSessionId,verifyTip:a,tipLevel:c,inputType:t,updateCountState:function(){},onVercodeTimeChange:n.onVercodeTimeChange}),d.a.createElement(P.a,{text:S.Y,buttonWrapperClass:A.a.resetBtn,onClick:n.checkVercode,loading:K}),d.a.createElement("div",{className:A.a.canNotGetVercodeWrapper},d.a.createElement(_.a,{accountCreatePurpose:B})))},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"saveAccountForSmsHelpPage",value:function(){var e=this.state.account;f.a.set("registrationSpeechAccount",e,{expires:1/24/60})}},{key:"render",value:function(){var e=this.state.resetStep,t=R.INPUT_ACCOUNT,n=R.INPUT_CODE;return d.a.createElement("div",{className:A.a.forgetPassword},e===t&&this.inputAccount(),e===n&&this.inputVercode())}}]),t}(p.Component),J={saveBindLoginInfo:function(e){return Object(w.a)(e)}};t.default=Object(v.b)(function(e){return{bindRegistrationInfo:e.bindRegistrationInfo}},J)(M)}}]);
//# sourceMappingURL=ForgetPassword.872258ea.chunk.js.map