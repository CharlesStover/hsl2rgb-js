/*
Creates an NPM module by converting ES6 to ES5 and minifying.
hsl2rgb.js -> hsl2rgb.min.js
*/

const path = require('path');

module.exports = {
  entry: './hsl2rgb.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ]
          }
        }
      }
    ]
  },
  output: {
    filename: 'hsl2rgb.min.js',
    library: '@charlesstover/hsl2rgb',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '.'),
    umdNamedDefine: true
  }
};
