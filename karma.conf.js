var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src/client/app');
var SPEC_DIR = path.resolve(__dirname, 'spec');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ], //run in Chrome
    singleRun: true, //just run once by default
    frameworks: [ 'mocha' ], //use the mocha test framework
    files: [
      'tests.webpack.js' //just load this file
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'dots' ], //report results in this format
    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: [
              APP_DIR,
              SPEC_DIR
            ],
            query: {
              presets: [
                'react',
                'es2015'
              ],
              plugins: [
                ['babel-root-import', {
                  rootPathSuffix: 'src/client/app'
                }]
              ]
            }
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};
