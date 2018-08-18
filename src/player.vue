<template>
  <div class="vue-xgplayer" :id="options.id" ref="player" v-show="visible"></div>
</template>

<script>
import Player from 'xgplayer'

const defaultOptions = {
  // playsinline: true
  // 'x5-video-player-type': 'h5'
}

export default {
  name: 'xgplayer',
  props: {
    options: {
      type: Object,
      default: () => defaultOptions
    }
  },
  data () {
    return {
    }
  },
  methods: {
    init () {
      this.player = new Player({
        ...Object.assign({}, defaultOptions, this.options)
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style>
.vue-xgplayer {
}
</style>
