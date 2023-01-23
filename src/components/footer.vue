<template>
    <div class="ufooter">
      <ul class="tabItem">
        <li class="tabTo"  v-for="item of tabData" :key="item.name" @click="tabClick(item.path)">
          <span :class="item.path==$route.path?item.activeIcon:item.icon"></span>
          <p :class="{'active':item.path==$route.path}" class="tabText">{{item.name}}</p>
        </li>
      </ul>
    </div>
</template>
<script>
import { toRefs, reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
    const data = reactive({
      tabData: [
        {
          path: '/',
          icon: 'iconfont icon-shoutibao1',
          activeIcon: 'iconfont icon-shoutibao',
          name: '职位'
        },
        {
          path: '/faxian',
          icon: 'iconfont icon-faxian1',
          activeIcon: 'iconfont icon-faxian',
          name: '发现'
        },
        {
          path: '/xiaoxi',
          icon: 'iconfont icon-xiaoxi2',
          activeIcon: 'iconfont icon-xiaoxi3',
          name: '消息'
        },
        {
          path: '/wode',
          icon: 'iconfont icon-wode',
          activeIcon: 'iconfont icon-weibiaoti-_huabanfuben',
          name: '我的'
        }
      ]
    })
    const tabClick = path => {
      router.push(path)
      window.scrollTo(0, 0)
    }
    return {
      ...toRefs(data),
      tabClick
    }
  }
}
</script>
<style lang="stylus" scoped>
.ufooter
  width 100%
  height 1.2rem
  background white
  position fixed
  bottom 0
  left 0
  padding-bottom .15rem
  z-index 3
  .tabItem
    width 100%
    height 1.2rem
    display flex
    flex-direction row
    justify-content space-around
    align-items center
    border-top solid .03rem rgb(245,245,245)
    .tabTo
      height 1.45rem
      display flex
      flex-direction column
      justify-content center
      align-items center
      color rgb(68,68,68)
      .iconfont
        font-size .7rem
      .icon-xiaoxi2, .icon-xiaoxi3
        font-size .5rem
        padding-bottom .1rem
      .icon-shoutibao1, .icon-shoutibao
        font-size .8rem
      .tabText
        font-size .32rem
        padding-top .1rem
</style>
