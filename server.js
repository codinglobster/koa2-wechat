const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const config = require('./src/config')
const logger = require('./src/middleware/logger')
const xmlParse = require('./src/middleware/xmlParse')
const router = require('./src/router')
const httpProxy = require('http-proxy-middleware');
const k2c = require('koa2-connect');

const app = new Koa()

app
  .use(logger())
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

app.listen(config.port)
console.log('server start at port:', config.port)