<template>
    <article>
        <h1>Education</h1>
        <EducationItem :degree= 'degree' v-for="degree in degrees" :key="degree.Field" />
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import EducationItem from '../../common/items/EducationItem.vue'
import { degrees } from '../../scripts/education'

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

section:last-child {
  opacity:0.65;
}

</style>
