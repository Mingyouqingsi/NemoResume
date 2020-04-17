//创建HTTP服务器

//1. 加载http模块
// var http = require('http');

// //2. 创建http服务器
// // 参数: 请求的回调, 当有人访问服务器的时候,就会自动调用回调函数
// var server = http.createServer(function (request, response) {
//     console.log('有人访问了服务器')

//     //回调数据
//     response.write('Hello, My Love')
//     response.end()
// })

// //3. 绑定端口
// server.listen(5000, '192.168.1.168')

// //4. 执行
// console.log('执行了5000')
/* express的服务器 */



//1. 导入express
var express = require('express')

//2. 创建express服务器
var server = express()

//3. 访问服务器(get或者post)
//参数一: 请求根路径
//3.1 get请求
server.get('/oneres', function (request, response) {
    // console.log(request)
    // response.send('get请求成功')
    response.json({
        code: 200,
        data:{
            'url': 'www.baidu.com'
        }
    })
})

//3.2 post请求
server.post('/', function (request, response) {
    // response.send('post请求成功')
})

//4. 绑定端口
server.listen(4040)
console.log('启动4040')