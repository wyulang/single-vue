const ora = require('ora') // 一个很好看的 loading 插件
const webpack = require('webpack') // 加载 webpack
const fs = require('fs-extra');
const webpackConfig = require('../webpack/webpack.prod.js') // 加载 webpack.prod.conf
const config = require('../webpack/webpack.config.js');
const chalk = require('chalk');

console.log('打包处理中...')

var spinner = ora() // 使用 ora 打印出 loading + log
spinner.start() // 开始 loading 动画


//  开始 webpack 的编译
webpack(webpackConfig, function(err, stats) {
    // 编译成功的回调函数
    spinner.stop()
    if (err) throw err

    console.log('  打包成功！！！！:\n')
})