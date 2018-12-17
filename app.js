// 1.导包
const express =require('express');
const rounter = require('./rounter');
// 2.配置
const app = express();
// 3.1配置静态资源
app.use('/public',express.static('./public'));
// 3.2配置第三方资源
app.use('/node_modules',express.static('./node_modules'));
app.engine('html', require('express-art-template'));
// 3.使用路由
app.use(rounter);
// 4.监听
app.listen(16666,(err,data)=>{
    if(err){
        throw err;
    }
    console.log('thn-----------');
})