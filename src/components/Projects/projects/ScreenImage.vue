<template>
  <div :style="{ backgroundImage: 'url(' + getImgUrl(screen) + ')' }"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['screen'],
  methods: {
    getImgUrl(pic: string) {
      return require('../../assets/projects/screenshots/' + pic)
    },
  },
})
</script>

<style scoped>
div {
  margin: 10px;
  width: 240px;
  height: 150px;
  border-radius: 10px;
  background-image: url('../../assets/projects/screenshots/soulgraphy1.png');
  background-size: cover;
  background-position: center;
  border: 3px solid #045063;
}

@media (max-width: 1000px) {
  div {
    display: none;
  }
}
</style>
