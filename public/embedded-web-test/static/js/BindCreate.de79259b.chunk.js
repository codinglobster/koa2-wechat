(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{598:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(576),c=n(114),i=n(578),s=n(599),u=n.n(s);t.a=function(e){var t=e.copywriting,n=void 0===t?c.f:t;return o.a.createElement("p",{className:u.a.agreeClauseToCreate},Object(i.a)(n).map(function(e,t){return 1===t?o.a.createElement("a",{className:u.a.clauseLink,href:r.b,target:"_blank",rel:"noopener noreferrer",key:t},e):3===t?o.a.createElement("a",{className:u.a.clauseLink,href:r.a,target:"_blank",rel:"noopener noreferrer",key:t},e):e}))}},599:function(e,t,n){e.exports={agreeClauseToCreate:"AgreeClauseToCreate_agreeClauseToCreate__p9RuQ",clauseLink:"AgreeClauseToCreate_clauseLink__2i6b7"}},625:function(e,t,n){e.exports={bindCreateAccount:"BindCreateAccount_bindCreateAccount__2kiQV",vercodeHelpLinkWrapper:"BindCreateAccount_vercodeHelpLinkWrapper__x5EVn",hide:"BindCreateAccount_hide__3cWgZ",bindExistBtn:"BindCreateAccount_bindExistBtn__1NuFI",linkWrapper:"BindCreateAccount_linkWrapper__3KTkT",helpWrapper:"BindCreateAccount_helpWrapper__31cv5"}},627:function(e,t,n){},629:function(e,t,n){},633:function(e,t,n){e.exports={createAccountBasicForm:"CreateAccountBasicForm_createAccountBasicForm__28JHD",inputWrapper:"CreateAccountBasicForm_inputWrapper__3aJ-B"}},635:function(e,t,n){e.exports={bindSecurityTip:"BindSecurityTip_bindSecurityTip__bL_Qj"}},637:function(e,t,n){e.exports={bindCreate:"BindCreate_bindCreate__1RAh1",bindPhoneNumberWrapper:"BindCreate_bindPhoneNumberWrapper__1UtIq",bindSecurityTipWrapper:"BindCreate_bindSecurityTipWrapper__1OjO_"}},727:function(e,t,n){"use strict";n.r(t);var a=n(14),o=n(15),r=n(21),c=n(20),i=n(115),s=n(22),u=n(0),p=n.n(u),d=n(58),l=n(733),h=n(714),v=n(57),f=n(725),b=n(575),m=(n(611),n(583)),T=n(195),y=n(114),C=n(574),O=n(148),j=n(579),g=n(135),I=n(625),k=n.n(I),w=O.b.PHONE_NUMBER,S=O.d.ERROR,E=O.c.ACCOUNT,A=(O.a.WECHAT_BIND,function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(c.a)(t).call(this,e))).redirectToExist=function(){Object(j.d)(),n.props.history.push("/bind-existed")},n.redirectToCodeTips=function(){n.props.history.push("/bind-create/sms-helper")},n.state={requesting:!1},n.goToBind=n.goToBind.bind(Object(i.a)(n)),n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){Object(j.q)()}},{key:"goToBind",value:function(){var e,t=this,n=this.props,a=n.createAccount,o=n.updateVerifyInfo,r=n.wechatSessionId;n.history;this.setState({requesting:!0}),Object(j.h)(),a().then(function(e){var t=e.account,n=e.password;return Object(v.post)(C.h,{identity:t,password:n},{needSignature:!0})}).then(function(t){var n,a=Object(f.a)(t,"data.code"),o=Object(f.a)(t,"data.content.authToken");switch(e=Object(f.a)(t,"data.content"),a){case 200:n=!!o;break;default:Object(T.a)({content:y.s}),n=!1}return n?o:Promise.reject()}).then(function(e){return Object(v.post)(C.a,{authToken:e,sessionId:r},{needSignature:!0})}).then(function(t){var n;switch(Object(f.a)(t,"data.code")){case 200:n=!0;break;case 404:n=!1,Object(T.a)({content:y.W});break;case 423:o(E,{tipLevel:S,verifyTip:y.a}),n=!1;break;case 425:n=!1,Object(T.a)({content:y.Lb});break;default:n=!1,Object(T.a)({content:y.s})}return n?e:Promise.reject()}).then(function(){window.wx.closeWindow&&window.wx.closeWindow()}).catch(function(e){console.log(e)}).finally(function(){t.setState({requesting:!1})})}},{key:"render",value:function(){var e=this.props,t=e.countStatus,n=e.accountType,a=this.state.requesting,o=this.props.match,r=o.path,c=Object(g.a)(o.path)[0];return p.a.createElement("div",{className:k.a.bindCreateAccount},p.a.createElement(b.a,{text:y.x,onClick:this.goToBind,loading:a}),n===w?p.a.createElement("p",{className:"".concat(k.a.vercodeHelpLinkWrapper," ").concat(t?"":k.a.hide)},p.a.createElement(b.a,{text:y.p,buttonWrapperClass:k.a.linkWrapper,onClick:this.redirectToCodeTips})):"",p.a.createElement(m.a,null),p.a.createElement(b.a,{text:y.l,buttonWrapperClass:k.a.bindExistBtn,onClick:this.redirectToExist}),p.a.createElement("div",{className:k.a.helpWrapper},p.a.createElement(h.a,{path:"".concat(r,"/").concat(c.path),component:c.component})))}}]),t}(u.Component)),N=Object(l.a)(Object(d.b)(function(e){return{wechatSessionId:e.wechatSessionId}},{})(A)),_=n(33),L=n(584),P=n(196),B=n(201),R=n(580),H=n.n(R),x=n(577),W=n(597),V=n(581),F=(n(277),n(627)),U=n.n(F),D=O.b.PHONE_NUMBER,M=O.b.EMAIL,q=O.d.DEFAULT,G=O.d.ERROR,J=O.d.WARNING,Q=O.c.ACCOUNT,K=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={account:"",tipLevel:q,placeHolder:"",verifyTip:""},n.onFocus=n.onFocus.bind(Object(i.a)(n)),n.onChange=n.onChange.bind(Object(i.a)(n)),n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setPlaceHolderText()}},{key:"componentWillReceiveProps",value:function(e){var t=e.verifyTip,n=e.tipLevel,a=e.inputType,o=e.account,r=e.resetInput;a===Q&&this.setState({verifyTip:t,tipLevel:n}),r&&this.setState({account:o})}},{key:"onFocus",value:function(){this.setState({tipLevel:q,verifyTip:""})}},{key:"onChange",value:function(e){var t=e.target.value,n=this.props.onChange;this.setState({account:t}),n(e)}},{key:"setPlaceHolderText",value:function(){var e=this.props,t=e.accountType,n=e.placeHolder,a="";switch(t){case M:a=y.N;break;case D:a=y.Q;break;default:a=""}this.setState({placeHolder:n||a})}},{key:"verifyInput",value:function(){var e,t,n=this,a=this.state.account,o=this.props,r=o.accountType,c=o.phoneNumberConflictTip,i=o.twoFactorAccountHooks,s=o.phoneNumberConflictHooks,u=o.phoneNumberInvalidHooks,p=o.phoneNumberExistedHooks,d=r===D,l="",h="";return a?d&&!V.b.test(a)?(l=y.U,h=G,u(),t=Promise.reject(new Error(l))):(e=d?{username:a,checkUsername:""}:{email:a,checkEmail:""},t=Object(v.get)(C.e,{params:e}).then(function(e){var t=Object(f.a)(e,"data.isValidPhoneNumber"),n=Object(f.a)(e,"data.message"),o=Object(f.a)(e,"data.isTwoFactorInUse");return!1===t||n===W.h?(l=y.U,h=G,u(),Promise.reject(new Error(l))):(o?(l=y.Bb,h=J,i()):h=q,a)}).catch(function(e){var t=Object(f.a)(e,"response.status"),n=Object(f.a)(e,"response.data.type");switch(t){case 409:d&&"phoneNumberRegisteredAsUsername"===n?(c(),s()):(l=d?y.nb:y.B,d&&p());break;case 400:l=d?y.U:y.T,d&&u();break;case 412:l=d?y.nb:y.B,d&&p();break;default:l=l||y.s}return h=G,Promise.reject(new Error(l))})):(l=y.L,h=G,t=Promise.reject(new Error(l))),t.finally(function(){n.setState({verifyTip:l,tipLevel:h})})}},{key:"render",value:function(){var e=this.state,t=e.tipLevel,n=e.placeHolder,a=e.verifyTip,o=e.account,r=this.props,c=r.customTip,i=r.onBlur;return p.a.createElement("div",{className:U.a.accountInput},p.a.createElement(x.a,{placeHolder:n,tipLevel:t,value:o,onFocus:this.onFocus,onChange:this.onChange,useDefaultTip:!c,onBlur:i},a))}}]),t}(u.Component);K.defaultProps={account:"",resetInput:!1,onChange:function(){},onBlur:function(){},phoneNumberConflictTip:"",twoFactorAccountHooks:function(){},phoneNumberConflictHooks:function(){},phoneNumberInvalidHooks:function(){},phoneNumberExistedHooks:function(){}};var Z=K,z=n(629),X=n.n(z),Y=O.d.DEFAULT,$=O.d.ERROR,ee=O.d.WARNING,te=O.c.PASSWORD,ne=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={password:"",tipLevel:Y,verifyTip:""},n.onFocus=n.onFocus.bind(Object(i.a)(n)),n.onChange=n.onChange.bind(Object(i.a)(n)),n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.verifyTip,n=e.tipLevel,a=e.inputType,o=e.password,r=e.resetInput;a===te&&this.setState({verifyTip:t,tipLevel:n}),r&&this.setState({password:o})}},{key:"onFocus",value:function(){this.setState({tipLevel:Y,verifyTip:""})}},{key:"onChange",value:function(e){var t=this,n=e.target.value,a=this.props,o=a.onChange,r=a.customTip,c=a.manual;console.log(r,c),r||c?this.setState({password:n}):this.setState({password:n},function(){t.verifyInput().catch(function(e){console.log(e)})}),o(e)}},{key:"verifyInput",value:function(){var e,t=this,n=this.state.password,a="",o="";return n?n.length<6?(a=y.jb,o=$,e=Promise.reject(new Error(a))):V.a.test(n)?n.length>=6&&n.length<8?(a=y.Jb,o=ee,e=Promise.resolve(n)):(o=Y,e=Promise.resolve(n)):(a=y.kb,o=$,e=Promise.reject(new Error(a))):(a=y.L,o=$,e=Promise.reject(new Error(a))),e.finally(function(){t.setState({verifyTip:a,tipLevel:o})})}},{key:"render",value:function(){var e=this.state,t=e.tipLevel,n=e.verifyTip,a=e.password,o=this.props,r=o.customTip,c=o.placeHolder,i=o.onBlur;return p.a.createElement("div",{className:X.a.passwordInput},p.a.createElement(x.a,{placeHolder:c||y.vb,tipLevel:t,value:a,inputType:"password",onFocus:this.onFocus,onChange:this.onChange,useDefaultTip:!r,onBlur:i},n))}}]),t}(u.Component);ne.defaultProps={password:"",resetInput:!1,onChange:function(){},onBlur:function(){}};var ae=ne,oe=n(612),re=n(598),ce=n(633),ie=n.n(ce),se=O.b.PHONE_NUMBER,ue=O.d.DEFAULT,pe=O.d.ERROR,de=O.c.ACCOUNT,le=O.c.PASSWORD,he=O.c.VERCODE,ve=O.c.DEFAULT,fe=function(e){var t=function(t){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(c.a)(n).call(this,e))).verifyAccount=function(){return Promise.all([t.refs.accountInput.verifyInput()]).then(function(e){var n=Object(B.a)(e,1)[0];return t.setState({account:n}),{account:n}})},t.state={account:"",smsSessionId:"",countStatus:!1,inputType:ve,accountTipLevel:ue,accountVerifyTip:"",passwordTipLevel:ue,passwordVerifyTip:"",vercodeTipLevel:ue,vercodeVerifyTip:""},t.verifyAccountAndPassword=t.verifyAccountAndPassword.bind(Object(i.a)(t)),t.updateSmsSessionId=t.updateSmsSessionId.bind(Object(i.a)(t)),t.updateCountState=t.updateCountState.bind(Object(i.a)(t)),t.updateVerifyInfo=t.updateVerifyInfo.bind(Object(i.a)(t)),t.createAccount=t.createAccount.bind(Object(i.a)(t)),t}return Object(s.a)(n,t),Object(o.a)(n,[{key:"componentDidMount",value:function(){if(this.props.accountType===se){var e=H.a.get("smsSessionId");e&&this.setState({smsSessionId:e})}}},{key:"verifyAccountAndPassword",value:function(){var e=this;return Promise.all([this.refs.accountInput.verifyInput(),this.refs.passwordInput.verifyInput()]).then(function(t){var n=Object(B.a)(t,2),a=n[0],o=n[1];return e.setState({account:a}),{account:a,password:o}})}},{key:"verifyAll",value:function(){return Promise.all([this.verifyAccountAndPassword(),this.refs.vercodeInput.verifyInput()]).then(function(e){var t=Object(B.a)(e,2),n=t[0];return{account:n.account,password:n.password,vercode:t[1]}})}},{key:"updateSmsSessionId",value:function(e){this.setState({smsSessionId:e}),H.a.set("smsSessionId",e,{expires:1/24/60}),e&&H.a.remove("speechSessionId")}},{key:"updateCountState",value:function(e){this.setState({countStatus:e}),e&&this.saveAccountForSmsHelpPage()}},{key:"saveAccountForSmsHelpPage",value:function(){var e=this.state.account;H.a.set("registrationSpeechAccount",e,{expires:1/24/60})}},{key:"updateVerifyInfo",value:function(e,t){var n,a=t.tipLevel,o=t.verifyTip,r="".concat(e,"VerifyTip"),c="".concat(e,"TipLevel");this.setState((n={inputType:e},Object(P.a)(n,r,o),Object(P.a)(n,c,a),n))}},{key:"createAccount",value:function(){var e,t,n=this,a=this.state.smsSessionId,o=this.props.accountType===se;return(o?this.verifyAll.bind(this):this.verifyAccountAndPassword.bind(this))().then(function(n){var r=n.account,c=n.password,i=n.vercode;e=r,t=c;var s={};return s=o?{otp:i,phoneNumber:r,sessionId:H.a.get("speechSessionId")||a,createPhoneNumber:"",password:c,code:"webclient"}:{email:r,createNoUsername:"",password:c,code:"webclient"},Object(v.get)(C.c,{params:s})}).then(function(a){var r=Object(f.a)(a,"data.success"),c=o?Object(f.a)(a,"data.message"):Object(f.a)(a,"data.errors[0].message"),i=Object(f.a)(a,"data.ts"),s=Object(f.a)(a,"data.tsh"),u=Object(f.a)(a,"data.errors[0].code");if(r)return{account:e,password:t,ts:i,tsh:s};if(u)switch(u){case W.f:case W.c:n.updateVerifyInfo(he,{tipLevel:pe,verifyTip:y.V});break;case W.b:n.updateVerifyInfo(le,{tipLevel:pe,verifyTip:c});break;case W.a:n.updateVerifyInfo(le,{tipLevel:pe,verifyTip:y.lb});break;case W.g:n.updateVerifyInfo(de,{tipLevel:pe,verifyTip:y.T})}return Promise.reject()}).finally(function(){n.setState({inputType:ve})})}},{key:"render",value:function(){var t=this.props,n=t.accountType,a=t.phoneNumberConflictTip,o=t.account,r=t.password,c=t.resetInput,i=t.vercodeTimeRemain,s=t.onAccountInputChange,u=t.onPasswordInputChange,d=t.onVercodeTimeChange,l=t.phoneNumberExistedHooks,h=Object(L.a)(t,["accountType","phoneNumberConflictTip","account","password","resetInput","vercodeTimeRemain","onAccountInputChange","onPasswordInputChange","onVercodeTimeChange","phoneNumberExistedHooks"]),v=this.state,f=v.countStatus,b=v.inputType,m=v.accountVerifyTip,T=v.accountTipLevel,y=v.passwordVerifyTip,C=v.passwordTipLevel,O=v.vercodeVerifyTip,g=v.vercodeTipLevel,I=Object(_.a)({countStatus:f,accountType:n},h);return p.a.createElement("div",{className:ie.a.createAccountBasicForm},p.a.createElement("div",{className:ie.a.inputWrapper},p.a.createElement(Z,{ref:"accountInput",accountType:n,phoneNumberConflictTip:a,verifyTip:m,tipLevel:T,inputType:b,account:o,resetInput:c,onChange:s,onBlur:j.t,phoneNumberExistedHooks:l})),n===se?p.a.createElement("div",{className:ie.a.inputWrapper},p.a.createElement(oe.a,{ref:"vercodeInput",verify:this.verifyAccount,updateSmsSessionId:this.updateSmsSessionId,updateCountState:this.updateCountState,verifyTip:O,tipLevel:g,inputType:b,vercodeTimeRemain:i,onVercodeTimeChange:d,getVercodeHooks:j.v,onBlur:j.u})):"",p.a.createElement("div",{className:ie.a.inputWrapper},p.a.createElement(ae,{ref:"passwordInput",verifyTip:y,tipLevel:C,inputType:b,password:r,resetInput:c,onChange:u,onBlur:j.s})),p.a.createElement(re.a,null),p.a.createElement(e,Object.assign({updateVerifyInfo:this.updateVerifyInfo,createAccount:this.createAccount},I)))}}]),n}(u.Component);return t.defaultProps={account:"",password:"",resetInput:!1,vercodeTimeRemain:0,phoneNumberConflictTip:"",onAccountInputChange:function(){},onPasswordInputChange:function(){},onVercodeTimeChange:function(){}},t},be=n(635),me=n.n(be),Te=function(){return p.a.createElement("p",{className:me.a.bindSecurityTip},y.k)},ye=n(149),Ce=n(637),Oe=n.n(Ce),je=n(116),ge=O.b.EMAIL,Ie=O.b.PHONE_NUMBER,ke=fe(N),we=fe(N),Se=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(c.a)(t).call(this,e))).phoneNumberExistedHooks=function(){var e=n.state.account,t=n.props.saveBindLoginInfo;Object(T.a)({content:y.Hb,operates:[{text:y.m},{text:je.j,main:!0,onClick:function(){t({account:e}),n.props.history.push("/bind-existed")}}]})},n.state={accountType:Ie,account:"",password:"",resetInput:!1,vercodeTimeRemainToSave:0,vercodeTimeRemainToGet:0},n.redirectHandler=n.redirectHandler.bind(Object(i.a)(n)),n.onAccountInputChange=n.onAccountInputChange.bind(Object(i.a)(n)),n.onPasswordInputChange=n.onPasswordInputChange.bind(Object(i.a)(n)),n.onVercodeTimeChange=n.onVercodeTimeChange.bind(Object(i.a)(n)),n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.bindRegistrationInfo,n=t.account,a=t.password,o=t.vercodeTimeRemain,r=t.vercodeTimeStopTimeStamp,c=Date.now(),i=o-Math.ceil((c-r)/1e3);this.setState({account:n,password:a,resetInput:!0,vercodeTimeRemainToGet:i>0?i:0},function(){e.setState({resetInput:!1})})}},{key:"componentWillUnmount",value:function(){var e=this.state,t=e.account,n=e.password,a=e.vercodeTimeRemainToSave;(0,this.props.saveBindRegistrationInfo)({account:t,password:n,vercodeTimeRemain:a,vercodeTimeStopTimeStamp:Date.now()})}},{key:"onAccountInputChange",value:function(e){var t=e.target.value;this.setState({account:t})}},{key:"onPasswordInputChange",value:function(e){var t=e.target.value;this.setState({password:t})}},{key:"onVercodeTimeChange",value:function(e){this.setState({vercodeTimeRemainToSave:e})}},{key:"redirectHandler",value:function(){this.setState({accountType:ge})}},{key:"render",value:function(){var e=this,t=this.state,n=t.accountType,a=t.account,o=t.password,r=t.resetInput,c=t.vercodeTimeRemainToGet;return p.a.createElement("div",{className:Oe.a.bindCreate},n===Ie?p.a.createElement("div",{className:Oe.a.bindPhoneNumberWrapper},p.a.createElement("div",{className:Oe.a.bindSecurityTipWrapper},p.a.createElement(Te,null)),p.a.createElement(ke,{accountType:Ie,phoneNumberConflictTip:function(){Object(T.a)({content:y.ob,operates:[{text:y.m},{text:y.Gb,main:!0,onClick:e.redirectHandler}]})},account:a,password:o,vercodeTimeRemain:c,onAccountInputChange:this.onAccountInputChange,onPasswordInputChange:this.onPasswordInputChange,resetInput:r,onVercodeTimeChange:this.onVercodeTimeChange,phoneNumberExistedHooks:this.phoneNumberExistedHooks})):p.a.createElement(we,{accountType:ge}))}}]),t}(u.Component),Ee={saveBindLoginInfo:function(e){return Object(ye.a)(e)},saveBindRegistrationInfo:function(e){return Object(ye.b)(e)}};t.default=Object(d.b)(function(e){return{bindRegistrationInfo:e.bindRegistrationInfo}},Ee)(Se)}}]);
//# sourceMappingURL=BindCreate.de79259b.chunk.js.map