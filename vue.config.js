const webpack = require('webpack')
module.exports = {
    publicPath: './',
    devServer:{
        port: 4040,
        proxy: {
            '/api': {
                target: 'http://192.168.1.168:4040',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
