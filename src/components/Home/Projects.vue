<template>
  <article>
    <h1>Projects</h1>
    <section>
      <p>
        Click here to check my projects!
      </p>
      <router-link to="/projects">
        <LinkButton icon="projects.png"/>
      </router-link>
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { projects } from '../../scripts/projects'
import LinkButton from '../../common/styled/LinkButton.vue'

export default defineComponent({
  data () {
    return {
      projects
    }
  },
  components: {
    LinkButton
  }
})

</script>

<style scoped>
section {
  font-size:calc(7px + 0.7vw);
  text-align:center;
}

p {
  margin:0;
}

</style>
