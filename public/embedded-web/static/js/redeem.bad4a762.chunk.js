(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{254:function(e,n,t){"use strict";var a=t(0),o=t.n(a),r=t(270),i=t.n(r);n.a=function(){return o.a.createElement("div",{className:i.a.loadingRing},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))}},270:function(e,n,t){e.exports={loadingRing:"LoadingIcon_loadingRing__3Xv3m"}},271:function(e,n,t){e.exports={loadingWrapper:"ComponentLoading_loadingWrapper__2q6So"}},272:function(e,n,t){},551:function(e,n,t){e.exports=t(571)},555:function(e,n,t){},557:function(e,n){var t,a,o,r,i,c;t=window,a=document,o="script",r="ga",t.GoogleAnalyticsObject=r,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,i=a.createElement(o),c=a.getElementsByTagName(o)[0],i.async=1,i.src="https://www.google-analytics.com/analytics.js",c.parentNode.insertBefore(i,c),"static.app.yinxiang.com"==window.location.hostname?window.ga("create","UA-117332876-4","static.app.yinxiang.com"):window.ga("create","UA-117332876-11","auto")},571:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(9),i=t.n(r),c=t(57),l=t.n(c),u=t(90),d=t.n(u),s=t(58),p=t(14),m=t(15),g=t(21),E=t(20),f=t(22),_=t(715),h=t(731),w=t(714),b=t(729),O=t(16),v=t.n(O),P=t(254),C=t(271),j=t.n(C),y=function(e){return o.a.createElement("div",{className:j.a.loadingWrapper},o.a.createElement(P.a,null))};console.log("production",Object({NODE_ENV:"production",PUBLIC_URL:"/embedded-web",REACT_APP_API_GRPC_HOST:"http://codinglobster.cn/grpc"}).REACT_APP_SECRET_CODE);var A,N=[{path:"inputRedeem",title:"\u9a6c\u4e0a\u6fc0\u6d3b\u6807\u51c6/\u9ad8\u7ea7\u8d26\u6237",component:v()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(21)]).then(t.bind(null,726))},loading:function(){return o.a.createElement("div",null)}})},{path:"resultPage",title:"\u9a6c\u4e0a\u6fc0\u6d3b\u6807\u51c6/\u9ad8\u7ea7\u8d26\u6237",component:v()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2)]).then(t.bind(null,713))},loading:y}),children:null}],R="/"===(A="/")?N:function(e){var n=e.split("/").filter(function(e){return!!e});if(0===n.length)return N;for(var t=0,a=n.length,o=[N];o.length>0;){var r=o.pop().find(function(e){return e.path===n[t]});if(!r)return;if((t+=1)===a)return r;var i=r.children;if(!i)return;o.push(i)}}(A).children,S=function(e){function n(){return Object(p.a)(this,n),Object(g.a)(this,Object(E.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement(h.a,null,R.map(function(e){return o.a.createElement(w.a,{path:"/".concat(e.path),component:e.component,key:e.path})}),o.a.createElement(b.a,{to:"/".concat(R[0].path)}))}}]),n}(a.Component),T=t(272),I=t.n(T),L=(Object({NODE_ENV:"production",PUBLIC_URL:"/embedded-web",REACT_APP_API_GRPC_HOST:"http://codinglobster.cn/grpc"}).REACT_APP_BASENAME,function(e){function n(){return Object(p.a)(this,n),Object(g.a)(this,Object(E.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement(_.a,null,o.a.createElement("div",{className:I.a.App},o.a.createElement(S,null)))}}]),n}(a.Component)),B=t(65),D=t(33),U={buttonStatus:{},currentEnv:window.PersonalInfoBridge&&window.PersonalInfoBridge.isLocaleSimplifiedChinese&&window.PersonalInfoBridge.isLocaleSimplifiedChinese()?"zh_CN":"en"},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case"SET_IS_CHINESE":return Object(D.a)({},e,{isChinese:a});default:return e}},k=Object(B.b)(x,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());t(150),t(555),t(190),t(557);l.a.interceptors.request.use(function(e){var n=e.method,t=e.data;return"post"===n&&(e.data=d.a.stringify(t),e.headers={"Content-Type":"application/x-www-form-urlencoded"}),e},function(e){return console.log(e),Promise.reject(e)}),i.a.render(o.a.createElement(s.a,{store:k},o.a.createElement(L,null)),document.getElementById("root"))}},[[551,24,0,1]]]);
//# sourceMappingURL=redeem.bad4a762.chunk.js.map