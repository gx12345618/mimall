module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:'http://mall-pre.springboot.cn',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    },
    // lintOnSave:false
    // 在本地时打开，方便看源码，上线时再关闭
    productionSourceMap:false,
    // 不要一开始就全部预加载（并没有script）标签 用到哪个再加载
    chainWebpack:(config)=>{
        config.plugins.delete('prefetch')
    } 
}