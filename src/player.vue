<template>
  <div class="vue-xgplayer" :id="id" ref="player"></div>
</template>

<script>
import Player from 'xgplayer'
import nanoid from 'nanoid'

const defaultOptions = {
  // playsinline: true
  // 'x5-video-player-type': 'h5'
}

export default {
  name: 'xgplayer',
  props: {
    id: {
      type: String,
      default: nanoid(10)
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
        ...Object.assign({}, defaultOptions, this.options, {
          id: this.id
        })
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>
