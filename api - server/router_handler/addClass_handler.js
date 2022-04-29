//* 添加课程的路由处理函数

const mysql = require('mysql')
const db = require('../db/index')
const path = require('path')

module.exports.addClass_handler = (req, res) => {
  //* 检验图片文件是否正确
  if (!req.file || req.file.fieldname !== 'img') { return res.send({ status: 1, message: '图片是必选参数！' }) }
  //* 图片检验正确，增加数据行
  const sqlStr = 'INSERT INTO class SET ?'
  const priceStr = req.body.price ==='免费'?req.body.price:'￥'+req.body.price
  const data = {
    ...req.body,
    price:priceStr,
    img:path.join('/upload',req.file.filename)
  }
  db.query(sqlStr,data, (err, result) => {
    if (err) { return res.send(err) }
    if (result.affectedRows !== 1) { return res.send({ status: 1, message: '添加课程失败！' }) }
    res.send({
      status: 0,
      message: '添加课程成功！',
      data:data
    })
  })
}