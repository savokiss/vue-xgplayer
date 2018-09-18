<template>
  <div class="vue-xgplayer" :id="id" ref="player"></div>
</template>

<script>
import Player from 'xgplayer'
import { genId } from './utils'
import _assign from 'lodash/assign'
import _debounce from 'lodash/debounce'
import _split from 'lodash/split'

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
    },
    noDestroy: {
      type: Boolean,
      default: false
    },
    aspect: {
      type: String,
      default: '16by9' // 16by9|21by9|4by3|1by1
    },
    autoHeightDebounce: {
      type: Number,
      default: 250
    }
  },
  data () {
    return {
      player: null,
      debounceCallback: null
    }
  },
  computed: {
    aspectRatio () {
      let aspectArr = _split(this.aspect, 'by')
      if (aspectArr.length !== 2) {
        return 16 / 9
      }
      return aspectArr[0] / aspectArr[1]
    }
  },
  methods: {
    init () {
      this.player = new Player(
        _assign({}, defaultOptions, this.globalOptions, this.options, {
          id: this.id
        })
      )
    },
    destroy () {
      this.player && this.player.destroy()
    },
    reload () {
      this.player && this.player.reload()
    },
    _updateHeight () {
      if (this.$refs.player) {
        let height = Math.floor(this.$refs.player.offsetWidth * 1 / this.aspectRatio) + 'px'
        this.$refs.player.style.height = height
      }
    },
    autoResize () {
      this._updateHeight()
      this.debounceCallback = _debounce(this._updateHeight.bind(this), this.autoHeightDebounce)
      window.addEventListener('resize', this.debounceCallback)
    }
  },
  mounted () {
    this.init()
    setTimeout(() => { // hack
      this.autoResize()
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.debounceCallback)
    !this.noDestroy && this.destroy()
  }
}
</script>
