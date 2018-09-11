import Vue from 'vue'
import App from './App.vue'
import VueXgplayer from '../src/index'

Vue.use(VueXgplayer)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
