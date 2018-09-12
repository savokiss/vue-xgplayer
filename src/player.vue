<template>
  <div class="vue-xgplayer" :id="id" ref="player"></div>
</template>

<script>
import Player from 'xgplayer'
import { genId } from './utils'

const defaultOptions = {
  // playsinline: true
  // 'x5-video-player-type': 'h5'
}

export default {
  name: 'xgplayer',
  props: {
    id: {
      type: String,
      default: () => 'xgplayer_' + genId()
    },
    globalOptions: {
      type: Object,
      default: () => {}
    },
    options: {
      type: Object,
      default: () => defaultOptions
    }
  },
  data () {
    return {}
  },
  methods: {
    init () {
      this.player = new Player({
        id: this.id,
        ...Object.assign({}, defaultOptions, this.globalOptions, this.options, {
          id: this.id
        })
      })
    },
    destroy () {
      this.player.destroy()
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.destroy()
  }
}
</script>
