<template>
  <main>
    <BackButton />
    <Header />
    <ProjectsList />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BackButton from '../components/Projects/BackButton.vue'
import Header from '../components/Projects/Header.vue'
import ProjectsList from '../components/Projects/ProjectsList.vue'

export default defineComponent({
  name: 'Projects',
  components: {
    BackButton,
    Header,
    ProjectsList
  },
  mounted () {
    document.title = 'My projects'
  }
})
</script>
