var path = require('path');
var host = 'localhost';
var port = 3001;

module.exports = {
  devServerPort: port,
  devtool: 'inline-source-map',
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'script.js',
    publicPath: 'http://' + host + ':' + port + '/dist/'
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};