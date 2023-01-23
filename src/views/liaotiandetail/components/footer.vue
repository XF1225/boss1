<template>
  <div>
    <div class="liaotianfooter">
     <div class="footer-top">
        <div class="changyongyu">
          <p>常用语</p>
        </div>
        <input type="text" class="faxiaoxi" placeholder="新消息" v-model="inptval" ref="inpt" @keyup.enter="pushinptval">
        <div class="biaoqingfu">
          <span class="iconfont icon-xiaolian" @click="showbiaoqingfu"></span>
          <span class="icon-outline">+</span>
        </div>
     </div>
     <div class="footer-bot" v-show="showbot">
      <li v-for="(item,index) in faceList" :key="index" @click="getfaceList(index)">{{item.char}}</li>
     </div>
    </div>
    <div class="kong">
      <div class="kong-top"></div>
      <div class="kong-bot" v-show="showbot"></div>
    </div>
  </div>
</template>

<script>
import myEventBus from '@/assets/js/bus'
import { ref, onMounted, nextTick } from 'vue'
import { getdata } from '@/utils/request'
export default {
  name: 'liaotianfooter',
  setup () {
    const inptval = ref('')
    const showbot = ref(false)
    const faceList = ref([])
    const inpt = ref(null)
    const emitter = myEventBus()
    const getdatas = () => {
      getdata('/emoji.json').then(res => {
        faceList.value = res.splice(0, 100)
      })
    }
    const pushinptval = () => {
      emitter.emit('pushval', inptval.value)
      inptval.value = ''
      showbot.value = false
    }
    onMounted(() => {
      getdatas()
      emitter.on('closebqf', () => {
        if (showbot.value === true) {
          showbot.value = false
        }
      })
    })
    const getfaceList = i => {
      inptval.value = inptval.value + faceList.value[i].char
      nextTick(() => {
        inpt.value.focus()
      })
    }
    const showbiaoqingfu = () => {
      showbot.value = !showbot.value
    }
    return {
      inptval,
      showbot,
      faceList,
      getdatas,
      pushinptval,
      getfaceList,
      showbiaoqingfu,
      inpt
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.liaotianfooter
  width 100%
  position fixed
  left 0
  bottom 0
  .footer-top
    width 100%
    height 1.2rem
    display flex
    flex-direction row
    align-items center
    background white
    .changyongyu
      width 1.8rem
      height 1.2rem
      padding-left .2rem
      display flex
      justify-content center
      align-items center
    .changyongyu p
      padding .2rem
      font-size .32rem
      color white
      background $bgColor
      border-radius .1rem
    .faxiaoxi
      width 60%
      height .8rem
      border 0
      outline none
    .faxiaoxi::placeholder
      font-size .38rem
      color rgb(187,187,187)
    .biaoqingfu
      height 1.2rem
      display flex
      flex-direction row
      align-items center
      .icon-xiaolian
        padding 0 .1rem
      .icon-xiaolian
        font-size .8rem
      .icon-outline
        width .6rem
        height .6rem
        line-height .6rem
        text-align center
        border solid .053rem #000
        border-radius 50%
        font-size .6rem
  .footer-bot::-webkit-scrollbar
    display none
  .footer-bot
    width 100%
    height 4.3rem
    padding-top .3rem
    background white
    display flex
    flex-direction row
    align-items center
    flex-wrap wrap
    overflow-y scroll
  .footer-bot li
    width 11%
    height 1rem
    display flex
    justify-content center
    align-items center
    font-size .7rem
.kong
  width 100%
  .kong-top
    width 100%
    height 1.2rem
  .kong-bot
    width 100%
    height 4.3rem
</style>
