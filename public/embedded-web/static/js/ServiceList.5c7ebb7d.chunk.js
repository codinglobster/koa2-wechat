(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{656:function(e,t,c){e.exports={serviceList:"ServiceList_serviceList__3yI3_",title:"ServiceList_title__1bXN1",block:"ServiceList_block__1Z45I",top:"ServiceList_top__1skhM",avator:"ServiceList_avator__19oI9",alias:"ServiceList_alias__1OWdf",line:"ServiceList_line__DixiN",label:"ServiceList_label__1Z-Gf",value:"ServiceList_value__1frm8",leftBlock:"ServiceList_leftBlock__1PS2U",evernote:"ServiceList_evernote__1PRX3",myyxbj:"ServiceList_myyxbj__34z9d",microlist:"ServiceList_microlist__1_QQB",detail:"ServiceList_detail__3tRKL",name:"ServiceList_name__3HL7X",detailInfo:"ServiceList_detailInfo__2m0bi",rightBlock:"ServiceList_rightBlock__3d7ox",connectBtn:"ServiceList_connectBtn__3kNXm",direct:"ServiceList_direct__2i3KA",desc:"ServiceList_desc__1_r-r",confirmBtn:"ServiceList_confirmBtn__3k5eV"}},717:function(e,t,c){"use strict";c.r(t);var n=c(14),i=c(15),a=c(22),o=c(20),s=c(21),r=c(0),l=c.n(r),v=c(58),_=c(194),d=c(112),m=c(175),f=c(577),u=c(656),p=c.n(u),b=function(e){function t(){var e,c;Object(n.a)(this,t);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(c=Object(a.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={devices:[{deviceKey:"",name:"",type:"\u5370\u8c61\u7b14\u8bb0IOS\u7248",deviceSession:{consumerKey:"",createTime:"",lastAccessTime:"",appName:"",channelId:"",deviceIdentifier:"",deviceDescription:"",isConnected:!0}}]},c.confirmCancelConnect=function(e){Object(f.e)(),Object(f.x)(),Object(_.a)({title:d.xb,content:d.o,operates:[{text:d.Nb,onClick:function(){return c.cancelConnect(e)}},{text:d.bb,main:!0,onClick:f.a}]})},c.cancelConnect=function(e){var t=e.channelId;console.log("do something"),Object(f.m)(),m.a.Disconnect(t).then(function(e){}).catch(function(e){console.error(e)}).finally(function(){window.wx.closeWindow()})},c.reconnect=function(e){Object(f.c)();var t=e.channelId,c=e.deviceIdentifier,n=e.deviceDescription;m.a.Reconnect(t,c,n).then(function(e){}).catch(function(e){console.error(e)}).finally(function(){window.wx.closeWindow()})},c.getConnectButton=function(e){var t=e.isConnected;if(console.log(t,typeof t),"boolean"===typeof t){var n=t?d.n:d.pb,i=t?c.confirmCancelConnect:c.reconnect;return l.a.createElement("div",{className:p.a.rightBlock},l.a.createElement("button",{className:p.a.connectBtn,onClick:function(){return i(e)}},n),l.a.createElement("div",{className:p.a.direct}))}},c}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(){var e=this,t=this.props.wechatSessionId;t||this.props.history.push("/account-info"),t&&m.a.ListUserDevices(t).then(function(t){e.setState({devices:t.toObject()})}).catch(function(e){console.warn(e)})}},{key:"componentDidMount",value:function(){Object(f.p)()}},{key:"render",value:function(){var e=this,t=this.state.devices;return l.a.createElement("div",{className:p.a.serviceList},l.a.createElement("div",{className:p.a.title},l.a.createElement("span",null,d.i)),l.a.createElement("div",{className:p.a.block},t.map(function(t){var c=t.deviceKey,n=t.type,i=t.deviceSession,a=void 0===i?{}:i,o=a.deviceDescription,s=a.lastAccessTime,r="".concat(p.a.avator," ").concat(p.a.evernote);return l.a.createElement("div",{className:p.a.line,key:c},l.a.createElement("div",{className:p.a.leftBlock},l.a.createElement("div",{className:r}),l.a.createElement("div",{className:p.a.detail},l.a.createElement("div",{className:p.a.name},n),l.a.createElement("div",{className:p.a.detailInfo},o),l.a.createElement("div",{className:p.a.detailInfo},s))),e.getConnectButton(a))})))}}]),t}(r.Component);t.default=Object(v.b)(function(e){return{wechatSessionId:e.wechatSessionId,setWechatJsReady:e.setWechatJsReady}})(b)}}]);
//# sourceMappingURL=ServiceList.5c7ebb7d.chunk.js.map