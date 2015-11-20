var webpack = require('webpack');
var server = require('webpack-dev-server');
var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'build.js'
  }
};