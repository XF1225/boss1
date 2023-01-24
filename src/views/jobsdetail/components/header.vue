<template>
  <div>
    <div class="jobsheader">
      <div class="contents">
        <div class="cont-left">
          <van-icon name="arrow-left" size=".5rem" @click="toreturn" />
          <p class="cont-p" :style="popacity">{{title}}</p>
        </div>
        <div class="cont-right">
          <span class="iconfont icon-xing" v-show="showxing" @click="xingclick"></span>
          <span class="iconfont icon-iconfontxingxing" v-show="!showxing" @click="xingclick"></span>
          <span class="iconfont icon-fenxiang" @click="fenxiangclick"></span>
          <span class="iconfont icon-gantanhao-xianxingsanjiaokuang"></span>
        </div>
      </div>
    </div>
    <div class="kong"></div>
  </div>
</template>

<script>
import myEventBus from '@/assets/js/bus'
import { reactive, toRefs, onMounted, computed, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
export default {
  name: 'jobsheader',
  setup () {
    const emitter = myEventBus()
    const router = useRouter()
    const route = useRoute()
    const store = useStore()
    const data = reactive({
      popacity: {
        opacity: 0
      },
      title: '',
      checkbox: []
    })
    const states = computed(() => store.state.shoucangID)
    // const states = mapState(['shoucangID'])
    const showxing = computed(() => {
      const ID = route.params.id
      if (states.value.indexOf(ID) === -1) {
        return true
      } else {
        return false
      }
    })
    const isscroll = () => {
      const top = document.documentElement.scrollTop || document.body.scrollTop
      if (top >= 0 && top < 40) {
        const opacity = top / 40
        data.popacity = { opacity }
      } else if (top > 40) {
        const opacity = 1
        data.popacity = { opacity }
      }
    }
    const toreturn = () => {
      router.go(-1)
      emitter.emit('chushihua', true)
    }
    const fenxiangclick = () => {
      emitter.emit('fenxiang', true)
    }
    const xingclick = () => {
      const ID = route.params.id
      store.commit('shoucang', ID)
    }
    onMounted(() => {
      addEventListener('scroll', isscroll)
      emitter.on('conttitle', (conttitle) => {
        data.title = conttitle
      })
    })
    onUnmounted(() => {
      removeEventListener('scroll', isscroll)
    })
    return {
      ...toRefs(data),
      states,
      showxing,
      isscroll,
      toreturn,
      fenxiangclick,
      xingclick
    }
  }
}
</script>

<style lang="stylus" scoped>
.jobsheader
  width 100%
  border-bottom solid .02rem rgb(245,245,245)
  position fixed
  top 0
  left 0
  background white
  z-index 3
  .contents
    width 95%
    height 1.5rem
    margin 0 auto
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    .cont-left,.cont-right
      display flex
      flex-direction row
      align-items center
      .cont-p
        font-size .4rem
        padding-left .1rem
      .iconfont
        font-size .6rem
        padding-left .3rem
        color rgb(87,87,87)
      .icon-iconfontxingxing
        color #FFC107
      .icon-fenxiang
        font-size .5rem
.kong
  width 100%
  height 1.5rem
</style>>
