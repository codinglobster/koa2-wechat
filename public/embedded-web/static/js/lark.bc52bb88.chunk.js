(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(n,t,e){"use strict";var c=e(0),a=e.n(c),r=e(270),o=e.n(r);t.a=function(){return a.a.createElement("div",{className:o.a.loadingRing},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))}},197:function(n,t,e){"use strict";e.d(t,"g",function(){return i}),e.d(t,"c",function(){return u}),e.d(t,"e",function(){return l}),e.d(t,"f",function(){return d}),e.d(t,"b",function(){return p}),e.d(t,"a",function(){return s}),e.d(t,"d",function(){return h});var c=e(43),a=e(63),r=e(200),o=encodeURIComponent(r.a),i="".concat(c.c,"/RegistrationCheck.action"),u="https://open.zjurl.cn/connect/qrconnect/page/sso/?redirect_uri=".concat(o,"&app_id=").concat(a.d),l="".concat(c.c,"/third/auth/v1/verifyLarkAuth"),d="".concat(c.c,"/third/auth/v1/verifyCredential"),s="".concat(c.c,"/third/auth/v1/bindUserByAuthToken"),p="".concat(c.c,"/third/auth/v1/checkBindStatusByAuthToken"),h="".concat(c.c,"/third/auth/v1/unbindUserByAuthToken")},200:function(n,t,e){"use strict";e.d(t,"b",function(){return a}),e.d(t,"a",function(){return r}),e.d(t,"c",function(){return o});var c=e(43),a="".concat(c.b,"/AccountReactivation.action"),r="".concat(c.a,"/embedded-web/lark/#/yx-home"),o="".concat(c.d,"/privacy/3rd_party_app_permissions.php")},270:function(n,t,e){n.exports={loadingRing:"LoadingIcon_loadingRing__2rbPT"}},271:function(n,t,e){n.exports={loadingWrapper:"ComponentLoading_loadingWrapper__24INk"}},43:function(n,t,e){"use strict";function c(n){var t;try{t=n.match(/^(static\.)?(.+)/)[2]}catch(e){console.error(e)}return t}e.d(t,"b",function(){return i}),e.d(t,"d",function(){return l}),e.d(t,"a",function(){return u}),e.d(t,"c",function(){return d});var a=window.location,r=a.protocol,o=a.hostname,i="".concat("".concat(r,"//").concat(c(o)||"app.yinxiang.com")),u="".concat("".concat(r,"//").concat(o)),l="".concat(r,"//www.yinxiang.com"),d="".concat("".concat(i));"".concat(c(o)||"app.yinxiang.com")},543:function(n,t,e){n.exports=e(571)},546:function(n,t,e){},548:function(n,t,e){},550:function(n,t){var e,c,a,r,o,i;e=window,c=document,a="script",r="ga",e.GoogleAnalyticsObject=r,e.ga=e.ga||function(){(e.ga.q=e.ga.q||[]).push(arguments)},e.ga.l=1*new Date,o=c.createElement(a),i=c.getElementsByTagName(a)[0],o.async=1,o.src="https://www.google-analytics.com/analytics.js",i.parentNode.insertBefore(o,i),"static.app.yinxiang.com"==window.location.hostname?window.ga("create","UA-117332876-4","static.app.yinxiang.com"):window.ga("create","UA-117332876-11","static.preprod.yinxiang.com")},571:function(n,t,e){"use strict";e.r(t);var c,a=e(0),r=e.n(a),o=e(9),i=e.n(o),u=e(57),l=e.n(u),d=(e(103),e(58)),s=e(14),p=e(15),h=e(22),f=e(20),b=e(21),m=e(715),g=e(731),v=e(714),y=e(729),w=e(16),O=e.n(w),_=e(146),E=e(271),j=e.n(E),k=function(n){return r.a.createElement("div",{className:j.a.loadingWrapper},r.a.createElement(_.a,null))},A=e(197),S=[{path:"lark-home",title:"Lark \u767b\u5f55",component:function(n){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,n),Object(p.a)(t,[{key:"componentDidMount",value:function(){window.location.replace(A.c)}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(a.Component),children:null},{path:"yx-home",title:"\u5370\u8c61\u7b14\u8bb0",component:O()({loader:function(){return Promise.all([e.e(0),e.e(1),e.e(18)]).then(e.bind(null,733))},loading:k}),children:null},{path:"yx-login",title:"\u767b\u5f55\u5370\u8c61\u7b14\u8bb0",component:O()({loader:function(){return Promise.all([e.e(0),e.e(1),e.e(3),e.e(19)]).then(e.bind(null,728))},loading:k}),children:null},{path:"yx-authorize",title:"\u5370\u8c61\u7b14\u8bb0\u6388\u6743",component:O()({loader:function(){return Promise.all([e.e(0),e.e(1),e.e(3),e.e(20)]).then(e.bind(null,723))},loading:k}),children:null}],T="/"===(c="/")?S:function(n){var t=n.split("/").filter(function(n){return!!n});if(0===t.length)return S;for(var e=0,c=t.length,a=[S];a.length>0;){var r=a.pop().find(function(n){return n.path===t[e]});if(!r)return;if((e+=1)===c)return r;var o=r.children;if(!o)return;a.push(o)}}(c).children,P=function(n){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,n),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,null,T.map(function(n){return r.a.createElement(v.a,{path:"/".concat(n.path),component:n.component,key:n.path})}),r.a.createElement(y.a,{to:"/".concat(T[0].path)}))}}]),t}(a.Component),I=(e(546),Object({NODE_ENV:"production",PUBLIC_URL:"/embedded-web",REACT_APP_API_GRPC_HOST:"http://codinglobster.cn/grpc"}).REACT_APP_BASENAME,function(n){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,n),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(P,null))}}]),t}(a.Component)),x=e(65),C=e(33),N=e(70),D={bindStatus:!1,isDialogShow:!1,tipInfo:{tip:"",isTipShow:!1}},R=function(){var n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0,c=e.type,a=e.payload;switch(c){case N.a:n=Object.assign({},t,{bindStatus:a});break;case N.b:n=Object.assign({},t,{isDialogShow:a});break;case N.c:n=Object.assign({},t,{tipInfo:Object(C.a)({},a)});break;default:n=t}return n},U=Object(x.b)(R,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),B=(e(150),e(548),e(189),e(550),e(101)),L=e.n(B),q=e(141),M=e(63),X=function(n){var t=function n(t,e){if(t.length<2)return t;var c=[],a=[],r=t[0];return t.forEach(function(n){n[e]<r[e]?c.push(n):n[e]>r[e]&&a.push(n)}),n(c,e).concat([r]).concat(n(a,e))}(function(n){for(var t=[],e=[Object.assign(n,{keyPath:""})],c=function(){var n=e.pop(),c=n.keyPath;delete n.keyPath,Object.keys(n).forEach(function(a){var r=n[a],o=c?"".concat(c,".").concat(a):a;"[object Object]"===Object.prototype.toString.call(r)?e.push(Object(C.a)({keyPath:o},r)):t.push({keyPath:o,value:r})})};e.length>0;)c();return t}(n),"keyPath"),e=t.reduce(function(n,t){var e=t.keyPath,c=t.value;return n+="".concat(e.toLowerCase(),"=").concat(c)},"");return L()(e)},G=function(n){var t=window.navigator.userAgent,e={consumerKey:M.a,consumerSecret:M.b,deviceId:M.c,deviceDesc:t,nonce:Math.ceil(999999*Math.random())},c=Object.assign(n,{reqAuth:e}),a=X(c),r=q.Base64.encode("".concat(M.a,":").concat(M.b));return Object.assign(c.reqAuth,{signature:a}),Object.assign(c.reqAuth,{credential:r}),delete c.reqAuth.consumerKey,delete c.reqAuth.consumerSecret,c};l.a.defaults.withCredentials=!0,l.a.interceptors.request.use(function(n){var t=n.needSignature,e=n.method,c=n.params,a=n.data;return t&&("post"===e?n.data=G(a):"get"===e&&(n.params=G(c))),n},function(n){return console.log(n),Promise.reject(n)}),i.a.render(r.a.createElement(d.a,{store:U},r.a.createElement(I,null)),document.getElementById("root"))},63:function(n,t,e){"use strict";e.d(t,"c",function(){return c}),e.d(t,"a",function(){return a}),e.d(t,"b",function(){return r}),e.d(t,"d",function(){return o}),e.d(t,"e",function(){return i}),e.d(t,"f",function(){return u});var c="en-web",a="en-web",r="",o="cli_9c8628b7b3a9910b",i="cli_9cb6b21c523a1101",u="lark"},70:function(n,t,e){"use strict";e.d(t,"a",function(){return c}),e.d(t,"b",function(){return a}),e.d(t,"c",function(){return r});var c="SET_BIND_STATUS",a="SET_DIALOG_STATUS",r="SET_TIP_STATUS"}},[[543,23,0,1]]]);
//# sourceMappingURL=lark.bc52bb88.chunk.js.map