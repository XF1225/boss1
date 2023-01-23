<template>
  <div>
    <div class="search-header">
      <div class="details">
        <div class="search-left">
          <div @click="tochangeCity">
            <p>{{sorestate}}</p>
            <span class="el-icon-caret-bottom"></span>
          </div>
          <input type="text" class="qingshuru" placeholder="请输入职位或公司" v-model="inputval" v-focus @keyup.enter="tosearchclick" @keyup.delete="deleteclick">
          <van-icon name="clear" v-show="close" @click="cleaript" color="rgb(135 132 132)" size=".5rem" />
        </div>
        <p class="quxiao" @click="toup">取消</p>
      </div>
    </div>
    <div class="kong"></div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import myEventBus from '@/assets/js/bus'
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'searchheader',
  setup () {
    const router = useRouter()
    const emitter = myEventBus()
    const store = useStore()
    const inputval = ref('')
    const toup = () => { router.go(-1) }
    const cleaript = () => {
      inputval.value = ''
      emitter.emit('clear', false)
    }
    const tosearchclick = () => {
      if (inputval.value.trim() === '') {
        return false
      }
      emitter.emit('changeshow', false)
      emitter.emit('scrollimg', false)
      setTimeout(() => {
        emitter.emit('values', inputval.value)
      }, 500)
    }
    const tochangeCity = () => {
      router.push('/citys')
    }
    const deleteclick = () => {
      if (inputval.value.trim() === '') {
        emitter.emit('clear', false)
      }
    }
    const close = computed(() => {
      if (inputval.value === '') {
        return false
      } else {
        return true
      }
    })
    const sorestate = computed(() => store.state.city)
    onMounted(() => {
      emitter.on('changeinpt', (title) => {
        inputval.value = title
      })
    })
    return {
      inputval,
      toup,
      cleaript,
      tosearchclick,
      deleteclick,
      sorestate,
      close,
      tochangeCity
    }
  }
}
</script>

<style lang="stylus" scoped>
.search-header
  width 100%
  height 1.5rem
  background white
  position fixed
  top 0
  left 0
  z-index 3
  .details
    width 90%
    height 1.5rem
    margin 0 auto
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    .search-left
      width 90%
    .search-left,.search-left div
      display flex
      flex-direction row
      align-items center
    .search-left p
      max-width 1.5rem
      height .6rem
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      display flex
      align-items center
    .search-left p,.quxiao
      font-size .38rem
    .search-left span
      width 0
      height 0
      border-width .12rem
      border-style solid
      border-color #000 transparent transparent transparent
      margin .12rem .15rem 0 .1rem
    .qingshuru
      width 75%
      line-height .8rem
      border 0
      outline none
    .qingshuru::placeholder
      font-size .35rem
      color rgb(189,189,189)
.kong
  width 100%
  height 1.5rem
</style>
