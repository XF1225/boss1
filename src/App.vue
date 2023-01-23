<template>
  <div id="app">
    <router-view v-slot="{ Component }" v-if="isRouterActive">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>
<script>
import { ref, nextTick, provide } from 'vue'
export default {
  setup () {
    const isRouterActive = ref(true)
    const reload = () => {
      isRouterActive.value = false
      nextTick(function () {
        isRouterActive.value = true
      })
    }
    provide('reload', reload)
    return {
      reload,
      isRouterActive
    }
  }
}
</script>
<style lang="stylus">

</style>
