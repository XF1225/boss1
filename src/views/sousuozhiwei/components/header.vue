<template>
  <div>
    <div class="sousuoheader">
      <div class="details">
        <div class="sousuoleft" :class="animates === true ? 'animated slideOutLeft' : ''">
          <span class="iconfont icon-search">&#xe629;</span>
          <input type="text" class="sousuoipt" placeholder="搜索职位/公司/知识点" v-model="inptval" v-focus>
          <span class="el-icon-close" v-show="showclose" @click="close">X</span>
        </div>
        <span class="quxiao" @click="toback">取消</span>
      </div>
    </div>
    <div class="kong"></div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const inptval = ref('')
const animates = ref(false)
const router = useRouter()
const showclose = computed(() => {
  if (inptval.value === '') {
    return false
  } else {
    return true
  }
})
const close = () => {
  inptval.value = ''
}
const toback = () => {
  animates.value = true
  setTimeout(() => {
    router.go(-1)
    animates.value = false
  }, 100)
}
</script>

<style lang="stylus" scoped>
@keyframes anime {
  0% {
    transform scaleX(1)
  }
  50% {
    transform scaleX(.8)
  }
  100% {
    transform scaleX(.6)
  }
}
.sousuoheader
  width 100%
  height 2rem
  background white
  position fixed
  .details
    width 90%
    height 2rem
    margin 0 auto
    display flex
    flex-direction row
    justify-content center
    align-items center
    position relative
    .sousuoleft
      width 90%
      padding .1rem 0
      margin-right 1rem
      background rgb(240,240,240)
      border-radius .5rem
      display flex
      flex-direction row
      align-items center
      animation-duration 5s
      .icon-search
        font-size .5rem
        padding 0 .3rem
        color rgb(127,127,127)
      .sousuoipt
        width 80%
        border 0
        outline none
        background rgb(240,240,240)
      .sousuoipt::placeholder
        font-size .35rem
        color rgb(127,127,127)
      .el-icon-close
        color rgb(127,127,127)
    .quxiao
      font-size .35rem
      position absolute
      right 0
    .quxiaoanimate
      animation anime .5s ease
.kong
  width 100%
  height 2rem
</style>
