const WebpackBar = require('webpackbar')
const CracoLessPlugin = require('craco-less')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const smp = new SpeedMeasurePlugin()
require('dotenv').config()

module.exports = {
  // 添加路径别名
  webpack: smp.wrap({
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    plugins: [
      new WebpackBar({
        name: 'webpack开始进行100年的编译......',
        color: '#8e44ad',
        profile: true,
      }),
    ],
    configure: (webpackConfig: { output: any; plugins: any }, { env, paths }: any) => {
      // 修改build的生成文件名称
      paths.appBuild = 'h5'
      webpackConfig.output = {
        ...webpackConfig.output,
        path: path.resolve(__dirname, 'h5'),
        publicPath: '/',
      }
      if (webpackConfig.plugins) {
        // 确保 plugins 数组已定义
        // webpackConfig.plugins.forEach((plugin: any) => {
        //   if (plugin instanceof HtmlWebpackPlugin) {
        //     plugin.options.title = 'Your Site Title' // 设置站点标题
        //   }
        // })
      }
      // webpackConfig.pure_funcs = ["console.log"];
      return webpackConfig
    },
  }),
  devServer: (devServerConfig: any) => {
    devServerConfig.port = process.env.PORT || 3000
    devServerConfig.host = process.env.HOST
    devServerConfig.open = true
    devServerConfig.proxy = {
      '/api': {
        target: process.env.URL,
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    }
    return devServerConfig
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        // 此处根据 less-loader 版本的不同会有不同的配置，详见 less-loader 官方文档
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  style: {
    postcss: {
      mode: 'extends',
      loaderOptions: {
        postcssOptions: {
          ident: 'postcss',
          plugins: [
            [
              'postcss-pxtorem',
              {
                rootValue: 375 / 10, // 根元素字体大小
                // propList: ['width', 'height']
                propList: ['*'],
              },
            ],
          ],
        },
      },
    },
  },
}
