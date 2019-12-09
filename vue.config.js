
module.exports = {
  // publicPath: './',
  baseUrl: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  configureWebpack: {
    performance: {
      hints: 'warning',
      maxEntrypointSize: 50000000,
      maxAssetSize: 30000000,
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js')
      }
    }
  }
}
