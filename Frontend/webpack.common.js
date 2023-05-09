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
      template: './src/user_activity.html',
      filename: 'user_activity.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/user_activity_graph.html',
      filename: 'user_activity_graph.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pri.html',
      filename: 'pri.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/yash.html',
      filename: 'yash.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/bmi.html',
      filename: 'bmi.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/blog.html',
      filename: 'blog.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/bmi.html',
      filename: 'bmi.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/aboutus.html',
      filename: 'aboutus.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/contactus.html',
      filename: 'contactus.html'
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
