(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{591:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return o});a(0);var n=function(e,t){t=t||window.location.href;var a={};return t.replace(/[?&]([^?&=]+)(?:=([^?&=]*))?/g,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=t[1],r=t[2];a[o]=r}),e?a.hasOwnProperty(e)?decodeURIComponent(a[e].replace(/\+/g," ")):"":a},o=function(){var e=navigator.userAgent,t={};return e.match(/(iPhone|iPod|iPad)/)?(t.device="iOS",t.url="http://a.app.qq.com/o/simple.jsp?pkgname=com.yinxiang&ckey=CK1421937581227"):e.match(/Android/)?(t.device="Android",t.url="http://a.app.qq.com/o/simple.jsp?pkgname=com.yinxiang&ckey=CK1421937581227"):e.match(/Windows/)?(t.device="Windows",t.url="https://cdn-dl.yinxiang.com/YXWin6/public/Evernote_lark_latest.exe"):e.match(/Macintosh/)&&(t.device="Mac",t.url="https://www.yinxiang.com/download/get.php?file=EvernoteMac"),t}},604:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(605),i=a.n(r);t.a=function(e){var t=e.content,a=e.className;return o.a.createElement("div",{className:a},Array.isArray(t)?t.map(function(e,t){return o.a.createElement("p",{key:t,className:i.a.describe},function(e){return Array.isArray(e)?e.map(function(e,t){return o.a.createElement("span",{key:t},e)}):e}(e))}):o.a.createElement("p",{className:i.a.describe},t))}},605:function(e,t,a){e.exports={describe:"Description_describe__2xkYH"}},658:function(e,t,a){e.exports={downloadContainer:"DownloadApp_downloadContainer__3hZQu",downloadButton:"DownloadApp_downloadButton__2Altv",downloadPlatform:"DownloadApp_downloadPlatform__1jkag",qrContent:"DownloadApp_qrContent__3Mjxq",show:"DownloadApp_show__39DLj",downloadButtonMobile:"DownloadApp_downloadButtonMobile__6Gy53"}},660:function(e,t,a){e.exports={homeContainer:"LarkHome_homeContainer__OsDa0",brandIntro:"LarkHome_brandIntro__3qPU0",introLeft:"LarkHome_introLeft__2y9jg",headerLogo:"LarkHome_headerLogo__3pP9L",introBoldText:"LarkHome_introBoldText__2ZlII",bindContent:"LarkHome_bindContent__9831x",bindAndAuth:"LarkHome_bindAndAuth__1lLXL",bindButton:"LarkHome_bindButton__1HpX_",unbindButton:"LarkHome_unbindButton__3rMVy",bindText:"LarkHome_bindText__1Iuc2",bindLabel:"LarkHome_bindLabel__l48Gi"}},727:function(e,t,a){"use strict";a.r(t);var n=a(33),o=a(14),r=a(15),i=a(22),c=a(20),l=a(21),s=a(0),d=a.n(s),u=a(58),m=a(57),p=a(720),h=a(584),f=a(585),b=a(604),v=a(114),_=a(580),w=a(591),S=a(658),k=a.n(S),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={deviceInfo:"",isQrShow:!1,platform:v.m,platformList:[]},a.showQr=function(e){a.setState({platform:e,isQrShow:!0})},a.hideQr=function(e){a.setState({platform:e,isQrShow:!1})},a.getPlatformList=function(){var e=a.state.deviceInfo.device,t=[];t="iOS"===e||"Android"===e?v.y.slice(0,2):v.y.filter(function(t){return t.platform!==e}),a.setState({platformList:t})},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=Object(w.a)();this.setState({deviceInfo:t,isQrShow:!0},function(){e.getPlatformList()})}},{key:"render",value:function(){var e=this,t=this.state,a=t.deviceInfo,n=t.isQrShow,o=t.platform,r=t.platformList;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:k.a.downloadContainer},d.a.createElement(b.a,{content:Object(_.a)(v.z,a.device)}),d.a.createElement("a",{href:a.url,className:k.a.downloadButton},v.x),d.a.createElement("p",null,v.r),d.a.createElement("div",{className:k.a.downloadPlatform},r.map(function(t,a){return d.a.createElement("a",{key:a,href:t.downloadUrl},d.a.createElement("span",{onMouseEnter:e.showQr.bind(e,t.platform),onMouseLeave:e.hideQr.bind(e,t.platform)},t.platform),t.imgUrl?d.a.createElement("div",{className:"".concat(k.a.qrContent," ").concat(n&&t.platform===o?k.a.show:"")},d.a.createElement("img",{src:t.imgUrl,alt:""}),d.a.createElement("p",null,v.I),d.a.createElement("p",null,v.c)):null)}))),d.a.createElement("a",{href:a.url,className:k.a.downloadButtonMobile},v.x))}}]),t}(s.Component),y=a(196),E=a(63),I=a(197),N=a(586),B=a(198),O=a(660),L=a.n(O),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={bindStatus:y.a.UNBIND,authToken:"",isRefresh:!1,okButtonText:"",okButtonType:"",content:"",onOkType:""},a.handleBindStatus=function(){var e=a.state,t=e.bindStatus,n=e.isRefresh,o=a.props,r=o.history,i=o.setDialogStatus,c=localStorage.getItem("refreshCode");t===y.a.BIND?a.setState({okButtonText:v.M,okButtonType:y.b.DANGER,content:v.k,onOkType:0},function(){i(!0)}):t===y.a.UNBIND?(n&&a.publicVerifyAuth(y.e.REFRESH,c),r.push("/yx-login")):r.push("/yx-login")},a.handleUnbind=function(){var e=a.props,t=e.setTipStatus,n=e.setBindStatus,o=localStorage.getItem("authToken");Object(m.post)(I.d,{authToken:o,platform:E.f},{needSignature:!0}).then(function(e){var o=Object(p.a)(e,"data.code");switch(o){case N.d:case N.b:localStorage.removeItem("userName"),localStorage.removeItem("sessionId"),t({tip:v.L,isTipShow:!0}),n(!1),a.setState({bindStatus:y.a.UNBIND,isRefresh:!0});break;default:console.log("error",o),t({tip:v.i,isTipShow:!0})}}).catch(function(){t({tip:v.p,isTipShow:!0})})},a.handleExpired=function(){a.props.history.push("/yx-login")},a.publicVerifyAuth=function(e,t){var n=a.props.setTipStatus;Object(m.post)(I.e,{channelId:E.e,verificationCode:t,codeType:e},{needSignature:!0}).then(function(e){var t=Object(p.a)(e,"data.code"),o=Object(p.a)(e,"data.content.sessionId"),r=Object(p.a)(e,"data.content.refreshCode"),i=Object(p.a)(e,"data.content.authToken"),c=Object(p.a)(e,"data.content.yxName");switch(t){case N.f:localStorage.setItem("sessionId",o),localStorage.setItem("refreshCode",r),a.setState({bindStatus:y.a.UNBIND});break;case N.d:localStorage.setItem("authToken",i),localStorage.setItem("userName",c),localStorage.setItem("refreshCode",r),a.setState({bindStatus:y.a.BIND,authToken:i});break;case N.a:localStorage.setItem("sessionId",o),localStorage.removeItem("userName"),localStorage.removeItem("authToken"),a.setState({bindStatus:y.a.REBIND});break;default:console.log("error",t),n({tip:v.i,isTipShow:!0})}}).catch(function(){n({tip:v.p,isTipShow:!0})})},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.history,a=e.bindStatus,n=localStorage.getItem("code")||"",o=Object(w.b)("code").replace(" ","+");a?this.setState({bindStatus:y.a.BIND}):o&&o!==n?(localStorage.setItem("code",o),this.publicVerifyAuth(y.e.NORMAL,o)):t.replace("/lark-home")}},{key:"render",value:function(){var e=this.state,t=e.bindStatus,a=e.okButtonText,n=e.okButtonType,o=e.content,r=e.onOkType,i=localStorage.getItem("userName");return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:L.a.homeContainer},d.a.createElement("div",{className:L.a.brandIntro},d.a.createElement("div",{className:L.a.introLeft},d.a.createElement("div",{className:L.a.headerLogo}),d.a.createElement("p",{className:L.a.introBoldText},v.A),d.a.createElement("p",null,v.B)),d.a.createElement(g,null)),d.a.createElement("div",{className:L.a.bindContent},d.a.createElement("div",{className:L.a.bindAndAuth},d.a.createElement("h3",null,v.w),d.a.createElement(h.a,{text:t===y.a.BIND?Object(_.a)(v.D,i):t===y.a.REBIND?v.C:v.t,buttonWrapperClass:t!==y.a.UNBIND?L.a.unbindButton:L.a.bindButton,onClick:this.handleBindStatus}),d.a.createElement("p",null,v.s)),d.a.createElement("div",{className:L.a.bindText},d.a.createElement("p",{className:L.a.bindLabel},v.v),v.u.map(function(e,t){return d.a.createElement("p",{key:t},e)})))),d.a.createElement(f.a,{okButtonText:a,okButtonType:n,onOk:r?this.handleExpired:this.handleUnbind,content:o}))}}]),t}(s.Component);t.default=Object(u.b)(function(e){return Object(n.a)({},e)},B)(T)}}]);
//# sourceMappingURL=18.ed3a0e87.chunk.js.map