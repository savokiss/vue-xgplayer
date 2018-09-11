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
        url: 'https://h5player.bytedance.com/video/mp4/xgplayer-demo-360p.mp4'
      }
    }
  }
}
</script>
```

## Examples

<https://github.com/savokiss/vue-xgplayer/blob/master/examples/App.vue>

## Related Projects
- [xgplayer](https://github.com/bytedance/xgplayer)

## License
MIT