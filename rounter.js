// 1导包
const express = require('express');
const signin =require('./controllers/signin');
// 2实例化rounter
const rounter = express.Router();
// 3配置路由
rounter.get('/signin',signin.showsignin);
// 导出rounter对象
module.exports = rounter;

