<template>
  <div class="login">
    <loginheader></loginheader>
    <logincontents></logincontents>
  </div>
</template>

<script>
import loginheader from './components/header'
import logincontents from './components/contents'
export default {
  name: 'login',
  components: {
    loginheader,
    logincontents
  }
}
</script>
<style lang="stylus" scoped>
.login
  width 100%
  height 100vh
  overflow hidden
</style>
