<template>
  <div class="logincontents">
    <div class="details">
      <h2 class="login-h2">账号登录</h2>
      <div class="formconts">
        <div class="zhanghao">
          <div class="zhleft">
            <p class="zhleft-p">+86</p>
            <span class="el-icon-arrow-down"></span>
            <input type="telephone" class="zhleft-inpt" placeholder="请输入您的手机号码" v-model="
            zhanghaoinpt" onkeyup="value=value.replace(/\D/g, '')">
          </div>
          <van-icon name="clear" v-show="showclose" @click="clearinpt" color="rgb(135 132 132)" size=".5rem" />
        </div>
        <div class="mima">
          <input :type="showyanjing === false?'password':'text'" class="password" placeholder="请输入密码" v-model="passwordinpt">
          <span class="iconfont icon-yanjing" v-show="showyanjing" @click="changeyanjing"></span>
          <span class="iconfont icon-biyan" v-show="!showyanjing" @click="changeyanjing"></span>
        </div>
        <div class="denglu" :class="showopcity==false?'opcitys':''" @click="login">
          <p :class="showopcity==false?'opcitys':''">登录</p>
        </div>
        <!--<div class="duanxindenglu">
          <p class="dxdl-p">短信登录</p>
          <span class="wjmm-span">忘记密码?</span>
        </div>-->
        <div class="weixin">
          <!--<p class="weixin-p">微信登录</p>
          <span class="weixin-span iconfont icon-iconfontzhizuobiaozhunbduan32"></span>-->
          <div class="yinsi">
            <p>阅读</p>
            <span>《用户协议及隐私政策》</span>
          </div>
          <div class="prompt" v-show="showprompt">
            <p>{{prompttitle}}</p>
          </div>
          <div class="dengluchenggong" v-show="chenggong">
            <p>登录成功</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'
import { getdata } from '@/utils/request'
import { useRouter } from 'vue-router'
export default {
  name: 'logincontents',
  setup () {
    const data = reactive({
      showyanjing: false,
      zhanghaoinpt: '',
      passwordinpt: '',
      prompttitle: '',
      showprompt: false,
      chenggong: false
    })
    const router = useRouter()
    const showclose = computed(() => {
      if (data.zhanghaoinpt === '') {
        return false
      } else {
        return true
      }
    })
    const showopcity = computed(() => {
      if (data.zhanghaoinpt !== '' && data.passwordinpt !== '') {
        return true
      } else {
        return false
      }
    })
    const clearinpt = () => {
      data.zhanghaoinpt = data.passwordinpt = ''
    }
    const changeyanjing = () => {
      data.showyanjing = !data.showyanjing
    }
    const login = () => {
      if (
        data.zhanghaoinpt === '' || data.passwordinpt === '' || (
          data.zhanghaoinpt === '' && data.passwordinpt === '')) {
        return false
      }
      getdata('/api/mock.json').then(res => {
        const phone = /^1[3456789]\d{9}$/
        if ((!phone.test(
          data.zhanghaoinpt) && data.passwordinpt.length < 6) || (!phone.test(
          data.zhanghaoinpt) && data.passwordinpt.length >= 6)) {
          data.showprompt = true
          data.prompttitle = '请填写正确的手机号码'
          setTimeout(() => { data.showprompt = false }, 2000)
        } else if (data.passwordinpt.length < 6 && phone.test(
          data.zhanghaoinpt)) {
          data.showprompt = true
          data.prompttitle = '请输入6至25位密码'
          setTimeout(() => { data.showprompt = false }, 2000)
        } else if (data.passwordinpt.length >= 6 && phone.test(
          data.zhanghaoinpt) && data.zhanghaoinpt !== res.users[0].phone) {
          data.showprompt = true
          data.prompttitle = '账号不存在'
          setTimeout(() => { data.showprompt = false }, 2000)
        } else if (
          data.zhanghaoinpt === res.users[0].phone && data.passwordinpt.length >= 6 && data.passwordinpt !== res.users[0].password) {
          data.showprompt = true
          data.prompttitle = '该账号或密码有误，如有问题请联系客服'
          setTimeout(() => { data.showprompt = false }, 2000)
        } else {
          data.chenggong = true
          setTimeout(() => {
            setTimeout(() => { router.push('/') }, 100)
            const token = res.users[0].id + res.users[0].phone
            localStorage.setItem('token', JSON.stringify(token))
            data.chenggong = false
          }, 1000)
        }
      })
    }

    return {
      ...toRefs(data),
      showclose,
      showopcity,
      clearinpt,
      changeyanjing,
      login
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.logincontents
  width 100%
  .details
    width 90%
    margin 0 auto
    .login-h2
      width 100%
      line-height 1.8rem
      font-size .65rem
    .formconts
      width 100%
      .zhanghao
        width 100%
        height 1.5rem
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        border-bottom solid .01rem rgb(230,230,230)
        .zhleft
          display flex
          flex-direction row
          align-items center
          .zhleft-p
            font-size .35rem
          .el-icon-arrow-down
            font-size .4rem
            padding 0 .1rem
          .zhleft-inpt
            width 100%
            height .6rem
            border 0
            outline none
            padding-left .2rem
          .zhleft-inpt::placeholder
            font-size .4rem
            color rgb(147,147,147)
      .mima
        width 100%
        height 1.5rem
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        border-bottom solid .01rem rgb(230,230,230)
        .password
          width 100%
          height .6rem
          border 0
          outline none
          padding-left .2rem
        .password::placeholder
          font-size .4rem
          color rgb(147,147,147)
        .icon-yanjing,.icon-biyan
          font-size .55rem
          color rgb(147,147,147)
        .icon-biyan
          margin-right -.15rem
      .denglu
        width 100%
        height 1.2rem
        margin-top .5rem
        background $bgColor
        border-radius .1rem
        display flex
        justify-content center
        align-items center
      .opcitys
        opacity .5
      .denglu p
        font-size .4rem
        color white
      .duanxindenglu
        width 100%
        height 1.5rem
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        font-size .35rem
        .wjmm-span
          color $bgColor
      .weixin
        width 100%
        padding-top .5rem
        display flex
        flex-direction column
        justify-content center
        align-items center
        .weixin-p
          font-size .4rem
          padding .3rem 0
        .weixin-span
          padding .26rem
          font-size .6rem
          color white
          border-radius 50%
          background rgb(4,184,12)
          opacity .6
        .yinsi
          padding-top .8rem
          display flex
          flex-direction row
          align-items center
          font-size .35rem
        .yinsi span
          color $bgColor
        .prompt
          width 100%
          height 1.2rem
          position absolute
          left 0
          top 60%
          margin auto
          display flex
          justify-content center
          align-items center
        .prompt p
          padding .25rem
          color white
          background rgba(0,0,0,.6)
          border-radius .1rem
        .dengluchenggong
          width 100%
          height 100vh
          position fixed
          left 0
          top 0
          background rgba(0,0,0,.1)
          display flex
          justify-content center
        .dengluchenggong p
          width 25%
          line-height 2.5rem
          text-align center
          color white
          background rgba(0,0,0,.6)
          border solid .05rem rgb(255,255,255)
          border-radius .2rem
          position absolute
          top 25%
          font-size .4rem
</style>
