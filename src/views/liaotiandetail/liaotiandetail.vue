<template>
  <div>
    <liaotianheader :HomeContent="HomeContent"></liaotianheader>
    <liaotianconts :HomeContent="HomeContent"></liaotianconts>
    <liaotianfooter></liaotianfooter>
  </div>
</template>

<script>
import liaotianheader from './components/header'
import liaotianconts from './components/contents'
import liaotianfooter from './components/footer'
import { ref, onActivated } from 'vue'
import { getdata } from '@/utils/request'
import { useRoute } from 'vue-router'
export default {
  name: 'liaotiandetail',
  components: {
    liaotianheader,
    liaotianconts,
    liaotianfooter
  },
  setup () {
    const HomeContent = ref([])
    const route = useRoute()
    onActivated(() => {
      getdatas()
    })
    const getdatas = () => {
      getdata('/mock.json').then(res => {
        HomeContent.value = res.HomeContent.filter(item => item.id === route.params.id)
      })
    }
    return {
      HomeContent,
      getdatas
    }
  }
}
</script>
