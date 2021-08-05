<template>
  <main>
    <BackButton />
    <Header />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BackButton from '../components/Projects/BackButton.vue'
import Header from '../components/Projects/Header.vue'

export default defineComponent({
  name: 'Projects',
  components: {
    BackButton,
    Header
  },
  mounted () {
    document.title = 'My projects'
  }
})
</script>
