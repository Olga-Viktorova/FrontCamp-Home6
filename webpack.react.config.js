var webpack = require('webpack');


module.exports = {
  context: __dirname + "/src/bloglog.ui.react",
  entry: {
      main: "./views/main.browser.js",
      articles: "./views/articlesPage.browser.js",
      signup: "./views/signupPage.browser.js",
      articleDetails: "./views/articleDetailsPage.browser.js",
      newArticle: "./views/newArticlePage.browser.js",
      editArticle: "./views/editArticlePage.browser.js"
  },
  output: {
    path: __dirname + "/dist/react",
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
    }]
  },
  watch: true,
  devtool: 'source-map'
}