(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{567:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return i});a(0);var n=function(e,t){t=t||window.location.href;var a={};return t.replace(/[?&]([^?&=]+)(?:=([^?&=]*))?/g,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=t[1],o=t[2];a[i]=o}),e?a.hasOwnProperty(e)?decodeURIComponent(a[e].replace(/\+/g," ")):"":a},i=function(){var e=navigator.userAgent,t={};return e.match(/(iPhone|iPod|iPad)/)?(t.device="iOS",t.url="http://a.app.qq.com/o/simple.jsp?pkgname=com.yinxiang&ckey=CK1421937581227"):e.match(/Android/)?(t.device="Android",t.url="http://a.app.qq.com/o/simple.jsp?pkgname=com.yinxiang&ckey=CK1421937581227"):e.match(/Windows/)?(t.device="Windows",t.url="https://cdn-dl.yinxiang.com/YXWin6/public/Evernote_lark_latest.exe"):e.match(/Macintosh/)&&(t.device="Mac",t.url="https://www.yinxiang.com/download/get.php?file=EvernoteMac"),t}},639:function(e,t,a){e.exports={wrapper:"BasicInput_wrapper__YTixy",inputWrapper:"BasicInput_inputWrapper__2Iuoy",input:"BasicInput_input__3yf0i",tipIcon:"BasicInput_tipIcon__-taql",default:"BasicInput_default__2jZz1",error:"BasicInput_error__2Hi2A",warning:"BasicInput_warning__2l30R",correct:"BasicInput_correct__1SAau",hide:"BasicInput_hide__14TlK",tipText:"BasicInput_tipText__3fVWH"}},641:function(e,t,a){e.exports={reactivateLink:"DisableAccountTip_reactivateLink__2IHyZ"}},643:function(e,t,a){},645:function(e,t,a){},649:function(e,t,a){e.exports={page:"LarkYXLogin_page__25AV0",loginContainer:"LarkYXLogin_loginContainer__18Tyf",loginTitle:"LarkYXLogin_loginTitle__2PJpw",accountInputWrapper:"LarkYXLogin_accountInputWrapper__2qRAZ",passwordInputWrapper:"LarkYXLogin_passwordInputWrapper__-YHUB",buttonWrapper:"LarkYXLogin_buttonWrapper__2CNQU",loginButton:"LarkYXLogin_loginButton__3TMrP",disabled:"LarkYXLogin_disabled__3u-5P"}},699:function(e,t,a){"use strict";a.r(t);var n=a(34),i=a(18),o=a(19),c=a(24),r=a(22),s=a(23),u=a(0),p=a.n(u),l=a(56),d=a(55),v=a(697),h=a(191),f=(a(567),a(639)),g=a.n(f),m=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={value:""},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this.props.value,a=e.value;a!==t&&this.setState({value:a})}},{key:"onChange",value:function(e){var t=this.props.onChange,a=e.target.value;this.setState({value:a}),t(e)}},{key:"getClassByLevel",value:function(e){var t;return t=Object.keys(g.a).find(function(t){return t.indexOf(e)>-1}),g.a[t]}},{key:"render",value:function(){var e=this.state.value,t=this.props,a=t.children,n=t.inputType,i=t.inputName,o=t.tipLevel,c=t.placeHolder,r=t.showTipIcon,s=t.onFocus;return p.a.createElement("div",{className:g.a.wrapper},p.a.createElement("div",{className:g.a.inputWrapper},p.a.createElement("input",{className:g.a.input,type:n,name:i,value:e,placeholder:c,onFocus:s,onChange:this.onChange.bind(this)}),p.a.createElement("span",{className:"".concat(g.a.tipIcon," ").concat(this.getClassByLevel(o)," ").concat(r?"":g.a.hide)})),p.a.createElement("p",{className:"".concat(g.a.tipText," ").concat(this.getClassByLevel(o))},a))}}]),t}(u.Component);m.defaultProps={inputType:"text",inputName:"",tipLevel:h.d.DEFAULT,showTipIcon:!0,value:"",onFocus:function(){}};var y=m,_=a(110),w=a(195),b=a(556),k=a(641),T=a.n(k),L=function(e){var t=Object(b.a)(_.b),a=e.account;return p.a.createElement("span",null,t.map(function(e,t){var n="";switch(t){case 1:n=a;break;case 3:n=p.a.createElement("a",{className:T.a.reactivateLink,href:w.b,key:t},e);break;default:n=e}return n}))},I=a(192),C=a(643),j=a.n(C),O=h.d.DEFAULT,E=h.d.ERROR,S=h.c.ACCOUNT,N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={account:"",tipLevel:O,verifyTip:""},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.verifyTip,a=e.tipLevel,n=e.inputType,i=e.account,o=e.resetInput;n===S&&this.setState({verifyTip:t,tipLevel:a}),o&&this.setState({account:i})}},{key:"onFocus",value:function(){this.setState({tipLevel:O,verifyTip:""})}},{key:"onChange",value:function(e){var t=e.target.value,a=this.props.onChange;this.setState({account:t}),a(e)}},{key:"verifyInput",value:function(){var e,t,a=this,n=this.state.account,i=this.props,o=i.accountWasDisableHooks,c=i.accountNotExistedHooks,r="",s="";return n?(e={identity:n,checkIdentity:""},t=Object(d.get)(I.g,{params:e}).then(function(){return c(),Promise.reject()}).catch(function(e){var t=Object(v.a)(e,"response.status");if(e)switch(t){case 409:s=O,r="";break;case 412:s=E,r=p.a.createElement(L,{account:n}),o();break;default:s=E,r=_.i}else s=E,r=_.a;return s===O?n:Promise.reject()})):(s=E,r=_.J,t=Promise.reject()),t.finally(function(){a.setState({verifyTip:r,tipLevel:s})})}},{key:"render",value:function(){var e=this.state,t=e.tipLevel,a=e.verifyTip,n=e.account;return p.a.createElement("div",{className:j.a.loginAccountInput},p.a.createElement(y,{placeHolder:_.n,tipLevel:t,value:n,onFocus:this.onFocus.bind(this),onChange:this.onChange.bind(this)},a))}}]),t}(u.Component);N.defaultProps={account:"",resetInput:!1,onChange:function(){},accountWasDisableHooks:function(){},accountNotExistedHooks:function(){}};var W=N,x=a(645),P=a.n(x),A=h.d.DEFAULT,B=h.d.ERROR,F=h.c.PASSWORD,D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={password:"",tipLevel:A,verifyTip:""},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.verifyTip,a=e.tipLevel,n=e.inputType,i=e.password,o=e.resetInput;n===F&&this.setState({verifyTip:t,tipLevel:a}),o&&this.setState({password:i})}},{key:"onFocus",value:function(){this.setState({tipLevel:A,verifyTip:""})}},{key:"onChange",value:function(e){var t=e.target.value,a=this.props.onChange;this.setState({password:t}),a(e)}},{key:"verifyInput",value:function(){var e=this.state.password;return e||(this.setState({verifyTip:_.J,tipLevel:B}),Promise.reject())}},{key:"render",value:function(){var e=this.state,t=e.tipLevel,a=e.verifyTip,n=e.password;return p.a.createElement("div",{className:P.a.loginPasswordInput},p.a.createElement(y,{placeHolder:_.o,tipLevel:t,value:n,inputType:"password",onFocus:this.onFocus.bind(this),onChange:this.onChange.bind(this)},a))}}]),t}(u.Component);D.defaultProps={password:"",resetInput:!1,onChange:function(){}};var H=D,R=a(561),Y=a(562),q=a(586),U=a(563),X=a(61),K=a(194),V=a(649),J=a.n(V),M=h.d.DEFAULT,Z=h.c.DEFAULT,z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(o)))).state={account:"",accountTipLevel:M,accountVerifyTip:"",password:"",passwordTipLevel:M,passwordVerifyTip:"",inputType:Z,requesting:!1,resetInput:!1},a.onAccountInputChange=function(e){var t=e.target.value;a.setState({account:t})},a.onPasswordInputChange=function(e){var t=e.target.value;a.setState({password:t})},a.accountWasDisable=function(){window.ga("send","event","account_login","show_wechat_login_dialog","account_deactived")},a.accountNotExisted=function(){window.ga("send","event","account_login","show_wechat_login_dialog","username_not_found")},a.handleLogin=function(){var e=a.props,t=e.history,n=e.setTipStatus,i=a.state,o=i.account,c=i.password;o&&c?(a.setState({requesting:!0}),Object(d.post)(I.f,{identity:o,password:c,platform:X.f},{needSignature:!0}).then(function(e){var t,a=Object(v.a)(e,"data.code"),i=Object(v.a)(e,"data.content.authToken"),o=Object(v.a)(e,"data.content.yxName"),c=Object(v.a)(e,"data.content.loginKey"),r=Object(v.a)(e,"data.content.loginSecret");switch(a){case U.d:t=!!i;break;case U.i:n({tip:_.O,isTipShow:!0}),t=!1;break;case U.e:n({tip:_.K,isTipShow:!0}),t=!1;break;case U.h:n({tip:_.N,isTipShow:!0}),t=!1;break;default:n({tip:_.i,isTipShow:!0}),t=!1}return t?{authToken:i,userName:o,loginKey:c,loginSecret:r}:Promise.reject()}).then(function(e){localStorage.setItem("authToken",e.authToken),localStorage.setItem("userName",e.userName),localStorage.setItem("loginKey",e.loginKey),localStorage.setItem("loginSecret",e.loginSecret),t.push("/yx-authorize")}).finally(function(){a.setState({requesting:!1})})):n({tip:_.N,isTipShow:!0})},a.handleBack=function(){a.props.history.goBack()},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.onkeydown=function(t){13===t.keyCode&&e.handleLogin()}}},{key:"render",value:function(){var e=this.state,t=e.account,a=e.password,n=e.accountTipLevel,i=e.accountVerifyTip,o=e.passwordTipLevel,c=e.passwordVerifyTip,r=e.requesting,s=e.inputType,u=e.resetInput;return p.a.createElement("div",{className:J.a.page},p.a.createElement(q.a,null),p.a.createElement("div",{className:J.a.loginContainer},p.a.createElement("p",{className:J.a.loginTitle},_.F),p.a.createElement("div",{className:J.a.accountInputWrapper},p.a.createElement(W,{ref:"accountInput",tipLevel:n,verifyTip:i,inputType:s,account:t,accountWasDisableHooks:this.accountWasDisable,accountNotExistedHooks:this.accountNotExisted,onChange:this.onAccountInputChange,resetInput:u})),p.a.createElement("div",{className:J.a.passwordInputWrapper},p.a.createElement(H,{ref:"passwordInput",tipLevel:o,verifyTip:c,inputType:s,password:a,onChange:this.onPasswordInputChange,resetInput:u})),p.a.createElement("div",{className:J.a.buttonWrapper},p.a.createElement(R.a,{text:_.E,buttonWrapperClass:J.a.loginButton,onClick:this.handleLogin,loading:r}),p.a.createElement(R.a,{text:_.g,buttonWrapperClass:J.a.disabled,onClick:this.handleBack}))),p.a.createElement(Y.a,null))}}]),t}(u.Component);t.default=Object(l.b)(function(e){return Object(n.a)({},e)},K)(z)}}]);
//# sourceMappingURL=19.9c53a1f5.chunk.js.map