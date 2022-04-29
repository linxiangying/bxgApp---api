# bxgApp 接口文档

## 一、根路径

http://127.0.0.1:4000

## 二、获取课程

请求方式：get

url地址：/getClass

请求参数：无

响应示例：

```javascript
{
    "status": 0,
    "message": "获取课程列表成功！",
    "data": [
        {
            "id": 8,
            "name": "【前端】微信小程序",
            "count": 23,
            "price": "￥199",
            "img": "\\upload\\1e1f3ff604dc6a7ec13382909a7ba7aa"
        }
    ]
}
```

## 三、添加课程

请求方式：post

url地址：/addClass

请求参数：

| 参数  |           参数格式           |
| :---: | :--------------------------: |
| name  |        str，required         |
| count | number，int，min(0),required |
| price |         str,required         |
|  img  |   multipart/form-data格式    |

响应示例：

```javascript
{
    "status": 0,
    "message": "添加课程成功！",
    "data": {
        "name": "【前端】微信小程序",
        "price": "￥199",
        "count": 23,
        "img": "\\upload\\1e1f3ff604dc6a7ec13382909a7ba7aa"
    }
}
```

