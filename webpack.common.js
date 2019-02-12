const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpacPlugin = require('html-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
  filename: 'main.css'
});
module.exports =  {
  entry: {
    app: ['whatwg-fetch','babel-polyfill', './index.js']
  },
  module: {
    rules: [
      {
        test:/\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env','es2015','stage-0','react']
            }
          }
        ]
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: ['html-loader']
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true,
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    extractPlugin,
    new HtmlWebpacPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      title: 'Production',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    open: true
  }
};