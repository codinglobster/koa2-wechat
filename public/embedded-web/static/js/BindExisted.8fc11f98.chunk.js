(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{590:function(e,t,n){"use strict";n.d(t,"i",function(){return r}),n.d(t,"l",function(){return o}),n.d(t,"n",function(){return i}),n.d(t,"m",function(){return c}),n.d(t,"k",function(){return u}),n.d(t,"c",function(){return s}),n.d(t,"f",function(){return p}),n.d(t,"a",function(){return d}),n.d(t,"h",function(){return l}),n.d(t,"g",function(){return f}),n.d(t,"j",function(){return h}),n.d(t,"b",function(){return v}),n.d(t,"e",function(){return b}),n.d(t,"d",function(){return w}),window.cly=function(e,t,n){window.Countly.q.push(["add_event",{key:e,segmentation:{eventAction:t,eventLabel:n}}])};var a=function(){for(var e,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=window).cly.apply(e,["WX_ACCOUNT_MYYXBJ"].concat(n))},r=function(){return a("Create_NewAccount_page","ShowPage")},o=function(){return a("Create_NewAccount_page","Enter_PhoneNum")},i=function(){return a("Create_NewAccount_page","Click_Verify_Code")},c=function(){return a("Create_NewAccount_page","Enter_Verify_Code")},u=function(){return a("Create_NewAccount_page","Enter_Password")},s=function(){return a("Create_NewAccount_page","Click_Create_NewAccount")},p=function(){return a("Create_NewAccount_page","Click_No_Verify_Code")},d=function(){return a("Create_NewAccount_page","Click_Bind_ExistedAccount")},l=function(){return a("Bind_ExistedAccount_page","ShowPage")},f=function(){return a("Bind_ExistedAccount_page","Enter_Account")},h=function(){return a("Bind_ExistedAccount_page","Enter_Password")},v=function(){return a("Bind_ExistedAccount_page","Cllick_Continue")},b=function(){return a("Bind_ExistedAccount_page","Click_Forget_Password")},w=function(){return a("Bind_ExistedAccount_page","Click_Create_NewAccount")}},596:function(e,t,n){"use strict";var a=n(14),r=n(15),o=n(21),i=n(20),c=n(113),u=n(22),s=n(0),p=n.n(s),d=n(56),l=n(718),f=n(574),h=(n(274),n(145)),v=n(112),b=n(570),w=n(597),y=n.n(w),g=h.d.DEFAULT,_=h.d.ERROR,C=h.c.ACCOUNT,T=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).onBlur=function(){n.props.onBlur()},n.state={account:"",tipLevel:g,verifyTip:""},n.onFocus=n.onFocus.bind(Object(c.a)(n)),n.onChange=n.onChange.bind(Object(c.a)(n)),n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.verifyTip,n=e.tipLevel,a=e.inputType,r=e.account,o=e.resetInput;a===C&&this.setState({verifyTip:t,tipLevel:n}),o&&this.setState({account:r})}},{key:"onFocus",value:function(){this.setState({tipLevel:g,verifyTip:""})}},{key:"onChange",value:function(e){var t=e.target.value,n=this.props.onChange;this.setState({account:t}),n(e)}},{key:"verifyInput",value:function(){var e,t,n=this,a=this.state.account,r=this.props,o=r.accountWasDisableTip,i=r.forgetCheck,c="",u="";return a?(e={identity:a,checkIdentity:""},t=Object(d.get)(b.e,{params:e}).then(function(){return Promise.reject()}).catch(function(e){var t=Object(l.a)(e,"response.status");if(e)switch(t){case 409:u=g,c="";break;case 412:u=_,c=o;break;default:u=_,c=v.r}else u=_,c=v.b;return u===g?i?Object(l.a)(e,"response.data"):a:Promise.reject(new Error(c))})):(u=_,c=v.J,t=Promise.reject(new Error(c))),t.finally(function(){n.setState({verifyTip:c,tipLevel:u})})}},{key:"render",value:function(){var e=this.state,t=e.tipLevel,n=e.verifyTip,a=e.account;return p.a.createElement("div",{className:y.a.loginAccountInput},p.a.createElement(f.a,{placeHolder:v.K,tipLevel:t,value:a,onFocus:this.onFocus,onChange:this.onChange,onBlur:this.onBlur},n))}}]),t}(s.Component);T.defaultProps={account:"",resetInput:!1,accountWasDisableTip:"",onChange:function(){},onBlur:function(){}},t.a=T},597:function(e,t,n){},599:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(112),i=n(573),c=n(576),u=n(600),s=n.n(u);t.a=function(e){var t=Object(c.a)(o.d),n=e.account;return r.a.createElement("span",null,t.map(function(e,t){var a="";switch(t){case 1:a=n;break;case 3:a=r.a.createElement("a",{className:s.a.reactivateLink,href:i.d,key:t},e);break;default:a=e}return a}))}},600:function(e,t,n){e.exports={reactivateLink:"DisableAccountTip_reactivateLink__2mLSq"}},634:function(e,t,n){},636:function(e,t,n){e.exports={bindExisted:"BindExisted_bindExisted__2-Mv_",accountInputWrapper:"BindExisted_accountInputWrapper__3KaMR",passwordInputWrapper:"BindExisted_passwordInputWrapper__bH5rA",buttonWrapper:"BindExisted_buttonWrapper__1hsj9",linkWrapper:"BindExisted_linkWrapper__1t1o8",bindCreateBtn:"BindExisted_bindCreateBtn__gLMKg"}},727:function(e,t,n){"use strict";n.r(t);var a=n(193),r=n(198),o=n(14),i=n(15),c=n(21),u=n(20),s=n(113),p=n(22),d=n(0),l=n.n(d),f=n(57),h=n(56),v=n(718),b=n(575),w=n.n(b),y=n(596),g=n(574),_=(n(274),n(145)),C=n(112),T=n(634),j=n.n(T),k=_.d.DEFAULT,O=_.d.ERROR,E=_.c.PASSWORD,I=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={password:"",tipLevel:k,verifyTip:""},n.onFocus=n.onFocus.bind(Object(s.a)(n)),n.onChange=n.onChange.bind(Object(s.a)(n)),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.verifyTip,n=e.tipLevel,a=e.inputType,r=e.password,o=e.resetInput;a===E&&this.setState({verifyTip:t,tipLevel:n}),o&&this.setState({password:r})}},{key:"onFocus",value:function(){this.setState({tipLevel:k,verifyTip:""})}},{key:"onChange",value:function(e){var t=e.target.value,n=this.props.onChange;this.setState({password:t}),n(e)}},{key:"verifyInput",value:function(){var e=this.state.password;return e?Promise.resolve(e):(this.setState({verifyTip:C.J,tipLevel:O}),Promise.reject(new Error(C.J)))}},{key:"render",value:function(){var e=this.state,t=e.tipLevel,n=e.verifyTip,a=e.password,r=this.props.placeHolder;return l.a.createElement("div",{className:j.a.loginPasswordInput},l.a.createElement(g.a,{placeHolder:r||C.N,tipLevel:t,value:a,inputType:"password",onFocus:this.onFocus,onChange:this.onChange,onBlur:this.props.onBlur},n))}}]),t}(d.Component);I.defaultProps={password:"",resetInput:!1,onChange:function(){},onBlur:function(){}};var m=I,L=n(572),A=n(579),B=n(599),S=n(571),P=n(570),W=(n(573),n(146)),x=n(590),N=n(636),F=n.n(N),R=_.d.DEFAULT,V=_.d.ERROR,D=_.c.ACCOUNT,U=_.c.PASSWORD,H=_.c.DEFAULT,J=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).forgotPassword=function(){Object(x.e)(),n.props.history.push("/forget-password")},n.redirectToCreate=function(){Object(x.d)(),window.wx.closeWindow(),n.props.history.push("/bind-create")},n.bindAready=function(){Object(S.a)({content:C.Lb,operates:[{text:C.x,main:!0,onClick:function(){return n.props.history.push("/bind-create")}},{text:C.ub,main:!0,onClick:function(){n.setState({account:"",password:"",resetInput:!0},function(){n.setState({resetInput:!1})})}}]})},n.state={account:"",accountTipLevel:R,accountVerifyTip:"",password:"",passwordTipLevel:R,passwordVerifyTip:"",inputType:H,requesting:!1,resetInput:!1},n.goToBind=n.goToBind.bind(Object(s.a)(n)),n.onPasswordInputChange=n.onPasswordInputChange.bind(Object(s.a)(n)),n.onAccountInputChange=n.onAccountInputChange.bind(Object(s.a)(n)),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.bindLoginInfo,n=t.account,a=t.password;this.setState({account:n,password:a,resetInput:!0},function(){e.setState({resetInput:!1})}),Object(x.h)()}},{key:"componentWillUnmount",value:function(){var e=this.state,t=e.account,n=e.password;(0,this.props.saveBindLoginInfo)({account:t,password:n})}},{key:"onAccountInputChange",value:function(e){var t=e.target.value;this.setState({account:t})}},{key:"onPasswordInputChange",value:function(e){var t=e.target.value;this.setState({password:t})}},{key:"goToBind",value:function(){var e,t=this,n="",a=this.props,o=a.history,i=a.setTwofactorInfo,c=a.wechatSessionId;Object(x.b)(),this.setState({requesting:!0}),Promise.all([this.refs.accountInput.verifyInput(),this.refs.passwordInput.verifyInput()]).then(function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];return w.a.set("registrationSpeechAccount",n,{expires:1/24/60}),Object(h.post)(P.h,{identity:n,password:a},{needSignature:!0})}).then(function(a){var r,o=Object(v.a)(a,"data.code"),c=Object(v.a)(a,"data.content.authToken"),u=Object(v.a)(a,"data.content.twoFactorEnabled"),s=Object(v.a)(a,"data.content.twoFactorHint");switch(e=Object(v.a)(a,"data.content"),o){case 200:u?(i({twoFactorEnabled:u,twoFactorHint:s,twoFactorToken:c,fromWechatLogin:!1}),r=!1,n="/twofactor-verification"):r=!!c;break;case 403:t.updateVerifyInfo(U,{tipLevel:V,verifyTip:C.fb}),r=!1;break;default:r=!1,t.updateVerifyInfo(U,{tipLevel:V,verifyTip:C.fb})}return r?c:Promise.reject()}).then(function(e){return Object(h.post)(P.a,{authToken:e,sessionId:c},{needSignature:!0})}).then(function(n){var a;switch(Object(v.a)(n,"data.code")){case 200:a=!0;break;case 404:a=!0,Object(S.a)({content:C.U});break;case 423:a=!1,t.updateVerifyInfo(D,{tipLevel:V,verifyTip:C.a});break;case 425:a=!1,t.bindAready(),Object(S.a)({content:C.Jb});break;default:a=!1,Object(S.a)({content:C.r})}return a?e:Promise.reject()}).then(function(e){e.authToken,e.hpts,e.hsHash}).catch(function(e){console.log(e)}).finally(function(){n?o.push(n):t.setState({inputType:H,requesting:!1})})}},{key:"updateVerifyInfo",value:function(e,t){var n,r=t.tipLevel,o=t.verifyTip,i="".concat(e,"VerifyTip"),c="".concat(e,"TipLevel");this.setState((n={inputType:e},Object(a.a)(n,i,o),Object(a.a)(n,c,r),n))}},{key:"render",value:function(){var e=this.state,t=e.account,n=e.password,a=e.accountTipLevel,r=e.accountVerifyTip,o=e.passwordTipLevel,i=e.passwordVerifyTip,c=e.requesting,u=e.inputType,s=e.resetInput,p=l.a.createElement(B.a,{account:t});return l.a.createElement("div",{className:F.a.bindExisted},l.a.createElement("div",{className:F.a.accountInputWrapper},l.a.createElement(y.a,{ref:"accountInput",tipLevel:a,verifyTip:r,inputType:u,account:t,accountWasDisableTip:p,onChange:this.onAccountInputChange,onBlur:x.g,resetInput:s})),l.a.createElement("div",{className:F.a.passwordInputWrapper},l.a.createElement(m,{ref:"passwordInput",tipLevel:o,verifyTip:i,inputType:u,password:n,onChange:this.onPasswordInputChange,onBlur:x.j,resetInput:s,placeHolder:C.M})),l.a.createElement("div",{className:F.a.buttonWrapper},l.a.createElement(L.a,{text:C.W,onClick:this.goToBind,loading:c})),l.a.createElement("div",{className:F.a.linkWrapper},l.a.createElement(L.a,{text:C.E,buttonWrapperClass:F.a.linkWrapper,onClick:this.forgotPassword})),l.a.createElement(A.a,null),l.a.createElement(L.a,{text:C.y,buttonWrapperClass:F.a.bindCreateBtn,onClick:this.redirectToCreate,loading:c}))}}]),t}(d.Component),q={setTwofactorInfo:function(e){return Object(W.c)(e)},saveBindLoginInfo:function(e){return Object(W.a)(e)}};t.default=Object(f.b)(function(e){return{wechatSessionId:e.wechatSessionId,bindLoginInfo:e.bindLoginInfo}},q)(J)}}]);
//# sourceMappingURL=BindExisted.8fc11f98.chunk.js.map