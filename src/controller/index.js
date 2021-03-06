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
    let url = 'http%3a%2f%2fwww.codinglobster.cn%2fembedded-web%2faccount%2findex.html';
    let oauthUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
        config.wx.appid + '&redirect_uri=' + url + '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';

    console.log(oauthUrl)
    
    MsgType = msg.MsgType[0]

    switch (MsgType) {
        case 'text':
            result = wx.message.text(msg, oauthUrl)
            break;
        default: 
            result = 'success'
    }
    ctx.res.setHeader('Content-Type', 'application/xml')
    ctx.res.end(result)
}

exports.getToken = (ctx, next) => {

    console.log(ctx.body, '==========');
    ctx.status = 200;
    ctx.res.setHeader('Content-Type', 'application/JSON')
    ctx.res.end('111');
}
