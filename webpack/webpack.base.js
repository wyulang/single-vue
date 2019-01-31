const path = require("path");
const config = require('../webpack/webpack.config.js');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
  entry: config.config.entry,
  resolve: {
    alias: {
      'lib': path.join(config.config.root, 'lib/'),
      'vue$': 'vue/dist/vue.esm.js',
    },
    modules: ['node_modules', '.'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.vue']
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        config.config.vueLoader, {
          loader: "css-loader"
        }, {
          loader: "postcss-loader"
        }
      ]
    },
    {
      test: /\.less$/,
      use: [
        config.config.vueLoader, {
          loader: "css-loader"
        }, {
          loader: "less-loader"
        }, {
          loader: "postcss-loader"
        }
      ]
    },
    {
      test: /\.sass$/,
      use: [
        config.config.vueLoader, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }, {
          loader: "postcss-loader"
        }
      ]
    },
    {
      test: /\.scss$/,
      use: [
        config.config.vueLoader, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }, {
          loader: "postcss-loader"
        }
      ]
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        transformAssetUrls: {
          video: ['src', 'poster'],
          source: 'src',
          img: 'src',
          image: 'xlink:href'
        },
        compilerOptions: {
          preserveWhitespace: false
        }
      }
    },
    {
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      },
      exclude: /node_modules/,
      // include: [process.cwd(), './src']
    },
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 5000,   // 小于8k的图片自动转成base64格式，并且不会存在实体图片
          name: 'assets/[name].[hash:4].[ext]',
        }
      },
      ]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,   // 处理字体
      use: {
        loader: 'file-loader',
        options: {
          outputPath: '',
        }
      }
    }
    ]
  },
  plugins: [ // 对应的插件
    new webpack.NoEmitOnErrorsPlugin(),
    new ProgressBarPlugin(),
    new VueLoaderPlugin()
  ]
}