(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{601:function(e,t,a){"use strict";var n=a(14),c=a(15),o=a(21),r=a(20),s=a(114),i=a(22),p=a(0),u=a.n(p),d=a(57),l=a(724),f=a(576),v=(a(276),a(148)),h=a(113),m=a(573),g=a(602),b=a.n(g),T=v.d.DEFAULT,y=v.d.ERROR,w=v.c.ACCOUNT,_=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(r.a)(t).call(this,e))).onBlur=function(){a.props.onBlur()},a.state={account:"",tipLevel:T,verifyTip:""},a.onFocus=a.onFocus.bind(Object(s.a)(a)),a.onChange=a.onChange.bind(Object(s.a)(a)),a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.verifyTip,a=e.tipLevel,n=e.inputType,c=e.account,o=e.resetInput;n===w&&this.setState({verifyTip:t,tipLevel:a}),o&&this.setState({account:c})}},{key:"onFocus",value:function(){this.setState({tipLevel:T,verifyTip:""})}},{key:"onChange",value:function(e){var t=e.target.value,a=this.props.onChange;this.setState({account:t}),a(e)}},{key:"verifyInput",value:function(){var e,t,a=this,n=this.state.account,c=this.props,o=c.accountWasDisableTip,r=c.forgetCheck,s="",i="";return n?(e={identity:n,checkIdentity:""},t=Object(d.get)(m.e,{params:e}).then(function(){return Promise.reject()}).catch(function(e){var t=Object(l.a)(e,"response.status");if(e)switch(t){case 409:i=T,s="";break;case 412:i=y,s=o;break;default:i=y,s=h.s}else i=y,s=h.b;return i===T?r?Object(l.a)(e,"response.data"):n:Promise.reject(new Error(s))})):(i=y,s=h.L,t=Promise.reject(new Error(s))),t.finally(function(){a.setState({verifyTip:s,tipLevel:i})})}},{key:"render",value:function(){var e=this.state,t=e.tipLevel,a=e.verifyTip,n=e.account,c=this.props.placeHolder;return u.a.createElement("div",{className:b.a.loginAccountInput},u.a.createElement(f.a,{placeHolder:c||h.M,tipLevel:t,value:n,onFocus:this.onFocus,onChange:this.onChange,onBlur:this.onBlur},a))}}]),t}(p.Component);_.defaultProps={account:"",resetInput:!1,accountWasDisableTip:"",onChange:function(){},onBlur:function(){}},t.a=_},602:function(e,t,a){},604:function(e,t,a){"use strict";var n=a(0),c=a.n(n),o=a(113),r=a(577),s=a(579),i=a(605),p=a.n(i);t.a=function(e){var t=Object(s.a)(o.d),a=e.account;return c.a.createElement("span",null,t.map(function(e,t){var n="";switch(t){case 1:n=a;break;case 3:n=c.a.createElement("a",{className:p.a.reactivateLink,href:r.c,key:t},e);break;default:n=e}return n}))}},605:function(e,t,a){e.exports={reactivateLink:"DisableAccountTip_reactivateLink__2mLSq"}},650:function(e,t,a){e.exports={cannotGetVercode:"CanNotGetVercode_cannotGetVercode__2coF9"}},652:function(e,t,a){e.exports={forgetPassword:"ForgetPassword_forgetPassword__1SxVn",descTitle:"ForgetPassword_descTitle__3csaV",sendMessage:"ForgetPassword_sendMessage__9BI1j",canNotGetVercodeWrapper:"ForgetPassword_canNotGetVercodeWrapper__2YAdK",resetBtn:"ForgetPassword_resetBtn__wjFfK",checkboxWrapper:"ForgetPassword_checkboxWrapper__KgQvF",passwordInputWrapper:"ForgetPassword_passwordInputWrapper__3XDgt",passwordBlock:"ForgetPassword_passwordBlock__e7PW6",linkWrapper:"ForgetPassword_linkWrapper__3QiFL",helpWrapper:"ForgetPassword_helpWrapper__3ZZuA"}},732:function(e,t,a){"use strict";a.r(t);var n=a(33),c=a(14),o=a(15),r=a(21),s=a(20),i=a(114),p=a(22),u=a(0),d=a.n(u),l=a(713),f=a(578),v=a.n(f),h=a(58),m=a(102),g=a.n(m),b=a(57),T=a(724),y=a(104),w=a(590),_=a(573),O=a(148),C=a(149),k=a(135),I=a(113),E=a(90),S=a(577),j=(a(276),a(650)),P=a.n(j),N=function(e){var t=e.accountCreatePurpose,a=e.clickHandler,n=Object(E.parseUrl)(S.d),c=(n.url,n.query),o=S.d.indexOf("#"),r=S.d.slice(o);c.from=t;var s=Object(E.stringify)(c),i="".concat(window.location.pathname,"#/sms-helper?").concat(s).concat(r);return console.log(i),d.a.createElement("a",{className:P.a.cannotGetVercode,href:i,target:"__blank",onClick:a},I.p)};N.defaultProps={clickHandler:function(){}};var A=a(575),F=a(601),W=a(604),L=a(611),V=a(574),x=a(652),D=a.n(x),U=a(579),R=O.d.DEFAULT,B=O.d.ERROR,H=O.c.VERCODE,G=O.c.DEFAULT,q=(O.a.FORGET_PASSWORD,{INPUT_ACCOUNT:0,INPUT_CODE:1,INPUT_PASSWORD:2}),M="reset.password.pre.signature.error",K="validation.required.valueNotPresent",J="one.time.password.invalid",Q=!1,Z=!1,z=!1,X=function(e){function t(){var e,a;Object(c.a)(this,t);for(var o=arguments.length,p=new Array(o),u=0;u<o;u++)p[u]=arguments[u];return(a=Object(r.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(p)))).state={account:"",accountTipLevel:R,accountVerifyTip:"",vercode:"",vercodeTipLevel:R,vercodeVerifyTip:"",inputType:G,checked:!1,requesting:!1,resetInput:!1,resetStep:q.INPUT_ACCOUNT,phoneNumber:"",vercodeTimeRemainToSave:0,vercodeTimeRemainToGet:0},a.onAccountInputChange=function(e){var t=e.target.value;a.setState({account:t})},a.checkAccount=function(){Q||(Q=!0,a.refs.accountInput.verifyInput().then(function(e){var t=e.accountType,n=e.phoneNumber;"PHONENUMBER"===t?(a.saveAccountForSmsHelpPage(),a.setState({resetStep:q.INPUT_CODE,phoneNumber:n},function(){return a.refs.vercodeInput.getVercode()})):a.sendEmail()}).catch(function(e){console.log(e)}).finally(function(){Q=!1}))},a.checkVercode=function(){z||(z=!0,a.refs.vercodeInput.verifyInput().then(function(e){var t=v.a.get("speechSessionId"),c={sessionId:t||a.state.smsSessionId,otp:e,timeStamp:(new Date).getTime(),recipient:a.state.account},o=w.a.getSignByParam(c);return Object(b.get)(_.d,{params:Object(n.a)({sig:o},c)})}).then(function(e){if(Object(T.a)(e,"data"))if(Object(T.a)(e,"data.success")){console.log(y.a.baseUrl,Object(T.a)(e,"data.path"));var t="https://stage-3.yinxiang.com".concat(Object(T.a)(e,"data.path"),"&targetUrl=").concat("https%3a%2f%2fopen.weixin.qq.com%2fconnect%2foauth2%2fauthorize%3fappid%3dwx9a33d01397cc5e88%26redirect_uri%3dhttp%253a%252f%252fwww.codinglobster.cn%252fembedded-web%252faccount%252findex.html%26response_type%3dcode%26scope%3dsnsapi_userinfo%26state%3dSTATE%23wechat_redirect");window.location.href=t}else{var n=Object(T.a)(e,"data.errors");if(n.length)switch(n[0].code){case M:case K:case J:a.setState({vercodeVerifyTip:I.V,vercodeTipLevel:B,inputType:H})}}}).catch(function(e){console.log(e)}).finally(function(){z=!1}))},a.verifyAccountAndPassword=function(){return Promise.resolve({account:a.state.account})},a.updateSmsSessionId=function(e){a.setState({smsSessionId:e}),v.a.set("smsSessionId",e,{expires:1/24/60}),e&&v.a.remove("speechSessionId")},a.onVercodeTimeChange=function(e){a.setState({vercodeTimeRemainToSave:e})},a.sendEmail=function(){var e=a.props.saveBindLoginInfo,t=a.state.account,n=Object(i.a)(a),c=(new Date).getTime();Z||(Z=!0,Object(b.get)(_.f,{params:{identifier:t,timeStamp:c,sig:g()(t+c+y.a.reqKey),dbm:"yxdbm"}}).then(function(a){Object(T.a)(a,"data")&&Object(T.a)(a,"data.success")&&(e({account:t}),Object(V.a)({content:I.C,operates:function(){return n.props.history.push("/bind-existed")}}))}).catch(function(e){console.log(e)}).finally(function(){Z=!1}))},a.redirectToTwoFactorHelper=function(){a.props.history.push("/two-factor-helper")},a.redirectToCodeTips=function(){a.props.history.push("/forget-password/sms-helper")},a.inputAccount=function(){var e=a.state,t=e.account,n=e.accountTipLevel,c=e.accountVerifyTip,o=e.inputType,r=e.resetInput,s=d.a.createElement(W.a,{account:t});return d.a.createElement("div",{className:D.a.accountInputWrapper},d.a.createElement("div",{className:D.a.descTitle},I.E),d.a.createElement(F.a,{ref:"accountInput",tipLevel:n,verifyTip:c,inputType:o,account:t,accountWasDisableHooks:a.accountWasDisable,accountNotExistedHooks:a.accountNotExisted,accountWasDisableTip:s,onChange:a.onAccountInputChange,resetInput:r,forgetCheck:!0,placeHolder:I.F}),d.a.createElement(A.a,{text:I.tb,buttonWrapperClass:D.a.resetBtn,onClick:a.checkAccount,loading:z}))},a.inputVercode=function(){var e=a.state,t=e.inputType,n=e.vercodeVerifyTip,c=e.vercodeTipLevel,o=e.phoneNumber;return d.a.createElement("div",{className:D.a.inputWrapper},d.a.createElement("div",{className:D.a.sendMessage},Object(U.a)(I.g)[0]+o),d.a.createElement(L.a,{ref:"vercodeInput",verify:a.verifyAccountAndPassword,updateSmsSessionId:a.updateSmsSessionId,verifyTip:n,tipLevel:c,inputType:t,updateCountState:function(){},onVercodeTimeChange:a.onVercodeTimeChange}),d.a.createElement(A.a,{text:I.bb,buttonWrapperClass:D.a.resetBtn,onClick:a.checkVercode,loading:z}),d.a.createElement("div",{className:D.a.canNotGetVercodeWrapper},d.a.createElement(A.a,{text:I.p,buttonWrapperClass:D.a.linkWrapper,onClick:a.redirectToCodeTips})))},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"saveAccountForSmsHelpPage",value:function(){var e=this.state.account;v.a.set("registrationSpeechAccount",e,{expires:1/24/60})}},{key:"render",value:function(){var e=this.state.resetStep,t=this.props.match,a=t.path,n=Object(k.a)(t.path)[0],c=q.INPUT_ACCOUNT,o=q.INPUT_CODE;return d.a.createElement("div",{className:D.a.forgetPassword},e===c&&this.inputAccount(),e===o&&this.inputVercode(),d.a.createElement("div",{className:D.a.helpWrapper},d.a.createElement(l.a,{path:"".concat(a,"/").concat(n.path),component:n.component})))}}]),t}(u.Component),Y={saveBindLoginInfo:function(e){return Object(C.a)(e)}};t.default=Object(h.b)(function(e){return{bindRegistrationInfo:e.bindRegistrationInfo}},Y)(X)}}]);
//# sourceMappingURL=ForgetPassword.a98177e3.chunk.js.map