<template>
    <article>
        <h1>Experience</h1>
        <ExperienceItem :work= 'work' v-for="work in works" :key="work.Name" />
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ExperienceItem from '../items/ExperienceItem.vue'
import { works } from '../../scripts/exp'

export default defineComponent({
  data () {
    return {
      works
    }
  },
  components: {
    ExperienceItem
  }
})

</script>

<style scoped>

section {
  background-color:#c4cbcd;
  margin:25px auto;
  display:flex;
  justify-content:space-between;
  padding:10px;
  border-radius:5px;
  transition: 0.2s all;
  cursor:pointer;
  font-size:calc(8px + 0.8vw);
  max-width:80vw;
  width:900px;
  border-radius:10px;
  align-items:center;
}

section:hover {
  background-color:#b8c4c7;
}

</style>
