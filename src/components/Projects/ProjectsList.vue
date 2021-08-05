<template>
  <div>
      <SingleProject :project= 'project' v-for="project in projects" :key="project"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SingleProject from '../../common/projects/SingleProject.vue'
import { projects } from '../../scripts/projects/main'
import { LanguageArray } from '../../scripts/projects/langs'

export default defineComponent({
  name: 'ProjectsList',
  data () {
    return {
      projects,
      LanguageArray
    }
  },
  components: {
    SingleProject
  }
})
</script>

<style scoped>

div {
  width:1200px;
  max-width:95vw;
  margin:10px auto;
  padding:10px;
  background: rgb(221, 225, 226);
  border-radius:10px;
}

</style>
