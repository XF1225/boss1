<template>
  <div>
    <citysheader></citysheader>
    <cityscontents :letter="letter" :letters="letters"></cityscontents>
    <alphabet @change="letterchange" @create="lettercreate"></alphabet>
  </div>
</template>

<script>
import citysheader from './components/header'
import cityscontents from './components/contents'
import alphabet from './components/alphabet'
import { ref } from 'vue'
export default {
  name: 'citys',
  components: {
    citysheader,
    cityscontents,
    alphabet
  },
  setup () {
    const letter = ref('')
    const letters = ref([])
    const letterchange = letter2 => {
      letter.value = letter2
    }
    const lettercreate = letters2 => {
      letters.value = letters2
    }
    return {
      letter,
      letters,
      letterchange,
      lettercreate
    }
  }
}
</script>
