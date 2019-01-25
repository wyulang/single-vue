const path = require('path');
var merge = require('webpack-merge');
const webpackConfig = require('../webpack/webpack.base.js');
// simple-progress-webpack-plugin build另一种效果
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../webpack/webpack.config.js');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const chalk = require('chalk');


let conlg = [];
conlg.push(chalk.cyan.bold('Your application is running here: ') + chalk.greenBright.bold(`http://${config.config.devServer}:${config.config.port}/`));
let debConfig = {
    output: {
        path: config.config.outPath,
        publicPath: '/',
        filename: '[name].[hash].js',
    },
    devtool: 'eval-source-map',
    mode: 'development',
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300, //防止重复保存频繁重新编译,300ms内重复保存不打包
        poll: 1000 //每秒询问的文件变更的次数
    },
    plugins: [
        new CleanWebpackPlugin(['./build']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: conlg
            }
        }),
        new webpack.DllReferencePlugin({
            context: path.resolve(config.config.outPath),
            manifest: require('../build/vendor/vendor-manifest.json')
        }),
        new HtmlWebpackPlugin({
          filename: `index.html`,
          template: path.resolve(config.config.root+"/src/index.html"),
          inject: true,
          title: 'wyulang',
          host: config.config.distPath,
          prod: false
      })
    ]
}

module.exports = merge(webpackConfig, debConfig)