(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{643:function(e,t,n){},645:function(e,t,n){e.exports={twoFactorVerification:"TwoFactorVerification_twoFactorVerification__Ona1d",mainContent:"TwoFactorVerification_mainContent__1Coma",title:"TwoFactorVerification_title__2EJ6c",sendTip:"TwoFactorVerification_sendTip__2FKud",sendTo:"TwoFactorVerification_sendTo__154Qx",inputWrapper:"TwoFactorVerification_inputWrapper__1COjM",linkWrapper:"TwoFactorVerification_linkWrapper__1Dbf0",confirmBtn:"TwoFactorVerification_confirmBtn__1nD0H"}},730:function(e,t,n){"use strict";n.r(t);var o=n(14),a=n(15),i=n(22),r=n(20),c=n(21),s=n(0),l=n.n(s),u=n(58),p=n(57),f=n(726),d=n(90),h=n(575),v=n(109),w=n(577),b=n(108),m=n(148),F=n(581),T=(n(277),n(643)),C=n.n(T),j=m.d.DEFAULT,O=m.d.ERROR,y=m.c.VERCODE,g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={twoFactorCode:"",tipLevel:j,verifyTip:""},n.onFocus=n.onFocus.bind(Object(v.a)(n)),n.onChange=n.onChange.bind(Object(v.a)(n)),n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.verifyTip,n=e.tipLevel,o=e.inputType,a=e.twoFactorCode,i=e.resetInput;o===y&&this.setState({verifyTip:t,tipLevel:n}),i&&this.setState({twoFactorCode:a})}},{key:"onFocus",value:function(){this.setState({tipLevel:j,verifyTip:""})}},{key:"onChange",value:function(e){var t=e.target.value,n=this.props.onChange;this.setState({twoFactorCode:t}),n(e)}},{key:"verifyInput",value:function(){var e,t=this,n=this.state.twoFactorCode,o="",a="";return n?F.c.test(n)?(a=j,e=Promise.resolve(n)):(o=b.U,a=O,e=Promise.reject(new Error(o))):(o=b.K,a=O,e=Promise.reject(new Error(o))),e.finally(function(){t.setState({verifyTip:o,tipLevel:a})})}},{key:"render",value:function(){var e=this.state,t=e.tipLevel,n=e.verifyTip,o=e.twoFactorCode,a=this.props,i=a.customTip,r=a.placeHolder;return l.a.createElement("div",{className:C.a.twoFactorCodeInput},l.a.createElement(w.a,{placeHolder:r||b.Q,tipLevel:t,value:o,onFocus:this.onFocus,onChange:this.onChange,useDefaultTip:!i},n))}}]),t}(s.Component);g.defaultProps={twoFactorCode:"",resetInput:!1,onChange:function(){}};var k=g,_=n(194),E=(n(576),n(574)),I=n(645),S=n.n(I),L=m.d.DEFAULT,W=m.d.ERROR,V=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).onInputChange=function(e){var t=e.target.value;n.setState({twoFactorCode:t})},n.onInputFocus=function(){n.setState({tipLevel:L,verifyTip:""})},n.login=function(){var e,t,o,a,i=n.state,r=i.twoFactorCode,c=i.targetUrl,s=n.props,l=s.twoFactorInfo,u=l.twoFactorToken,d=l.fromWechatLogin,h=s.wechatSessionId;r?(n.setState({requesting:!0}),e=Object(p.post)(E.b,{code:r,twoFactorToken:u},{needSignature:!0}).then(function(e){var t=Object(f.a)(e,"data.code"),n=Object(f.a)(e,"data.content.authToken");a=Object(f.a)(e,"data.content");var o=!1;switch(t){case 200:o=!!n;break;default:o=!1}return o?n:Promise.reject()}),c?e.then(function(e){e&&(window.location.href=c)}).catch(function(e){console.log(e)}):e.then(function(e){return Object(p.post)(E.a,{authToken:e,sessionId:h},{needSignature:!0})}).then(function(e){var t;switch(Object(f.a)(e,"data.code")){case 200:t=!!a;break;case 404:t=!1,Object(_.a)({content:b.V});break;case 423:Object(_.a)({content:b.a});break;case 425:d?t=!!a:(t=!1,Object(_.a)({content:b.Kb}));break;default:t=!1,Object(_.a)({content:b.s})}return t?a:Promise.reject()}).then(function(){window.wx.closeWindow&&window.wx.closeWindow()}).catch(function(e){console.log(e)}).finally(function(){n.setState({requesting:!1})})):(t=W,o=b.K,n.setState({tipLevel:t,verifyTip:o}))},n.redirectToHelper=function(){n.props.history.push("/twofactor-helper")},n.state={twoFactorCode:"",rememberMe:!1,tipLevel:L,verifyTip:"",requesting:!1},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.twoFactorInfo.twoFactorEnabled,n=e.history,o=window.location.search,a=Object(d.parse)(o).targetUrl;a=a&&decodeURIComponent(a),t||n.replace("/"),this.setState({targetUrl:a})}},{key:"componentDidMount",value:function(){document.title="\u4e24\u6b65\u9a8c\u8bc1"}},{key:"cancel",value:function(){window.history.back()}},{key:"render",value:function(){var e=this.state,t=e.requesting,n=e.tipLevel,o=e.verifyTip,a=this.props.twoFactorInfo.twoFactorHint;return l.a.createElement("div",{className:S.a.twoFactorVerification},l.a.createElement("div",{className:S.a.mainContent},l.a.createElement("h1",{className:S.a.title},b.yb),l.a.createElement("p",{className:S.a.sendTip},a&&l.a.createElement("span",{className:S.a.sendTo},a)),l.a.createElement("div",{className:S.a.inputWrapper},l.a.createElement(k,{placeHolder:b.vb,tipLevel:n,verifyTip:o,onChange:this.onInputChange,onFocus:this.onInputFocus})),l.a.createElement(h.a,{text:b.u,loading:t,buttonWrapperClass:S.a.confirmBtn,onClick:this.login}),l.a.createElement("div",{className:S.a.linkWrapper},l.a.createElement(h.a,{text:b.W,buttonWrapperClass:S.a.linkWrapper,onClick:this.redirectToHelper}))))}}]),t}(s.Component);t.default=Object(u.b)(function(e){return{wechatSessionId:e.wechatSessionId,twoFactorInfo:e.twoFactorInfo}},{})(V)}}]);
//# sourceMappingURL=TwoFactorVerification.d6498a52.chunk.js.map