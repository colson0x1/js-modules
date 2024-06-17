const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // We add object to designate rule or loader
      {
        use: 'babel-loader',
        test: /\.js$/,
      },
      {
        /* use: ['style-loader', 'css-loader'], */

        // Loaders are applied from RIGHT to LEFT
        // 'use' and 'loader' property are identical in the Webpack world
        // some plugin requires legacy property name like loader in the case of
        // ExtractTextPlugin because of the way they are written
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader',
        }),
        test: /\.css$/,
      },
    ],
  },
  plugins: [new ExtractTextPlugin('style.css')],
};

module.exports = config;
