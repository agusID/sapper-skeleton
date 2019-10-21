const path = require('path')

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

  return config
}
