<template>
  <article>
    <h1>Experience</h1>
    <ExperienceItem :work="work" v-for="work in works" :key="work.Name" />
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ExperienceItem from '../../common/items/ExperienceItem.vue'
import { works } from '../../data/home/exp'

export default defineComponent({
  data() {
    return {
      works,
    }
  },
  components: {
    ExperienceItem,
  },
})
</script>

<style scoped></style>
