const express = require('express')
const router = express()
const addClass_handler = require('../router_handler/addClass_handler')

//* 导包：@escook/express-joi 自动校验
const expressJoi = require('@escook/express-joi')
//* 导模块：校验规则
const regular = require('../schema/class')
//* 导包：multer，获得文件
const multer = require('multer')
//* 导模块：path
const path = require('path')
//* 配置 multer
const upload = multer({dest:path.join(__dirname, '../upload')})

router.post('/addClass', upload.single('img'),expressJoi(regular.class),addClass_handler.addClass_handler)

module.exports = router