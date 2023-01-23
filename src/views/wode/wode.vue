<template>
  <div>
    <wodeheader></wodeheader>
    <wodecontent></wodecontent>
    <uFooter></uFooter>
  </div>
</template>
<script>
import wodeheader from './components/header'
import wodecontent from './components/wodecontent'
import uFooter from '@/components/footer'
export default {
  name: 'wode',
  components: {
    wodeheader,
    wodecontent,
    uFooter
  }
}
</script>
