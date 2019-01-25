const path = require('path');
const fs = require('fs-extra');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const chalk = require('chalk');
const net = require('net');

const TARGET = process.env.npm_lifecycle_event;
const vueLoader = {
    dev: "vue-style-loader",
    build: MiniCssExtractPlugin.loader,
    dll: MiniCssExtractPlugin.loader,
};

const getIPAdress = () => {
  var interfaces = require('os').networkInterfaces();
  for (var devName in interfaces) {
      var iface = interfaces[devName];
      for (var i = 0; i < iface.length; i++) {
          var alias = iface[i];
          if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
              return alias.address;
          }
      }
  }
}

const config = {
    root: path.resolve(__dirname, '../'),
    entry: path.resolve(__dirname, '../src/index.js'),
    publicPath: '',
    outPath: path.resolve(__dirname, '../build'),
    devServer: 'localhost',
    port: '6001',
    distPath: '',
    vueLoader: vueLoader[TARGET],
    target: TARGET
}

//文件是否存在
const isFile = v => {
    return fs.pathExistsSync(v);
}

module.exports.config = config;
module.exports.isFile = isFile;
module.exports.getIPAdress = getIPAdress;