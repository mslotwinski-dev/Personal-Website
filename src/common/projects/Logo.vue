<template>
  <div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Name',
  props: ['ABC']
})
</script>

<style scoped>
div {
  width:400px;
  height:250px;
  margin:10px;
  border-radius:10px;
  background-image: url('../../assets/projects/logo/soulgraphy.svg');
  background-size: cover;
  background-position:center;
}
</style>
