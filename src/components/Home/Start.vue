<template>
  <header>
    <Hero />
    <h2>Mateusz Słotwiński</h2>
    <h3>Scroll down</h3>
    <Scroll />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Scroll from '../../common/styled/Scroll.vue'
import Hero from '../../common/styled/Hero.vue'

export default defineComponent({
  name: 'Start',
  components: {
    Scroll,
    Hero,
  },
})
</script>

<style scoped>
header {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h2 {
  font-size: calc(20px + 2vw);
  font-weight: 600;
  margin: 0;
}

h3 {
  font-size: calc(10px + 1vw);
  font-weight: 500;
  margin: 0;
}
</style>
