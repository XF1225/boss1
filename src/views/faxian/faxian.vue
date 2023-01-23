<template>
  <div>
    <faxianheader></faxianheader>
    <faxiannav></faxiannav>
    <faxiancontent></faxiancontent>
    <faxianjia></faxianjia>
    <uFooter></uFooter>
  </div>
</template>

<script>
import faxianheader from './components/header'
import faxiannav from './components/faxiannav'
import faxiancontent from './components/faxiancontent'
import faxianjia from './components/faxianjia'
import uFooter from '@/components/footer'
export default {
  name: 'faxian',
  components: {
    faxianheader,
    faxiannav,
    faxiancontent,
    faxianjia,
    uFooter
  }
}
</script>
