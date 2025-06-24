var express = require('express');
var router = express.Router();


const fs = require("fs");//dosya işlemleri 

const routes = fs.readdirSync(__dirname)//bulunduğu konum

for(let route of routes){
  if(route.includes(".js") && route !== "index.js"){
    router.use(require("./"+route).replace(".js",""), require("./"+route))
  }
}


// const config = require('../config')
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Project-A', config });
// });

module.exports = router;
