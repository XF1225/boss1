<template>
  <div>
    <div class="ganxingquheader">
      <div class="details">
        <img class="el-icon-arrow-left" src="/imgs/down.png" @click="toup">
        <h4>我感兴趣的职位</h4>
      </div>
    </div>
    <div class="kong"></div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'ganxingquheader',
  setup () {
    const router = useRouter()
    const toup = () => {
      router.go(-1)
    }
    return {
      toup
    }
  }
}
</script>

<style lang="stylus" scoped>
.ganxingquheader
  width 100%
  height 1.2rem
  background white
  position fixed
  top 0
  left 0
  border-bottom solid .02rem rgb(245,245,246)
  .details
    width 90%
    margin 0 auto
    height 1.2rem
    position relative
    display flex
    flex-direction row
    justify-content center
    align-items center
  .el-icon-arrow-left
    position absolute
    left 0
    transform rotate(90deg)
    width .5rem
    height .3rem
  .details h4
    font-size .45rem
.kong
  width 100%
  height 1.2rem
</style>
