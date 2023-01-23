<template>
  <div>
    <div class="liaotianheader">
      <div class="htop">
        <img class="el-icon-arrow-left" src="/imgs/down.png" @click="toup">
        <div class="hdesc" v-for="item of HomeContent" :key="item.id">
          <h4>{{item.contp.split('.')[0]}}</h4>
          <p>{{item.contconp.split(' ')[0]}}.{{item.contp.split('.')[1]}}</p>
        </div>
        <span class="el-icon-more"></span>
      </div>
      <div class="tubiao">
        <div class="tubiaodesc" v-for="item of tubiaodesc" :key="item.id">
          <van-icon :name="item.icon" :color="item.color" size=".5rem" />
          <p>{{item.name}}</p>
        </div>
      </div>
      <div class="shoufeijubao" v-show="showjubao">
        <p>该BOSS所招聘过程中若向你收费，请举报。</p>
        <span class="el-icon-close" @click="closeclick">X</span>
      </div>
    </div>
    <div class="kong">
      <div class="kong-top"></div>
      <div class="kong-bottom" v-show="showjubao"></div>
    </div>
  </div>
</template>

<script>
import { toRefs, reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'liaotianheader',
  props: {
    HomeContent: Array
  },
  setup (props, context) {
    const router = useRouter()
    const data = reactive({
      tubiaodesc: [
        {
          id: 'B001',
          icon: 'phone',
          name: '电话号',
          color: '#bbb'
        },
        {
          id: 'B002',
          icon: 'wechat',
          name: '微信号',
          color: '#bbb'
        },
        {
          id: 'B003',
          icon: 'graphic',
          name: '发简历',
          color: '#bbb'
        },
        {
          id: 'B004',
          icon: 'clear',
          name: '不感兴趣',
          color: '#f00'
        }
      ],
      HomeContent: props.HomeContent,
      showjubao: true
    })
    const toup = () => { router.go(-1) }
    const closeclick = () => {
      data.showjubao = false
    }
    return {
      ...toRefs(data),
      toup,
      closeclick
    }
  }
}
</script>

<style lang="stylus" scoped>
.liaotianheader
  width 100%
  position fixed
  z-index 3
  .htop
    width 100%
    height 1.5rem
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    background white
    .el-icon-arrow-left
      padding-left .5rem
      transform rotate(90deg)
      width .5rem
      height .3rem
      margin-bottom .5rem
    .el-icon-more
      padding-right .5rem
      font-size .4rem
      color rgb(87,87,87)
    .hdesc
      display flex
      flex-direction column
      align-items center
    .hdesc h4
      font-size .4rem
      padding-bottom .15rem
    .hdesc p
      font-size .32rem
      color rgb(87,87,87)
  .tubiao
    width 100%
    height 1.5rem
    display flex
    flex-direction row
    justify-content space-around
    align-items center
    background white
    .tubiaodesc
      display flex
      flex-direction column
      align-items center
    .tubiaodesc:last-of-type span
      color red
    .tubiaodesc:last-of-type p
      color rgb(87,87,87)
    .tubiaodesc span,.tubiaodesc p
      font-size .5rem
      color rgb(187,187,187)
    .tubiaodesc p
      font-size .32rem
      padding-top .2rem
    .active
      color red
  .shoufeijubao
    width 100%
    height 1rem
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    background rgb(255,168,48)
  .shoufeijubao p
    font-size .35rem
    color white
    padding-left .8rem
  .shoufeijubao span
    font-size .5rem
    transform scale(1, .8)
    color white
    padding-right .8rem
.kong
  width 100%
  .kong-top
    width 100%
    height 3rem
  .kong-bottom
    width 100%
    height 1rem
</style>
