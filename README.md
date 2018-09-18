# vue-xgplayer
[![npm (tag)](https://img.shields.io/npm/v/vue-xgplayer.svg)](https://npmjs.com/package/vue-xgplayer)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![dependencies](https://img.shields.io/david/savokiss/vue-xgplayer.svg)]()

xgplayer vue component

## Installation
```bash
npm i vue-xgplayer -S
```

## Usage
```js
// main.js
import Vue from 'vue'
import VueXgplayer from 'vue-xgplayer'

Vue.use(VueXgplayer, {
  // globalOptions
  enterLogo: {
    url: '/images/video-player-loading.png',
    width: 100,
    height: 40
  },
  playsinline: true
})
```

```vue
// YourComponent.vue
<template>
  <xgplayer :options="playerOptions"></xgplayer>
</template>

<script>
export default {
  data () {
    return {
      playerOptions: {
        url: 'https://h5player.bytedance.com/video/mp4/xgplayer-demo-360p.mp4',
        width: '100%' // Depends on its wrapper element.
      }
    }
  }
}
</script>
```

## Examples

<https://github.com/savokiss/vue-xgplayer/blob/master/examples/App.vue>

## Props
| Prop  | Type | Default  | Info |
| ------------- | ------------- | ------------- | ------------- |
| id  | `String` | `xgplayer_${random()}` | Optional. The dom id |
| options  | `Object` | `{}` | The url property is required.   |
| aspect  | `String` | `'16by9'` | Optional. Aspect ratio for auto resize video height.  |
| noDestroy  | `Boolean` | `false` | Optional. Wont destroy player when component destroy |


## Methods

| Method | Info |
| ------- | ------------- |
| reload | Will call player.reload() |
| destroy | Will call player.destroy() |

## Related Projects
- [xgplayer](https://github.com/bytedance/xgplayer)

## License
MIT