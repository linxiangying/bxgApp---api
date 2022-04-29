const express = require('express')
//* 实例化路由
const router = express.Router()
//* 获取路由处理函数模块
const getClass_handler = require('../router_handler/getClass_handler')
//* 创建路由：获取课程列表
router.get('/getClass', getClass_handler.getClass)
//* 共享成员
module.exports =router
