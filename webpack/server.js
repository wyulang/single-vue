const webpack = require("webpack")
var config = require("./webpack.dev.js");
var WebpackDevServer = require('webpack-dev-server');
const webCfg = require("./webpack.config.js");

var hotConfig = [
    '' +
    'webpack-dev-server/client?http://' + webCfg.config.devServer + ':' + webCfg.config.port,
    'webpack/hot/dev-server'
]

config.entry=hotConfig.concat(webCfg.config.entry);

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    contentBase: 'build/',
    publicPath: "/",
    hot: true,
    noInfo: true,
    host: '0.0.0.0'
});
server.listen(webCfg.config.port, '0.0.0.0');