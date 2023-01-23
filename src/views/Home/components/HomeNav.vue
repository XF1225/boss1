<template>
    <div>
      <div class="HomeNavCont">
        <div class="HomeNav">
          <div class="nav-left">
            <div class="left-content">
              <li :class="num === index?'active':''" v-for="(item, index) of navleft" :key="index" @click="navleftclick(index)">{{item.name}}</li>
            </div>
          </div>
          <div class="nav-right">
            <div class="right-content">
              <li :class="{'activeli':isactiveli}" @click="citychoiceclick"><span>{{sorestate}}</span><i></i></li>
              <li v-for="item of navright" :key="item.id" @click="navrightclick(item.id)"><span>{{item.name}}</span><i></i></li>
            </div>
          </div>
        </div>
      </div>
      <div class="kong"></div>
    </div>
</template>
<script>
import myEventBus from '@/assets/js/bus'
import { useStore } from 'vuex'
import { reactive, toRefs, computed } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'HomeNav',
  setup () {
    const router = useRouter()
    const emitter = myEventBus()
    const store = useStore()
    const data = reactive({
      navleft: [
        { id: 'nav01', name: '推荐' },
        { id: 'nav02', name: '附近' },
        { id: 'nav03', name: '最新' }
      ],
      num: 0,
      navright: [
        { id: 'nav05', name: '筛选' },
        { id: 'nav06', name: '关键词' }
      ],
      showgengxin: true,
      isactiveli: false
    })
    const sorestate = computed(() => store.state.city)
    const navleftclick = index => {
      if (data.num === index) {
        return false
      }
      data.num = index
      switch (data.navleft[index].id) {
        case 'nav01':
          emitter.emit('checknums', true)
          break
        case 'nav02':
          emitter.emit('checknums', true)
          break
        case 'nav03':
          emitter.emit('checknums', true)
          break
      }
    }
    const navrightclick = id => {
      switch (id) {
        case 'nav05':
          router.push('/shaixuan')
          break
        case 'nav06':
          router.push('/guanjianci')
          break
      }
    }
    const citychoiceclick = () => {
      router.push('/citychoice')
      data.isactiveli = !data.isactiveli
    }
    return {
      ...toRefs(data),
      sorestate,
      navleftclick,
      navrightclick,
      citychoiceclick
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.HomeNavCont
  width 100%
  height 1rem
  display flex
  flex-direction column
  background white
  position fixed
  top 2rem
  left 0
  right 0
  bottom 0
  z-index 3
  .HomeNav
    width 90%
    margin .1rem auto
    height 1rem
    display flex
    flex-direction row
    align-items center
    font-size .36rem
    color rgb(127,127,127)
    .nav-left
      width 100%
      height 1rem
      .left-content
        width 70%
        height 1rem
        display flex
        flex-direction row
        justify-content space-between
        align-items center
      .left-content li
        display inline-block
    .active
      color black
      font-weight bold
    .nav-right::-webkit-scrollbar
      display none
    .nav-right
      width 100%
      overflow-x scroll
      .right-content
        width 120%
        height 1rem
        display flex
        flex-direction row
        justify-content space-around
        align-items center
      .right-content li
        display flex
        flex-direction row
        white-space nowrap
        align-items flex-end
        padding .2rem .3rem
        border-radius .08rem
        background rgb(245,245,245)
        margin-right .1rem
      .right-content li:last-of-type
        margin 0
      .right-content span
        padding-right .05rem
      .right-content i
        width 0
        height 0
        border-bottom .15rem solid rgb(202,202,202)
        border-left .15rem solid transparent
      .activeli
        color $bgColor
.kong
  width 100%
  height 1rem
</style>
