<template>
  <div class="xiaoxiheader">
    <div class="headermain">
      <div class="xiaoxicontent">
        <li :class="num == index?'active':''" class="xiaoxili" v-for="(item,index) of xiaoxili" :key="index" @click="xiaoxiclick(index)">{{item.name}}</li>
      </div>
      <router-link tag='span' to="suoyoutongzhi" class="iconfont icon-xiaoxi" >&#xe618;</router-link>
    </div>
    <div class="kong"></div>
  </div>
</template>

<script>
import myEventBus from '@/assets/js/bus'
import { toRefs, reactive, onMounted } from 'vue'
export default {
  name: 'xiaoxiheader',
  setup () {
    const emitter = myEventBus()
    const data = reactive({
      xiaoxili: [
        { id: 'x001', name: '聊天' },
        { id: 'x002', name: '互动' }
      ],
      num: 0
    })
    const xiaoxiclick = index => {
      data.num = index
      emitter.emit('changeTab', index)
      window.scrollTo(0, 0)
    }
    onMounted(() => {
      emitter.on('slide', (realIndex) => {
        data.num = realIndex
      })
    })
    return {
      ...toRefs(data),
      xiaoxiclick
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.xiaoxiheader
  width 100%
  height 2rem
  .headermain
    width 100%
    height 2rem
    background $bgColor
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    position fixed
    top 0
    left 0
    z-index 3
    .xiaoxicontent
      display flex
      flex-direction row
      align-items center
      .xiaoxili
        display inline-block
        padding-left .5rem
        font-size .52rem
        color rgb(175,231,228)
      .active
        color white
    .iconfont
      font-size .6rem
      color white
      padding-right .5rem
      text-decoration none
</style>>
