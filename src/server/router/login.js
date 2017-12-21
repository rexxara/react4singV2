const SingSdk = require('5sing-sdk')
const fs=require('fs')
import 'babel-polyfill'
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


  module.exports=function(app){
    app.post('/api/login', function (req, res) {
        var name = req.body.params.name || '',password = req.body.params.password || '';
        console.log(`signin with name: ${name}, password: ${password}`);
        login(name,password).then((data)=>{
            res.send(JSON.stringify(data))
        })
      });
  };