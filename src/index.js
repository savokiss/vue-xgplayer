import XgPlayer from './player.vue'

const install = function (Vue, options) {
  Vue.component('vue-xgplayer', XgPlayer)
}

export default XgPlayer

export { install, XgPlayer }
