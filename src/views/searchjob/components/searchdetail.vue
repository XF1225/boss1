<template>
  <div class="searchdetail" v-show="showsearchdetail">
    <div>
      <div class="detailtop">
       <div class="detailleft">
         <li class="leftli" :class="{'active': num === index}" v-for="(item,index) of detailleft" :key="item.id" @click="leftliclick(index)">{{item.name}}</li>
       </div>
       <div class="detailright">
          <li class="rightli" :class="{'activeli':isactiveli}" @click="citychoiceclick"><span>{{sorestate}}</span><i></i></li>
          <li class="rightli" @click="detailright"><span>筛选</span><i></i></li>
       </div>
      </div>
      <div class="kong"></div>
    </div>
    <HomeContent></HomeContent>
  </div>
</template>

<script>
import myEventBus from '@/assets/js/bus'
import { useStore } from 'vuex'
import HomeContent from '../../Home/components/HomeContent'
import { toRefs, reactive, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'searchdetail',
  components: { HomeContent },
  setup () {
    const emitter = myEventBus()
    const router = useRouter()
    const store = useStore()
    const data = reactive({
      num: 0,
      isactiveli: false,
      showsearchdetail: false,
      detailleft: [
        {
          id: 'D001',
          name: '搜职位'
        },
        {
          id: 'D002',
          name: '搜公司'
        }
      ]
    })
    const leftliclick = i => {
      data.num = i
      emitter.emit('scrollimg', false)
    }
    const detailright = () => {
      router.push('/shaixuan')
    }
    const citychoiceclick = () => {
      router.push('/citychoice')
      data.isactiveli = !data.isactiveli
    }
    const sorestate = computed(() => store.state.city)
    onMounted(() => {
      emitter.on('changeshow', () => {
        data.showsearchdetail = true
      })
      emitter.on('clear', () => {
        data.showsearchdetail = false
      })
    })
    return {
      ...toRefs(data),
      leftliclick,
      detailright,
      citychoiceclick,
      sorestate
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.searchdetail
  width 100%
  .kong
    width 100%
    height 1rem
  .detailtop
    width 90%
    margin 0 auto
    padding-bottom .1rem
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    border-bottom solid .02rem rgb(245,245,245)
    position fixed
    top 1.5rem
    left .5rem
    background white
    z-index 3
    .detailleft
      display flex
      flex-direction row
      align-items center
      .leftli
        display block
        font-size .35rem
        padding-right .5rem
      .active
        font-weight bold
    .detailright
      height 1rem
      display flex
      flex-direction row
      align-items center
      .rightli:last-of-type
        margin 0
      .rightli
        display flex
        flex-direction row
        align-items flex-end
        padding .2rem .3rem
        margin-right .3rem
        border-radius .08rem
        background rgb(245,245,245)
      .rightli span
        padding-right .05rem
      .rightli i
        width 0
        height 0
        border-bottom .15rem solid rgb(202,202,202)
        border-left .15rem solid transparent
      .activeli
        color $bgColor
</style>
