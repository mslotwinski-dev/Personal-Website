<template>
    <article class="dataCell">
        <h1>Education</h1>
        <EducationDegree :degree= 'degree' v-for="degree in degrees" :key="degree.Field" />
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import EducationDegree from './EducationDegree.vue'
import { degrees } from '../scripts/education'

export default defineComponent({
  data () {
    return {
      degrees
    }
  },
  components: {
    EducationDegree
  }
})

</script>

<style scoped>
@import '../main.css';
section {
  background-color:#c4cbcd;
  flex-wrap:wrap;
  padding:10px;
  border-radius:10px;
  align-items:center;
  margin:25px auto;
}

section:last-child {
  opacity:0.65;
}

</style>
