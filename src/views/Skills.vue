<template>
  <main>
    <BackButton @clicked="hideDumb"/>
    <Skills :key="componentKey" ref="skills"/>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BackButton from '../common/styled/BackButton.vue'
import Skills from '../components/Skills/Skills.vue'

export default defineComponent({
  components: {
    BackButton,
    Skills
  },
  methods: {
    hideDumb () {
      const a = localStorage.getItem('showDumb')
      if (a === 'no') {
        localStorage.setItem('showDumb', 'yes')
      } else {
        localStorage.setItem('showDumb', 'no')
      }
      this.componentKey += 1
    }
  },
  data () {
    return {
      componentKey: 0
    }
  }
})
</script>

<style>

.imSoDumb {
  display:none !important;
}

</style>
