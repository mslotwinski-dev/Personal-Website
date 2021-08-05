<template>
  <header>
      My projects
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  components: {
  }
})
</script>

<style scoped>
  header {
    text-align:center;
    font-weight: 500;
    font-size:calc(11px + 1.1vw);
    padding-bottom:10px;
    border-bottom:5px solid #b2bec2;
    width:800px;
    margin:auto;
  }
</style>
