<template>
  <header>
    Mateusz Słotwiński
    <div>Scroll down ⮟</div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Start'
})
</script>

<style scoped>

header {
  font-size:calc(20px + 2vw);
  font-weight:bold;
  padding:15px;
  width:100vw;
  height:100vh;
  justify-content:center;
  align-items:center;
  display:flex;
  background-image:url(../assets/start.png);
  background-size:cover;
  background-position:center;
  flex-direction:column;
}

div {
  font-size:calc(10px + 1vw);
}

</style>
