const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const sharpResponsiveLoader = require('responsive-loader/sharp')
const TerserPlugin = require('terser-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const VueLoader = require('vue-loader')
const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const path = require('path')

const isDev = (process.env.npm_lifecycle_script || '').indexOf('development') !== -1

module.exports = {
  entry: path.join(__dirname, ...'src/main.ts'.split('/')),
  mode: isDev ? 'development' : 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new TerserPlugin({ parallel: true }),
      new CssMinimizerPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
          options: {
            encodeOptions: {
              // https://sharp.pixelplumbing.com/api-output#avif
              avif: { lossless: true },

              // gif does not support lossless compression at all
              // https://sharp.pixelplumbing.com/api-output#gif
              gif: {},

              // https://sharp.pixelplumbing.com/api-output#jpeg
              jpeg: { quality: 100 },

              // png by default sets the quality to 100%, which is same as lossless
              // https://sharp.pixelplumbing.com/api-output#png
              png: {},

              // https://sharp.pixelplumbing.com/api-output#webp
              webp: { lossless: true },
            },
          },
        },
      }),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.svgoMinify,
          options: {
            encodeOptions: {
              // Pass over SVGs multiple times to ensure all optimizations are applied. False by default
              multipass: true,
              plugins: [
                // set of built-in plugins enabled by default
                // see: https://github.com/svg/svgo#default-preset
                'preset-default',
              ],
            },
          },
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vue: {
          name: 'vue',
          test: /[\\/]node_modules[\\/](@?vue|deepmerge|flatted)/,
          priority: 50,
        },
        bootstrap: {
          name: 'bootstrap',
          test: /[\\/]node_modules[\\/](jquery|@?popper(?:\.?js)?|bootstrap)|[\\/]styles[\\/]bootstrap\.scss/,
          priority: 20,
        },
        lib: {
          name: 'lib',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
        },
      },
    },
  },
  output: {
    path: path.join(__dirname, 'out'),
    publicPath: '/',
    filename: 'scripts/[name]' + ( ! isDev ? '.[chunkhash:7]' : '') + '.js',
    chunkFilename: 'scripts/[name]' + ( ! isDev ? '.[chunkhash:7]' : '') + '.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsxSuffixTo: [/\.vue$/],
          compilerOptions: {
            // https://github.com/vuejs/vue-loader/issues/1915
            noImplicitAny: false,
          },
        },
      },
      // vue-loader must be specified before html-loader
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /index\.html$/,
        options: {
          esModule: false,
        },
      },
      {
        test: /\.s?css$/,
        exclude: path.join(__dirname, 'src'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              warnRuleAsWarning: false,
            },
          },
        ],
      },
      {
        test: /\.s?css$/,
        include: path.join(__dirname, 'src'),
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: '[local]-[hash:7]',
                  },
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: ['autoprefixer'],
                  },
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  warnRuleAsWarning: false,
                },
              },
            ],
          },
          {
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  esModule: false,
                  publicPath: '../',
                },
              },
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: '[local]-[hash:7]',
                    mode: 'global',
                  },
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: ['autoprefixer'],
                  },
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  warnRuleAsWarning: false,
                },
              },
            ],
          },
        ],
      },
      {
        test: /\.(avif|jpe?g|png|webp)(\?.*)?$/,
        oneOf: [
          {
            loader: 'responsive-loader',
            resourceQuery: { not: [/raw/] },
            options: {
              adapter: (imagePath) => {
                const adapter = sharpResponsiveLoader(imagePath)

                return {
                  metadata: () => {
                    return adapter.metadata()
                  },
                  resize: (_ref) => {
                    if (_ref.width <= 320) _ref.options.quality = 85
                    else if (_ref.width <= 640) _ref.options.quality = 80
                    else _ref.options.quality = 75

                    return adapter.resize(_ref)
                  },
                }
              },
              disable: isDev,
              name: '[path][name]' + (isDev ? '' : '-[width]px.[hash:7]') + '.[ext]',
              sizes: [2160, 1080, 640, 320],
            },
          },
          {
            type: 'asset/resource',
            resourceQuery: /raw/,
            generator: {
              filename: '[path][name]' + (isDev ? '' : '.[hash:7]') + '[ext]',
            },
          },
        ],
      },
      {
        test: /\.(gif|ico|eot|ttf|woff)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: '[path][name]' + (isDev ? '' : '.[hash:7]') + '[ext]',
        },
      },
      {
        test: /\.svg(\?.*)?$/,
        loader: 'svg-url-loader',
        options: {
          esModule: false,
          iesafe: true,
          limit: 20000,
          name: '[path][name]' + (isDev ? '' : '.[hash:7]') + '[ext]',
          noquotes: true,
          stripdeclarations: true,
        },
      },
    ],
  },
  devServer: {
    devMiddleware: { index: true, publicPath: '/' },
    host: process.env.WEBPACK_HOST || '127.0.0.1',
    port: process.env.WEBPACK_PORT || 5000,
    hot: true,
    historyApiFallback: true,
    open: true,
  },
  resolve: {
    alias: {
      vue$: isDev
          ? 'vue/dist/vue.esm-bundler.js'
          : 'vue/dist/vue.esm-browser.prod.js',
      vuex$: isDev
          ? 'vuex/dist/vuex.esm-bundler.js'
          : 'vuex/dist/vuex.esm-browser.prod.js',
    },
    extensions: ['.js', '.ts', '.tsx', '.vue'],
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname),
      path.join(__dirname, 'node_modules'),
    ],
    plugins: [
      new TsconfigPathsPlugin(),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      minify: ! isDev,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name]' + ( ! isDev ? '.[chunkhash:7]' : '') + '.css',
      chunkFilename: 'styles/[name]' + ( ! isDev ? '.[chunkhash:7]' : '') + '.css',
    }),
    new VueLoader.VueLoaderPlugin(),
    ...(process.env.ANALYZE ? [
        new BundleAnalyzerPlugin({
          analyzerPort: 50000 + Math.round(Math.random() * 9999),
        }),
    ] : []),
  ],
}
