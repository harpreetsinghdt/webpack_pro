const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: 'svg-inline-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js'],
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devServer: {
    static: './dist',
    port: 8080,
    open: true,
    hot: true,
  },
};
