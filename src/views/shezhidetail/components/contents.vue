<template>
  <div class="contents">
    <div class="contents01" v-show="show01">
      <div class="detail">
        <div class="detail-row" v-for="(item,index) of contents01" :key="index">
          <p>{{item.title}}</p>
          <div>
            <span>{{item.desc}}</span>
            <van-icon name="arrow" size=".5rem" />
          </div>
        </div>
      </div>
    </div>
    <div class="contents02" v-show="show02">
      <div class="main01">
        <div class="detail02">
          <div class="yjmdr">
            <div>
              <p>夜间免打扰</p>
              <van-switch size='22px' v-model="yjmdrvalue" active-color="rgb(18,173,165)" inactive-color="#C0CCDA"></van-switch>
            </div>
            <span>功能开启后，夜间消息正常接收但不推送</span>
          </div>
          <div class="mdrsd">
            <p>免打扰时段</p>
            <div>
              <span>22:00-08:00</span>
              <van-icon name="arrow" size=".5rem" />
            </div>
          </div>
          <div class="syyzd">
            <p>声音与震动</p>
            <van-switch size='22px' v-model="syyzdvalue" active-color="rgb(18,173,165)" inactive-color="#C0CCDA"></van-switch>
          </div>
        </div>
      </div>
      <div class="main02">
        <div class="detail02">
          <div class="wxtz">
            <div>
              <p class="wxtz-p">微信通知</p>
              <div class="wxtz-div">
                <span>推荐开启</span>
                <van-icon name="arrow" size=".5rem" />
              </div>
            </div>
            <span class="wxtz-apsn">在微信上接收面试通知等重要消息</span>
          </div>
          <div class="dbtx">
            <div>
              <p>APP内顶部提醒</p>
              <van-switch size='22px' v-model="dbtxvalue" active-color="rgb(18,173,165)" inactive-color="#C0CCDA"></van-switch>
            </div>
            <span>在使用APP过程中，重要消息回收到顶部提醒</span>
          </div>
          <div class="dxtz">
            <p>短信通知</p>
            <van-switch size='22px' v-model="dxtzvalue" active-color="rgb(18,173,165)" inactive-color="#C0CCDA"></van-switch>
          </div>
          <div class="gxhfwsz">
            <p>个性化服务设置</p>
            <van-icon name="arrow" size=".5rem" />
          </div>
        </div>
      </div>
    </div>
    <div class="contents03" v-show="show03">
      <div class="detail03">
        <div class="pbgs">
          <p>屏蔽公司</p>
          <van-icon name="arrow" size=".5rem" />
        </div>
        <div class="ycjl">
          <p>对BOSS隐藏简历</p>
          <van-switch size='22px' v-model="ycjlvalue" active-color="rgb(18,173,165)" inactive-color="#C0CCDA"></van-switch>
        </div>
        <div class="rcjjr" @click="rcjjrclick">
          <div>
            <p>对人才经纪人隐藏简历</p>
            <van-switch size='22px' v-model="rcjjrvalue" active-color="rgb(18,173,165)" inactive-color="#C0CCDA"></van-switch>
          </div>
          <span>人才经纪人是中介公司的招聘中</span>
        </div>
        <div class="ycjl">
          <p>不看代招职位</p>
          <van-switch size='22px' v-model="dzzwvalue" active-color="rgb(18,173,165)" inactive-color="#C0CCDA"></van-switch>
        </div>
        <div class="pbgs">
          <p>权限管理</p>
          <van-icon name="arrow" size=".5rem" />
        </div>
      </div>
    </div>
    <div class="contents04" v-show="show04">
      <div class="zzhb-row">
        <p>自动接收直直红包</p>
        <van-switch style="margin-right:.2rem;" size='22px' v-model="zzhbvalue" active-color="rgb(18,173,165)" inactive-color="#C0CCDA"></van-switch>
      </div>
      <div class="zzhb-desc">
        <p>自动接收直直发来的红包，并授权直直将您的联系方式发送对您有意的BOSS，每接收1个红包仅授权发送1次</p>
        <span>注：如当前无求职意向，请勿开启此功能，以减少无效沟通；开启该功能后如连续 7天未使用APP，系统将自动为您关闭</span>
      </div>
    </div>
    <div class="contents05" v-show="show05">
      <div class="dzhy">
        <div class="dzhy-desc">
          <div>
            <p>打招呼语</p>
            <van-switch size='22px' v-model="dzhyvalue" active-color="rgb(18,173,165)" inactive-color="#C0CCDA"></van-switch>
          </div>
          <span>选中的打招呼将在下次与新BOSS沟通时生效</span>
        </div>
      </div>
      <div class="dzhy-contents">
        <div class="dzhy-detail">
          <van-radio-group v-model="radio2" class="dzhy-radios" v-for="(item,index) of dzhydetail" :key="index">
            <van-radio :name="item.index" class="el-radio">{{item.title}}</van-radio>
          </van-radio-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myEventBus from '@/assets/js/bus'
import { toRefs, reactive, onActivated } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'contents',
  setup () {
    const route = useRoute()
    const emitter = myEventBus()
    const data = reactive({
      contents01: [
        {
          title: '修改手机号',
          desc: '158****4627'
        },
        {
          title: '修改密码',
          desc: '去修改'
        },
        {
          title: '绑定微信号',
          desc: '未绑定'
        }
      ],
      dzhydetail: [
        {
          index: '0',
          title: '你好'
        },
        {
          index: '1',
          title: 'BOSS，您好'
        },
        {
          index: '2',
          title: '你好，可以聊聊么'
        },
        {
          index: '3',
          title: '我对产品经理职位(示例职位)很感兴趣，希望可以深聊，谢谢！'
        },
        {
          index: '4',
          title: '请问产品经理职位(示例职位)还在招吗，谢谢！'
        },
        {
          index: '5',
          title: '你好，对贵公司很感兴趣，希望能和您聊聊'
        },
        {
          index: '6',
          title: '你好，可以聊聊吗？您这个职位我很有兴趣，希望进一步了解'
        },
        {
          index: '7',
          title: '你好，我想应聘贵公司的产品经理职位(示例职位)，期盼回复，谢谢！'
        },
        {
          index: '8',
          title: '你好，我对这个职位很有兴趣，如方便能否聊聊？'
        },
        {
          index: '9',
          title: '请问贵公司的产品经理职位(示例职位)还有空缺么？我个人挺感兴趣的😀'
        }
      ],
      yjmdrvalue: true,
      syyzdvalue: true,
      dbtxvalue: true,
      dxtzvalue: true,
      ycjlvalue: true,
      rcjjrvalue: true,
      dzzwvalue: true,
      zzhbvalue: false,
      dzhyvalue: true,
      show01: false,
      show02: false,
      show03: false,
      show04: false,
      show05: false,
      radio2: 0
    })
    onActivated(() => {
      switch (route.params.id) {
        case 'S001':
          data.show01 = true
          data.show05 = data.show02 = data.show03 = data.show04 = false
          break
        case 'S002':
          data.show02 = true
          data.show01 = data.show03 = data.show04 = data.show05 = false
          break
        case 'S003':
          data.show03 = true
          data.show01 = data.show02 = data.show04 = data.show05 = false
          break
        case 'S004':
          data.show04 = true
          data.show01 = data.show02 = data.show03 = data.show05 = false
          break
        case 'S005':
          data.show05 = true
          data.show01 = data.show02 = data.show03 = data.show04 = false
          break
        default:
          data.show01 = data.show02 = data.show03 = data.show04 = data.show05 = false
          break
      }
    })
    const rcjjrclick = () => {
      data.rcjjrvalue = !data.rcjjrvalue
      if (data.rcjjrvalue === true) {
        emitter.emit('changercjjr', true)
      } else {
        emitter.emit('changercjjr', false)
      }
    }
    return {
      ...toRefs(data),
      rcjjrclick
    }
  }
}
</script>

<style lang="stylus" scoped>
.contents
  width 100%
  .contents01
    width 100%
    .detail
      width 90%
      margin 0 auto
      .detail-row
        width 100%
        height 1.8rem
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        border-bottom solid .02rem rgb(235,235,235)
      .detail-row p
        font-size .45rem
      .detail-row div
        font-size .34rem
        color rgb(189,189,189)
        display flex
        flex-direction row
        align-items center
      .detail-row i
        font-size .4rem
        font-style normal
        padding 0 .1rem
  .contents02
    width 100%
    background rgb(245,245,245)
    .main01
      width 100%
      background white
      .detail02
        width 90%
        margin 0 auto
        .yjmdr
          height 1.8rem
          display flex
          flex-direction column
          justify-content center
        .yjmdr div
          display flex
          flex-direction row
          justify-content space-between
          align-items center
          font-size .45rem
        .yjmdr span
          padding-top .15rem
          font-size .34rem
          color rgb(127,127,127)
        .mdrsd
          width 100%
          height 1.8rem
          display flex
          flex-direction row
          justify-content space-between
          align-items center
          border-bottom solid .02rem rgb(235,235,235)
        .mdrsd p
          font-size .45rem
        .mdrsd div
          font-size .34rem
          color rgb(189,189,189)
          display flex
          flex-direction row
          align-items center
        .mdrsd i
          font-size .4rem
          font-style normal
          padding 0 .1rem
        .syyzd
          width 100%
          height 1.8rem
          display flex
          flex-direction row
          justify-content space-between
          align-items center
        .syyzd p
          font-size .45rem
    .main02
      width 100%
      background white
      margin-top .15rem
      .detail02
        width 90%
        margin 0 auto
        .wxtz
          width 100%
          height 1.8rem
          display flex
          flex-direction column
          justify-content center
        .wxtz div
          display flex
          flex-direction row
          justify-content space-between
          align-items center
          .wxtz-p
            font-size .45rem
          .wxtz-div
            display flex
            justify-content center
          .wxtz-div span
            font-size .28rem
            padding .1rem .15rem
            color rgb(18,173,165)
            background rgb(203,254,255)
          .wxtz-div i
            font-size .4rem
            font-style normal
            padding 0 .1rem 0 .25rem
        .wxtz-apsn
          font-size .34rem
          padding-top .15rem
          color rgb(127,127,127)
        .dbtx
          width 100%
          height 1.8rem
          display flex
          flex-direction column
          justify-content center
        .dbtx div
          display flex
          flex-direction row
          justify-content space-between
          align-items center
          font-size .45rem
        .dbtx span
          padding-top .15rem
          font-size .34rem
          color rgb(127,127,127)
        .dxtz
          width 100%
          height 1.8rem
          display flex
          flex-direction row
          justify-content space-between
          align-items center
        .dxtz p
          font-size .45rem
        .gxhfwsz
          width 100%
          height 1.8rem
          display flex
          flex-direction row
          justify-content space-between
          align-items center
          border-bottom solid .02rem rgb(235,235,235)
        .gxhfwsz p
          font-size .45rem
        .gxhfwsz i
          font-size .4rem
          font-style normal
          padding 0 .1rem
  .contents03
    width 100%
    .detail03
      width 90%
      margin 0 auto
      .pbgs
        width 100%
        height 1.8rem
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        border-bottom solid .02rem rgb(235,235,235)
      .pbgs p
        font-size .45rem
      .pbgs i
        font-size .4rem
        font-style normal
        padding 0 .1rem
      .ycjl
        width 100%
        height 1.8rem
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        border-bottom solid .02rem rgb(235,235,235)
      .ycjl p
        font-size .45rem
      .rcjjr
        width 100%
        height 1.8rem
        display flex
        flex-direction column
        justify-content center
        border-bottom solid .02rem rgb(235,235,235)
      .rcjjr div
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        font-size .45rem
      .rcjjr span
        padding-top .15rem
        font-size .34rem
        color rgb(127,127,127)
  .contents04
    width 100%
    height 86vh
    padding-top .6rem
    background rgb(245,245,245)
    .zzhb-row
      width 100%
      height 1.2rem
      background white
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      border-bottom solid .02rem rgb(235,235,235)
    .zzhb-row p
      font-size .45rem
      padding-left .2rem
    .zzhb-desc
      width 95%
      margin 0 auto
      display flex
      flex-direction column
    .zzhb-desc p,.zzhb-desc span
      line-height .6rem
      padding-top .2rem
      font-size .35rem
      color rgb(127,127,127)
    .zzhb-desc span
      color red
  .contents05
    width 100%
    .dzhy
      width 100%
      border-bottom solid .02rem rgb(235,235,235)
      .dzhy-desc
        width 90%
        margin 0 auto
        height 2rem
        display flex
        flex-direction column
        justify-content center
      .dzhy-desc div
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        font-size .45rem
      .dzhy-desc span
        padding-top .15rem
        font-size .34rem
        color rgb(127,127,127)
    .dzhy-contents
      width 100%
      .dzhy-detail::-webkit-scrollbar
        display none
      .dzhy-detail
        width 90%
        height 73vh
        overflow-y scroll
        margin 0 auto
        .dzhy-radios
          width 100%
          display flex
          flex-direction column
        .el-radio
          width 100%
          display flex
          flex-direction row
          align-items center
          height 1.5rem
          line-height .5rem
          white-space pre-wrap
          border-bottom solid .02rem rgb(235,235,235)
</style>
