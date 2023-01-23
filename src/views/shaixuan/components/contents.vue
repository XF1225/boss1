<template>
  <div class="shaixuanconts">
    <div class="details">
      <div class="xueliyaoqiu">
        <h4 class="xlyq-h4">学历要求</h4>
        <div class="xlyq-desc">
          <li class="xlyq-li" :class="{active:item.checked}" v-for="(item,index) of xueliyaoqiu" :key="item.id" @click="xueliclick(index)">{{item.title}}</li>
        </div>
      </div>
      <div class="xinzidaiyu">
        <h4 class="xzdy-h4">薪资待遇<span>(单选)</span></h4>
        <div class="xzdy-desc">
          <li class="xzdy-li" :class="n===index?'active': ''" v-for="(item,index) of xinzidaiyu" :key="item.id" @click="xinziclick(index)">{{item.title}}</li>
        </div>
      </div>
      <div class="jingyanyaoqiu">
        <h4 class="jyyq-h4">经验要求</h4>
        <div class="jyyq-desc">
          <li class="jyyq-li" :class="{active:item.checked}" v-for="(item,index) of jingyanyaoqiu" :key="item.id" @click="jingyanclick(index)">{{item.title}}</li>
        </div>
      </div>
      <div class="hangye">
        <div class="hy-row">
          <h4 class="hy-h4">行业</h4>
          <span v-show="showarrow" class="el-icon-arrow-down" @click="arrowclick"></span>
          <span v-show="!showarrow" class="el-icon-arrow-up" @click="arrowclick"></span>
        </div>
        <div class="hy-desc" :class="isarrow===true?'hywidth':''">
          <li class="hy-li" :class="{active:item.checked}" v-for="(item,index) of hangye" :key="item.id" @click="hangyeclick(index)">{{item.title}}</li>
        </div>
      </div>
      <div class="gongsiguimo">
        <h4 class="gsgm-h4">公司规模</h4>
        <div class="gsgm-desc">
          <li class="gsgm-li" :class="{active:item.checked}" v-for="(item,index) of gongsiguimo" :key="item.id" @click="guimoclick(index)">{{item.title}}</li>
        </div>
      </div>
      <div class="rongzijieduan">
        <h4 class="rzjd-h4">融资阶段</h4>
        <div class="rzjd-desc">
          <li class="rzjd-li" :class="{active:item.checked}" v-for="(item,index) of rongzijieduan" :key="item.id" @click="rongziclick(index)">{{item.title}}</li>
        </div>
      </div>
    </div>
    <div>
      <div class="bottomclick">
        <div class="botdetail">
          <div class="clear" @click="clearclick">清除</div>
          <div class="conform" @click="conformclick">确定</div>
        </div>
        <p class="zuiduonum" v-show="chaoguo">最多筛选5个</p>
      </div>
      <div class="kong"></div>
    </div>
  </div>
</template>

<script>
import myEventBus from '@/assets/js/bus'
import { toRefs, reactive, onMounted } from 'vue'
import { getdata } from '@/utils/request'
import { useRouter } from 'vue-router'
export default {
  name: 'shaixuanconts',
  setup (props, context) {
    const router = useRouter()
    const emitter = myEventBus()
    const data = reactive({
      xueliyaoqiu: [],
      xinzidaiyu: [],
      jingyanyaoqiu: [],
      hangye: [],
      gongsiguimo: [],
      rongzijieduan: [],
      xlcheckbox: [],
      jycheckbox: [],
      hycheckbox: [],
      gmcheckbox: [],
      rzcheckbox: [],
      n: 0,
      xinzinum: 0,
      checknum: 0,
      showarrow: true,
      isarrow: true,
      chaoguo: false
    })
    onMounted(() => { getdatas() })
    const getdatas = () => {
      getdata('/mock.json').then(res => {
        data.xueliyaoqiu = res.xueliyaoqiu
        data.xinzidaiyu = res.xinzidaiyu
        data.jingyanyaoqiu = res.jingyanyaoqiu
        data.hangye = res.hangye
        data.gongsiguimo = res.gongsiguimo
        data.rongzijieduan = res.rongzijieduan
      })
    }
    const xueliclick = i => {
      if (i !== 0) {
        data.xueliyaoqiu[0].checked = false
        data.xueliyaoqiu[i].checked = !data.xueliyaoqiu[i].checked
        if (data.xueliyaoqiu[i].checked === true) {
          if (data.checknum <= 4) {
            data.xlcheckbox.push(data.xueliyaoqiu[i].id)
            data.xlcheckbox = [...new Set(data.xlcheckbox)]
          } else {
            data.chaoguo = true
            setTimeout(() => { data.chaoguo = false }, 3000)
            data.xueliyaoqiu[i].checked = false
          }
        } else {
          for (let j = 0; j < data.xlcheckbox.length; j++) {
            if (data.xueliyaoqiu[i].id === data.xlcheckbox[j]) {
              data.xlcheckbox.splice(j, 1)
              data.xlcheckbox = [...new Set(data.xlcheckbox)]
            }
          }
        }
      } else {
        getdata('/mock.json').then(res => {
          data.xueliyaoqiu = res.xueliyaoqiu
        })
        data.xlcheckbox.length = 0
        context.emit('change', data.checknum)
      }
      data.xlcheckbox.length === 0 ? data.xueliyaoqiu[0].checked = true : data.xueliyaoqiu[0].checked = false
      data.checknum = data.xlcheckbox.length + data.xinzinum + data.jycheckbox.length + data.hycheckbox.length + data.gmcheckbox.length + data.rzcheckbox.length
      context.emit('change', data.checknum)
    }
    const xinziclick = index => {
      if (data.checknum <= 4) {
        data.n = index
        index === 0 ? data.xinzinum = 0 : data.xinzinum = 1
        data.checknum = data.xlcheckbox.length + data.xinzinum + data.jycheckbox.length + data.hycheckbox.length + data.gmcheckbox.length + data.rzcheckbox.length
        context.emit('change', data.checknum)
      } else if (data.checknum > 4 && data.xinzinum !== 0) {
        data.n = index
        if (index === 0) {
          data.xinzinum = 0
          data.checknum = data.xlcheckbox.length + data.xinzinum + data.jycheckbox.length + data.hycheckbox.length + data.gmcheckbox.length + data.rzcheckbox.length
          context.emit('change', data.checknum)
        }
      } else {
        data.chaoguo = true
        setTimeout(() => { data.chaoguo = false }, 3000)
      }
    }
    const jingyanclick = i => {
      if (i !== 0) {
        data.jingyanyaoqiu[0].checked = false
        data.jingyanyaoqiu[i].checked = !data.jingyanyaoqiu[i].checked
        if (data.jingyanyaoqiu[i].checked === true) {
          if (data.checknum <= 4) {
            data.jycheckbox.push(data.jingyanyaoqiu[i].id)
            data.jycheckbox = [...new Set(data.jycheckbox)]
          } else {
            data.chaoguo = true
            setTimeout(() => { data.chaoguo = false }, 3000)
            data.jingyanyaoqiu[i].checked = false
          }
        } else {
          for (let j = 0; j < data.jycheckbox.length; j++) {
            if (data.jingyanyaoqiu[i].id === data.jycheckbox[j]) {
              data.jycheckbox.splice(j, 1)
              data.jycheckbox = [...new Set(data.jycheckbox)]
            }
          }
        }
      } else {
        getdata('/mock.json').then(res => {
          data.jingyanyaoqiu = res.jingyanyaoqiu
        })
        data.jycheckbox.length = 0
        context.emit('change', data.checknum)
      }
      data.jycheckbox.length === 0 ? data.jingyanyaoqiu[0].checked = true : data.jingyanyaoqiu[0].checked = false
      data.checknum = data.xlcheckbox.length + data.xinzinum + data.jycheckbox.length + data.hycheckbox.length + data.gmcheckbox.length + data.rzcheckbox.length
      context.emit('change', data.checknum)
    }
    const hangyeclick = i => {
      if (i !== 0) {
        data.hangye[0].checked = false
        data.hangye[i].checked = !data.hangye[i].checked
        if (data.hangye[i].checked === true) {
          if (data.checknum <= 4) {
            data.hycheckbox.push(data.hangye[i].id)
            data.hycheckbox = [...new Set(data.hycheckbox)]
          } else {
            data.chaoguo = true
            setTimeout(() => { data.chaoguo = false }, 3000)
            data.hangye[i].checked = false
          }
        } else {
          for (let j = 0; j < data.hycheckbox.length; j++) {
            if (data.hangye[i].id === data.hycheckbox[j]) {
              data.hycheckbox.splice(j, 1)
              data.hycheckbox = [...new Set(data.hycheckbox)]
            }
          }
        }
      } else {
        getdata('/mock.json').then(res => {
          data.hangye = res.hangye
        })
        data.hycheckbox.length = 0
        context.emit('change', data.checknum)
      }
      data.hycheckbox.length === 0 ? data.hangye[0].checked = true : data.hangye[0].checked = false
      data.checknum = data.xlcheckbox.length + data.xinzinum + data.jycheckbox.length + data.hycheckbox.length + data.gmcheckbox.length + data.rzcheckbox.length
      context.emit('change', data.checknum)
    }
    const guimoclick = i => {
      if (i !== 0) {
        data.gongsiguimo[0].checked = false
        data.gongsiguimo[i].checked = !data.gongsiguimo[i].checked
        if (data.gongsiguimo[i].checked === true) {
          if (data.checknum <= 4) {
            data.gmcheckbox.push(data.gongsiguimo[i].id)
            data.gmcheckbox = [...new Set(data.gmcheckbox)]
          } else {
            data.chaoguo = true
            setTimeout(() => { data.chaoguo = false }, 3000)
            data.gongsiguimo[i].checked = false
          }
        } else {
          for (let j = 0; j < data.gmcheckbox.length; j++) {
            if (data.gongsiguimo[i].id === data.gmcheckbox[j]) {
              data.gmcheckbox.splice(j, 1)
              data.gmcheckbox = [...new Set(data.gmcheckbox)]
            }
          }
        }
      } else {
        getdata('/mock.json').then(res => {
          data.gongsiguimo = res.gongsiguimo
        })
        data.gmcheckbox.length = 0
        context.emit('change', data.checknum)
      }
      data.gmcheckbox.length === 0 ? data.gongsiguimo[0].checked = true : data.gongsiguimo[0].checked = false
      data.checknum = data.xlcheckbox.length + data.xinzinum + data.jycheckbox.length + data.hycheckbox.length + data.gmcheckbox.length + data.rzcheckbox.length
      context.emit('change', data.checknum)
    }
    const rongziclick = i => {
      if (i !== 0) {
        data.rongzijieduan[0].checked = false
        data.rongzijieduan[i].checked = !data.rongzijieduan[i].checked
        if (data.rongzijieduan[i].checked === true) {
          if (data.checknum <= 4) {
            data.rzcheckbox.push(data.rongzijieduan[i].id)
            data.rzcheckbox = [...new Set(data.rzcheckbox)]
          } else {
            data.chaoguo = true
            setTimeout(() => { data.chaoguo = false }, 3000)
            data.rongzijieduan[i].checked = false
          }
        } else {
          data.rongzijieduan[i].checked = false
          for (let j = 0; j < data.rzcheckbox.length; j++) {
            if (data.rongzijieduan[i].id === data.rzcheckbox[j]) {
              data.rzcheckbox.splice(j, 1)
              data.rzcheckbox = [...new Set(data.rzcheckbox)]
            }
          }
        }
      } else {
        getdata('/mock.json').then(res => {
          data.rongzijieduan = res.rongzijieduan
        })
        data.rzcheckbox.length = 0
        context.emit('change', data.checknum)
      }
      data.rzcheckbox.length === 0 ? data.rongzijieduan[0].checked = true : data.rongzijieduan[0].checked = false
      data.checknum = data.xlcheckbox.length + data.xinzinum + data.jycheckbox.length + data.hycheckbox.length + data.gmcheckbox.length + data.rzcheckbox.length
      context.emit('change', data.checknum)
    }
    const clearclick = () => {
      getdatas()
      data.n = data.checknum = data.xlcheckbox.length = data.xinzinum = data.jycheckbox.length = data.hycheckbox.length = data.gmcheckbox.length = data.rzcheckbox.length = 0
      context.emit('change', data.checknum)
    }
    const arrowclick = () => {
      data.showarrow = !data.showarrow
      data.isarrow = !data.isarrow
    }
    const conformclick = () => {
      emitter.emit('checknums', data.checknum)
      router.go(-1)
    }
    return {
      ...toRefs(data),
      getdatas,
      xueliclick,
      xinziclick,
      jingyanclick,
      hangyeclick,
      guimoclick,
      rongziclick,
      clearclick,
      arrowclick,
      conformclick
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.shaixuanconts
  width 100%
  .details
    width 90%
    margin 0 auto
    display flex
    flex-direction column
    .rongzijieduan
      margin-bottom .8rem
    .xueliyaoqiu,.xinzidaiyu,.jingyanyaoqiu,.hangye,.gongsiguimo,.rongzijieduan
      width 100%
      display flex
      flex-direction column
      .hy-row
        width 100%
        height 1.2rem
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        .hy-h4
          line-height 1.2rem
          font-size .4rem
        .el-icon-arrow-down,.el-icon-arrow-up
          color rgb(87,87,87)
          font-size .4rem
          margin-right .1rem
      .xzdy-h4 span
        padding-left .1rem
        font-size .32rem
        color rgb(87,87,87)
      .xlyq-h4,.xzdy-h4,.jyyq-h4,.gsgm-h4,.rzjd-h4
        line-height 1.2rem
        font-size .4rem
      .hywidth
        height 36vw
        padding-bottom .2rem
        overflow hidden
      .xlyq-desc,.xzdy-desc,.jyyq-desc,.hy-desc,.gsgm-desc,.rzjd-desc
        width 100%
        text-align center
        display flex
        flex-direction row
        flex-wrap wrap
        .xlyq-li,.xzdy-li,.jyyq-li,.hy-li,.gsgm-li,.rzjd-li
          width 30.6%
          padding .3rem 0
          display block
          border-radius .05rem
          margin 0 .3rem .3rem 0
          font-size .38rem
          background rgb(245,245,245)
        .xlyq-li:nth-child(3n),.xzdy-li:nth-child(3n),.jyyq-li:nth-child(3n),.hy-li:nth-child(3n),.gsgm-li:nth-child(3n),.rzjd-li:nth-child(3n)
          margin-right 0
        .active
          background white
          border solid .02rem $bgColor
          color $bgColor
  .bottomclick
    width 100%
    height 1.8rem
    position fixed
    left 0
    bottom 0
    background white
    border-top solid .02rem rgb(245,245,245)
    .botdetail
      width 90%
      height 1.8rem
      margin 0 auto
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      .clear,.conform
        width 31%
        line-height 1.2rem
        background rgb(245,245,245)
        color rgb(87,87,87)
        font-size .4rem
        text-align center
        border-radius .1rem
      .conform
        width 65%
        margin-right .1rem
        background $bgColor
        color white
    .zuiduonum
      width 35%
      height 1rem
      line-height 1rem
      font-size .35rem
      text-align center
      position absolute
      top -45%
      left 30%
      color white
      background rgba(0,0,0,.6)
      border-radius .2rem
  .kong
    width 100%
    height 1.5rem
</style>
