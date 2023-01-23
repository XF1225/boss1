<template>
  <div class="whatjobheader">
    <img class="el-icon-arrow-left" src="/imgs/down.png" @click="toup">
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const toup = () => { router.go(-1) }
</script>

<style lang="stylus" scoped>
.whatjobheader
  width 100%
  height 2rem
.el-icon-arrow-left
  transform rotate(90deg)
  width .5rem
  height .3rem
  padding .2rem 0 0 1rem
</style>
