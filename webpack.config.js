
const HtmlWebpack = require('html-webpack-plugin')
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: 'development',

  output: {
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.html$/i, // Copy any html file to dist folder
        loader: "html-loader",
        options: {
          sources: false
        }
      },
      {
        test: /\.scss$/, // Check all css, scss, sass files
        exclude: /styles\.scss$/, // Exclude main style file
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /styles.scss$/, // output file
        use: [
          MiniCssExtract.loader,
          'css-loader',
          "sass-loader"
        ]
      },
    ]
  },

  optimization: { },


  plugins: [
    // new HtmlWebpack(), // Generates default index.html
    new HtmlWebpack({
      title: 'anahuac', //? title of page <title></title>
      filename: 'index.html', // file html name.
      template: './src/index.html' // take this template for build.
    }),
    new MiniCssExtract({
      filename: 'css/[name].css', // Output name file.
      ignoreOrder: false
    }),
    new CopyPlugin({ // Copy static resources but It most exist something inside.
      patterns: [
        { from: 'src/assets', to: 'assets/' }
      ]
    })
  ]
}