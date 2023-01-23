<template>
  <div>
    <xiaoxiheader></xiaoxiheader>
    <xiaoxicontent></xiaoxicontent>
    <uFooter></uFooter>
  </div>
</template>

<script>
import xiaoxiheader from './components/xiaoxiheader'
import xiaoxicontent from './components/xiaoxicontent'
import uFooter from '@/components/footer'
export default {
  name: 'xiaoxi',
  components: {
    xiaoxiheader,
    xiaoxicontent,
    uFooter
  }
}
</script>
