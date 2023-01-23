<template>
  <div>
    <guanjianciheader :checknum="checknum.value"></guanjianciheader>
    <guanjianciconts @change="checknumclick"></guanjianciconts>
  </div>
</template>

<script>
import guanjianciheader from './components/header'
import guanjianciconts from './components/contents'
import { ref } from 'vue'
export default {
  name: 'guanjianci',
  components: {
    guanjianciheader,
    guanjianciconts
  },
  setup () {
    const checknum = ref(0)
    const checknumclick = checknums => {
      checknum.value = checknums
    }
    return {
      checknum,
      checknumclick
    }
  }
}
</script>
