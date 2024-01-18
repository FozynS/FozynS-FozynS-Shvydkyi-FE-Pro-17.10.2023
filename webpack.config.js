"use strict";

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");

module.exports = {
  mode: "production",

  entry: {
    weather: './HomeWork45-46/HW_45.js', 
    posts: './HomeWork45-46/HW_46.js',
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './HomeWork45-46/index.html'), 
      filename:'../index.html'
    }),

    new CleanWebpackPlugin(),
  ],
  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader",],
      },
    ],
  },
};
