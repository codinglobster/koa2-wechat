(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{597:function(e,t,n){"use strict";var a=n(14),o=n(15),i=n(22),r=n(20),c=n(113),s=n(21),u=n(0),p=n.n(u),l=n(57),d=n(720),f=n(575),v=(n(275),n(146)),h=n(112),b=n(572),w=n(598),y=n.n(w),g=v.d.DEFAULT,T=v.d.ERROR,j=v.c.ACCOUNT,O=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).onBlur=function(){n.props.onBlur()},n.state={account:"",tipLevel:g,verifyTip:""},n.onFocus=n.onFocus.bind(Object(c.a)(n)),n.onChange=n.onChange.bind(Object(c.a)(n)),n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.verifyTip,n=e.tipLevel,a=e.inputType,o=e.account,i=e.resetInput;a===j&&this.setState({verifyTip:t,tipLevel:n}),i&&this.setState({account:o})}},{key:"onFocus",value:function(){this.setState({tipLevel:g,verifyTip:""})}},{key:"onChange",value:function(e){var t=e.target.value,n=this.props.onChange;this.setState({account:t}),n(e)}},{key:"verifyInput",value:function(){var e,t,n=this,a=this.state.account,o=this.props,i=o.accountWasDisableTip,r=o.forgetCheck,c="",s="";return a?(e={identity:a,checkIdentity:""},t=Object(l.get)(b.e,{params:e}).then(function(){return Promise.reject()}).catch(function(e){var t=Object(d.a)(e,"response.status");if(e)switch(t){case 409:s=g,c="";break;case 412:s=T,c=i;break;default:s=T,c=h.s}else s=T,c=h.b;return s===g?r?Object(d.a)(e,"response.data"):a:Promise.reject(new Error(c))})):(s=T,c=h.K,t=Promise.reject(new Error(c))),t.finally(function(){n.setState({verifyTip:c,tipLevel:s})})}},{key:"render",value:function(){var e=this.state,t=e.tipLevel,n=e.verifyTip,a=e.account;return p.a.createElement("div",{className:y.a.loginAccountInput},p.a.createElement(f.a,{placeHolder:h.L,tipLevel:t,value:a,onFocus:this.onFocus,onChange:this.onChange,onBlur:this.onBlur},n))}}]),t}(u.Component);O.defaultProps={account:"",resetInput:!1,accountWasDisableTip:"",onChange:function(){},onBlur:function(){}},t.a=O},598:function(e,t,n){},600:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(112),r=n(574),c=n(576),s=n(601),u=n.n(s);t.a=function(e){var t=Object(c.a)(i.d),n=e.account;return o.a.createElement("span",null,t.map(function(e,t){var a="";switch(t){case 1:a=n;break;case 3:a=o.a.createElement("a",{className:u.a.reactivateLink,href:r.c,key:t},e);break;default:a=e}return a}))}},601:function(e,t,n){e.exports={reactivateLink:"DisableAccountTip_reactivateLink__2mLSq"}},635:function(e,t,n){},637:function(e,t,n){e.exports={bindExisted:"BindExisted_bindExisted__2-Mv_",accountInputWrapper:"BindExisted_accountInputWrapper__3KaMR",passwordInputWrapper:"BindExisted_passwordInputWrapper__bH5rA",buttonWrapper:"BindExisted_buttonWrapper__1hsj9",linkWrapper:"BindExisted_linkWrapper__1t1o8",bindCreateBtn:"BindExisted_bindCreateBtn__gLMKg"}},729:function(e,t,n){"use strict";n.r(t);var a=n(195),o=n(200),i=n(14),r=n(15),c=n(22),s=n(20),u=n(113),p=n(21),l=n(0),d=n.n(l),f=n(58),v=n(57),h=n(720),b=n(578),w=n.n(b),y=n(597),g=n(575),T=(n(275),n(146)),j=n(112),O=n(635),I=n.n(O),m=T.d.DEFAULT,k=T.d.ERROR,C=T.c.PASSWORD,L=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={password:"",tipLevel:m,verifyTip:""},n.onFocus=n.onFocus.bind(Object(u.a)(n)),n.onChange=n.onChange.bind(Object(u.a)(n)),n}return Object(p.a)(t,e),Object(r.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.verifyTip,n=e.tipLevel,a=e.inputType,o=e.password,i=e.resetInput;a===C&&this.setState({verifyTip:t,tipLevel:n}),i&&this.setState({password:o})}},{key:"onFocus",value:function(){this.setState({tipLevel:m,verifyTip:""})}},{key:"onChange",value:function(e){var t=e.target.value,n=this.props.onChange;this.setState({password:t}),n(e)}},{key:"verifyInput",value:function(){var e=this.state.password;return e?Promise.resolve(e):(this.setState({verifyTip:j.K,tipLevel:k}),Promise.reject(new Error(j.K)))}},{key:"render",value:function(){var e=this.state,t=e.tipLevel,n=e.verifyTip,a=e.password,o=this.props.placeHolder;return d.a.createElement("div",{className:I.a.loginPasswordInput},d.a.createElement(g.a,{placeHolder:o||j.O,tipLevel:t,value:a,inputType:"password",onFocus:this.onFocus,onChange:this.onChange,onBlur:this.props.onBlur},n))}}]),t}(l.Component);L.defaultProps={password:"",resetInput:!1,onChange:function(){},onBlur:function(){}};var E=L,S=n(573),W=n(581),B=n(600),_=n(194),P=n(572),x=(n(574),n(147)),F=n(577),A=n(637),R=n.n(A),D=T.d.DEFAULT,N=T.d.ERROR,V=T.c.ACCOUNT,H=T.c.PASSWORD,U=T.c.DEFAULT,q=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).forgotPassword=function(){Object(F.j)(),n.props.history.push("/forget-password")},n.redirectToCreate=function(){Object(F.i)(),window.wx.closeWindow(),n.props.history.push("/bind-create")},n.bindAready=function(){Object(_.a)({content:j.Mb,operates:[{text:j.y,main:!0,onClick:function(){return n.props.history.push("/bind-create")}},{text:j.wb,main:!0,onClick:function(){n.setState({account:"",password:"",resetInput:!0},function(){n.setState({resetInput:!1})})}}]})},n.state={account:"",accountTipLevel:D,accountVerifyTip:"",password:"",passwordTipLevel:D,passwordVerifyTip:"",inputType:U,requesting:!1,resetInput:!1},n.goToBind=n.goToBind.bind(Object(u.a)(n)),n.onPasswordInputChange=n.onPasswordInputChange.bind(Object(u.a)(n)),n.onAccountInputChange=n.onAccountInputChange.bind(Object(u.a)(n)),n}return Object(p.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.bindLoginInfo,n=t.account,a=t.password;this.setState({account:n,password:a,resetInput:!0},function(){e.setState({resetInput:!1})}),Object(F.q)()}},{key:"componentWillUnmount",value:function(){var e=this.state,t=e.account,n=e.password;(0,this.props.saveBindLoginInfo)({account:t,password:n})}},{key:"onAccountInputChange",value:function(e){var t=e.target.value;this.setState({account:t})}},{key:"onPasswordInputChange",value:function(e){var t=e.target.value;this.setState({password:t})}},{key:"goToBind",value:function(){var e,t=this,n="",a=this.props,i=a.history,r=a.setTwofactorInfo,c=a.wechatSessionId;Object(F.g)(),this.setState({requesting:!0}),Promise.all([this.refs.accountInput.verifyInput(),this.refs.passwordInput.verifyInput()]).then(function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1];return w.a.set("registrationSpeechAccount",n,{expires:1/24/60}),Object(v.post)(P.h,{identity:n,password:a},{needSignature:!0})}).then(function(a){var o,i=Object(h.a)(a,"data.code"),c=Object(h.a)(a,"data.content.authToken"),s=Object(h.a)(a,"data.content.twoFactorEnabled"),u=Object(h.a)(a,"data.content.twoFactorHint");switch(e=Object(h.a)(a,"data.content"),i){case 200:s?(r({twoFactorEnabled:s,twoFactorHint:u,twoFactorToken:c,fromWechatLogin:!1}),o=!1,n="/twofactor-verification"):o=!!c;break;case 403:t.updateVerifyInfo(H,{tipLevel:N,verifyTip:j.hb}),o=!1;break;default:o=!1,t.updateVerifyInfo(H,{tipLevel:N,verifyTip:j.hb})}return o?c:Promise.reject()}).then(function(e){return Object(v.post)(P.a,{authToken:e,sessionId:c},{needSignature:!0})}).then(function(n){var a;switch(Object(h.a)(n,"data.code")){case 200:a=!0;break;case 404:a=!0,Object(_.a)({content:j.V});break;case 423:a=!1,t.updateVerifyInfo(V,{tipLevel:N,verifyTip:j.a});break;case 425:a=!1,t.bindAready(),Object(_.a)({content:j.Kb});break;default:a=!1,Object(_.a)({content:j.s})}return a?e:Promise.reject()}).then(function(){window.wx.closeWindow&&window.wx.closeWindow()}).catch(function(e){console.log(e)}).finally(function(){n?i.push(n):t.setState({inputType:U,requesting:!1})})}},{key:"updateVerifyInfo",value:function(e,t){var n,o=t.tipLevel,i=t.verifyTip,r="".concat(e,"VerifyTip"),c="".concat(e,"TipLevel");this.setState((n={inputType:e},Object(a.a)(n,r,i),Object(a.a)(n,c,o),n))}},{key:"render",value:function(){var e=this.state,t=e.account,n=e.password,a=e.accountTipLevel,o=e.accountVerifyTip,i=e.passwordTipLevel,r=e.passwordVerifyTip,c=e.requesting,s=e.inputType,u=e.resetInput,p=d.a.createElement(B.a,{account:t});return d.a.createElement("div",{className:R.a.bindExisted},d.a.createElement("div",{className:R.a.accountInputWrapper},d.a.createElement(y.a,{ref:"accountInput",tipLevel:a,verifyTip:o,inputType:s,account:t,accountWasDisableTip:p,onChange:this.onAccountInputChange,onBlur:F.n,resetInput:u})),d.a.createElement("div",{className:R.a.passwordInputWrapper},d.a.createElement(E,{ref:"passwordInput",tipLevel:i,verifyTip:r,inputType:s,password:n,onChange:this.onPasswordInputChange,onBlur:F.s,resetInput:u,placeHolder:j.N})),d.a.createElement("div",{className:R.a.buttonWrapper},d.a.createElement(S.a,{text:j.Y,onClick:this.goToBind,loading:c})),d.a.createElement("div",{className:R.a.linkWrapper},d.a.createElement(S.a,{text:j.F,buttonWrapperClass:R.a.linkWrapper,onClick:this.forgotPassword})),d.a.createElement(W.a,null),d.a.createElement(S.a,{text:j.z,buttonWrapperClass:R.a.bindCreateBtn,onClick:this.redirectToCreate,loading:c}))}}]),t}(l.Component),K={setTwofactorInfo:function(e){return Object(x.c)(e)},saveBindLoginInfo:function(e){return Object(x.a)(e)}};t.default=Object(f.b)(function(e){return{wechatSessionId:e.wechatSessionId,bindLoginInfo:e.bindLoginInfo}},K)(q)}}]);
//# sourceMappingURL=BindExisted.decb5c19.chunk.js.map