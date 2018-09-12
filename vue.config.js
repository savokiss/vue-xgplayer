const isProduction = process.env.NODE_ENV === 'production'
const isDoc = !!process.env.DOC_ENV

module.exports = {
  baseUrl: isProduction ? '/vue-xgplayer' : '/',
  configureWebpack: config => {
    if (!isDoc) {
      config.externals = {
        xgplayer: 'xgplayer',
        'nanoid/generate': 'nanoid/generate',
        'lodash/assign': 'lodash/assign',
        'lodash/debounce': 'lodash/debounce',
        'lodash/split': 'lodash/split'
      }
    }
  }
}
