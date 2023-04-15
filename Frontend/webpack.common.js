/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: './src/contact.html',
      filename: 'contact.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/login.html',
      filename: 'login.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templatecopy.html',
      filename: 'temp.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/dashboard.html',
      filename: 'dashboard.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/register.html',
      filename: 'register.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/calorie.html',
      filename: 'calorie.html'
    }),
  ],
  devServer: {
    watchFiles: ["./src/*.html"],
    port: 8080,
    open: true,
    hot: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
};
