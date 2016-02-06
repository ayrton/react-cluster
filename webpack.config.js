var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'demo/main.js'),
  output: {
    path: path.resolve(__dirname, 'demo'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ],
  },
};
