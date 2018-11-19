const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-3-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const WebpackCritical = require('webpack-critical');

const dist = path.resolve(__dirname, 'dist');

module.exports = {
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

        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                module: true,
                localIdentName: '[path][name]-[local]'
              }
            },
            'sass-loader'
          ]
        })
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
    new ExtractTextPlugin('styles.css'),
    new WebpackCritical({ context: dist }),
    new UglifyJsPlugin(),
    new OfflinePlugin({
      caches: {
        main: ['200.html', 'bundle.js'],
        additional: [':rest:'],
        optional: ['*.mp4']
      }
    })
  ]
};
