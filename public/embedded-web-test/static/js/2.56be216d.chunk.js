(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{596:function(n,t,e){"use strict";e.d(t,"b",function(){return r}),e.d(t,"c",function(){return c}),e.d(t,"d",function(){return i}),e.d(t,"a",function(){return o});var r={DEFAULT:"default",INPUTTING:"inputting",DISABLED:"disabled"},c={VIP_READY:"vip-ready",YX_POINT:"yx-point",FREE_ONLY:"free-only",ACTIVE_SUCCESS:"active-success"},i={BASIC:"BASIC",PLUS:"PLUS",PREMIUM:"PREMIUM"},o={DAY:"day",MON:"mon",YEAR:"year"}},613:function(n,t,e){"use strict";var r=e(86),c=function(n){return n.reduce(function(n,t){if("string"===typeof t){var e=n.pop();return[].concat(Object(r.a)(n),"string"!==typeof e?[e,t]:[e+t])}return[].concat(Object(r.a)(n),[t])},[])};t.a=function(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),i=1;i<t;i++)e[i-1]=arguments[i];return function(n,t){var e=[],i=n.reduce(function(n,i){if("?"===i)return[].concat(Object(r.a)(n),[t.shift()]);if("@n"===i)return e.push(c(n)),[];if(/@.+/.test(i)){var o=t.shift();if("function"===typeof o)return[].concat(Object(r.a)(n),[o(i.substring(1))])}return[].concat(Object(r.a)(n),[i])},[]);return[].concat(e,[i])}(function(n){if("string"!==typeof n)throw new Error("copywriting must be a string!");return n.split(/[{}]/)}(n),e)}},614:function(n,t,e){"use strict";function r(n){var t;try{t=n.match(/^(static\.)?(.+)/)[2]}catch(e){console.error(e)}return t}e.d(t,"a",function(){return a}),e.d(t,"b",function(){return u});var c=window.location,i=c.protocol,o=c.hostname,a="".concat("".concat(i,"//").concat(r(o)||"yinxiang.com")),u=("".concat("".concat(i,"//").concat(o)),"".concat(i,"//www.yinxiang.com"),"".concat("".concat(a)));"".concat(r(o)||"yinxiang.com")},615:function(n,t,e){"use strict";e.d(t,"a",function(){return c}),e.d(t,"b",function(){return i}),e.d(t,"d",function(){return o}),e.d(t,"c",function(){return a});var r=e(614),c="".concat(r.b,"/GiftRedeemActivate.action?activateGiftRedeem=true"),i="".concat(r.b,"/GiftRedeemActivate.action?exchangeEarnedPoints=true"),o="yinxiang://upgradeToPremium?offerCode=activate_code",a="yinxiang://upgradeToPlus?offerCode=activate_code"},616:function(n,t,e){"use strict";e.r(t),e.d(t,"redeemPage",function(){return r}),e.d(t,"INPUT_REDEEM",function(){return c}),e.d(t,"ACTIVE_BUTTON",function(){return i}),e.d(t,"DESCRIBE_VIP",function(){return o}),e.d(t,"CUSTOMER_SERVICE",function(){return a}),e.d(t,"FREE_ONLY_TITLE",function(){return u}),e.d(t,"YX_POINT_TITLE",function(){return s}),e.d(t,"YX_POINT_DESC",function(){return d}),e.d(t,"VIP_READY_TITLE",function(){return f}),e.d(t,"VIP_READY_DESC",function(){return E}),e.d(t,"INPUT_YX_POINT",function(){return _}),e.d(t,"ACTIVE_SUCCESS_TITLE",function(){return p}),e.d(t,"ACTIVE_SUCCESS_DESC",function(){return l}),e.d(t,"INPUT_VIP_DESC",function(){return R}),e.d(t,"YEAR",function(){return m}),e.d(t,"MON",function(){return v}),e.d(t,"DAY",function(){return g}),e.d(t,"PER",function(){return I}),e.d(t,"PLUS",function(){return P}),e.d(t,"PREMIUM",function(){return T}),e.d(t,"ERR_ALREADY_USED",function(){return w}),e.d(t,"ERR_GROUP_OWNER",function(){return b}),e.d(t,"ERR_PERSONAL_ONLY",function(){return N}),e.d(t,"ERR_ALREADY_REDEEMED",function(){return y}),e.d(t,"ERR_REDEEM_AGAIN",function(){return A}),e.d(t,"ERR_REDEEM_EXPIRED",function(){return C}),e.d(t,"ERR_FREE_ONLY",function(){return O}),e.d(t,"ERR_REDEEM_INVAILD",function(){return h}),e.d(t,"ERR_REDEEM_ERROR",function(){return S}),e.d(t,"ERR_AUTH_TOKEN_INVAILD",function(){return D}),e.d(t,"ERR_COMMON_TIPS",function(){return Y});var r="\u6fc0\u6d3b\u6807\u51c6/\u9ad8\u7ea7\u5e10\u6237",c="XXXXX XXXXX XXXXX XXXXX",i="\u9a6c\u4e0a\u6fc0\u6d3b",o="\u4f53\u9a8c\u66f4\u5f3a\u5927\u7684\u5370\u8c61\u7b14\u8bb0\u6807\u51c6/\u9ad8\u7ea7\u5e10\u6237\u529f\u80fd\u3002{@n}\u8f93\u5165\u6fc0\u6d3b\u7801\u8fdb\u884c\u6fc0\u6d3b\uff1a",a="\u8054\u7cfb\u5ba2\u670d",u="\u672c\u6d3b\u52a8\u4ec5\u9650\u514d\u8d39\u7528\u6237\u53c2\u52a0",s="\u606d\u559c\u4f60\u8d5a\u5230\u4e86{?}\u4e2a\u5370\u8c61\u5206",d="\u53ef\u767b\u5f55yinxiang.com\uff0c{@n}\u5728\u5e10\u6237\u8bbe\u7f6e\u4e2d\u7684{@\u5370\u8c61\u5206}\u9875\u9762\uff0c\u5151\u6362\u9ad8\u7ea7\u5e10\u6237\u3002",f="\u4f60\u5df2\u7ecf\u662f{?}\u5e10\u6237",E="\u4f60\u7684\u5e10\u6237\u5c06\u4f1a\u5f97\u5230\u5370\u8c61\u5206\uff0c\u5370\u8c61\u5206\u53ef\u5151\u6362\u9ad8\u7ea7\u5e10\u6237\u3002",_="\u5151\u6362\u5370\u8c61\u5206",p="\u6fc0\u6d3b\u6210\u529f\uff01",l="\u4f60\u7684\u5e10\u6237\u5df2\u5347\u7ea7\u5230{?}{?}\u5e10\u6237",R="\u4e86\u89e3{?}\u5e10\u6237\u529f\u80fd",m="\u5e74",v="\u6708",g="\u5929",I="\u4e2a",P="\u6807\u51c6",T="\u9ad8\u7ea7",w="\u6fc0\u6d3b\u7801\u5df2\u4f7f\u7528\uff0c\u4e0d\u80fd\u91cd\u590d\u4f7f\u7528",b="\u4f60\u662f\u8d5e\u52a9\u7fa4\u7ec4\u7684\u6240\u6709\u8005\uff0c\u6240\u6709\u8005\u4e0d\u80fd\u9886\u53d6\u6fc0\u6d3b\u7801\u3002",N="\u4ec5\u652f\u6301\u4e2a\u4eba\u5e10\u6237\u5151\u6362",y="\u6fc0\u6d3b\u7801\u5df2\u4f7f\u7528\uff0c\u4e0d\u80fd\u91cd\u590d\u4f7f\u7528",A="\u5bf9\u4e0d\u8d77\uff0c\u4f60\u4e0d\u80fd\u518d\u6b21\u53c2\u52a0\u6b64\u6d3b\u52a8",C="\u6fc0\u6d3b\u7801\u5df2\u8fc7\u671f",O="\u672c\u6d3b\u52a8\u4ec5\u9650\u514d\u8d39\u7528\u6237\u53c2\u52a0",h="\u6fc0\u6d3b\u7801\u65e0\u6548",S="\u6fc0\u6d3b\u7801\u9519\u8bef",D="token\u65e0\u6548\uff0c\u8bf7\u5173\u95ed\u7f51\u9875\u91cd\u8bd5",Y="\u4f60\u8fd8\u6ca1\u6709\u8fde\u63a5\u5230\u4e92\u8054\u7f51\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5"},617:function(n,t,e){"use strict";e.d(t,"h",function(){return r}),e.d(t,"a",function(){return c}),e.d(t,"e",function(){return i}),e.d(t,"g",function(){return o}),e.d(t,"c",function(){return a}),e.d(t,"f",function(){return u}),e.d(t,"b",function(){return s}),e.d(t,"d",function(){return d}),e.d(t,"k",function(){return f}),e.d(t,"j",function(){return E}),e.d(t,"i",function(){return _});var r=function(){return window.ga("send","event","activate","show_activate")},c=function(){return window.ga("send","event","activate","click_activate_now_btn")},i=function(){return window.ga("send","event","activate","show_code_error")},o=function(){return window.ga("send","event","activate","show_code_null")},a=function(){return window.ga("send","event","activate","show_help_btn")},u=function(){return window.ga("send","event","activate","show_free_user")},s=function(n){return window.ga("send","event","activate","show_activate_success",function(n){return["gift-3day","gift-7day","gift-14day","gift-1mon","gift-2mon","gift-3mon","gift-6mon","gift-1year","gift-3year","plus-gift-1mon","plus-gift-2mon","plus-gift-3mon","plus-gift-6mon","plus-gift-1year","plus-gift-3year"].indexOf(n)+1}(n))},d=function(n){return window.ga("send","event","activate","click_vip_desciption",n)},f=function(){return window.ga("send","event","activate","show_evernote_score")},E=function(){return window.ga("send","event","activate","click_exchange_btn")},_=function(n){return window.ga("send","event","activate","show_evernote_score",function(n){return[5,10,15,20,30,60,120,180,360].indexOf(n)+1}(n))}},618:function(n,t,e){"use strict";var r=e(0),c=e.n(r),i=e(255),o=e(684),a=e.n(o),u=function(n){var t=n.text,e=n.onClick,r=n.buttonWrapperClass,o=n.CustomButtonIcon,u=n.CustomLoadingIcon,s=n.loading,d=n.disabled;return c.a.createElement("div",{className:"".concat(a.a.buttonWrapper," ").concat(r," ").concat(d?a.a.disabled:""),onClick:e},c.a.createElement("div",{className:a.a.buttonMain},t,c.a.createElement("div",{className:"".concat(a.a.buttonIcon," ").concat(o?"":a.a.hide)},o||"")),c.a.createElement("div",{className:"".concat(a.a.loadingIcon," ").concat(s?"":a.a.hide)},u||c.a.createElement(i.a,null)))};u.defaultProps={loading:!1},t.a=u},619:function(n,t,e){"use strict";var r=e(0),c=e.n(r),i=e(686),o=e.n(i);t.a=function(n){var t=n.content,e=n.className;return c.a.createElement("div",{className:e},Array.isArray(t)?t.map(function(n,t){return c.a.createElement("p",{key:t,className:o.a.describe},function(n){return Array.isArray(n)?n.map(function(n,t){return c.a.createElement("span",{key:t},n)}):n}(n))}):c.a.createElement("p",{className:o.a.describe},t))}},621:function(n,t,e){"use strict";var r={};e.r(r),e.d(r,"redeemPage",function(){return c}),e.d(r,"INPUT_REDEEM",function(){return i}),e.d(r,"ACTIVE_BUTTON",function(){return o}),e.d(r,"DESCRIBE_VIP",function(){return a}),e.d(r,"CUSTOMER_SERVICE",function(){return u}),e.d(r,"FREE_ONLY_TITLE",function(){return s}),e.d(r,"YX_POINT_TITLE",function(){return d}),e.d(r,"YX_POINT_DESC",function(){return f}),e.d(r,"VIP_READY_TITLE",function(){return E}),e.d(r,"VIP_READY_DESC",function(){return _}),e.d(r,"INPUT_YX_POINT",function(){return p}),e.d(r,"ACTIVE_SUCCESS_TITLE",function(){return l}),e.d(r,"ACTIVE_SUCCESS_DESC",function(){return R}),e.d(r,"INPUT_VIP_DESC",function(){return m}),e.d(r,"YEAR",function(){return v}),e.d(r,"MON",function(){return g}),e.d(r,"DAY",function(){return I}),e.d(r,"PER",function(){return P}),e.d(r,"PLUS",function(){return T}),e.d(r,"PREMIUM",function(){return w}),e.d(r,"ERR_ALREADY_USED",function(){return b}),e.d(r,"ERR_GROUP_OWNER",function(){return N}),e.d(r,"ERR_PERSONAL_ONLY",function(){return y}),e.d(r,"ERR_ALREADY_REDEEMED",function(){return A}),e.d(r,"ERR_REDEEM_AGAIN",function(){return C}),e.d(r,"ERR_REDEEM_EXPIRED",function(){return O}),e.d(r,"ERR_FREE_ONLY",function(){return h}),e.d(r,"ERR_REDEEM_INVAILD",function(){return S}),e.d(r,"ERR_REDEEM_ERROR",function(){return D}),e.d(r,"ERR_AUTH_TOKEN_INVAILD",function(){return Y}),e.d(r,"ERR_COMMON_TIPS",function(){return L});var c="Activate Plus/Premium Account",i="Enter activation code",o="Activate now",a="Get Plus/Premium features. Enter activation code below: ",u="Contact Us",s="You are already using a Plus or Premium account.",d="{?} points have been credited to your account",f="You can redeem them for Premium in your Account Settings page on yinxiang.com.",E="You are already {?}",_="Points will be credited to your account. You can redeem them for Premium in the future.",p="Get points",l="Activated!",R="You have activated {?} {?}",m="Learn More About {?} Account",v="year",g="month",I="day",P="",T="Plus",w="Premium",b="This code has already been redeemed.",N="You are the owner of a Sponsored Group. Owners cannot redeem codes.",y="To redeem this code, log into your personal account.",A="This code has already been redeemed.",C="Sorry, you can't redeem this promotion again.",O="Sorry, this code has expired.",h="You are already using a Plus or Premium account.",S="Invalid code",D="Invalid code",Y="Token invaild\uff0cRefresh the page then try again",L="Connection error. Please try again later.",x=e(616);t.a={en:r,zh_CN:x}},684:function(n,t,e){n.exports={buttonWrapper:"BasicButton_buttonWrapper__17jCG",buttonMain:"BasicButton_buttonMain__1P-Q9",buttonIcon:"BasicButton_buttonIcon__3GphJ",hide:"BasicButton_hide__w0V1H",loadingIcon:"BasicButton_loadingIcon__3X3Xj",disabled:"BasicButton_disabled__372b2"}},686:function(n,t,e){n.exports={describe:"Description_describe__qvrZS"}},691:function(n,t,e){n.exports={wrapper:"ResultPage_wrapper__3swMa",capture:"ResultPage_capture__VijrY",title:"ResultPage_title__1WgHm",content:"ResultPage_content__OPZh8",button:"ResultPage_button__Ltp39"}},693:function(n,t,e){n.exports={wrapper:"ResultPage_wrapper__-B51V",em:"ResultPage_em__32GNw"}},695:function(n,t,e){n.exports=e.p+"static/media/vip.35d4d8a4.png"},696:function(n,t,e){n.exports=e.p+"static/media/vip@2x.a20313c6.png"},697:function(n,t,e){n.exports=e.p+"static/media/vip@3x.d769abb2.png"},698:function(n,t,e){n.exports=e.p+"static/media/freeonly.3d9b9b8b.png"},699:function(n,t,e){n.exports=e.p+"static/media/freeonly@2x.6eedde27.png"},700:function(n,t,e){n.exports=e.p+"static/media/freeonly@3x.24481e61.png"},701:function(n,t,e){n.exports=e.p+"static/media/yxpoint.c89bd474.png"},702:function(n,t,e){n.exports=e.p+"static/media/yxpoint@2x.d494de52.png"},703:function(n,t,e){n.exports=e.p+"static/media/yxpoint@3x.d03ac677.png"},704:function(n,t,e){n.exports=e.p+"static/media/activesuccess.234d0281.png"},705:function(n,t,e){n.exports=e.p+"static/media/activesuccess@2x.ce67cd69.png"},706:function(n,t,e){n.exports=e.p+"static/media/activesuccess@3x.ac3fa113.png"},710:function(n,t,e){"use strict";e.r(t);var r=e(14),c=e(15),i=e(21),o=e(20),a=e(22),u=e(0),s=e.n(u),d=e(104),f=e.n(d),E=e(59),_=e(596),p=e(621),l=e(613),R=e(615),m=e(617),v=e(618),g=e(619),I=e(691),P=e.n(I),T=function(n){var t=n.img,e=n.buttonText,r=n.title,c=n.content,i=n.onClick;return s.a.createElement("div",{className:P.a.wrapper},s.a.createElement("div",null,s.a.createElement("img",{className:P.a.capture,src:t,alt:""})),s.a.createElement("p",{className:P.a.title},r),c&&s.a.createElement(g.a,{content:c,className:P.a.content}),e&&s.a.createElement(v.a,{buttonWrapperClass:P.a.button,text:Array.isArray(e)?e[0].join(""):e,onClick:i}))};T.defaultProps={onClick:function(){}};var w=T,b=e(693),N=e.n(b),y=e(695),A=e.n(y),C=e(696),O=e.n(C),h=e(697),S=e.n(h),D=e(698),Y=e.n(D),L=e(699),x=e.n(L),M=e(700),U=e.n(M),X=e(701),V=e.n(X),j=e(702),B=e.n(j),k=e(703),G=e.n(k),F=e(704),W=e.n(F),H=e(705),J=e.n(H),z=e(706),K=e.n(z),Z=function(n){function t(n){var e;Object(r.a)(this,t),(e=Object(i.a)(this,Object(o.a)(t).call(this,n))).isHighRes=function(){return window.devicePixelRatio>=1.5},e.isRetina=function(){return window.devicePixelRatio>2},e.getProperImg=function(n,t,r){return e.isRetina()?n:e.isHighRes()?t:r},e._resolveTime=function(n){var t=e.private.copywriting,r=t.YEAR,c=t.MON,i=t.DAY,o=t.PER;return n===_.a.MON?o+c:n===_.a.DAY?i:r},e._resolveUserLevel=function(n){var t=e.private.copywriting,r=t.PLUS,c=t.PREMIUM;return n===_.d.PREMIUM?c:r},e.redeemYXPoint=function(){e.props.activeYXPoints()},e.redirectToIntroPage=function(n){Object(m.d)(n===_.d.PREMIUM?2:1),window.location.href=n===_.d.PREMIUM?R.d:R.c,setTimeout(function(){return window.location.href="native://close"},0)},e.getDescriptions=function(){var n=e.state,t=n.resultType,r=n.unit,c=n.num,i=n.userLevel,o=e.props.currentEnv,a=e.private.copywriting,u=a.FREE_ONLY_TITLE,d=a.YX_POINT_TITLE,f=a.YX_POINT_DESC,E=a.VIP_READY_TITLE,p=a.VIP_READY_DESC,R=a.INPUT_YX_POINT,m=a.ACTIVE_SUCCESS_TITLE,v=a.ACTIVE_SUCCESS_DESC,g=a.INPUT_VIP_DESC,I=_.c.VIP_READY,P=_.c.YX_POINT,T=_.c.FREE_ONLY,w=_.c.ACTIVE_SUCCESS,b=e._resolveUserLevel(i),y={};switch(t){case I:y={img:e.getProperImg(S.a,O.a,A.a),title:Object(l.a)(E,b),content:Object(l.a)(p,b),buttonText:R,onClick:e.redeemYXPoint};break;case P:y={img:e.getProperImg(G.a,B.a,V.a),title:Object(l.a)(d,c),content:Object(l.a)(f,function(n){return s.a.createElement("span",{className:N.a.em},n)})};break;case T:y={img:e.getProperImg(U.a,x.a,Y.a),title:u};break;case w:y={img:e.getProperImg(K.a,J.a,W.a),title:m,content:"zh_CN"===o?Object(l.a)(v,"".concat(c).concat(e._resolveTime(r)),b):Object(l.a)(v,"".concat(c,"-").concat(e._resolveTime(r)),b),buttonText:Object(l.a)(g,b),onClick:function(){return e.redirectToIntroPage(i)}}}return y};var c=n.resultType,a=n.location,u=n.userLevel,d=f.a.parse(a&&a.search),E=d.resultType,v=d.num,g=d.unit,I=d.userLevel;return e.state={resultType:c||E,num:v,unit:g,userLevel:u||I},e.private={copywriting:p.a[e.props.currentEnv]},e}return Object(a.a)(t,n),Object(c.a)(t,[{key:"componentDidMount",value:function(){var n=window.OperateTitleBarBridge;n&&(n.hideTitle(),n.hideLeftBackIcon(),n.showRightView())}},{key:"render",value:function(){return s.a.createElement("div",{className:N.a.wrapper},s.a.createElement(w,this.getDescriptions()))}}]),t}(u.Component);Z.defaultProps={resultType:"",activeYXPoints:function(){}};t.default=Object(E.b)(function(n){return{currentEnv:n.currentEnv}})(Z)}}]);
//# sourceMappingURL=2.56be216d.chunk.js.map