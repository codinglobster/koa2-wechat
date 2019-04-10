const Koa = require('koa');
const fs = require("fs");
const path = require('path');
var http = require('http');
var https = require('https');
const static = require('koa-static');
const config = require('./src/config')
const logger = require('./src/middleware/logger')
const xmlParse = require('./src/middleware/xmlParse')
const router = require('./src/router')
const httpProxy = require('http-proxy-middleware');
const k2c = require('koa2-connect');
const enforceHttps = require('koa-sslify');

const app = new Koa()


app
  .use(logger())
  .use(enforceHttps())
  .use(static(path.join( __dirname, './public')))
  .use(async(ctx, next) => {    
    if (ctx.url.startsWith('/grpc')) { //匹配有api字段的请求url       
      ctx.respond = false // 绕过koa内置对象response ，写入原始res对象，而不是koa处理过的response        
      await k2c(httpProxy({        
        target: 'http://f9265be8.ngrok.io',
        changeOrigin: true,        
        secure: false,        
        pathRewrite: {        
          '^/grpc': ''            
        }        
      }))(ctx,next);    
    } else {
      ctx.respond = false // 绕过koa内置对象response ，写入原始res对象，而不是koa处理过的response        
      await k2c(httpProxy({        
        target: 'https://stage.yinxiang.com',   
        changeOrigin: true,        
        secure: false,              
      }))(ctx,next); 
    }    
    await next();
  })
  .use(xmlParse())
  .use(router.routes())
  .use(router.allowedMethods())
  httpsOption = { 
    key: fs.readFileSync("./https/2039566_codinglobster.cn.key"),
    cert: fs.readFileSync("./https/2039566_codinglobster.cn.pem"),
  }


http.createServer(app.callback()).listen(80);
https.createServer(httpsOption, app.callback()).listen(443);
console.log('server start at port:', config.port)