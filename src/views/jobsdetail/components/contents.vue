<template>
  <div class="jobscontents">
    <div class="jobsdetail" v-for="item of HomeContent" :key="item.id">
      <div class="jobs-title">
        <div class="titleprice">
          <h2>{{item.conttitle}}</h2>
          <h4>{{item.contprice}}</h4>
        </div>
        <div class="titlebottom">
          <div>
            <span class="iconfont icon-weizhi"></span>
            <p>{{item.area.split(' ')[0]}}</p>
          </div>
          <div v-for="(items,index) of item.titlebottom" :key="index">
            <span :class="items.icon"></span>
            <p>{{items.title}}</p>
          </div>
        </div>
      </div>
      <div class="bossdesc">
        <div class="desc-let">
          <div class="bossimg"><img src="imgs/006.jpg"></div>
          <div class="details">
            <div class="details-top">
              <h4>{{item.contp.split('.')[0]}}</h4>
              <span>今日活跃</span>
            </div>
            <p class="details-bot">{{item.contconp.split(' ')[0]}}<span>{{item.contp.split('.')[1]}}</span></p>
          </div>
        </div>
        <span class="iconfont icon-youbian"></span>
      </div>
      <div class="jiangjinjixiao">
        <h4>奖金绩效</h4>
        <p>五险一金+绩效+期权</p>
      </div>
      <div class="zhiweixiangqing">
        <h4 class="xiangqing">职位详情</h4>
        <div class="jinengfl">
          <li v-for="(items,index) of item.contkeys" :key="index">{{items}}</li>
        </div>
        <div :class="zhiwei==true?'zhiweidetail1':'zhiweidetail2'">
          <p class="detail-title">工作职责：</p>
          <p class="detail-desc" v-for="(item,index) of zhiweidetail" :key="index">{{item}}</p>
          <div class="showmore" v-show="showzhiwei" @click="zhiweiclick">
            <span class="chakanquanbu">查看全部</span>
          </div>
        </div>
      </div>
      <div class="companydetail">
        <div class="com-detail">
          <div>
            <div class="com-img"><img src="imgs/006.jpg"></div>
            <div class="com-desc">
              <p>{{item.contconp.split(' ')[0]}}</p>
              <span>{{item.contconp.split(' ')[1]!=undefined?item.contconp.split(' ')[1]+'.':''}}{{item.conpnum}}.电子商务</span>
            </div>
          </div>
          <span class="iconfont icon-youbian"></span>
        </div>
        <Map class="Map" :HomeContent="HomeContent"></Map>
      </div>
      <div class="wenxintishi">
        <div class="wxts">
          <span class="iconfont icon-gantanhao-xianxingsanjiaokuang"></span>
          <h6>温馨提示</h6>
        </div>
        <p class="wxts-desc">该Boss承诺名下所有职位不向您收费，如有不实，请立即举报。</p>
      </div>
      <div class="jzlfenxi">
        <div class="jzl-title">
          <h4 class="jzl-h4">你的竞争力分析</h4>
          <div class="jzl-right">
            <span>使用竞争力分析器</span>
            <i class="iconfont icon-youbian"></i>
          </div>
        </div>
        <div class="jzl-paiming">
          <p class="paiming">三个月内共<span>20</span>位牛人沟通，你的竞争力排名第<span>10</span>位</p>
          <p class="weizhi">你处在<span>10</span>位置</p>
        </div>
        <div class="chuzaiweizhi">
          <div class="weizhitiao">
            <li></li><li></li><li></li><li></li>
          </div>
          <div class="tiaotitle">
            <li>一般</li>
            <li>良好</li>
            <li>优秀</li>
            <li>极好</li>
          </div>
        </div>
      </div>
      <div class="bottom-button">
        <input type="button" class="bottom-btn" value="立即沟通" @click="toliaotian(item.id)">
      </div>
    </div>
    <fenxiang v-show="showfenxiang"></fenxiang>
  </div>
</template>

<script>
import Map from '@/components/Map'
import myEventBus from '@/assets/js/bus'
import { reactive, toRefs, onMounted, onActivated } from 'vue'
import { getdata } from '@/utils/request'
import fenxiang from '../../../components/fenxiang'
import { useRoute, useRouter } from 'vue-router'
export default {
  name: 'jobscontents',
  components: { Map, fenxiang },
  setup () {
    const emitter = myEventBus()
    const route = useRoute()
    const router = useRouter()
    const data = reactive({
      HomeContent: [],
      showfenxiang: false,
      zhiwei: true,
      showzhiwei: true,
      zhiweidetail: [
        '1.负责公司产品的前端开发、页面架构设计，与后台工程师协作完成数据交互，动态信息展现；',
        '2.负责产品的交互效果开发，并能使用JS封装良好的前端交互组件，提高团队协作效率；',
        '3.工作态度端正，能够积极主动去工作，高效推动项目完成，能够提供前端相关优化方案；'
      ]
    })
    const getdatas = () => {
      getdata('/api/mock.json').then(res => {
        data.HomeContent = res.HomeContent.filter(item => item.id === route.params.id)
        emitter.emit('conttitle', data.HomeContent[0].conttitle)
      })
    }
    const toliaotian = id => {
      router.push(`/liaotiandetail/${id}`)
      window.scrollTo(0, 0)
    }
    const zhiweiclick = () => {
      data.zhiwei = data.showzhiwei = false
    }
    onMounted(() => {
      getdatas()
      emitter.on('fenxiang', () => {
        data.showfenxiang = true
      })
      emitter.on('closefenxiang', () => {
        data.showfenxiang = false
      })
      emitter.on('chushihua', () => {
        data.zhiwei = data.showzhiwei = true
      })
    })
    onActivated(() => {
      getdatas()
    })
    return {
      ...toRefs(data),
      getdatas,
      toliaotian,
      zhiweiclick
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.jobscontents
  width 100%
  .jobsdetail
    width 90%
    margin 0 auto
    .jobs-title
      width 100%
      padding .8rem 0 .3rem 0
      display flex
      flex-direction column
      border-bottom solid .02rem rgb(230,230,230)
      .titleprice
        width 100%
        display flex
        flex-direction row
        justify-content space-between
        align-items flex-start
      .titleprice h2,.titleprice h4
        width 65%
        font-size .8rem
        word-break break-all
        display -webkit-box
        overflow hidden
        -webkit-box-orient vertical
        -webkit-line-clamp 2
      .titleprice h2
        line-height .9rem
      .titleprice h4
        width 35%
        font-size .45rem
        display flex
        justify-content flex-end
        color $bgColor
      .titlebottom
        width 100%
        height 1.2rem
        display flex
        flex-direction row
        align-items center
      .titlebottom div
        display flex
        flex-direction row
        align-items center
        padding-right .5rem
      .iconfont
        font-size .45rem
        padding-right .1rem
    .bossdesc
      width 100%
      height 2.5rem
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      border-bottom solid .02rem rgb(230,230,230)
      .desc-let
        width 80%
        display flex
        flex-direction row
        align-items center
        .bossimg
          width 1.3rem
          height 1.3rem
          border-radius 50%
          overflow hidden
        .bossimg img
          width 100%
          height 100%
        .details
          width 60%
          padding-left .3rem
          display flex
          flex-direction column
          .details-top
            display flex
            flex-direction row
            align-items center
            padding-bottom .2rem
          .details-top h4
            font-size .42rem
          .details-top span
            font-size .35rem
            color rgb(127,127,127)
            margin-left .2rem
          .details-bot
            font-size .38rem
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            display flex
            flex-direction row
            align-items center
          .details-bot span:before
            content ' '
            display inline-block
            width .06rem
            height .08rem
            background #000
            border-radius 100%
            margin 0 .08rem .08rem .1rem
      .icon-youbian
        font-size .55rem
        color rgb(210,210,210)
    .jiangjinjixiao
      width 100%
      height 2.5rem
      display flex
      flex-direction column
      justify-content center
      align-items flex-start
      border-bottom solid .02rem rgb(230,230,230)
    .jiangjinjixiao h4
      font-size .42rem
      padding-bottom .5rem
    .jiangjinjixiao p
      font-size .38rem
      color rgb(87,87,87)
    .zhiweixiangqing
      width 100%
      padding-bottom .5rem
      border-bottom solid .02rem rgb(230,230,230)
      .xiangqing
        width 100%
        height 1.2rem
        line-height 1.2rem
        font-size .42rem
      .jinengfl
        width 100%
        display flex
        flex-direction row
        flex-wrap wrap
        padding-bottom .2rem
      .jinengfl li
        display inline-block
        padding .15rem .2rem
        margin 0 .2rem .2rem 0
        border-radius .1rem
        color rgb(87,87,87)
        background rgb(245,245,245)
      .zhiweidetail1
        width 100%
        height 3.2rem
        overflow hidden
        position relative
        font-size .35rem
      .zhiweidetail2
        width 100%
        position relative
        font-size .35rem
      .zhiweidetail1 p,.zhiweidetail2 p
        line-height .6rem
      .showmore
        width 100%
        height .8rem
        background linear-gradient(180deg,rgba(255,255,255,.6),#fff)
        position absolute
        left 0
        bottom 0
        display flex
        justify-content center
        align-items flex-end
        .chakanquanbu
          color #07ad9d
    .companydetail
      width 100%
      border-bottom solid .02rem rgb(230,230,230)
      .com-detail
        width 100%
        height 2rem
        padding-bottom .2rem
        display flex
        flex-direction row
        justify-content space-between
        align-items center
      .com-detail div
        width 90%
        display flex
        flex-direction row
        justify-content center
        .com-img
          width 1.3rem
          height 1.3rem
          border-radius .1rem
          overflow hidden
        .com-img img
          width 100%
          height 100%
        .com-desc
          width 80%
          overflow hidden
          padding-left .5rem
          display flex
          flex-direction column
        .com-desc p
          width 100%
          font-size .45rem
          padding-bottom .2rem
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
        .com-desc span
          font-size .4rem
      .icon-youbian
        font-size .5rem
      .Map
        width 100%
        height 5rem
        border-radius .3rem
        margin-bottom .5rem
        z-index 2
    .wenxintishi
      width 100%
      padding-bottom .3rem
      border-bottom solid .02rem rgb(230,230,230)
      .wxts
        width 100%
        height 1.5rem
        display flex
        flex-direction row
        align-items center
        color red
      .wxts span
        font-size .55rem
      .wxts h6
        font-size .43rem
        padding-left .2rem
      .wxts-desc
        line-height .6rem
        font-size .38rem
    .jzlfenxi
      width 100%
      padding-bottom 1.8rem
      .jzl-title
        width 100%
        height 1.5rem
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        .jzl-h4
          font-size .55rem
        .jzl-right
          display flex
          flex-direction row
          align-items center
          font-size .4rem
          color rgb(127,127,127)
        .jzl-right i
          font-size .5rem
          padding-left .1rem
      .jzl-paiming
        width 100%
        display flex
        flex-direction column
        .paiming,.weizhi
          width 100%
          line-height .6rem
          font-size .42rem
          color rgb(57,57,57)
        .weizhi
          padding-top .2rem
        .paiming span,.weizhi span
          color white
          background rgb(179,228,225)
          filter blur(.07rem)
      .chuzaiweizhi
        width 100%
        padding .3rem 0 1.5rem 0
        .weizhitiao
          width 100%
          height .3rem
          display flex
          flex-direction row
          justify-content space-around
          align-items center
          border-radius .5rem
          background linear-gradient(to right,rgb(88,224,255),rgb(31,244,199))
        .weizhitiao li
          width 25%
          height .3rem
          line-height .3rem
          display inline-block
          border-right solid .02rem white
        .weizhitiao li:last-of-type
          border 0
        .tiaotitle
          width 100%
          height .8rem
          display flex
          flex-direction row
          justify-content space-around
          align-items center
          font-size .38rem
          color rgb(187,187,187)
        .tiaotitle li
          display inline-block
    .bottom-button
      width 100%
      height 2rem
      display flex
      justify-content center
      align-items center
      background white
      position fixed
      left 0
      bottom 0
      .bottom-btn
        width 90%
        margin 0 auto
        height 1.3rem
        color white
        font-size .4rem
        background $bgColor
        border 0
        border-radius .1rem
        outline none
</style>>
