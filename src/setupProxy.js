// 注意:
// 1. setupProxy.js 是js文件 ts不行
// 2. http-proxy-middleware不需要安装 直接就可以使用
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  // app.use()可以接收多个proxy插件
  // 注意：插件是有序匹配的 比如 第一个proxy的值为 /api,第二个proxy为 /api2,则第二个proxy会失败 因为 /api2同样匹配第一个 /api，因此 最好proxy的第一个参数不要写的差不多 避免匹配异常
  app.use(
    // proxy('匹配到时使用代理的字符串',{
    // target:'需要解决跨域的url',
    // changeOrigin:true/false, 是否修改origin，这个origin是服务器那接收的，建议true,
    // pathRewrite:{'^/chat'，''}, 去除请求前缀 保证后端接收正常 必须写,否则无效
    // })
    proxy('/chat', {
      target: "http://localhost:666",
      changeOrigin: true,
      pathRewrite: { '^/chat': '' } 
    }),
    proxy('/core', {
      target: "http://localhost:777",
      changeOrigin: true,
      pathRewrite: { '^/core': '' }
    })
    )
}
