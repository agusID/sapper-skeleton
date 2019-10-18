const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const path = require('path')
const config = require('sapper/config/webpack.js')
const pkg = require('./package.json')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

const { scss } = require('svelte-preprocess')

const alias = {
  svelte: path.resolve('node_modules', 'svelte'),
  '@components': path.resolve(__dirname, './src/components/index.js'),
  '@assets': path.resolve(__dirname, './src/assets'),
  '@config': path.resolve(__dirname, './src/config'),
  '@views': path.resolve(__dirname, './src/views'),
}
const extensions = ['.mjs', '.js', '.json', '.svelte', '.html']
const mainFields = ['svelte', 'module', 'browser', 'main']

module.exports = {
  client: {
    entry: config.client.entry(),
    output: config.client.output(),
    resolve: { alias, extensions, mainFields },
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: 'svelte-loader',
            options: {
              dev,
              hydratable: true,
              hotReload: false, // pending https://github.com/sveltejs/svelte/issues/2377
              preprocess: require('svelte-preprocess')([scss()]),
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            /**
             * MiniCssExtractPlugin doesn't support HMR.
             * For developing, use 'style-loader' instead.
             * */
            dev ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|svg)$/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
    mode,
    plugins: [
      // pending https://github.com/sveltejs/svelte/issues/2377
      // dev && new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new webpack.DefinePlugin({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
    ].filter(Boolean),
    devtool: dev && 'inline-source-map',
  },

  server: {
    entry: config.server.entry(),
    output: config.server.output(),
    target: 'node',
    resolve: { alias, extensions, mainFields },
    externals: Object.keys(pkg.dependencies).concat('encoding'),
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: 'svelte-loader',
            options: {
              css: false,
              generate: 'ssr',
              dev,
            },
          },
        },
      ],
    },
    mode: process.env.NODE_ENV,
    performance: {
      hints: false, // it doesn't matter if server.js is large
    },
  },

  serviceworker: {
    entry: config.serviceworker.entry(),
    output: config.serviceworker.output(),
    mode: process.env.NODE_ENV,
  },
}
