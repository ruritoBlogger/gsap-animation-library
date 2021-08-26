const path = require('path');

const src = path.resolve(__dirname, 'src');
const pub = path.resolve(__dirname, 'dist');

module.exports = {
  entry: `${src}/index.ts`,

  output: {
    path: pub,
    filename: 'index.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.sass/,
        use: [
          'style-loader',
          {
            loader: 'css-modules-typescript-loader',
          },
          {
            loader: 'css-loader',
            options: { url: false },
          },
          'sass-loader',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};