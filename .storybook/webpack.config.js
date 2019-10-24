const path = require('path')
const { sass } = require('svelte-preprocess')
const mode = process.env.NODE_ENV
const dev = mode === 'development'

module.exports = async ({ config }) => {
  config.resolve = {
    alias: {
      '@components': path.resolve(
        __dirname,
        '../src/components/index.js',
      ),
    },
    extensions: [...config.resolve.extensions, '.svelte'],
  }
  config.module.rules.push({
    test: /\.s[ac]ss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  })
  return config
}
