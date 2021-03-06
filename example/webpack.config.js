const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'index.js',
    path: __dirname,
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: __dirname
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};