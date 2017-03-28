var path = require('path')
var webpack = require('webpack')
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
    pathinfo: true
  },
  devServer: {
    contentBase: './',
    hot: true,
    port: 8080
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './public',
      to: './public'
    }]),
    // new HtmlWebpackPlugin({
    //   template: './index.html'
    // }), 
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    // This helps ensure the builds are consistent if source hasn't changed:
    new webpack.optimize.OccurrenceOrderPlugin(),

    // Minify the code.
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    })],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }],
    noParse: [/\.min\.js$/]
  }
}
