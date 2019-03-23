// index controller
const wx = require('../util/wx')
const config = require('../config');

exports.getHandle = async (ctx, next) => {
    const result = wx.auth(ctx)
    if (result) {
        ctx.body = ctx.query.echostr
    } else {
        ctx.body = { code: -1, msg: "You aren't wechat server !"}
    }
}

exports.postHandle = (ctx, next) => {
    let msg,
        MsgType,
        result

    msg = ctx.req.body ? ctx.req.body.xml : ''

    if (!msg) {
        ctx.body = 'error request.'
        return;
    }
    let url = 'www.codinglobster.cn%2fwxpage%2findex.html';
    let oauthUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
        config.wx.appid + '&redirect_uri=' + url + '&response_type=code&scope=SCOPE&state=STATE#wechat_redirect';

    
    
    MsgType = msg.MsgType[0]

    switch (MsgType) {
        case 'text':
            result = wx.message.text(msg, msg.Content+ '<a src="' + oauthUrl +'">点击授权</a>')
            break;
        default: 
            result = 'success'
    }
    ctx.res.setHeader('Content-Type', 'application/xml')
    ctx.res.end(result)
}
