<template>
  <div v-show="showyincang">
    <div class="yincang">
      <div><i @click="yincangclick">x</i><p>您已对人才经纪人隐藏简历</p></div>
      <span @click="toshezhiclick">取消隐藏</span>
    </div>
    <div class="kong"></div>
  </div>
</template>

<script>
import myEventBus from '@/assets/js/bus'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'yincang',
  setup () {
    const router = useRouter()
    const emitter = myEventBus()
    const showyincang = ref(true)
    const yincangclick = () => {
      showyincang.value = false
    }
    const toshezhiclick = () => {
      router.push('/shezhidetail/S003')
    }
    onMounted(() => {
      emitter.on('changercjjr', () => {
        showyincang.value = !showyincang.value
        // https://blog.csdn.net/weixin_44784401/article/details/126904903 vue3组件之间通信(六)——eventBus的使用
      })
    })
    return {
      showyincang,
      yincangclick,
      toshezhiclick
    }
  }
}
</script>

<style lang="stylus" scoped>
.yincang
  width 100%
  height .95rem
  display flex
  flex-direction row
  justify-content space-between
  align-items center
  background rgb(255,245,237)
  position fixed
  z-index 3
.yincang div
  height .95rem
  display flex
  flex-direction row
  justify-content center
  align-items center
.yincang i
  display flex
  justify-content center
  align-items center
  font-size .4rem
  font-style normal
  padding 0 .4rem .05rem .5rem
  color rgb(255,170,50)
.yincang p
  font-size .33rem
  color rgb(255,170,50)
.yincang span
  padding .12rem .22rem
  margin-right .5rem
  font-size .3rem
  color white
  background rgb(255,170,50)
  border-radius .3rem
.kong
  width 100%
  height .95rem
</style>>
