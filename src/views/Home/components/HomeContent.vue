<template>
  <div class="HomeContent">
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <div class="scroll-img" v-show="showscrollimg"><img src="imgs/loading.gif"></div>
      <div class="wrapper">
        <div class="cont-detail" v-for="item of HomeContent" :key="item.id">
          <div class="cont-main" @click="tocontdetail(item.id)">
            <div class="cont-title">
              <h2>{{item.conttitle}}</h2>
              <h4>{{item.contprice}}</h4>
            </div>
            <div class="cont-keys">
              <li v-for="(items, index) of item.contkeys" :key=index>{{items}}</li>
            </div>
            <div class="cont-conp">
              <h2>{{item.contconp}}</h2>
              <span>{{item.conpnum}}</span>
            </div>
            <div class="cont-name">
              <div class="cont-left">
                <div class="cont-img">
                  <img src="imgs/006.jpg">
                  <i class="iconfont zhuanshi">&#xe61d;</i>
                </div>
                <p class="cont-p">{{item.contp}}</p>
              </div>
              <div class="cont-right">
                {{item.area}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import myEventBus from '@/assets/js/bus'
import { ref, toRefs, reactive, onMounted } from 'vue'
import { getdata } from '@/utils/request'
import { useRouter } from 'vue-router'
export default {
  name: 'HomeContent',
  setup (props, context) {
    const router = useRouter()
    const emitter = myEventBus()
    const data = reactive({
      showscrollimg: false,
      HomeContent: []
    })
    const gettodata = () => {
      getdata('/mock.json').then(res => {
        data.HomeContent = res.HomeContent
      })
    }
    const tocontdetail = id => {
      router.push(`/jobsdetail/${id}`)
      window.scrollTo(0, 0)
    }
    const loading = ref(false)
    const onRefresh = () => {
      setTimeout(() => {
        emitter.emit('changegengxin', true)
        loading.value = false
        const HomeContent = data.HomeContent
        HomeContent.sort(() => {
          return 0.5 - Math.random()
        })
      }, 1000)
    }
    onMounted(() => {
      gettodata()
      emitter.on('checknums', (checknum) => {
        if (checknum !== 0) {
          data.showscrollimg = true
          setTimeout(() => {
            data.showscrollimg = false
            emitter.emit('changegengxin', true)
          }, 2000)
        }
        window.scrollTo(0, 0)
        setTimeout(() => {
          const HomeContent = data.HomeContent
          HomeContent.sort(() => {
            return 0.5 - Math.random()
          })
        }, 1000)
      })
      emitter.on('scrollimg', () => {
        data.showscrollimg = true
        setTimeout(() => {
          data.showscrollimg = false
        }, 2000)
      })
    })
    return {
      ...toRefs(data),
      gettodata,
      tocontdetail,
      onRefresh,
      loading
    }
  }
}
</script>

<style lang="stylus" scoped>
.HomeContent
  width 100%
  height 10rem
  position relative
  .scroll-img
    width 100%
    height 3rem
    display flex
    justify-content center
    align-items center
    position fixed
    z-index 5
  .scroll-img img
    width .9rem
    height .9rem
    border-radius 50%
    background white
    padding .13rem
    box-shadow 0 .05rem .1rem .05rem rgb(245,245,245)
  .wrapper
    display flex
    flex-direction column
    background rgb(245,245,245)
    margin-bottom 1.5rem
    .cont-detail:last-of-type
      margin-bottom 0
    .cont-detail
      width 100%
      background white
      margin-bottom .2rem
      .cont-main
        width 90%
        margin 0 auto
        padding-bottom .2rem
        display flex
        flex-direction column
        .cont-title
          height 1.1rem
          padding-top .2rem
          display flex
          flex-direction row
          justify-content space-between
          align-items center
        .cont-title h2
          width 45%
          font-size .46rem
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
        .cont-title h4
          font-size .4rem
          font-weight 500
          color rgb(55,194,188)
        .cont-keys
          height .8rem
          display flex
          flex-direction row
          align-items center
          font-size .32rem
          color rgb(127,127,127)
        .cont-keys li
          display inline-block
          padding .15rem .2rem
          margin-right .2rem
          border-radius .08rem
          background rgb(245,245,245)
        .cont-conp
          height .8rem
          display flex
          flex-direction row
          align-items center
        .cont-conp p, .cont-conp span
          font-size .35rem
        .cont-conp span
          color rgb(127,127,127)
          padding-left .3rem
        .cont-name
          height 1rem
          display flex
          flex-direction row
          justify-content space-between
          align-items center
          .cont-left
            display flex
            flex-direction row
            align-items center
            .cont-img
              position relative
            .cont-img img
              width .7rem
              height .7rem
              border-radius 50%
              background red
            .zhuanshi
              width .3rem
              height .3rem
              border solid .02rem white
              border-radius 50%
              background rgb(55,194,188)
              font-size .2rem
              color white
              display flex
              justify-content center
              align-items center
              position absolute
              bottom 0
              right 0
            .cont-p
              font-size .32rem
              padding-left .3rem
          .cont-right
            font-size .32rem
            color rgb(127,127,127)
</style>>
