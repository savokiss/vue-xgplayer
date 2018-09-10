import XgPlayer from './player.vue'

const install = function (Vue, options) {
  if (options) {
    XgPlayer.props.globalOptions.default = () => options
  }
  Vue.component(XgPlayer.name, XgPlayer)
}

export default XgPlayer

export { install, XgPlayer }
