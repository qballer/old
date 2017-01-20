var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: process.cwd(),
  // devtool: "eval",
  entry: {
    site: ['./src']
  },
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].bundle.js',
    target: 'web',
    pathinfo: true
  },
  devServer: {
    contentBase: './',
    hot: true,
    progress: true,
    port: 8080
  },
  resolve: {
    extensions: ['', '.jsx', '.js']
  },
  plugins: [
    new CopyWebpackPlugin([]),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  module: {
    loaders: [{
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }],
    noParse: [/\.min\.js$/]
  }
}