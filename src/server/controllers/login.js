const SingSdk = require('5sing-sdk')
const fs=require('fs')



  var login = function (name,password) {
    return new Promise(function (resolve, reject) {
        SingSdk.login({
            username: name,
            password: password
          }, (res) => {
              var resstate={
                  "userId":res.userId,
                  "sign":res.sign
              }
            fs.writeFileSync(`./userdata.json`, JSON.stringify(resstate), 'utf8');
            resolve(res)
            console.log('res', res)
          }, (err) => {
            console.log(err)
            resove(err)
          })
    })
};


var fn_signin = async (ctx, next) => {
    var name = ctx.request.body.name || '',password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    // var res= await login(name,password)
        // ctx.response.body = `<h1>${JSON.stringify(res)}</h1>
        // <p><a href="/">Try again</a></p>`;
        ctx.response.body=`signin with name: ${name}, password: ${password}`
};

module.exports = {
    'POST /signin': fn_signin
};

