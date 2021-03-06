var fs = require('fs');
var React = require('react');
var path = require('path');
var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  entry: {
    'react-substance': path.resolve(ROOT_PATH, 'src/index.js')
  },
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    filename: '[name].min.js',
    library: 'ReactSubstance',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.resolve(ROOT_PATH, 'src')
      }
    ]
  },
  plugins: [
    new Clean(['dist']),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ]
};
