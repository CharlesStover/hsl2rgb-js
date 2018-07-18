/*
Creates an NPM module by converting ES6 to ES5 and minifying.
src/hsl2rgb.js -> hsl2rgb.js
*/

const path = require('path');

module.exports = {
  entry: './src/hsl2rgb.js',
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
    filename: 'hsl2rgb.js',
    library: '@charlesstover/hsl2rgb',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '.'),
    umdNamedDefine: true
  }
};
