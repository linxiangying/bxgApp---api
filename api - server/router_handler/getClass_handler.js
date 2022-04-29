//* 获得课程的路由处理函数

//* 导包：数据库
const mysql =require('mysql')
//* 导模块：数据库
const db = require('../db/index')

module.exports.getClass = (req, res) => {
  //* 查询课程列表 sql 语句
  const sqlStr = 'SELECT * FROM class'
  //* 执行 sql 语句
  db.query(sqlStr, (err, result) => {
    if (err) { return res.send({ status: 1, message: '获取课程列表失败！' }) }
    res.send({ status:0,message:'获取课程列表成功！',data:result})
  })
}