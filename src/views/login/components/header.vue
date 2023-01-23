<template>
  <div class="loginheader">
    <img class="el-icon-arrow-left toup" src="/imgs/down.png" @click="toup">
  </div>
</template>

<script>
export default {
  name: 'loginheader',
  methods: {
    toup () {
      console.log('0')
    }
  }
}
</script>

<style lang="stylus" scoped>
.loginheader
  width 100%
  line-height 1.2rem
  font-size .5rem
  padding-left .5rem
.el-icon-arrow-left
  transform rotate(90deg)
  width .5rem
  height .3rem
.toup
  opacity 0
</style>
