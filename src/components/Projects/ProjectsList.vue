<template>
  <article>
    <h1>
      {{ type }}
    </h1>
    <div>
      <SingleProject
        :project="project"
        v-for="project in ThisCategory"
        :key="project"
      />
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SingleProject from '../../common/projects/SingleProject.vue'
import { projects } from '../../data/projects/main'
import { LangID } from '../../data/projects/langs'

export default defineComponent({
  name: 'ProjectsList',
  props: ['type'],
  data() {
    return {
      projects,
      LangID,
      ThisCategory: projects.filter((value) => value.Category === this.type),
    }
  },
  components: {
    SingleProject,
  },
})
</script>

<style scoped>
div {
  width: 1200px;
  max-width: 95vw;
  margin: 10px auto;
  padding: 10px;
  background: rgb(221, 225, 226);
  border-radius: 10px;
}

article {
  margin: 20px 0;
}
</style>
