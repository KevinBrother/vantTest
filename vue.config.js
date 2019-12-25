const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer({
                        overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
                    }),
                    pxtorem({
                        rootValue: 75,
                        propList: ['*'],
                    })
                ]
            }
        }
    },
    devServer: {
        // 代理
        proxy: 'http://192.168.1.13:8080'
    }
};