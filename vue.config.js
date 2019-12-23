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
                        rootValue: 37.5,
                        propList: ['*'],
                    })
                ]
            }
        }
    }
};