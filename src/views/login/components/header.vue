<template>
  <div class="loginheader">
    <van-icon name="arrow-left" size=".5rem" class="toup"  @click="toup" />
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
.toup
  opacity 0
</style>
