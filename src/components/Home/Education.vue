<template>
  <article>
    <h1>Education</h1>
    <EducationItem
      :degree="degree"
      v-for="degree in degrees"
      :key="degree.Field"
    />
    <Plans />
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import EducationItem from '../../common/items/EducationItem.vue'
import Plans from '../../common/styled/Plans.vue'
import { degrees } from '../../data/home/education'

export default defineComponent({
  data() {
    return {
      degrees,
    }
  },
  components: {
    EducationItem,
    Plans,
  },
})
</script>

<style scoped>
section:last-child {
  opacity: 0.65;
}
</style>
