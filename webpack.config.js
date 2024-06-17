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
    ],
  },
};

module.exports = config;
