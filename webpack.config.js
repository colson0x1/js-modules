const path = require('path');

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
        // Loaders are applied from RIGHT to LEFT
        use: ['style-loader', 'css-loader'],
        test: /\.css$/,
      },
    ],
  },
};

module.exports = config;
