var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var combineLoaders = require('webpack-combine-loaders')

module.exports = {
  context: process.cwd(),
  devtool: "eval",
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
    extensions: ['', '.jsx', '.js', '.css']
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
      },

      {
        test: /\.css$/,
        loader: combineLoaders([{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }])
      }
    ],
    noParse: [/\.min\.js$/]
  }
}