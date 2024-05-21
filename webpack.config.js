/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-var-requires */

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const VueLoader = require('vue-loader')
const env = require('dotenv').config().parsed
const path = require('path')
const webpack = require('webpack')

const isDev = (process.env.npm_lifecycle_script || '').indexOf('development') !== -1

module.exports = {
  entry: path.join(__dirname, '/src/main.ts'),
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'source-map' : 'none',
  optimization: {
    minimizer: [
      new TerserJSPlugin({ cache: true, parallel: true }),
      new OptimizeCSSAssetsPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
        },
        bootstrap: {
          name: 'bootstrap',
          test: /[\\/]node_modules[\\/](jquery|popper\.js|bootstrap)/,
          priority: 20,
        },
        vue: {
          name: 'vue',
          test: /[\\/]node_modules[\\/]vue/,
          priority: 50,
        },
      },
    },
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundles/[name]' + (!isDev ? '.[chunkhash:7]' : '') + '.js',
    chunkFilename: 'bundles/[name]' + (!isDev ? '.[chunkhash:7]' : '') + '.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /index\.html$/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.s?css$/,
        exclude: path.join(__dirname, '/src'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: isDev,
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.s?css$/,
        include: path.join(__dirname, '/src'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: isDev,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: 'global',
              localIdentName: 'component-[hash:base62:16]',
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(webp|jpe?g|png|gif|ico|eot|ttf|woff)(\?.*)?$/,
        loader: 'file-loader',
        exclude: /src/,
        options: {
          name: '[path][name]' + (!isDev ? '.[hash:7]' : '') + '.[ext]',
        },
      },
      {
        test: /\.(webp|jpe?g|png|gif|ico|eot|ttf|woff)(\?.*)?$/,
        loader: 'file-loader',
        include: /src/,
        options: {
          name: (file) => {
            return 'images/' + file.substring(__dirname.length + 1)
                .replace(/^src\//, '')
                .replace(/^components\//, '')
                .replace(/images\//, '')
                .replace(/[^\/]+\.\w+$/, '[name]' + (!isDev ? '.[hash:7]' : '') + '.[ext]')
          },
        },
      },
      {
        test: /\.svg(\?.*)?$/,
        loader: 'svg-url-loader?noquotes' +
          '&name=[path][name]' + (!isDev ? '.[hash:7]' : '') + '.[ext]' +
          '&limit=20000' +
          '&stripdeclarations' +
          '&iesafe',
      },
    ],
  },
  devServer: {
    hot: true,
    host: '0.0.0.0',
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
    modules: [
      path.join(__dirname, '/src'),
      __dirname,
      path.join(__dirname, '/node_modules'),
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'config': JSON.stringify(env),
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery',
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      minify: false,
    }),
    new MiniCssExtractPlugin({
      filename: 'bundles/[name]' + (!isDev ? '.[chunkhash:7]' : '') + '.css',
      chunkFilename: 'bundles/[name]' + (!isDev ? '.[chunkhash:7]' : '') + '.css',
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer',
    }),
    new VueLoader.VueLoaderPlugin(),
  ],
}
