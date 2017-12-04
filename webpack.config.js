var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    "webpack-hot-middleware/client",
    "babel-polyfill",
    "./src/index"
  ],
  output: {
    path: path.join(__dirname, "public"),
    publicPath: "/",
    filename: "main.js",
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: '/node-modules/',
        loader: 'babel-loader'
        // use: [
        //   'babel-loader',
        //   'eslint-loader'
        // ]
      },
      {
        test: /\.scss$/,
        exclude: '/node-modules/',
        use: ['style-loader', 'css-loader?sourceMap', 'sass-loader']
      },
      {
        test: /\.ttf$/,
        loader: 'url-loader'
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader'
      }
    ]
  },

  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
