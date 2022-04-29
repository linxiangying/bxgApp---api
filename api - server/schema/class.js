//* 导包：joi，定义校验规则
const joi = require('joi')

//* 定义校验规则
const name = joi.string().required()
const count = joi.number().integer().min(0).required()
const price = joi.string().required()

//* 定义校验规则对象并共享出去
module.exports.class = {
  body: {
    name,
    count,
    price
  }
}