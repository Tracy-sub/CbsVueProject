// 设置代理和跨域

module.exports=({

  devServe:{
    open:true,
    port:8080,
    //解决跨域问题
    proxy:{
      '/api':{
        target:'https://www.fastmock.site/mock/3e58b2f07cb9a69386d1aa3ec2bb46b4/api',
        chaneOrigin:true,
        pathRewrite: {                
          '^/api': ''
        }
      }
    },
    cssSourceMap: false
  }
})