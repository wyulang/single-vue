const path = require('path');
const webpack = require('webpack');
const config = require('../webpack/webpack.config.js');
var merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.js');
module.exports = merge(baseWebpackConfig, {
    entry: {
        vendor: [
            'vue/dist/vue.esm.js',
            'lodash',
            'vuex',
            'flyio',
            'vue-router',
            'element-ui/lib/element-ui.common.js'
        ]
    },
    mode: "production",
    output: {
        path: path.resolve(config.config.outPath),
        filename: 'vendor/[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(config.config.outPath, '/vendor/[name]-manifest.json'),
            name: '[name]_library',
            context: path.resolve(config.config.outPath)
        })
    ]
});