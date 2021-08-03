<template>
  <header>
    Mateusz Słotwiński
    <div>
      Scroll down
    </div>
    <Scroll />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Scroll from '../misc/Scroll.vue'

export default defineComponent({
  name: 'Hero',
  components: {
    Scroll
  }
})
</script>

<style scoped>

header {
  font-size:calc(20px + 2vw);
  font-weight:600;
  width:100vw;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background-image:url(../../assets/start.png);
  background-size:cover;
  background-position:center;
  flex-direction:column;
}

div {
  font-size:calc(10px + 1vw);
}

</style>
