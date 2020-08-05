const px2rem = require('postcss-px2rem')
// 配置 postcss-px2rem
const postcss = px2rem({
    remUnit: 37.5    // 基准大小 baseSize，需要和rem.js中单位rem值占比一样(就是设计稿10等分后的值)
})
module.exports = {
  lintOnSave: false,
  css: {
    // 添加 postcss 配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/foo': {
        target: 'https://m.you.163.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/foo': '' // 重写路径
        }
      }
    }
  }
}