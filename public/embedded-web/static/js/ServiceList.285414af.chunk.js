(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{595:function(e,t,c){"use strict";c.d(t,"c",function(){return _}),c.d(t,"b",function(){return v}),c.d(t,"a",function(){return d});var n,i=c(195),a=0,o=1,s=2,r=3,l=4,_=(n={},Object(i.a)(n,a,"\u672a\u77e5"),Object(i.a)(n,o,"\u5370\u8c61\u7b14\u8bb0\u514d\u8d39\u5e10\u6237"),Object(i.a)(n,s,"\u5370\u8c61\u7b14\u8bb0\u6807\u51c6\u5e10\u6237"),Object(i.a)(n,r,"\u5370\u8c61\u7b14\u8bb0\u9ad8\u7ea7\u5e10\u6237"),Object(i.a)(n,l,"\u5370\u8c61\u7b14\u8bb0\u4f01\u4e1a\u5e10\u6237"),n),v={NO_PROFILE_NO_OPENAPI:0,NO_PROFILE_SINGLE_OPENAPI:1,SINGLE_PROFILE_NO_OPENAPI:2,SINGLE_PROFILE_SINGLE_OPENAPI_SAME:3,SINGLE_PROFILE_SINGLE_OPENAPI_DIFFERENT:4},d={MYYXBJ:"\u6211\u7684\u5370\u8c61\u7b14\u8bb0",MICRO_LIST:"\u5fae\u6e05\u5355"}},660:function(e,t,c){e.exports={serviceList:"ServiceList_serviceList__3yI3_",title:"ServiceList_title__1bXN1",block:"ServiceList_block__1Z45I",top:"ServiceList_top__1skhM",avator:"ServiceList_avator__19oI9",alias:"ServiceList_alias__1OWdf",line:"ServiceList_line__DixiN",label:"ServiceList_label__1Z-Gf",value:"ServiceList_value__1frm8",leftBlock:"ServiceList_leftBlock__1PS2U",evernote:"ServiceList_evernote__1PRX3",myyxbj:"ServiceList_myyxbj__34z9d",microlist:"ServiceList_microlist__1_QQB",detail:"ServiceList_detail__3tRKL",name:"ServiceList_name__3HL7X",detailInfo:"ServiceList_detailInfo__2m0bi",rightBlock:"ServiceList_rightBlock__3d7ox",connectBtn:"ServiceList_connectBtn__3kNXm",direct:"ServiceList_direct__2i3KA",desc:"ServiceList_desc__1_r-r",confirmBtn:"ServiceList_confirmBtn__3k5eV"}},722:function(e,t,c){"use strict";c.r(t);var n=c(85),i=c(14),a=c(15),o=c(22),s=c(20),r=c(21),l=c(0),_=c.n(l),v=c(58),d=c(591),u=c.n(d),m=c(194),f=c(112),L=c(595),b=c(199),O=c(579),S=c(55),h=c(660),p=c.n(h),E=function(e){function t(){var e,c;Object(i.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(c=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={loading:!0,devices:[]},c.getServiceList=function(e){e||c.props.history.push("/account-info"),e&&b.a.ListUserDevices(e).then(function(e){console.log(e.toObject()),c.setState({devices:e.toObject().userdeviceList,loading:!1})}).catch(function(e){console.warn(e)})},c.confirmCancelConnect=function(e){Object(O.e)(),Object(O.w)(),Object(m.a)({title:f.yb,content:f.o,operates:[{text:f.Ob,onClick:function(){return c.cancelConnect(e)}},{text:f.cb,main:!0,onClick:O.a}]})},c.cancelConnect=function(e){var t=e.channelid;Object(O.l)();var n=c.props.wechatSessionId;b.a.Disconnect(n,t).then(function(e){console.log("disconnected"),window.wx.closeWindow()}).catch(function(e){console.error(e),Object(m.a)({content:f.s})}).finally(function(){})},c.reconnect=function(e){Object(O.c)();var t=e.channelid,n=e.deviceidentifier,i=e.devicedescription,a=c.props.wechatSessionId;b.a.Reconnect(a,t,n,i).then(function(e){console.log("connected"),window.wx.closeWindow()}).catch(function(e){Object(m.a)({content:f.s}),console.error(e)}).finally(function(){})},c.getConnectButton=function(e){var t=e.isconnected,n=e.channelid;if("boolean"===typeof t&&n){var i=t?f.n:f.qb,a=t?c.confirmCancelConnect:c.reconnect;return _.a.createElement("div",{className:p.a.rightBlock},_.a.createElement("button",{className:p.a.connectBtn,onClick:function(){return a(e)}},i),_.a.createElement("div",{className:p.a.direct}))}},c.getProperClassname=function(e){switch(e){case L.a.MYYXBJ:return"myyxbj";case L.a.MICRO_LIST:return"microlist";default:return"evernote"}},c}return Object(r.a)(t,e),Object(a.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.wechatSessionId;this.getServiceList(t)}},{key:"componentDidMount",value:function(){var e=this.props.wechatSessionId;this.getServiceList(e),Object(O.o)()}},{key:"render",value:function(){var e=this,t=this.state,c=t.loading,i=t.devices;return _.a.createElement("div",{className:p.a.serviceList},_.a.createElement("div",{className:p.a.title},_.a.createElement("span",null,f.i)),c&&_.a.createElement(S.a,null),_.a.createElement("div",{className:p.a.block},i.reduce(function(t,c,i){var a=c.name,o=(c.devicekey,c.type),s=c.devicesessionList,r=void 0===s?{}:s,l="".concat(p.a.avator," ").concat(p.a[e.getProperClassname(o)]),v=r.map(function(t,c){var n=t.lastaccesstime;t.appname,t.devicedescription;console.log(n);var s=-1!==n&&u()(n).format("YYYY\u5e74MM\u6708DD\u65e5\u8bbf\u95ee\u8fc7");return _.a.createElement("div",{className:p.a.line,key:"".concat(i,"-").concat(c)},_.a.createElement("div",{className:p.a.leftBlock},_.a.createElement("div",{className:l}),_.a.createElement("div",{className:p.a.detail},_.a.createElement("div",{className:p.a.name},o),_.a.createElement("div",{className:p.a.detailInfo},a),_.a.createElement("div",{className:p.a.detailInfo},s))),e.getConnectButton(t))});return[].concat(Object(n.a)(t),Object(n.a)(v))},[])))}}]),t}(l.Component);t.default=Object(v.b)(function(e){return{wechatSessionId:e.wechatSessionId,setWechatJsReady:e.setWechatJsReady}})(E)}}]);
//# sourceMappingURL=ServiceList.285414af.chunk.js.map