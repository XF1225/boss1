<template>
  <div>
    <shezhiheader :title="title"></shezhiheader>
    <contents></contents>
  </div>
</template>

<script>
import shezhiheader from '../shezhi/components/header'
import contents from './components/contents'
import { ref, onActivated, nextTick } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'shezhidetail',
  components: {
    shezhiheader,
    contents
  },
  setup () {
    const title = ref('')
    const route = useRoute()
    onActivated(() => {
      nextTick(() => {
        switch (route.params.id) {
          case 'S001':
            title.value = '账号与绑定'
            break
          case 'S002':
            title.value = '通知与提醒'
            break
          case 'S003':
            title.value = '隐私设置'
            break
          case 'S004':
            title.value = '直直红包设置'
            break
          case 'S005':
            title.value = '打招呼语'
            break
          case 'S006':
            title.value = '帮助与反馈'
            break
          case 'S007':
            title.value = '版本更新'
            break
          case 'S008':
            title.value = '切换身份'
            break
        }
      })
    })
    return {
      title
    }
  }
}
</script>
