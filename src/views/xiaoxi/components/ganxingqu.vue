<template>
  <div class="wrapper">
    <hudongnav></hudongnav>
    <van-swipe lazy-render :show-indicators="false" ref="refItem" initial-swipe='0' @change="swipeChange">
      <van-swipe-item v-for="(item,index) of list" :key="index">
        <div class="liaotiancont">
          <component :is="item.component"></component>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import myEventBus from '@/assets/js/bus'
import hudongnav from './hudongnav'
import ganxingqucont from '../components/ganxingqucont'
import kanguowo from '../components/kanguowo'
import xinzhiwei from '../components/xinzhiwei'
import { ref, toRefs, reactive, onMounted, markRaw } from 'vue'
export default {
  name: 'ganxingqu',
  components: {
    hudongnav,
    ganxingqucont,
    kanguowo,
    xinzhiwei
  },
  setup () {
    const emitter = myEventBus()
    const refItem = ref(null)
    const data = reactive({
      list: [
        { path: '/components/ganxingqucont', component: markRaw(ganxingqucont) },
        { path: '/components/kanguowo', component: markRaw(kanguowo) },
        { path: '/components/xinzhiwei', component: markRaw(xinzhiwei) }
      ]
    })
    const swipeChange = i => {
      emitter.emit('slideTab', i)
      window.scrollTo(0, 0)
    }
    onMounted(() => {
      emitter.on('Tabs', (index) => {
        refItem.value.swipeTo(index)
      })
    })
    return {
      ...toRefs(data),
      ganxingqucont,
      kanguowo,
      xinzhiwei,
      refItem,
      swipeChange
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
</style>
