<template>
  <div id="app">
    <Start />
    <main>
      <Personal />
      <Education />
      <Software />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Start from './components/Start.vue'
import Personal from './components/Personal.vue'
import Education from './components/Education.vue'
import Software from './components/Software.vue'

export default defineComponent({
  name: 'App',
  components: {
    Start,
    Personal,
    Education,
    Software
  }
})

</script>

<style>
@import 'main.css';
</style>
