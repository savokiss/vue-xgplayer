const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  baseUrl: isProduction ? '/vue-xgplayer' : '/',
  configureWebpack: {
    externals: {
      xgplayer: 'xgplayer',
      nanoid: 'nanoid'
    }
  }
}
