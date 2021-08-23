<template>
  <article>
    <header>
        {{type}}
    </header>
    <div>
        <SingleProject :project= 'project' v-for="project in ThisCategory" :key="project"/>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SingleProject from '../../common/projects/SingleProject.vue'
import { projects } from '../../scripts/projects/main'
import { LangID } from '../../scripts/projects/langs'

export default defineComponent({
  name: 'ProjectsList',
  props: ['type'],
  data () {
    return {
      projects,
      LangID,
      ThisCategory: projects.filter((value) => value.Category === this.type)
    }
  },
  components: {
    SingleProject
  }
})
</script>

<style scoped>

  header {
    text-align:center;
    font-weight: 500;
    font-size:calc(10px + 1vw);
    padding-bottom:10px;
    border-bottom:5px solid #b2bec2;
    width:800px;
    max-width:90vw;
    margin:auto;
  }

div {
  width:1200px;
  max-width:95vw;
  margin:10px auto;
  padding:10px;
  background: rgb(221, 225, 226);
  border-radius:10px;
}

article {
  margin:20px 0;
}

</style>
