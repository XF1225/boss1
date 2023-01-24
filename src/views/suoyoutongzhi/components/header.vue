<template>
  <div class="tongzhiheader">
    <van-icon name="arrow-left" size=".5rem" class="el-icon-arrow-left"  @click="toup" />
    <div class="header-title" @click="changetongzhi">
      <h4>{{title}}</h4>
      <van-icon name="arrow-down" size=".5rem" class="el-icon-arrow-down" v-show="showarrow" />
      <van-icon name="arrow-up" size=".5rem" class="el-icon-arrow-up" v-show="!showarrow" />
    </div>
    <div class="others" v-show="showothers">
      <div class="others-desc">
        <div class="details">
          <li class="others-li" :class="num===index?'active':''" v-for="(item,index) of tongzhi" :key="item.id" @click="tongzhiclick(index)">{{item.title}}</li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs, reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'tongzhiheader',
  setup () {
    const router = useRouter()
    const data = reactive({
      tongzhi: [
        {
          id: 'T001',
          title: '所有通知'
        },
        {
          id: 'T002',
          title: '道具通知'
        },
        {
          id: 'T003',
          title: '活动通知'
        },
        {
          id: 'T004',
          title: '财务通知'
        },
        {
          id: 'T005',
          title: '系统通知'
        }
      ],
      title: '所有通知',
      num: 0,
      showarrow: true,
      showothers: false
    })
    const toup = () => {
      router.go(-1)
    }
    const tongzhiclick = i => {
      data.num = i
      data.title = data.tongzhi[i].title
      data.showothers = false
      data.showarrow = !data.showarrow
    }
    const changetongzhi = () => {
      data.showarrow = !data.showarrow
      data.showothers = !data.showothers
    }
    return {
      ...toRefs(data),
      toup,
      tongzhiclick,
      changetongzhi
    }
  }
}
</script>

<style lang="stylus" scoped>
.tongzhiheader
  width 100%
  height 1.2rem
  position relative
  display flex
  flex-direction row
  justify-content center
  align-items center
  .el-icon-arrow-left
    position absolute
    left .5rem
  .header-title
    display flex
    flex-direction row
    align-items center
  .header-title h4
    font-size .4rem
  .el-icon-arrow-down,.el-icon-arrow-up
    padding-left .1rem
  .others
    width 100%
    height 90vh
    position fixed
    left 0
    top 1.2rem
    background rgba(0,0,0,.5)
    .others-desc
      width 100%
      display flex
      flex-direction column
      background white
      border-top solid .01rem rgb(230,230,230)
      .details
        width 90%
        margin 0 auto
        .others-li:last-of-type
          border 0
        .others-li
          width 100%
          line-height 1rem
          display inline-block
          font-size .35rem
          color rgb(87,87,87)
          border-bottom solid .02rem rgb(230,230,230)
        .active
          font-weight bold
</style>
