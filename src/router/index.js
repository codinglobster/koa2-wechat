// index router
const Router = require('koa-router')
const controller = require('../controller')
const router = new Router()

router
    .get('/', controller.getHandle)
    .post('/', controller.postHandle)
    .post('/getToken', controller.getToken)

module.exports = router