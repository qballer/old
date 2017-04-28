const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: process.cwd(),
  devtool: 'eval',
  entry: {
    site: ['./src']
  },
  output: {
    path: path.join(process.cwd(), 'public'),
    filename: '[name].bundle.js',
    pathinfo: true
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('')
      }
    }),

    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }],
    noParse: [/\.min\.js$/]
  }
}
