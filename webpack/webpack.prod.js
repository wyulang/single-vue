const path = require('path');
var merge = require('webpack-merge');
const webpackConfig = require('../webpack/webpack.base.js');
// simple-progress-webpack-plugin build另一种效果
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../webpack/webpack.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const DropConsoleWebpackPlugin = require('drop-console-webpack-plugin')
const webpack = require('webpack');
const _version = new Date().getTime();
let debConfig = {
  output: {
    path: config.config.outPath,
    publicPath: './',
    filename: `js/[name].${_version}.js`,
    chunkFilename: `chunk/[name].js`,
  },
  devtool: 'cheap-module-source-map',
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `css/[name].${_version}.css`,
      chunkFilename: `chunk/[name].css`,
    }),
    new ParallelUglifyPlugin({
      cacheDir: '.cache/',
      uglifyJS: {
        output: {
          comments: false
        },
        compress: {
          warnings: false
        }
      }
    }),
    new webpack.DllReferencePlugin({
      context: path.resolve(config.config.outPath),
      manifest: require('../build/vendor/vendor-manifest.json')
    }),
    new webpack.optimize.SplitChunksPlugin({
      chunks: "all",
      name: true
    }),
    new DropConsoleWebpackPlugin({
      drop_log: true,
      drop_info: true,
      drop_warn: false,
      drop_error: false
    }),
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: path.resolve(config.config.root + "/src/index.html"),
      inject: true,
      title: 'wyulang',
      host: '.',
      prod: true
    }),
    new CleanWebpackPlugin(['build/js/*','build/css/*','build/*.html'],{
      root: path.resolve(__dirname, '..'),
      exclude:['vendor/*.js'],
      dry: false // 启用删除文件
    }),
  ]
}



// debConfig.plugins.push(
//   new CleanWebpackPlugin(
//     clearBuild, 　 //匹配删除的文件
//     {
//       root: config.config.outPath, //根目录
//       verbose: true, //开启在控制台输出信息
//       dry: false //启用删除文件
//     })
// )

module.exports = merge(webpackConfig, debConfig)