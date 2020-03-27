const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const dist = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: dist
  },
  devServer: {
    historyApiFallback: { index: '200.html' },
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      assets: path.resolve(__dirname, 'assets/')
    }
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
        include: [path.resolve(__dirname, './')]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              context: __dirname,
              modules: true,
              sourceMap: true
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|mp4)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new StyleLintPlugin(),
    new HtmlWebpackPlugin({ filename: '200.html', template: '200.html' }),
    new FaviconsWebpackPlugin('./assets/images/favicon.png'),
    new MiniCssExtractPlugin()
  ]
};
