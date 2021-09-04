<template>
  <main>
    <BackButton />
    <List />
    <ProjectsList :type="type" v-for="type in ProjectType" :key="type" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BackButton from '../common/styled/BackButton.vue'
import List from '../components/Projects/List.vue'
import ProjectsList from '../components/Projects/ProjectsList.vue'
import { ProjectType } from '../scripts/types/enums'

export default defineComponent({
  name: 'Projects',
  components: {
    BackButton,
    ProjectsList,
    List
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
