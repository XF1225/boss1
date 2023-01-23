<template>
  <div>
    <div class="choiceheader">
      <div class="details">
        <span class="el-icon-close" @click="toup">X</span>
        <h4>{{title}}<span class="det-span" v-show="showchecks">.{{checks}}</span></h4>
        <p @click="tochangeCity">切换城市</p>
      </div>
    </div>
    <div class="kong"></div>
  </div>
</template>

<script>
import { toRefs, reactive, computed, onMounted } from 'vue'
import myEventBus from '@/assets/js/bus'
import { useRouter } from 'vue-router'
export default {
  name: 'choiceheader',
  setup () {
    const router = useRouter()
    const emitter = myEventBus()
    const data = reactive({
      title: '',
      middles: [
        {
          id: 'C000',
          title: '桂林'
        },
        {
          id: 'C001',
          title: '七星区'
        },
        {
          id: 'C002',
          title: '秀峰区'
        },
        {
          id: 'C003',
          title: '象山区'
        },
        {
          id: 'C004',
          title: '叠彩区'
        },
        {
          id: 'C005',
          title: '临桂区'
        },
        {
          id: 'C006',
          title: '灵川县'
        },
        {
          id: 'C007',
          title: '阳朔县'
        },
        {
          id: 'C008',
          title: '荔浦市'
        },
        {
          id: 'C009',
          title: '全州县'
        },
        {
          id: 'C010',
          title: '平乐县'
        },
        {
          id: 'C011',
          title: '恭城县'
        },
        {
          id: 'C012',
          title: '灌阳县'
        },
        {
          id: 'C013',
          title: '资源县'
        }
      ],
      checks: 0
    })
    const toup = () => {
      router.go(-1)
    }
    const tochangeCity = () => {
      router.push('/citys')
    }
    const showchecks = computed(() => {
      if (data.checks !== 0) {
        return true
      } else {
        return false
      }
    })
    onMounted(() => {
      emitter.on('change', (title) => {
        data.title = title
      })
      emitter.on('orders', (title) => {
        data.title = title
      })
      emitter.on('changenum', (changenum) => {
        data.checks = changenum
      })
    })
    return {
      ...toRefs(data),
      toup,
      showchecks,
      tochangeCity
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.choiceheader
  width 100%
  height 1.2rem
  background white
  position fixed
  top 0
  left 0
  .details
    width 90%
    height 1.2rem
    margin 0 auto
    display flex
    flex-direction row
    justify-content space-between
    align-items center
  .details span
    font-size .5rem
    transform scale(1, .8)
    margin-left .2rem
  .details h4
    font-size .38rem
    .det-span
      font-size .38rem
      color $bgColor
  .details p
    font-size .35rem
.kong
  width 100%
  height 1.2rem
</style>
