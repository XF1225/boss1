<template>
  <div class="suoyoutongzhi">
    <tongzhiheader></tongzhiheader>
    <tongzhicontents></tongzhicontents>
  </div>
</template>

<script>
import tongzhiheader from './components/header'
import tongzhicontents from './components/contents'
export default {
  name: 'suoyoutongzhi',
  components: {
    tongzhiheader,
    tongzhicontents
  }
}
</script>
<style lang="stylus" scoped>
.suoyoutongzhi
  width 100%
  height 100vh
  overflow hidden
</style>
