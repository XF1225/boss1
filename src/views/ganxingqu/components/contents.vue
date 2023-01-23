<template>
  <div class="ganxingqucont">
    <div class="ganxingqulist" v-for="item of HomeContent" :key="item.id" @touchstart="shifoushanchu(item.id)" @touchmove="moves" @touchend="toup(item.id)">
      <div class="liaotiandesc">
        <div class="htops">
          <h4>{{item.conttitle}}</h4>
          <p>{{item.contprice}}</p>
        </div>
        <div class="compname">
          <p>{{item.contconp}}</p>
        </div>
        <div class="midldesc">
          <!-- <li v-for="(item,index) of midldesc" :key="index">{{item}}</li> -->
          <li v-for="(items,index) of [item.area,item.contkeys[0],item.contkeys[1]]" :key="index">{{items}}</li>
        </div>
        <div class="jianchengdesc">
          <div class="touxiang">
            <img src="/imgs/006.jpg">
            <i class="iconfont zhuanshi">&#xe61d;</i>
          </div>
          <div class="chenghu">{{item.contp}}</div>
        </div>
        <div class="bottoms">
          <div class="bot-desc">
            <p>{{nowtimes1}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="confirm" v-show="confirm" @touchmove.prevent>
      <div class="wenxintishi">
        <div class="details">
          <h4 class="details-h4">温馨提示</h4>
          <p class="details-p">确认对"{{titles}}"取消感兴趣吗？</p>
          <div class="details-div">
            <p class="quxiao" @click="cancel">取消</p>
            <p class="queding" @click="sure">确定</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { getdata } from '@/utils/request'
import { reactive, toRefs, computed, onActivated } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'ganxingqucont',
  setup () {
    const router = useRouter()
    const store = useStore()
    const data = reactive({
      HomeContent: [],
      timer: 0,
      confirm: false,
      titles: '',
      fanggastate: true,
      Id: ''
    })
    const nowtimes1 = computed(() => {
      const Month = new Date().getMonth() + 1
      const Dates = new Date().getDate()
      const Hours = new Date().getHours()
      const Minutes = new Date().getMinutes()
      if (Hours < 10) {
        return Month + '月' + Dates + '日' + ' ' + '0' + Hours + ':' + Minutes
      }
      if (Minutes < 10) {
        return Month + '月' + Dates + '日' + ' ' + Hours + ':' + '0' + Minutes
      }
      return Month + '月' + Dates + '日' + ' ' + Hours + ':' + Minutes
    })
    const states = computed(() => store.state.shoucangID)
    const getdatas = () => {
      getdata('/mock.json').then(res => {
        // 没有 data.HomeContent = [] 的话，点击返回会重复不刷新数据
        data.HomeContent = []
        for (let i = 0; i < res.HomeContent.length; i++) {
          for (let j = 0; j < states.value.length; j++) {
            if (res.HomeContent[i].id === states.value[j]) {
              data.HomeContent.push(res.HomeContent[i])
            }
          }
        }
      })
    }
    const shifoushanchu = id => {
      if (data.fagnfastate === true) {
        data.timer = setTimeout(() => {
          data.timer = 0
          data.confirm = true
          for (let i = 0; i < data.HomeContent.length; i++) {
            if (data.HomeContent[i].id === id) {
              data.titles = data.HomeContent[i].conttitle
            }
          }
        }, 1000)
        data.Id = id
      }
    }
    const moves = () => {
      data.fagnfastate = false
      data.timer = 0
    }
    const toup = id => {
      data.fagnfastate = true
      if (data.fagnfastate === true) {
        clearTimeout(data.timer)
        if (data.timer !== 0) {
          router.push(`/jobsdetail/${id}`)
        }
      }
    }
    const cancel = () => {
      data.confirm = false
    }
    const sure = () => {
      data.confirm = false
      for (let i = 0; i < data.HomeContent.length; i++) {
        if (data.HomeContent[i].id === data.Id) {
          data.HomeContent.splice(i, 1)
          store.commit('shoucang', data.Id)
        }
      }
    }
    onActivated(() => { getdatas() })
    return {
      ...toRefs(data),
      nowtimes1,
      states,
      getdatas,
      shifoushanchu,
      moves,
      toup,
      cancel,
      sure
    }
  }
}
</script>

<style lang="stylus" scoped>
.ganxingqucont
  width 100%
  background rgb(245,245,245)
  .ganxingqulist
    width 100%
    background white
    margin-bottom .25rem
    .liaotiandesc
      width 90%
      margin 0 auto
      .htops
        width 100%
        height 1rem
        display flex
        flex-direction row
        justify-content space-between
        align-items center
      .htops h4
        font-size .4rem
        padding-left .3rem
      .htops p
        font-size .38rem
        padding-right .3rem
        color $bgColor
      .compname
        width 100%
        padding .1rem 0 .3rem 0
      .compname p
        font-size .38rem
        padding-left .3rem
      .midldesc
        height .8rem
        padding-left .3rem
        display flex
        flex-direction row
        align-items center
        font-size .35rem
        color rgb(127,127,127)
      .midldesc li
        display inline-block
        padding .15rem .2rem
        margin-right .2rem
        border-radius .08rem
        background rgb(245,245,245)
      .jianchengdesc
        width 100%
        height 1.5rem
        display flex
        flex-direction row
        align-items center
        .touxiang
          width .7rem
          height .7rem
          margin-left .3rem
          border-radius 50%
          overflow hidden
          position relative
        .touxiang img
          width 100%
          height 100%
        .zhuanshi
          width .25rem
          height .25rem
          border solid .02rem white
          border-radius 50%
          background rgb(55,194,188)
          font-size .1rem
          color white
          display flex
          justify-content center
          align-items center
          position absolute
          bottom 0
          right .05rem
        .chenghu
          font-size .35rem
          padding-left .2rem
          color rgb(127,127,127)
      .bottoms
        width 100%
        .bot-desc
          width 92%
          line-height 1.2rem
          margin 0 auto
          border-top solid .02rem rgb(240,240,240)
        .bot-desc p
          font-size .32rem
          color rgb(157,157,157)
  .confirm
    width 100%
    height 100vh
    position fixed
    left 0
    top 0
    background rgba(0,0,0,.6)
    z-index 3
    display flex
    justify-content center
    align-items center
    .wenxintishi
      width 85%
      background white
      .details
        width 90%
        margin 0 auto
        .details-h4
          margin-top .3rem
          line-height 1.5rem
          font-size .5rem
        .details-p
          font-size .38rem
          color rgb(87,87,87)
        .details-div
          margin-top .5rem
          height 1.5rem
          display flex
          flex-direction row
          justify-content flex-end
          align-items center
          font-size .4rem
          .quxiao
            color rgb(127,127,127)
            margin-right .5rem
          .queding
            color $bgColor
</style>
