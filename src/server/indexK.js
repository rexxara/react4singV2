const Koa = require('koa')
const app = new Koa();
const SingSdk = require('5sing-sdk')
const fs=require('fs')
const controller = require('./controller');
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
const router = require('koa-router')();
// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});


// 导入controller middleware:

// 使用middleware:
app.use(controller());



router.get('/', async(ctx, next) => {
    var htmlFile = await (new Promise(function(resolve, reject){
        fs.readFile('./src/server/views/index.html', (err, data) => {
          if (err){
            reject(err);
          }else{
            resolve(data);
          }
        });
    }))
    ctx.type = 'html';
    ctx.body = htmlFile;
  });
  
// add router middleware:
app.use(router.routes());

app.listen(4000);
console.log('koa listening in http://localhost:4000/')


