<template>
  <div class="guanjianciconts">
    <div class="zhezhaoceng" v-show="showzhezhaoceng" @touchmove.prevent>
      <div class="searchconts">
        <div class="searchleft">
          <input type="text" class="searchinpt" placeholder="搜索关键词" v-model="inpt">
          <span class="el-icon-close" v-show="showclose" @click="qingkongclick">X</span>
        </div>
        <span class="quxiao" @click="quxiaoclick">取消</span>
      </div>
    </div>
    <div class="zhezhaoceng2" v-show="showzhezhaoceng2" @touchmove.prevent>
      <div class="wenxintishi">
        <h4 class="wxts-h4">温馨提示</h4>
        <p class="wxts-p">选择关键词，可进行职位筛选，我们将为你匹配更精准的职位</p>
        <span class="wxts-span" @click="knowclick">好的，我知道了</span>
      </div>
    </div>
    <div class="details">
      <div class="sousuogjc" v-show="showsousuo" @click="searckclick">
        <span class="el-icon-search"></span>
        <input type="text" class="sousuoinpt" placeholder="搜索关键词">
      </div>
      <div class="qianduangoujia">
        <div class="qdgj-row">
          <h4 class="qdgj-h4">web前端构架</h4>
          <div class="qdgj-right">
            <span v-show="qdgjchecked.length">{{qdgjchecked.length?qdgjchecked.length:''}}</span>
            <van-icon :name="showarrow[0]==false?'arrow-down':'arrow-up'" size=".5rem" class="el-icon-arrow-down"  @click="arrowclick(0)" />
          </div>
        </div>
        <div class="qdgj-desc" :class="showarrow[0]==true?'hywidth':''">
          <li class="qdgj-li" :class="{active:item.checked}" v-for="(item,index) of qianduangoujia" :key="item.id" @click="goujiaclick(index)">{{item.title}}</li>
        </div>
      </div>
      <div class="kaifayuyan">
        <div class="kfyy-row">
          <h4 class="kfyy-h4">开发语言</h4>
          <div class="kfyy-right">
            <span v-show="kfyychecked.length">{{kfyychecked.length?kfyychecked.length:''}}</span>
            <van-icon :name="showarrow[1]==false?'arrow-down':'arrow-up'" size=".5rem" class="el-icon-arrow-left"  @click="arrowclick(1)" />
          </div>
        </div>
        <div class="kfyy-desc" :class="showarrow[1]==true?'hywidth':''">
          <li class="kfyy-li" :class="{active:item.checked}" v-for="(item,index) of kaifayuyan" :key="item.id" @click="yuyanclick(index)">{{item.title}}</li>
        </div>
      </div>
      <div class="changyongku">
        <div class="cyk-row">
          <h4 class="cyk-h4">前端常用库</h4>
          <div class="cyk-right">
            <span v-show="cykchecked.length">{{cykchecked.length?cykchecked.length:''}}</span>
            <van-icon :name="showarrow[2]==false?'arrow-down':'arrow-up'" size=".5rem" class="el-icon-arrow-left"  @click="arrowclick(2)" />
          </div>
        </div>
        <div class="cyk-desc" :class="showarrow[2]==true?'hywidth':''">
          <li class="cyk-li" :class="{active:item.checked}" v-for="(item,index) of changyongku" :key="item.id" @click="changyongkuclick(index)">{{item.title}}</li>
        </div>
      </div>
      <div class="qianduanxiangmu">
        <div class="qdxm-row">
          <h4 class="qdxm-h4">前端项目</h4>
          <div class="qdxm-right">
            <span v-show="qdxmchecked.length">{{qdxmchecked.length?qdxmchecked.length:''}}</span>
          </div>
        </div>
        <div class="qdxm-desc">
          <li class="qdxm-li" :class="{active:item.checked}" v-for="(item,index) of qianduanxiangmu" :key="item.id" @click="xiangmuclick(index)">{{item.title}}</li>
        </div>
      </div>
      <div class="biaozhunguifan">
        <div class="bzgf-row">
          <h4 class="bzgf-h4">前端标准/规范</h4>
          <div class="bzgf-right">
            <span v-show="bzgfchecked.length">{{bzgfchecked.length?bzgfchecked.length:''}}</span>
          </div>
        </div>
        <div class="bzgf-desc">
          <li class="bzgf-li" :class="{active:item.checked}" v-for="(item,index) of biaozhunguifan" :key="item.id" @click="guifanclick(index)">{{item.title}}</li>
        </div>
      </div>
      <div class="changyongzujian">
        <div class="cyzj-row">
          <h4 class="cyzj-h4">web前端常用组件</h4>
          <div class="cyzj-right">
            <span v-show="cyzjchecked.length">{{cyzjchecked.length?cyzjchecked.length:''}}</span>
          </div>
        </div>
        <div class="cyzj-desc">
          <li class="cyzj-li" :class="{active:item.checked}" v-for="(item,index) of changyongzujian" :key="item.id" @click="zujianclick(index)">{{item.title}}</li>
        </div>
      </div>
       <div class="changyongyinqing">
        <div class="cyyq-row">
          <h4 class="cyyq-h4">前端常用引擎</h4>
          <div class="cyyq-right">
            <span v-show="cyyqchecked.length">{{cyyqchecked.length?cyyqchecked.length:''}}</span>
          </div>
        </div>
        <div class="cyyq-desc">
          <li class="cyyq-li" :class="{active:item.checked}" v-for="(item,index) of changyongyinqing" :key="item.id" @click="yinqingclick(index)">{{item.title}}</li>
        </div>
      </div>
      <div class="guanjianci">
        <div class="gjc-row">
          <h4 class="gjc-h4">推荐关键词</h4>
          <div class="gjc-right">
            <span v-show="gjcchecked.length">{{gjcchecked.length?gjcchecked.length:''}}</span>
            <van-icon :name="showarrow[3]==false?'arrow-down':'arrow-up'" size=".5rem" class="el-icon-arrow-left"  @click="arrowclick(3)" />
          </div>
        </div>
        <div class="gjc-desc" :class="showarrow[3]==true?'hywidth':''">
          <li class="gjc-li" :class="{active:item.checked}" v-for="(item,index) of guanjianci" :key="item.id" @click="guanjianciclick(index)">{{item.title}}</li>
        </div>
      </div>
    </div>
    <div>
      <div class="bottomclick">
        <div class="yixuan" v-show="checkedtitle.length">
          <p class="yixuan-p">已选</p>
          <div class="yixuan-cont">
            <div class="yixuan-desc">
              <li class="yixuan-li" v-for="(item,index) of checkedtitle" :key="index" @click="yixuanli(item)">{{item}}<span class="el-icon-close">X</span></li>
            </div>
          </div>
        </div>
        <div class="botdetail">
          <div class="clear" @click="clearclick">清除</div>
          <div class="conform" @click="conformclick">确定</div>
        </div>
        <p class="zuiduonum" v-show="chaoguo">最多选择5个关键词</p>
      </div>
      <div class="kong">
        <div class="kong-top" v-show="checkedtitle.length"></div>
        <div class="kong-bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
import myEventBus from '@/assets/js/bus'
import { getdata } from '@/utils/request'
import { reactive, toRefs, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'guanjianciconts',
  setup (props, context) {
    const emitter = myEventBus()
    const router = useRouter()
    const data = reactive({
      inpt: '',
      showzhezhaoceng: false,
      showzhezhaoceng2: true,
      showsousuo: true,
      qianduangoujia: [],
      kaifayuyan: [],
      changyongku: [],
      biaozhunguifan: [],
      changyongzujian: [],
      changyongyinqing: [],
      qianduanxiangmu: [],
      guanjianci: [],
      qdgjchecked: [],
      kfyychecked: [],
      cykchecked: [],
      qdxmchecked: [],
      bzgfchecked: [],
      cyzjchecked: [],
      cyyqchecked: [],
      gjcchecked: [],
      n: 0,
      checknum: 0,
      checkedtitle: [],
      showarrow: [true, true, true, true],
      chaoguo: false
    })
    const goujiaclick = i => {
      data.qianduangoujia[i].checked = !data.qianduangoujia[i].checked
      if (data.qianduangoujia[i].checked === true) {
        if (data.checknum <= 4) {
          data.qdgjchecked.push(data.qianduangoujia[i].title)
          data.qdgjchecked = [...new Set(data.qdgjchecked)]
        } else {
          data.chaoguo = true
          setTimeout(() => { data.chaoguo = false }, 3000)
          data.qianduangoujia[i].checked = false
          return false
        }
      } else {
        for (let j = 0; j < data.qdgjchecked.length; j++) {
          if (data.qianduangoujia[i].title === data.qdgjchecked[j]) {
            data.qdgjchecked.splice(j, 1)
            data.qdgjchecked = [...new Set(data.qdgjchecked)]
          }
        }
      }
      data.checknum = data.qdgjchecked.length + data.kfyychecked.length + data.cykchecked.length + data.qdxmchecked.length + data.bzgfchecked.length + data.cyzjchecked.length + data.cyyqchecked.length + data.gjcchecked.length
      data.checkedtitle = [...data.qdgjchecked, ...data.kfyychecked, ...data.cykchecked, ...data.qdxmchecked, ...data.bzgfchecked, ...data.cyzjchecked, ...data.cyyqchecked, ...data.gjcchecked]
      context.emit('change', data.checknum)
    }
    const yuyanclick = i => {
      data.kaifayuyan[i].checked = !data.kaifayuyan[i].checked
      if (data.kaifayuyan[i].checked === true) {
        if (data.checknum <= 4) {
          data.kfyychecked.push(data.kaifayuyan[i].title)
          data.kfyychecked = [...new Set(data.kfyychecked)]
        } else {
          data.chaoguo = true
          setTimeout(() => { data.chaoguo = false }, 3000)
          data.kaifayuyan[i].checked = false
          return false
        }
      } else {
        for (let j = 0; j < data.kfyychecked.length; j++) {
          if (data.kaifayuyan[i].title === data.kfyychecked[j]) {
            data.kfyychecked.splice(j, 1)
            data.kfyychecked = [...new Set(data.kfyychecked)]
          }
        }
      }
      data.checknum = data.qdgjchecked.length + data.kfyychecked.length + data.cykchecked.length + data.qdxmchecked.length + data.bzgfchecked.length + data.cyzjchecked.length + data.cyyqchecked.length + data.gjcchecked.length
      data.checkedtitle = [...data.qdgjchecked, ...data.kfyychecked, ...data.cykchecked, ...data.qdxmchecked, ...data.bzgfchecked, ...data.cyzjchecked, ...data.cyyqchecked, ...data.gjcchecked]
      context.emit('change', data.checknum)
    }
    const changyongkuclick = i => {
      data.changyongku[i].checked = !data.changyongku[i].checked
      if (data.changyongku[i].checked === true) {
        if (data.checknum <= 4) {
          data.cykchecked.push(data.changyongku[i].title)
          data.cykchecked = [...new Set(data.cykchecked)]
        } else {
          data.chaoguo = true
          setTimeout(() => { data.chaoguo = false }, 3000)
          data.changyongku[i].checked = false
          return false
        }
      } else {
        for (let j = 0; j < data.cykchecked.length; j++) {
          if (data.changyongku[i].title === data.cykchecked[j]) {
            data.cykchecked.splice(j, 1)
            data.cykchecked = [...new Set(data.cykchecked)]
          }
        }
      }
      data.checknum = data.qdgjchecked.length + data.kfyychecked.length + data.cykchecked.length + data.qdxmchecked.length + data.bzgfchecked.length + data.cyzjchecked.length + data.cyyqchecked.length + data.gjcchecked.length
      data.checkedtitle = [...data.qdgjchecked, ...data.kfyychecked, ...data.cykchecked, ...data.qdxmchecked, ...data.bzgfchecked, ...data.cyzjchecked, ...data.cyyqchecked, ...data.gjcchecked]
      context.emit('change', data.checknum)
    }
    const xiangmuclick = i => {
      data.qianduanxiangmu[i].checked = !data.qianduanxiangmu[i].checked
      if (data.qianduanxiangmu[i].checked === true) {
        if (data.checknum <= 4) {
          data.qdxmchecked.push(data.qianduanxiangmu[i].title)
          data.qdxmchecked = [...new Set(data.qdxmchecked)]
        } else {
          data.chaoguo = true
          setTimeout(() => { data.chaoguo = false }, 3000)
          data.qianduanxiangmu[i].checked = false
          return false
        }
      } else {
        for (let j = 0; j < data.qdxmchecked.length; j++) {
          if (data.qianduanxiangmu[i].title === data.qdxmchecked[j]) {
            data.qdxmchecked.splice(j, 1)
            data.qdxmchecked = [...new Set(data.qdxmchecked)]
          }
        }
      }
      data.checknum = data.qdgjchecked.length + data.kfyychecked.length + data.cykchecked.length + data.qdxmchecked.length + data.bzgfchecked.length + data.cyzjchecked.length + data.cyyqchecked.length + data.gjcchecked.length
      data.checkedtitle = [...data.qdgjchecked, ...data.kfyychecked, ...data.cykchecked, ...data.qdxmchecked, ...data.bzgfchecked, ...data.cyzjchecked, ...data.cyyqchecked, ...data.gjcchecked]
      context.emit('change', data.checknum)
    }
    const guifanclick = i => {
      data.biaozhunguifan[i].checked = !data.biaozhunguifan[i].checked
      if (data.biaozhunguifan[i].checked === true) {
        if (data.checknum <= 4) {
          data.bzgfchecked.push(data.biaozhunguifan[i].title)
          data.bzgfchecked = [...new Set(data.bzgfchecked)]
        } else {
          data.chaoguo = true
          setTimeout(() => { data.chaoguo = false }, 3000)
          data.biaozhunguifan[i].checked = false
          return false
        }
      } else {
        for (let j = 0; j < data.bzgfchecked.length; j++) {
          if (data.biaozhunguifan[i].title === data.bzgfchecked[j]) {
            data.bzgfchecked.splice(j, 1)
            data.bzgfchecked = [...new Set(data.bzgfchecked)]
          }
        }
      }
      data.checknum = data.qdgjchecked.length + data.kfyychecked.length + data.cykchecked.length + data.qdxmchecked.length + data.bzgfchecked.length + data.cyzjchecked.length + data.cyyqchecked.length + data.gjcchecked.length
      data.checkedtitle = [...data.qdgjchecked, ...data.kfyychecked, ...data.cykchecked, ...data.qdxmchecked, ...data.bzgfchecked, ...data.cyzjchecked, ...data.cyyqchecked, ...data.gjcchecked]
      context.emit('change', data.checknum)
    }
    const zujianclick = i => {
      data.changyongzujian[i].checked = !data.changyongzujian[i].checked
      if (data.changyongzujian[i].checked === true) {
        if (data.checknum <= 4) {
          data.cyzjchecked.push(data.changyongzujian[i].title)
          data.cyzjchecked = [...new Set(data.cyzjchecked)]
        } else {
          data.chaoguo = true
          setTimeout(() => { data.chaoguo = false }, 3000)
          data.changyongzujian[i].checked = false
          return false
        }
      } else {
        for (let j = 0; j < data.cyzjchecked.length; j++) {
          if (data.changyongzujian[i].title === data.cyzjchecked[j]) {
            data.cyzjchecked.splice(j, 1)
            data.cyzjchecked = [...new Set(data.cyzjchecked)]
          }
        }
      }
      data.checknum = data.qdgjchecked.length + data.kfyychecked.length + data.cykchecked.length + data.qdxmchecked.length + data.bzgfchecked.length + data.cyzjchecked.length + data.cyyqchecked.length + data.gjcchecked.length
      data.checkedtitle = [...data.qdgjchecked, ...data.kfyychecked, ...data.cykchecked, ...data.qdxmchecked, ...data.bzgfchecked, ...data.cyzjchecked, ...data.cyyqchecked, ...data.gjcchecked]
      context.emit('change', data.checknum)
    }
    const yinqingclick = i => {
      data.changyongyinqing[i].checked = !data.changyongyinqing[i].checked
      if (data.changyongyinqing[i].checked === true) {
        if (data.checknum <= 4) {
          data.cyyqchecked.push(data.changyongyinqing[i].title)
          data.cyyqchecked = [...new Set(data.cyyqchecked)]
        } else {
          data.chaoguo = true
          setTimeout(() => { data.chaoguo = false }, 3000)
          data.changyongyinqing[i].checked = false
          return false
        }
      } else {
        for (let j = 0; j < data.cyyqchecked.length; j++) {
          if (data.changyongyinqing[i].title === data.cyyqchecked[j]) {
            data.cyyqchecked.splice(j, 1)
            data.cyyqchecked = [...new Set(data.cyyqchecked)]
          }
        }
      }
      data.checknum = data.qdgjchecked.length + data.kfyychecked.length + data.cykchecked.length + data.qdxmchecked.length + data.bzgfchecked.length + data.cyzjchecked.length + data.cyyqchecked.length + data.gjcchecked.length
      data.checkedtitle = [...data.qdgjchecked, ...data.kfyychecked, ...data.cykchecked, ...data.qdxmchecked, ...data.bzgfchecked, ...data.cyzjchecked, ...data.cyyqchecked, ...data.gjcchecked]
      context.emit('change', data.checknum)
    }
    const guanjianciclick = i => {
      data.guanjianci[i].checked = !data.guanjianci[i].checked
      if (data.guanjianci[i].checked === true) {
        if (data.checknum <= 4) {
          data.gjcchecked.push(data.guanjianci[i].title)
          data.gjcchecked = [...new Set(data.gjcchecked)]
        } else {
          data.chaoguo = true
          setTimeout(() => { data.chaoguo = false }, 3000)
          data.guanjianci[i].checked = false
          return false
        }
      } else {
        for (let j = 0; j < data.gjcchecked.length; j++) {
          if (data.guanjianci[i].title === data.gjcchecked[j]) {
            data.gjcchecked.splice(j, 1)
            data.gjcchecked = [...new Set(data.gjcchecked)]
          }
        }
      }
      data.checknum = data.qdgjchecked.length + data.kfyychecked.length + data.cykchecked.length + data.qdxmchecked.length + data.bzgfchecked.length + data.cyzjchecked.length + data.cyyqchecked.length + data.gjcchecked.length
      data.checkedtitle = [...data.qdgjchecked, ...data.kfyychecked, ...data.cykchecked, ...data.qdxmchecked, ...data.bzgfchecked, ...data.cyzjchecked, ...data.cyyqchecked, ...data.gjcchecked]
      context.emit('change', data.checknum)
    }
    const arrowclick = (i) => {
      for (let j = 0; j < data.showarrow.length; j++) {
        if (i === j) {
          data.showarrow[j] = !data.showarrow[j]
        }
      }
    }
    const getdatas = () => {
      getdata('/api/mock.json').then(res => {
        data.qianduangoujia = res.qianduangoujia
        data.kaifayuyan = res.kaifayuyan
        data.changyongku = res.changyongku
        data.biaozhunguifan = res.biaozhunguifan
        data.changyongzujian = res.changyongzujian
        data.changyongyinqing = res.changyongyinqing
        data.qianduanxiangmu = res.qianduanxiangmu
        data.guanjianci = res.guanjianci
      })
    }
    const clearclick = () => {
      getdatas()
      data.checknum = 0
      data.qdgjchecked.length = data.kfyychecked.length = data.cykchecked.length = data.qdxmchecked.length = data.bzgfchecked.length = data.cyzjchecked.length = data.cyyqchecked.length = data.gjcchecked.length = 0
      data.checkedtitle = []
      context.emit('change', data.checknum)
    }
    const conformclick = () => {
      router.go(-1)
      emitter.emit('checknums', data.checknum)
    }
    const qingkongclick = () => {
      data.inpt = ''
    }
    const quxiaoclick = () => {
      data.showzhezhaoceng = false
      data.showsousuo = true
    }
    const searckclick = () => {
      data.showsousuo = false
      data.showzhezhaoceng = true
    }
    const yixuanli = item => {
      for (let i = 0; i < data.checkedtitle.length; i++) {
        if (item === data.checkedtitle[i]) {
          data.checkedtitle.splice(i, 1)
          data.checknum--
          context.emit('change', data.checknum)
          if (data.checknum === 0) {
            clearclick()
          }
        }
      }
    }
    const knowclick = () => {
      data.showzhezhaoceng2 = false
    }
    const showclose = computed(() => {
      if (data.inpt === '') {
        return false
      } else {
        return true
      }
    })
    onMounted(() => {
      getdatas()
    })
    return {
      ...toRefs(data),
      goujiaclick,
      yuyanclick,
      changyongkuclick,
      xiangmuclick,
      guifanclick,
      zujianclick,
      yinqingclick,
      guanjianciclick,
      arrowclick,
      getdatas,
      clearclick,
      conformclick,
      qingkongclick,
      quxiaoclick,
      searckclick,
      yixuanli,
      knowclick,
      showclose
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.guanjianciconts
  width 100%
  .zhezhaoceng,.zhezhaoceng2
    width 100%
    height 100vh
    background rgba(0,0,0,.5)
    position fixed
    top 0
    left 0
    z-index 3
    .searchconts
      width 100%
      height 1.5rem
      background white
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      .searchleft
        width 85%
        height 1rem
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        .searchinpt
          width 85%
          line-height 1rem
          padding-left .5rem
          outline none
          border 0
        .searchinpt::placeholder
          font-size .35rem
          color rgb(187,187,187)
        .el-icon-close
          font-size .3rem
          padding .06rem
          transform scale(1, .8)
          border-radius 50%
          display flex
          justify-content center
          align-items center
          color white
          background #8b8b8d
      .quxiao
        padding-right .5rem
        font-size .35rem
        color rgb(127,127,127)
  .zhezhaoceng2
    display flex
    justify-content center
    align-items center
    z-index 3
    .wenxintishi
      width 85%
      background white
      .wxts-h4
        line-height 1.5rem
        padding-left .5rem
        font-size .45rem
      .wxts-p
        width 90%
        margin 0 auto
        color rgb(87,87,87)
        word-break break-all
        line-height .6rem
        font-size .36rem
      .wxts-span
        width 90%
        height 1.8rem
        margin 0 auto
        display flex
        justify-content flex-end
        align-items center
        font-size .38rem
        color $bgColor
  .details
    width 90%
    margin 0 auto
    display flex
    flex-direction column
    .sousuogjc
      width 100%
      height .8rem
      display flex
      flex-direction row
      align-items center
      .el-icon-search
        font-size .5rem
        color rgb(127,127,127)
        padding-right .15rem
      .sousuoinpt
        outline none
        border 0
      .sousuoinpt::placeholder
        font-size .35rem
        color rgb(187,187,187)
    .qianduangoujia,.kaifayuyan,.changyongku,.qianduanxiangmu,.biaozhunguifan,.changyongzujian,.changyongyinqing,.guanjianci
      width 100%
      display flex
      flex-direction column
      .qdgj-row,.kfyy-row,.cyk-row,.qdxm-row,.bzgf-row,.cyzj-row,.cyyq-row,.gjc-row
        width 100%
        height 1.2rem
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        .qdgj-right,.kfyy-right,.cyk-right,.qdxm-right,.bzgf-right,.cyzj-right,.cyyq-right,.gjc-right
          width 1.2rem
          display flex
          flex-direction row
          justify-content space-between
          align-items center
        .qdgj-right span,.kfyy-right span,.cyk-right span,.qdxm-right span,.bzgf-right span,.cyzj-right span,.cyyq-right span,.gjc-right span
          width .5rem
          height .5rem
          display flex
          justify-content center
          align-items center
          margin-right .15rem
          font-size .33rem
          font-style normal
          border-radius 50%
          color white
          background $bgColor
        .el-icon-arrow-down
          margin-right .1rem
      .qdgj-h4,.kfyy-h4,.cyk-h4,.qdxm-h4,.bzgf-h4,.cyzj-h4,.cyyq-h4,.gjc-h4
        line-height 1.2rem
        font-size .4rem
      .hywidth
        height 36vw
        padding-bottom .2rem
        overflow hidden
      .qdgj-desc,.kfyy-desc,.cyk-desc,.qdxm-desc,.bzgf-desc,.cyzj-desc,.cyyq-desc,.gjc-desc
        width 100%
        text-align center
        display flex
        flex-direction row
        flex-wrap wrap
        .qdgj-li,.kfyy-li,.cyk-li,.qdxm-li,.bzgf-li,.cyzj-li,.cyyq-li,.gjc-li
          width 30.6%
          padding .3rem 0
          display block
          border-radius .05rem
          margin 0 .3rem .3rem 0
          font-size .38rem
          background rgb(245,245,245)
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
        .qdgj-li:nth-child(3n),.kfyy-li:nth-child(3n),.cyk-li:nth-child(3n),.qdxm-li:nth-child(3n),.bzgf-li:nth-child(3n),.cyzj-li:nth-child(3n),.cyyq-li:nth-child(3n),.gjc-li:nth-child(3n)
          margin-right 0
        .active
          background rgb(231,248,247)
          border solid .02rem $bgColor
          color $bgColor
  .bottomclick
    width 100%
    position fixed
    left 0
    bottom 0
    background white
    .yixuan
      width 100%
      height 1rem
      padding-top .2rem
      display flex
      flex-direction row
      align-items center
      .yixuan-p
        width 1.2rem
        height .6rem
        line-height .6rem
        margin-left .5rem
        font-size .35rem
        border-right solid .01rem rgb(210,210,210)
      .yixuan-cont::-webkit-scrollbar
        display none
      .yixuan-cont
        width 80%
        margin-left .3rem
        overflow-x scroll
        .yixuan-desc
          width 150%
          height 1rem
          display flex
          flex-direction row
          align-items center
          .yixuan-li:last-of-type
            margin 0
          .yixuan-li
            font-size .32rem
            display block
            padding .15rem .2rem
            margin-right .2rem
            color $bgColor
            background rgb(231,248,247)
            border-radius .3rem
            .el-icon-close
              font-size .28rem
              padding-left .1rem
              color $bgColor
    .botdetail
      width 90%
      height 1.8rem
      margin 0 auto
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      border-top solid .02rem rgb(245,245,245)
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
      top 10%
      left 30%
      color white
      background rgba(0,0,0,.6)
      border-radius .2rem
  .kong
    width 100%
    display flex
    flex-direction column
    .kong-top,.kong-bottom
      width 100%
      height 1rem
    .kong-bottom
      height 1.8rem
</style>
