(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{601:function(e,t,n){"use strict";var a=n(14),i=n(15),o=n(21),r=n(20),c=n(114),s=n(22),u=n(0),p=n.n(u),l=n(57),d=n(724),f=n(576),v=(n(276),n(148)),h=n(113),b=n(573),y=n(602),w=n.n(y),T=v.d.DEFAULT,g=v.d.ERROR,O=v.c.ACCOUNT,j=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(r.a)(t).call(this,e))).onBlur=function(){n.props.onBlur()},n.state={account:"",tipLevel:T,verifyTip:""},n.onFocus=n.onFocus.bind(Object(c.a)(n)),n.onChange=n.onChange.bind(Object(c.a)(n)),n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.verifyTip,n=e.tipLevel,a=e.inputType,i=e.account,o=e.resetInput;a===O&&this.setState({verifyTip:t,tipLevel:n}),o&&this.setState({account:i})}},{key:"onFocus",value:function(){this.setState({tipLevel:T,verifyTip:""})}},{key:"onChange",value:function(e){var t=e.target.value,n=this.props.onChange;this.setState({account:t}),n(e)}},{key:"verifyInput",value:function(){var e,t,n=this,a=this.state.account,i=this.props,o=i.accountWasDisableTip,r=i.forgetCheck,c="",s="";return a?(e={identity:a,checkIdentity:""},t=Object(l.get)(b.e,{params:e}).then(function(){return Promise.reject()}).catch(function(e){var t=Object(d.a)(e,"response.status");if(e)switch(t){case 409:s=T,c="";break;case 412:s=g,c=o;break;default:s=g,c=h.s}else s=g,c=h.b;return s===T?r?Object(d.a)(e,"response.data"):a:Promise.reject(new Error(c))})):(s=g,c=h.L,t=Promise.reject(new Error(c))),t.finally(function(){n.setState({verifyTip:c,tipLevel:s})})}},{key:"render",value:function(){var e=this.state,t=e.tipLevel,n=e.verifyTip,a=e.account,i=this.props.placeHolder;return p.a.createElement("div",{className:w.a.loginAccountInput},p.a.createElement(f.a,{placeHolder:i||h.M,tipLevel:t,value:a,onFocus:this.onFocus,onChange:this.onChange,onBlur:this.onBlur},n))}}]),t}(u.Component);j.defaultProps={account:"",resetInput:!1,accountWasDisableTip:"",onChange:function(){},onBlur:function(){}},t.a=j},602:function(e,t,n){},604:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(113),r=n(577),c=n(579),s=n(605),u=n.n(s);t.a=function(e){var t=Object(c.a)(o.d),n=e.account;return i.a.createElement("span",null,t.map(function(e,t){var a="";switch(t){case 1:a=n;break;case 3:a=i.a.createElement("a",{className:u.a.reactivateLink,href:r.c,key:t},e);break;default:a=e}return a}))}},605:function(e,t,n){e.exports={reactivateLink:"DisableAccountTip_reactivateLink__2mLSq"}},636:function(e,t,n){},638:function(e,t,n){e.exports={bindExisted:"BindExisted_bindExisted__2-Mv_",accountInputWrapper:"BindExisted_accountInputWrapper__3KaMR",passwordInputWrapper:"BindExisted_passwordInputWrapper__bH5rA",buttonWrapper:"BindExisted_buttonWrapper__1hsj9",linkWrapper:"BindExisted_linkWrapper__1t1o8",bindCreateBtn:"BindExisted_bindCreateBtn__gLMKg"}},729:function(e,t,n){"use strict";n.r(t);var a=n(195),i=n(200),o=n(14),r=n(15),c=n(21),s=n(20),u=n(114),p=n(22),l=n(0),d=n.n(l),f=n(58),v=n(57),h=n(724),b=n(578),y=n.n(b),w=n(601),T=n(576),g=(n(276),n(148)),O=n(113),j=n(636),I=n.n(j),m=g.d.DEFAULT,k=g.d.ERROR,C=g.c.PASSWORD,L=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={password:"",tipLevel:m,verifyTip:""},n.onFocus=n.onFocus.bind(Object(u.a)(n)),n.onChange=n.onChange.bind(Object(u.a)(n)),n}return Object(p.a)(t,e),Object(r.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.verifyTip,n=e.tipLevel,a=e.inputType,i=e.password,o=e.resetInput;a===C&&this.setState({verifyTip:t,tipLevel:n}),o&&this.setState({password:i})}},{key:"onFocus",value:function(){this.setState({tipLevel:m,verifyTip:""})}},{key:"onChange",value:function(e){var t=e.target.value,n=this.props.onChange;this.setState({password:t}),n(e)}},{key:"verifyInput",value:function(){var e=this.state.password;return e?Promise.resolve(e):(this.setState({verifyTip:O.L,tipLevel:k}),Promise.reject(new Error(O.L)))}},{key:"render",value:function(){var e=this.state,t=e.tipLevel,n=e.verifyTip,a=e.password,i=this.props.placeHolder;return d.a.createElement("div",{className:I.a.loginPasswordInput},d.a.createElement(T.a,{placeHolder:i||O.P,tipLevel:t,value:a,inputType:"password",onFocus:this.onFocus,onChange:this.onChange,onBlur:this.props.onBlur},n))}}]),t}(l.Component);L.defaultProps={password:"",resetInput:!1,onChange:function(){},onBlur:function(){}};var E=L,S=n(575),W=n(583),B=n(604),P=n(574),_=n(573),x=(n(577),n(149)),F=n(580),A=n(638),R=n.n(A),D=g.d.DEFAULT,N=g.d.ERROR,V=g.c.ACCOUNT,H=g.c.PASSWORD,U=g.c.DEFAULT,q=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).forgotPassword=function(){Object(F.j)(),n.props.history.push("/forget-password")},n.redirectToCreate=function(){Object(F.i)(),n.props.history.push("/bind-create")},n.bindAready=function(){Object(P.a)({content:O.Ob,operates:[{text:O.y,main:!0,onClick:function(){return n.props.history.push("/bind-create")}},{text:O.xb,main:!0,onClick:function(){n.setState({account:"",password:"",resetInput:!0},function(){n.setState({resetInput:!1})})}}]})},n.state={account:"",accountTipLevel:D,accountVerifyTip:"",password:"",passwordTipLevel:D,passwordVerifyTip:"",inputType:U,requesting:!1,resetInput:!1},n.goToBind=n.goToBind.bind(Object(u.a)(n)),n.onPasswordInputChange=n.onPasswordInputChange.bind(Object(u.a)(n)),n.onAccountInputChange=n.onAccountInputChange.bind(Object(u.a)(n)),n}return Object(p.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.bindLoginInfo,n=t.account,a=t.password;this.setState({account:n,password:a,resetInput:!0},function(){e.setState({resetInput:!1})}),Object(F.p)()}},{key:"componentWillUnmount",value:function(){var e=this.state,t=e.account,n=e.password;(0,this.props.saveBindLoginInfo)({account:t,password:n})}},{key:"onAccountInputChange",value:function(e){var t=e.target.value;this.setState({account:t})}},{key:"onPasswordInputChange",value:function(e){var t=e.target.value;this.setState({password:t})}},{key:"goToBind",value:function(){var e,t=this,n="",a=this.props,o=a.history,r=a.setTwofactorInfo,c=a.wechatSessionId;Object(F.g)(),this.setState({requesting:!0}),Promise.all([this.refs.accountInput.verifyInput(),this.refs.passwordInput.verifyInput()]).then(function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];return y.a.set("registrationSpeechAccount",n,{expires:1/24/60}),Object(v.post)(_.h,{identity:n,password:a},{needSignature:!0})}).then(function(a){var i,o=Object(h.a)(a,"data.code"),c=Object(h.a)(a,"data.content.authToken"),s=Object(h.a)(a,"data.content.twoFactorEnabled"),u=Object(h.a)(a,"data.content.twoFactorHint");switch(e=Object(h.a)(a,"data.content"),o){case 200:s?(r({twoFactorEnabled:s,twoFactorHint:u,twoFactorToken:c,fromWechatLogin:!1}),i=!1,n="/twofactor-verification"):i=!!c;break;case 403:t.updateVerifyInfo(H,{tipLevel:N,verifyTip:O.ib}),i=!1;break;default:i=!1,t.updateVerifyInfo(H,{tipLevel:N,verifyTip:O.ib})}return i?c:Promise.reject()}).then(function(e){return Object(v.post)(_.a,{authToken:e,sessionId:c},{needSignature:!0})}).then(function(n){var a;switch(Object(h.a)(n,"data.code")){case 200:a=!0;break;case 404:a=!1,Object(P.a)({content:O.W});break;case 423:a=!1,t.updateVerifyInfo(V,{tipLevel:N,verifyTip:O.a});break;case 425:a=!1,t.bindAready();break;default:a=!1,Object(P.a)({content:O.s})}return a?e:Promise.reject()}).then(function(){window.wx.closeWindow&&window.wx.closeWindow()}).catch(function(e){console.log(e)}).finally(function(){n?o.push(n):t.setState({inputType:U,requesting:!1})})}},{key:"updateVerifyInfo",value:function(e,t){var n,i=t.tipLevel,o=t.verifyTip,r="".concat(e,"VerifyTip"),c="".concat(e,"TipLevel");this.setState((n={inputType:e},Object(a.a)(n,r,o),Object(a.a)(n,c,i),n))}},{key:"render",value:function(){var e=this.state,t=e.account,n=e.password,a=e.accountTipLevel,i=e.accountVerifyTip,o=e.passwordTipLevel,r=e.passwordVerifyTip,c=e.requesting,s=e.inputType,u=e.resetInput,p=d.a.createElement(B.a,{account:t});return d.a.createElement("div",{className:R.a.bindExisted},d.a.createElement("div",{className:R.a.accountInputWrapper},d.a.createElement(w.a,{ref:"accountInput",tipLevel:a,verifyTip:i,inputType:s,account:t,accountWasDisableTip:p,onChange:this.onAccountInputChange,onBlur:F.m,resetInput:u})),d.a.createElement("div",{className:R.a.passwordInputWrapper},d.a.createElement(E,{ref:"passwordInput",tipLevel:o,verifyTip:r,inputType:s,password:n,onChange:this.onPasswordInputChange,onBlur:F.r,resetInput:u,placeHolder:O.O})),d.a.createElement("div",{className:R.a.buttonWrapper},d.a.createElement(S.a,{text:O.Z,onClick:this.goToBind,loading:c})),d.a.createElement("div",{className:R.a.linkWrapper},d.a.createElement(S.a,{text:O.G,buttonWrapperClass:R.a.linkWrapper,onClick:this.forgotPassword})),d.a.createElement(W.a,null),d.a.createElement(S.a,{text:O.z,buttonWrapperClass:R.a.bindCreateBtn,onClick:this.redirectToCreate}))}}]),t}(l.Component),M={setTwofactorInfo:function(e){return Object(x.c)(e)},saveBindLoginInfo:function(e){return Object(x.a)(e)}};t.default=Object(f.b)(function(e){return{wechatSessionId:e.wechatSessionId,bindLoginInfo:e.bindLoginInfo}},M)(q)}}]);
//# sourceMappingURL=BindExisted.a1aaef8b.chunk.js.map