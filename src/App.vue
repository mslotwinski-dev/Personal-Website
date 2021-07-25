<template>
  <div id="app">
    <Start />
    <main>
      <Personal />
      <Education />
    </main>
  </div>
</template>

<script>

import Start from './components/Start.vue'
import Personal from './components/Personal.vue'
import Education from './components/Education.vue'

export default {
  name: 'App',
  components: {
    Start,
    Personal,
    Education
  }
}
</script>

<style>
@import 'main.css';
</style>
