(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{595:function(e,t,n){"use strict";n.d(t,"c",function(){return _}),n.d(t,"b",function(){return d}),n.d(t,"a",function(){return v});var c,a=n(196),i=0,o=1,s=2,r=3,l=4,_=(c={},Object(a.a)(c,i,"\u672a\u77e5"),Object(a.a)(c,o,"\u5370\u8c61\u7b14\u8bb0\u514d\u8d39\u5e10\u6237"),Object(a.a)(c,s,"\u5370\u8c61\u7b14\u8bb0\u6807\u51c6\u5e10\u6237"),Object(a.a)(c,r,"\u5370\u8c61\u7b14\u8bb0\u9ad8\u7ea7\u5e10\u6237"),Object(a.a)(c,l,"\u5370\u8c61\u7b14\u8bb0\u4f01\u4e1a\u5e10\u6237"),c),d={NO_PROFILE_NO_OPENAPI:0,NO_PROFILE_SINGLE_OPENAPI:1,SINGLE_PROFILE_NO_OPENAPI:2,SINGLE_PROFILE_SINGLE_OPENAPI_SAME:3,SINGLE_PROFILE_SINGLE_OPENAPI_DIFFERENT:4},v={MYYXBJ:"\u6211\u7684\u5370\u8c61\u7b14\u8bb0",MICRO_LIST:"\u5fae\u6e05\u5355"}},657:function(e,t,n){e.exports={serviceList:"ServiceList_serviceList__3yI3_",title:"ServiceList_title__1bXN1",block:"ServiceList_block__1Z45I",top:"ServiceList_top__1skhM",avator:"ServiceList_avator__19oI9",alias:"ServiceList_alias__1OWdf",line:"ServiceList_line__DixiN",label:"ServiceList_label__1Z-Gf",value:"ServiceList_value__1frm8",leftBlock:"ServiceList_leftBlock__1PS2U",evernote:"ServiceList_evernote__1PRX3",myyxbj:"ServiceList_myyxbj__34z9d",microlist:"ServiceList_microlist__1_QQB",detail:"ServiceList_detail__3tRKL",name:"ServiceList_name__3HL7X",detailInfo:"ServiceList_detailInfo__2m0bi",rightBlock:"ServiceList_rightBlock__3d7ox",connectBtn:"ServiceList_connectBtn__3kNXm",direct:"ServiceList_direct__2i3KA",desc:"ServiceList_desc__1_r-r",confirmBtn:"ServiceList_confirmBtn__3k5eV",loadingIcon:"ServiceList_loadingIcon__9fqOk",hide:"ServiceList_hide__2CAbV"}},719:function(e,t,n){"use strict";n.r(t);var c=n(86),a=n(14),i=n(15),o=n(21),s=n(20),r=n(22),l=n(0),_=n.n(l),d=n(59),v=n(591),u=n.n(v),m=n(114),f=n(580),L=n(595),b=n(177),S=n(105),O=n(56),h=n(195),I=n(130),E=n(657),N=n.n(E),p=function(e){function t(){var e,n;Object(a.a)(this,t);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(n=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state={loading:!0,loadingButtons:"",devices:[]},n.getServiceList=function(e){e||n.props.history.push("/account-info"),e&&b.a.ListUserDevices(e).then(function(e){console.log(e.toObject()),n.setState({devices:e.toObject().userdeviceList,loading:!1})}).catch(function(e){console.warn(e)})},n.confirmCancelConnect=function(e){Object(f.e)(),Object(f.w)(),Object(h.a)({title:m.yb,content:m.o,operates:[{text:m.Pb,onClick:function(){return n.cancelConnect(e)}},{text:m.cb,main:!0,onClick:f.a}]})},n.cancelConnect=function(e){var t=e.channelid;Object(f.l)();var c=n.props.wechatSessionId;b.a.Disconnect(c,t).then(function(e){console.log("disconnected"),window.wx.closeWindow()}).catch(function(e){console.error(e),Object(h.a)({content:m.s})}).finally(function(){})},n.reconnect=function(e){Object(f.c)();var t=e.channelid,c=e.deviceidentifier,a=e.devicedescription,i=n.props.wechatSessionId;b.a.Reconnect(i,t,c,a).then(function(e){console.log("connected"),window.wx.closeWindow()}).catch(function(e){Object(h.a)({content:m.s}),console.error(e)}).finally(function(){})},n.getConnectButton=function(e,t){var c=n.state.loadingButtons,a=e.isconnected,i=e.channelid;if("boolean"===typeof a&&i){var o=a?m.n:m.qb,s=a?n.confirmCancelConnect:n.reconnect;return _.a.createElement("div",{className:N.a.rightBlock},_.a.createElement("button",{className:N.a.connectBtn,onClick:function(){n.setState({loadingButtons:t}),s(e)}},o),_.a.createElement("div",{className:"".concat(N.a.loadingIcon)},c===t?_.a.createElement(I.a,null):_.a.createElement("div",{className:N.a.direct})))}},n.getProperClassname=function(e){var t=L.a.MYYXBJ,n=L.a.MICRO_LIST;switch(e){case t:return"myyxbj";case n:return"microlist";default:return"evernote"}},n}return Object(r.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.wechatSessionId;this.getServiceList(t)}},{key:"componentDidMount",value:function(){var e=this.props.wechatSessionId;this.getServiceList(e),Object(f.o)()}},{key:"render",value:function(){var e=this,t=this.state,n=t.loading,a=t.devices;return _.a.createElement("div",{className:N.a.serviceList},_.a.createElement("div",{className:N.a.title},_.a.createElement("span",null,m.i)),n&&_.a.createElement(O.a,null),_.a.createElement("div",{className:N.a.block},a.reduce(function(t,n,a){var i=n.name,o=n.type,s=n.devicesessionList,r=void 0===s?{}:s,l="".concat(N.a.avator," ").concat(N.a[e.getProperClassname(o)]),d=r.map(function(t,n){var c=t.lastaccesstime,s=t.channelid===S.a.channelId?m.Nb:i,r=![-1,0].includes(c)&&u()(c).format("YYYY\u5e74MM\u6708DD\u65e5\u8bbf\u95ee\u8fc7");return _.a.createElement("div",{className:N.a.line,key:"".concat(a,"-").concat(n)},_.a.createElement("div",{className:N.a.leftBlock},_.a.createElement("div",{className:l}),_.a.createElement("div",{className:N.a.detail},_.a.createElement("div",{className:N.a.name},o),_.a.createElement("div",{className:N.a.detailInfo},s),_.a.createElement("div",{className:N.a.detailInfo},r))),e.getConnectButton(t))});return[].concat(Object(c.a)(t),Object(c.a)(d))},[])))}}]),t}(l.Component);t.default=Object(d.b)(function(e){return{wechatSessionId:e.wechatSessionId,setWechatJsReady:e.setWechatJsReady}})(p)}}]);
//# sourceMappingURL=ServiceList.94507242.chunk.js.map