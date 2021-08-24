<template>
  <div class='screenshots' v-if="project.Screenshots.length > 0">
    <Screen :screen="screen" v-for="screen in project.Screenshots" :key="screen" />
    <Links :project="project"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Links from './Links.vue'
import Screen from './Screen.vue'

export default defineComponent({
  name: 'Screenshots',
  props: ['project'],
  components: {
    Links,
    Screen
  }
})
</script>

<style scoped>

.screenshots {
  display:flex;
  justify-content: space-around;
  flex-wrap:wrap;
  padding:0 10px;
}

</style>
