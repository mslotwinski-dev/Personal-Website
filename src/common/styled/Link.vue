<template>
  <article>
    <h1>{{ link.charAt(0).toUpperCase() + link.toLowerCase().slice(1) }}</h1>
    <section>
      <p>Click here to check my {{ link }}!</p>
      <router-link :to="'/' + link">
        <LinkButton icon="projects.png" />
      </router-link>
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import LinkButton from './LinkButton.vue'

export default defineComponent({
  props: ['link'],
  components: {
    LinkButton,
  },
})
</script>

<style scoped>
section {
  font-size: calc(7px + 0.7vw);
  text-align: center;
}

p {
  margin: 0;
}
</style>
