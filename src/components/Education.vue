<template>
    <article>
        <h1>Education</h1>
        <EducationItem :degree= 'degree' v-for="degree in degrees" :key="degree.Field" />
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import EducationItem from './items/EducationItem.vue'
import { degrees } from '../scripts/education'

export default defineComponent({
  data () {
    return {
      degrees
    }
  },
  components: {
    EducationItem
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
  border-radius:10px;
  transition: 0.2s all;
  cursor:pointer;
  font-size:calc(8px + 0.8vw);
  max-width:80vw;
  width:900px;
}

section:hover {
  background-color:#b8c4c7;
}

section:last-child {
  opacity:0.65;
}

</style>
