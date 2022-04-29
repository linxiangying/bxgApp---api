//* 导包：mysql
const mysql = require('mysql')
//* 配置 数据库
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'admin123',
  database: 'bxg_app'
})
//* 共享成员
module.exports=db