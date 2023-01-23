import { getCurrentInstance } from 'vue'
export default function myEventBus () {
  const _this = getCurrentInstance()
  const emitter = _this.appContext.config.globalProperties.emitter
  return emitter
}
