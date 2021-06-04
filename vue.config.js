module.exports = {
    publicPath: './',
    devServer: {
        //启动项目在8080端口自动打开
        open: true,
        port: 8080,
        before: require('./src/mock/index.js')
        // productionSourceMap: false,
        // proxy: {
        //     '/dev-api': {
        //         target: 'http://my.test.com', //API服务器的地址
        //         changeOrigin: true, // 是否跨域
        //     },
        // },
    },
}
