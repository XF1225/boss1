<template>
  <div class="Maps">
    <div class="map" id="bd_map_d"></div>
  </div>
</template>

<script>

import BMap from 'BMap'
import { defineComponent, nextTick, onMounted } from 'vue'
export default defineComponent({
  props: {
    HomeContent: Array
  },
  setup (props) {
    onMounted(() => {
      nextTick(() => {
        // initMap()
        const map = new BMap.Map('bd_map_d')
        const mapJ = props.HomeContent[0].jingweidu.lng
        const mapW = props.HomeContent[0].jingweidu.lat
        const area = props.HomeContent[0].area
        const point = new BMap.Point(mapJ, mapW)
        map.centerAndZoom(point, 15)
        const marker = new BMap.Marker(point)
        map.addOverlay(marker)
        map.addControl(new BMap.MapTypeControl())
        map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
        map.setMinZoom(15)
        map.setMaxZoom(20)
        const opts = {
          width: 100,
          height: 50
        }
        const infoWindow = new BMap.InfoWindow(area, opts)
        map.openInfoWindow(infoWindow, point) // 开启信息窗口
        marker.addEventListener('click', function () {
          map.openInfoWindow(infoWindow, point) // 开启信息窗口
        })
      })
    })
    const initMap = () => {
      const Bmap = window.BMapGL
      const map = new Bmap.Map('bd_map_d')
      const mapJ = props.HomeContent[0].jingweidu.lng
      const mapW = props.HomeContent[0].jingweidu.lat
      const img = null
      const myIcon = new Bmap.Icon(img, new Bmap.Size(34, 34))
      const Point = new Bmap.Point(mapJ, mapW)
      map.centerAndZoom(Point, 25)
      map.enableScrollWheelZoom(true)
      map.setHeading(64.5)
      map.setTilt(73)
      /* const marker = new Bmap.Marker(Point, {
        icon: myIcon
      })
      map.addOverlay(marker) */
    }
    return {

    }
  }
})

</script>
<style lang="stylus" scoped>
.map
  width 100%
  height 5rem
</style>>
