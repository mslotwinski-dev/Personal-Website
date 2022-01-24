<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Hero',
})
</script>

<style scoped>
div {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('../../assets/start.png');
  background-size: cover;
  background-position: center;
}
</style>
