(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{239:function(e,n,t){"use strict";var a=t(0),o=t.n(a),r=t(267),i=t.n(r);n.a=function(){return o.a.createElement("div",{className:i.a.loadingRing},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))}},267:function(e,n,t){e.exports={loadingRing:"LoadingIcon_loadingRing__3Xv3m"}},268:function(e,n,t){e.exports={loadingWrapper:"ComponentLoading_loadingWrapper__2q6So"}},269:function(e,n,t){},506:function(e,n,t){e.exports=t(568)},510:function(e,n,t){},512:function(e,n){var t,a,o,r,i,c;t=window,a=document,o="script",r="ga",t.GoogleAnalyticsObject=r,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,i=a.createElement(o),c=a.getElementsByTagName(o)[0],i.async=1,i.src="https://www.google-analytics.com/analytics.js",c.parentNode.insertBefore(i,c),"static.app.yinxiang.com"==window.location.hostname?window.ga("create","UA-117332876-4","static.app.yinxiang.com"):window.ga("create","UA-117332876-11","auto")},568:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(9),i=t.n(r),c=t(56),l=t.n(c),u=t(88),d=t.n(u),s=t(57),p=t(14),m=t(15),f=t(21),E=t(20),g=t(22),h=t(723),w=t(725),_=t(708),b=t(722),v=t(16),O=t.n(v),j=t(239),y=t(268),N=t.n(y),C=function(e){return o.a.createElement("div",{className:N.a.loadingWrapper},o.a.createElement(j.a,null))};console.log("production",Object({NODE_ENV:"production",PUBLIC_URL:"/embedded-web"}).REACT_APP_SECRET_CODE);var P,S=[{path:"inputRedeem",title:"\u9a6c\u4e0a\u6fc0\u6d3b\u6807\u51c6/\u9ad8\u7ea7\u8d26\u6237",component:O()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(21)]).then(t.bind(null,717))},loading:function(){return o.a.createElement("div",null)}})},{path:"resultPage",title:"\u9a6c\u4e0a\u6fc0\u6d3b\u6807\u51c6/\u9ad8\u7ea7\u8d26\u6237",component:O()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2)]).then(t.bind(null,707))},loading:C}),children:null}],I="/"===(P="/")?S:function(e){var n=e.split("/").filter(function(e){return!!e});if(0===n.length)return S;for(var t=0,a=n.length,o=[S];o.length>0;){var r=o.pop().find(function(e){return e.path===n[t]});if(!r)return;if((t+=1)===a)return r;var i=r.children;if(!i)return;o.push(i)}}(P).children,R=function(e){function n(){return Object(p.a)(this,n),Object(f.a)(this,Object(E.a)(n).apply(this,arguments))}return Object(g.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement(w.a,null,I.map(function(e){return o.a.createElement(_.a,{path:"/".concat(e.path),component:e.component,key:e.path})}),o.a.createElement(b.a,{to:"/".concat(I[0].path)}))}}]),n}(a.Component),A=t(269),L=t.n(A),T=(Object({NODE_ENV:"production",PUBLIC_URL:"/embedded-web"}).REACT_APP_BASENAME,function(e){function n(){return Object(p.a)(this,n),Object(f.a)(this,Object(E.a)(n).apply(this,arguments))}return Object(g.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement("div",{className:L.a.App},o.a.createElement(R,null)))}}]),n}(a.Component)),B=t(64),D=t(33),U={buttonStatus:{},currentEnv:window.PersonalInfoBridge&&window.PersonalInfoBridge.isLocaleSimplifiedChinese&&window.PersonalInfoBridge.isLocaleSimplifiedChinese()?"zh_CN":"en"},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case"SET_IS_CHINESE":return Object(D.a)({},e,{isChinese:a});default:return e}},k=Object(B.b)(x,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());t(147),t(510),t(175),t(512);l.a.interceptors.request.use(function(e){var n=e.method,t=e.data;return"post"===n&&(e.data=d.a.stringify(t),e.headers={"Content-Type":"application/x-www-form-urlencoded"}),e},function(e){return console.log(e),Promise.reject(e)}),i.a.render(o.a.createElement(s.a,{store:k},o.a.createElement(T,null)),document.getElementById("root"))}},[[506,24,0,1]]]);
//# sourceMappingURL=redeem.423a3236.chunk.js.map