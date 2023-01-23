<template>
  <div class="alphabet">
    <span v-for="item of letters" :key="item" ref="item"
    @click="letterclick" @touchstart="tstart" @touchmove="tmove" @touchend="tend">{{item}}</span>
  </div>
</template>

<script>
import axios from 'axios'
import { ref, toRefs, reactive, computed, onUpdated, onMounted } from 'vue'
export default {
  name: 'alphabet',
  setup (props, context) {
    const item = ref(null)
    const data = reactive({
      alphabet: [],
      touchstatus: false,
      startY: 0,
      timer: null
    })
    const letters = computed(() => {
      const letters = []
      for (let i = 0; i < data.alphabet.length; i++) {
        letters.push(data.alphabet[i].initial)
      }
      context.emit('create', letters)
      return letters
    })
    const getalphabet = () => {
      axios.get('/api/city.json').then(getalphabetSucc)
    }
    const getalphabetSucc = res => {
      data.alphabet = res.data.citys
    }
    const letterclick = e => {
      context.emit('change', e.target.innerText)
    }
    const tstart = () => {
      data.touchstatus = true
    }
    const tmove = e => {
      if (data.touchstatus) {
        if (data.timer) {
          clearTimeout(data.timer)
        }
        data.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 51.6
          const index = Math.floor((touchY - data.startY) / 16.67) - 3
          if (index >= 0 && index < letters.value.length) {
            context.emit('change', letters.value[index])
          }
        }, 16)
      }
    }
    const tend = () => {
      data.touchstatus = false
    }
    onMounted(() => {
      getalphabet()
    })
    onUpdated(() => {
      data.startY = item.value[0].offsetTop
    })
    return {
      ...toRefs(data),
      letters,
      getalphabet,
      getalphabetSucc,
      letterclick,
      tstart,
      tmove,
      tend,
      item
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.alphabet
  width .5rem
  position fixed
  top 2.5rem
  right 0
  display flex
  flex-direction column
  justify-content center
  align-items center
.alphabet span
  line-height .5rem
  font-size .38rem
  color $bgColor
</style>
