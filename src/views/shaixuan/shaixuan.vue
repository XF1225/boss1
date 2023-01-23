<template>
  <div>
    <shaixuanheader :checknum="checknum"></shaixuanheader>
    <shaixuanconts @change="checknumclick"></shaixuanconts>
  </div>
</template>

<script>
import shaixuanheader from './components/header'
import shaixuanconts from './components/contents'
import { ref } from 'vue'
export default {
  name: 'shaixuan',
  components: {
    shaixuanheader,
    shaixuanconts
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
