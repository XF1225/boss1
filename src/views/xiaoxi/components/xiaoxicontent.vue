<template>
  <div class="wrapper">
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
import contentdetail from '../components/contentdetail'
import ganxingqu from '../components/ganxingqu'
import { ref, toRefs, reactive, onMounted, markRaw } from 'vue'
export default {
  name: 'xiaoxicontent',
  components: {
    contentdetail,
    ganxingqu
  },
  setup () {
    const emitter = myEventBus()
    const refItem = ref(null)
    const data = reactive({
      list: [
        { path: '/components/contentdetail', component: markRaw(contentdetail) },
        { path: '/components/ganxingqu', component: markRaw(ganxingqu) }
      ]
    })
    const swipeChange = i => {
      emitter.emit('slide', i)
      window.scrollTo(0, 0)
    }
    onMounted(() => {
      emitter.on('changeTab', (index) => {
        refItem.value.swipeTo(index)
      })
    })
    return {
      ...toRefs(data),
      refItem,
      swipeChange
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  width 100%
  .liaotiancont
    width 100%
    padding-bottom 1.5rem
</style>>
