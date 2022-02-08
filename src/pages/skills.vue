<template>
  <main>
    <BackButton />
    <Skills />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BackButton from '../common/styled/BackButton.vue'
import Skills from '../components/Skills/Skills.vue'

export default defineComponent({
  components: {
    BackButton,
    Skills,
  },
})
</script>
