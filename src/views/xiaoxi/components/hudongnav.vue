<template>
  <div class="hudongnav">
    <li class="nav-li" v-for="(item,index) of hudongnav" :key="item.id" :class="num===index?'active':''" @click="hudongnavclick(index)">{{item.title}}</li>
  </div>
</template>

<script>
import myEventBus from '@/assets/js/bus'
import { toRefs, reactive, onMounted } from 'vue'
export default {
  name: 'hudongnav',
  setup () {
    const emitter = myEventBus()
    const data = reactive({
      num: 0,
      hudongnav: [
        {
          id: 'H001',
          title: '对我感兴趣'
        },
        {
          id: 'H002',
          title: '看过我'
        },
        {
          id: 'H003',
          title: '新职位'
        }
      ]
    })
    const hudongnavclick = i => {
      data.num = i
      emitter.emit('Tabs', i)
    }
    onMounted(() => {
      emitter.on('slideTab', (realIndex) => {
        data.num = realIndex
      })
    })
    return {
      ...toRefs(data),
      hudongnavclick
    }
  }
}
</script>

<style lang="stylus" scoped>
.hudongnav
  width 100%
  height 1rem
  display flex
  flex-direction row
  align-items center
  background white
  border-bottom solid .03rem rgb(245,245,246)
  .nav-li
    font-size .38rem
    color rgb(198,198,198)
    padding 0 .2rem 0 .5rem
    list-style-type none
  .active
    font-weight bold
    color rgb(0,0,0)
</style>
