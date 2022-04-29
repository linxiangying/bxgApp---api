//* 导包：express
const express = require('express')
//* 导包：joi 校验错误提示
const joi = require('joi')
//* 实例化一个服务器
const app = express()

//* 解析 application/x-www-form-urlencoded 数据
app.use(express.urlencoded({ extended: false }))

//* 解析 json 字符串
app.use(express.json())

//* 解决跨域问题
const cors = require('cors')
app.use(cors())

//* 挂载静态资源，将图片共享出去
app.use('/upload/', express.static('./upload'))
//* 挂载静态网页
app.use(express.static('../web/'))

//* 导入路由模块：获得课程
const getClass = require('./router/getClass')
app.use(getClass)

//* 导入路由模块：添加课程
const addClass = require('./router/addClass')
app.use(addClass)

//* 校验错误提示
app.use((err, req, res, next) => {
  if (err instanceof joi.ValidationError) { return res.send({status: 1, message: err.message})}
})

//* 开启服务器
app.listen(4000, () => {
  console.log('express server is listening at http://127.0.0.1:4000')
})