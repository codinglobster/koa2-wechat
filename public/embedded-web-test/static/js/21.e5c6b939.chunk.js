(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{620:function(e,t,n){e.exports={"rc-notification":"Notification_rc-notification__2mqrf","rc-notification-wrapper":"Notification_rc-notification-wrapper__3rxpf","rc-notification-notice":"Notification_rc-notification-notice__3RreJ","rc-notification-notice-closable":"Notification_rc-notification-notice-closable__VNg8H","rc-notification-notice-close":"Notification_rc-notification-notice-close__3Ai4-","rc-notification-notice-close-x":"Notification_rc-notification-notice-close-x__3Yw-s","toast-enter":"Notification_toast-enter__1qnZ8","toast-enter-active":"Notification_toast-enter-active__25rv0","toast-exit":"Notification_toast-exit__2OFVb","toast-exit-active":"Notification_toast-exit-active__26d8v"}},677:function(e,t,n){e.exports=n.p+"static/media/avator.16b2bf13.png"},678:function(e,t,n){e.exports={wrapper:"UserInfo_wrapper__AQjKp",avator:"UserInfo_avator__1trP-",nickname:"UserInfo_nickname__3CxZz",account:"UserInfo_account__1HJmo"}},680:function(e,t,n){e.exports={wrapper:"BasicInput_wrapper__2KzBO",inputWrapper:"BasicInput_inputWrapper__1hQC_",input:"BasicInput_input__1i7tG",inputting:"BasicInput_inputting__2rmlb",disabled:"BasicInput_disabled__17F3E",tipText:"BasicInput_tipText__2pgiN",error:"BasicInput_error__OVLVF",warning:"BasicInput_warning__2NbQF",default:"BasicInput_default__2uQ4_",correct:"BasicInput_correct__fcxws"}},682:function(e,t,n){e.exports={wrapper:"RedeemInput_wrapper__3-JZm",toast:"RedeemInput_toast__1iocS"}},688:function(e,t,n){e.exports={wrapper:"Link_wrapper__2z9SI",link:"Link_link__sBCwO"}},707:function(e,t,n){e.exports={wrapper:"RedeemInput_wrapper__2mu2D",describe:"RedeemInput_describe__2a_sI",button:"RedeemInput_button__2pnQ9",link:"RedeemInput_link__3SJll"}},723:function(e,t,n){"use strict";n.r(t);var a=n(33),o=n(14),i=n(15),r=n(21),c=n(20),s=n(115),l=n(22),u=n(0),p=n.n(u),f=n(58),d=n(59),_=n(104),v=n.n(_),m=n(596),E=n(613),h=n(614),g="".concat(h.a,"/setAuthToken?targetUrl=/SupportLogin.action&auth="),b=n(615),I=n(621),O="ALREADY_REDEEMED_BY_OTHER_USER",R="INELIGIBLE_SPONSOR_OWNER",C="INELIGIBLE_BUSINESS_USER",w="ALREADY_REDEEMED_BY_USER",N="INELIGIBLE_CANNOT_REDEEM_AGAIN",k="INELIGIBLE_EXPIRED",y="INELIGIBLE_ONLY_BASIC",S="SUCCESS",j="INELIGIBLE_OTHER",T="INELIGIBLE_PLUS_USER",P="INELIGIBLE_PREMIUM_USER",B="INVALID_PURCHASE_CODE",L="UNKNOWN_REDEMPTION_ERROR",A="INVALID_AUTHENTICATION_TOKEN",x="PURCHASE_CODE_ERROR",D=n(617),U=/[\s-]/g,M=/[a-zA-Z0-9]{20}/,F=n(677),Y=n.n(F),G=n(678),V=n.n(G),H=function(e){var t=e.avator,n=e.nickname,a=e.account;return p.a.createElement("div",{className:V.a.wrapper},p.a.createElement("div",null,p.a.createElement("img",{className:V.a.avator,src:t,alt:""})),p.a.createElement("div",{className:V.a.nickname},p.a.createElement("span",null,n)),p.a.createElement("div",{className:V.a.account},p.a.createElement("span",null,a)),p.a.createElement("div",null))},K=n(86),W=n(616),J=n(584);var X=n(680),q=n.n(X),Q=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(r.a)(this,Object(c.a)(t).call(this,e))).onChange=function(e){(0,n.props.onChange)(e)},n.onFocus=function(e){(0,n.props.onFocus)(e)},n.getClassByStatus=function(e){return Object.keys(q.a).filter(function(t){return t.indexOf(e)>-1}).map(function(e){return q.a[e]}).join(" ")},n.state={value:""},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.value,t=this.props,n=t.children,a=t.placeHolder,o=t.inputStatus,i=t.onFocus,r=t.forwardRef,c=Object(J.a)(t,["children","placeHolder","inputStatus","onFocus","forwardRef"]);return p.a.createElement("div",{className:q.a.wrapper},p.a.createElement("div",{className:q.a.inputWrapper},p.a.createElement("input",Object.assign({},c,{ref:r,className:"".concat(q.a.input," ").concat(this.getClassByStatus(o)),value:e,placeholder:a,onFocus:i,onChange:this.onChange}))),p.a.createElement("p",{className:"".concat(q.a.tipText," ").concat(this.getClassByStatus(o))},n))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.value,o=t.inputStatus,i=e.value,r=e.inputStatus,c={};return i!==n&&(c=Object(a.a)({},c,{value:i})),r!==o&&(c=Object(a.a)({},c,{inputStatus:r})),c}}]),t}(u.Component);Q.defaultProps={inputStatus:m.b.DEFAULT,value:"",onFocus:function(){}};var z=Q,Z=n(682),$=n.n(Z),ee=20,te=5,ne=Math.ceil(ee/te)-1,ae=ee+ne,oe=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(r.a)(this,Object(c.a)(t).call(this,e))).private={selectionStart:0},n.placeCaretAtEnd=function(e){var t=n.private,a=t.selectionStart,o=t.isAdd,i=a;if(i%6===0&&0!==i&&(o?i+=1:i-=1),e.setSelectionRange)e.focus(),window.setTimeout(function(){return e.setSelectionRange(i,i)},0);else if(e.createTextRange){var r=e.createTextRange();r.collapse(!0),r.moveEnd("character",i),r.moveStart("character",i),r.select()}},n.onChange=function(e){var t=n.props.onChange,a=n.state.value,o=e.target,i=o.value,r=o.selectionStart;n.private.selectionStart=r,n.private.isAdd=a.length<i.length;var c=n.calcuStatus(i),s=c.inputStatus,l=c.value;n.setState({inputStatus:s,value:l}),t(l)},n.calcuStatus=function(e){var t=n.state.value,a=m.b.INPUTTING,o=e;if(e.length>ae&&t.length===ae)o=t,a=m.b.DISABLED,n.private.selectionStart-=1;else if("string"===typeof e&&e.length>0){var i=(o=e.replace(U,"")).length;i>=ee?(a=m.b.DISABLED,o=o.substring(0,ee)):i>0&&(a=m.b.INPUTTING),o=n.insertBlank(o)}return{inputStatus:a,value:o}},n.insertBlank=function(e){return e.split("").reduce(function(t,n,a){var o=a+1;return o%te===0&&o!==e.length?[].concat(Object(K.a)(t),[n," "]):[].concat(Object(K.a)(t),[n])},[]).join("")},n.ref=p.a.createRef(),n.state={value:"",inputStatus:m.b.INPUTTING},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){window.el=this.ref.current,this.placeCaretAtEnd(this.ref.current)}},{key:"render",value:function(){var e=this.state,t=e.value,n=e.inputStatus,a=this.onChange;return p.a.createElement("div",{className:$.a.wrapper},p.a.createElement(z,{value:t,inputStatus:n,placeHolder:W.INPUT_REDEEM,onChange:a,forwardRef:this.ref}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.value;return e.value!==n?{value:n}:{}}}]),t}(u.Component);oe.defaultProps={value:"",onFocus:function(){},onEntered:function(){}};var ie=oe,re=n(618),ce=n(619),se=n(196),le=n(589),ue=n.n(le),pe=n(688),fe=n.n(pe),de=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"onClick",value:function(e){e.preventDefault();var t=this.props.onClick,n=e.target.href,a=window.location,o=t();o&&"function"===typeof o.finally?o.finally(function(){a.href=n}):a.href=n}},{key:"render",value:function(){var e=this.props,t=e.href,n=e.message,a=e.className;return p.a.createElement("div",{className:ue()(fe.a.wrapper,Object(se.a)({},a,a))},p.a.createElement("a",{className:ue()(fe.a.link,Object(se.a)({},a,a)),href:t,onClick:this.onClick.bind(this)},n))}}]),t}(u.Component);de.defaultProps={onClick:function(){}};var _e=de,ve=n(9),me=n.n(ve),Ee=n(592),he=n(620),ge=n.n(he),be=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).close=function(){n.clearCloseTimer(),n.props.onClose()},n.startCloseTimer=function(){n.props.duration&&(n.closeTimer=setTimeout(function(){n.close()},1e3*n.props.duration))},n.clearCloseTimer=function(){n.closeTimer&&(clearTimeout(n.closeTimer),n.closeTimer=null)},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentDidUpdate",value:function(e){(this.props.duration!==e.duration||this.props.update)&&this.restartCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"restartCloseTimer",value:function(){this.clearCloseTimer(),this.startCloseTimer()}},{key:"render",value:function(){var e,t=this.props,n="".concat(t.prefixCls,"-notice"),a=(e={},Object(se.a)(e,ge.a["".concat(n)],1),Object(se.a)(e,ge.a["".concat(n,"-closable")],t.closable),Object(se.a)(e,t.className,!!t.className),e);return p.a.createElement("div",{className:ue()(a),style:t.style,onClick:t.onClick},p.a.createElement("div",{className:ge.a["".concat(n,"-content")]},t.children),t.closable?p.a.createElement("a",{tabIndex:"0",onClick:this.close,className:ge.a["".concat(n,"-close")]},t.closeIcon||p.a.createElement("span",{className:ge.a["".concat(n,"-close-x")]})):null)}}]),t}(u.Component);be.defaultProps={onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}};var Ie=0,Oe=Date.now();var Re=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={notices:[]},n.add=function(e){var t=e.key=e.key||"rcNotification_".concat(Oe,"_").concat(Ie++),a=n.props.maxCount;n.setState(function(n){var o=n.notices,i=o.map(function(e){return e.key}).indexOf(t),r=o.concat();return-1!==i?r.splice(i,1,e):(a&&o.length>=a&&(e.updateKey=r[0].updateKey||r[0].key,r.shift()),r.push(e)),{notices:r}})},n.remove=function(e){n.setState(function(t){return{notices:t.notices.filter(function(t){return t.key!==e})}})},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"getTransitionName",value:function(){var e=this.props,t=e.transitionName;return!t&&e.animation&&(t="".concat(e.prefixCls,"-").concat(e.animation)),ge.a[t]}},{key:"render",value:function(){var e,t=this,n=this.props,a=this.state.notices,o=a.map(function(e,o){var i=Boolean(o===a.length-1&&e.updateKey),r=e.updateKey?e.updateKey:e.key,c=function(){var e=[].slice.call(arguments,0);return 1===e.length?e[0]:function(){for(var t=0;t<e.length;t++)e[t]&&e[t].apply&&e[t].apply(this,arguments)}}(t.remove.bind(t,e.key),e.onClose);return p.a.createElement(Ee.CSSTransition,{timeout:500,key:r,unmountOnExit:!0,mountOnEnter:!0,classNames:{enter:ge.a["toast-enter"],enterActive:ge.a["toast-enter-active"],exit:ge.a["toast-exit"],exitActive:ge.a["toast-exit-active"]}},p.a.createElement("div",{className:ge.a["".concat(n.prefixCls,"-wrapper")]},p.a.createElement(be,Object.assign({prefixCls:n.prefixCls},e,{key:r,update:i,onClose:c,onClick:e.onClick,closeIcon:n.closeIcon}),e.content)))}),i=(e={},Object(se.a)(e,ge.a[n.prefixCls],1),Object(se.a)(e,ge.a[n.className],!!n.className),e);return p.a.createElement("div",{className:ue()(i),style:n.style},p.a.createElement(Ee.TransitionGroup,{component:"span"},o))}}]),t}(u.Component);Re.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},Re.newInstance=function(e,t){var n=e||{},a=n.getContainer,o=Object(J.a)(n,["getContainer"]),i=document.createElement("div");a?a().appendChild(i):document.body.appendChild(i);var r=!1;me.a.render(p.a.createElement(Re,Object.assign({},o,{ref:function(e){r||(r=!0,t({notice:function(t){e.add(t)},removeNotice:function(t){e.remove(t)},component:e,destroy:function(){me.a.unmountComponentAtNode(i),i.parentNode.removeChild(i)}}))}})),i)};var Ce=null;Re.newInstance({style:{top:"65px"}},function(e){return Ce=e});var we=n(710),Ne=n(707),ke=n.n(Ne),ye=function(e){Ce.removeNotice(1),Ce.notice({key:1,content:e,duration:3,style:{top:window.document.body.clientWidth>=768&&0===window.orientation?"408px":"179px"}})},Se=function(e){function t(){var e,n;Object(o.a)(this,t);for(var i=arguments.length,l=new Array(i),u=0;u<i;u++)l[u]=arguments[u];return(n=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={loading:!1,disabled:!0,redeemCode:"",resultType:"",userLevel:"",tips:""},n.private={token:"",infos:null,platform:null,channel:null,copywriting:I.a[n.props.currentEnv],showCustomer:!1},n.onChange=function(e){n.setState({redeemCode:e,disabled:e.length<=0,tips:""})},n.startLoading=function(){n.setState({loading:!0,disabled:!0})},n.stopLoading=function(e){e.tips&&ye(e.tips),n.setState(Object(a.a)({loading:!1,disabled:!1},e))},n.getUserInfo=function(){var e=window.PersonalInfoBridge&&JSON.parse(window.PersonalInfoBridge.getPersonalInfo())||window,t=e.token,a=e.phone_num,o=e.email,i=e.nick_name;if(!n.private.infos){var r=window.PersonalInfoBridge&&window.PersonalInfoBridge.getUserPhotoByBase64();n.private.token=t,n.private.platform=window.PersonalInfoBridge&&window.PersonalInfoBridge.getPlatform&&window.PersonalInfoBridge.getPlatform(),n.private.channel=window.PersonalInfoBridge&&window.PersonalInfoBridge.getChannel&&window.PersonalInfoBridge.getChannel(),n.private.infos={avator:r?"data:image/png;base64,".concat(r):Y.a,nickname:i||"-",account:a||o||"-"}}return n.private.infos},n.activeAccount=function(){var e=n.state,t=e.loading,a=e.redeemCode,o=n.private,i=o.token,r=o.platform,c=o.channel,l=Object(s.a)(n),u=l.redirectToResultPage,p=l.startLoading,f=l.stopLoading,d=l._resolvePeriod,_=l._handleError,v=l._commonRequest,E=n.private.copywriting.ERR_REDEEM_ERROR;return Object(D.a)(),!(t||a.length<=0)&&(M.test(a.replace(/[ ]/g,""))?(p(),void v(b.a,{authenticationToken:i,purchaseCode:a.replace(/[ ]/g,"-"),platform:r,channel:c},function(e){var t=e.data,n=(t=void 0===t?{}:t).status,a=t.originUserLevel,o=t.period,i=t.isExchangePoints;if(window.PersonalInfoBridge&&window.PersonalInfoBridge.syncAccountInfo&&window.PersonalInfoBridge.syncAccountInfo(),n===S||n===T||n===y||n===P){var r=d(o),c=r.num,s=r.level,l=r.unit,p=m.a.DAY;a!==m.d.BASIC&&l===p||n===y||n===P?(Object(D.f)(),u({resultType:m.c.FREE_ONLY})):i?(Object(D.k)(),f({resultType:m.c.VIP_READY,userLevel:a})):(Object(D.b)(o),u({resultType:m.c.ACTIVE_SUCCESS,num:c,userLevel:s,unit:l}))}else f({tips:_(n)})})):(ye(E),Object(D.e)(),!1))},n.activeYXPoints=function(){var e=n.state,t=e.loading,a=e.redeemCode,o=n.private,i=o.token,r=o.platform,c=o.channel,l=Object(s.a)(n),u=l.redirectToResultPage,p=l.startLoading,f=l.stopLoading,d=l._handleError,_=l._commonRequest;if(Object(D.j)(),t||a.length<=0)return!1;p(),_(b.b,{authenticationToken:i,purchaseCode:a.replace(/[ ]/g,"-"),platform:r,channel:c},function(e){var t=e.data,n=(t=void 0===t?{}:t).status,a=t.points;n===S?(Object(D.i)(a),u({resultType:m.c.YX_POINT,num:a})):f({tips:d(n)})})},n._resolvePeriod=function(e){return{num:/(\d+)/.exec(e)[1],level:e.split("-").length>2?m.d.PLUS:m.d.PREMIUM,unit:/\d+(\w+)/.exec(e)[1]}},n._commonRequest=function(e,t,a){var o=n.private.copywriting.ERR_COMMON_TIPS;Object(f.post)(e,t).then(a).catch(function(e){console.log(e),n.stopLoading({tips:o})})},n._handleError=function(e){var t=n.private.copywriting,a=t.ERR_REDEEM_INVAILD,o=t.ERR_ALREADY_USED,i=t.ERR_GROUP_OWNER,r=t.ERR_PERSONAL_ONLY,c=t.ERR_ALREADY_REDEEMED,s=t.ERR_REDEEM_AGAIN,l=t.ERR_REDEEM_EXPIRED,u=t.ERR_FREE_ONLY,p=t.ERR_COMMON_TIPS,f=t.ERR_AUTH_TOKEN_INVAILD,d=t.ERR_REDEEM_ERROR,_="";switch(n.private.showCustomer=!1,e){case O:_=o;break;case R:_=i;break;case C:_=r;break;case w:_=c;break;case N:case P:_=s;break;case k:_=l;break;case y:_=u;break;case j:case T:case B:case L:_=a,n.private.showCustomer=!0,Object(D.g)();break;case A:_=f;break;case x:_=d;break;default:_=p}return _},n.redirectToResultPage=function(e){n.props.history.push("resultPage?".concat(v.a.stringify(e)))},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){Object(D.h)();var e=this.private.copywriting.redeemPage;document.title=e;var t=window.OperateTitleBarBridge;t&&(t.showTitle(),t.showLeftBackIcon(),t.hideRightView())}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.disabled,a=e.resultType,o=e.userLevel,i=this.activeAccount,r=this.onChange,c=this.private.copywriting,s=c.ACTIVE_BUTTON,l=c.DESCRIBE_VIP,u=c.CUSTOMER_SERVICE;return p.a.createElement(p.a.Fragment,null,a?p.a.createElement(we.default,{resultType:a,userLevel:o,activeYXPoints:this.activeYXPoints}):p.a.createElement("div",{className:ke.a.wrapper},p.a.createElement(H,this.getUserInfo()),p.a.createElement(ce.a,{content:Object(E.a)(l),className:ke.a.describe}),p.a.createElement(ie,{onChange:r}),p.a.createElement(re.a,{text:s,onClick:i,loading:t,disabled:t||n,buttonWrapperClass:ke.a.button}),this.private.showCustomer&&p.a.createElement(_e,{href:"".concat(g).concat(this.private.token),message:u,onClick:function(){return Object(D.c)()},className:ke.a.link})))}}]),t}(u.Component);t.default=Object(d.b)(function(e){return{currentEnv:e.currentEnv}})(Se)}}]);
//# sourceMappingURL=21.e5c6b939.chunk.js.map