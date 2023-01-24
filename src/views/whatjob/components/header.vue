<template>
  <div class="whatjobheader">
    <van-icon name="arrow-left" size=".5rem" class="el-icon-arrow-left"  @click="toup" />
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
  padding .2rem 0 0 1rem
</style>
