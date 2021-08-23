<template>
  <main>
    <BackButton />
    <ProjectsList :type="type" v-for="type in ProjectType" :key="type" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BackButton from '../components/Projects/BackButton.vue'
import ProjectsList from '../components/Projects/ProjectsList.vue'
import { ProjectType } from '../scripts/types/enums'

export default defineComponent({
  name: 'Projects',
  components: {
    BackButton,
    ProjectsList
  },
  data () {
    return {
      ProjectType
    }
  },
  mounted () {
    document.title = 'My projects'
  }
})
</script>
