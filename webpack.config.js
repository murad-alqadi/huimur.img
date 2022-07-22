const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    popup: './src/popup.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{ 
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/popup.html',
      filename: 'popup.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/options.html',
      filename: 'options.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/styles.css',
      filename: 'styles.css'
    }),
    new CopyPlugin({
      patterns: [
        { from: "public" },
        { from: "*.js", context: path.resolve(__dirname, 'src') }
      ]
    })
  ]
};