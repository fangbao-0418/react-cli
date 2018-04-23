var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var Visualizer = require('webpack-visualizer-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const extractCommon = new ExtractTextPlugin({
  filename: 'css/common.[contenthash:8].css',
  allChunks: true
})
const extractApp = new ExtractTextPlugin({
  filename: 'css/app.[contenthash:8].css',
  allChunks: true
})

var plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: `'production'`
    }
  }),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../src/index.html'),
    // 要把<script>标签插入到页面哪个标签里(body|true|head|false)
    inject: true,
    filename: path.resolve(__dirname, '../deploy/dist/index.html'),
    favicon: path.resolve(__dirname, '..', 'src/favicon.ico'),
    // hash如果为true，将添加hash到所有包含的脚本和css文件，对于解除cache很有用
    // minify用于压缩html文件，其中的removeComments:true用于移除html中的注释，collapseWhitespace:true用于删除空白符与换行符
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    }
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    // chunksSortMode: 'dependency'
    // hash:true
  }),
  new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery'}),
  new webpack.optimize.CommonsChunkPlugin({
    names: ['common', 'echarts', 'vendor'],
    minChunks: function (module) {
      return module.context && module.context.includes('node_modules')
      // return module.context && module.context.includes('node_modules') && /(rc-(\w)*|immutable|echarts|zrender|jquery|moment|antd)/.test(module.context) === false
    }
  }),
  // 引导
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    minChunks: Infinity
  }),
  new UglifyJsPlugin({
    uglifyOptions: {
      compress: {
        drop_console: true
      }
    }
  }),
  new webpack.NoEmitOnErrorsPlugin(),
  extractCommon,
  extractApp,
  new Visualizer()
]

module.exports = {
  entry: {
    app: [path.resolve(__dirname, '../src/app')],
    echarts: 'echarts',
    common: ['antd', 'jquery']
  },
  output: {
    path: path.resolve(__dirname, '../deploy/dist'),
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }, {
            loader: 'ts-loader'
          }
        ]
      }, {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        use: ['babel-loader']
      }, {
        test: /\.css$/,
        use: extractCommon.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
      }, {
        test: /\.styl$/,
        include: path.resolve(__dirname, '../src'),
        use: extractApp.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]-[hash:base64:5]'
              }
            }, {
              loader: 'postcss-loader'
            }, {
              loader: 'stylus-loader'
            }
          ]
        })
      }, {
        test: /\.(png|jpe?g|git)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'images/[name].[hash:7].[ext]'
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }, {
        test: /\.(mp3)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: plugins,
  resolve: {
    modules: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, '../src')
    ],
    extensions: [
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
      '.min.js',
      '.json',
      '.styl',
      '.css'
    ],
    alias: {
      '@': path.join(__dirname, '../src/')
    }
  },
  devtool: ''
}