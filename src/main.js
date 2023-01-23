import { createApp } from 'vue'
import App from './App.vue'
import { Icon } from 'vant'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import './assets/css/reset.css'
import './assets/css/border.css'
import './assets/css/iconfont.css'
import axios from 'axios'
import mitt from 'mitt'
// import BaiduMap from 'vue-baidu-map-3x'
const app = createApp(App)
/* app.use(BaiduMap, {
  ak: 'gxVZ3ULbiEDzCo97xsQS1t1n6M79hUZM'
}) */
app.config.productionTip = false
app.use(router)
app.use(Icon)
app.config.globalProperties.emitter = mitt()
app.config.globalProperties.axios = axios
// 注册一个全局自定义指令 `v-focus`来聚焦元素
app.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})
// 子组件全局自动导入
/* const requireComponents = require.context('@/components', true, /\.vue/)
requireComponents.keys().forEach(filename => {
  // 组件实例
  const reqCom = requireComponents(filename)
  // 截取路径作为组件名
  const reqComName = reqCom.name || filename.replace(/\.\/(.*)\.vue/, '$1')
  console.log(reqComName, 'reqComName')
  // 挂载
  app.component(reqComName, reqCom.default || reqCom)
}) */
router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && JSON.parse(localStorage.getItem('token')) === null) {
    next('/login')
  } else {
    next()
  }
})
app.use(store).mount('#app')
