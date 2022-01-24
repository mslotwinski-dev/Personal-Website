<template>
  <div :style="{ backgroundImage: 'url(' + getImgUrl(image) + ')' }"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Logo',
  props: ['project'],
  methods: {
    getImgUrl(pic: string) {
      return require('../../assets/projects/logo/' + pic)
    },
  },
  data() {
    return { image: this.project.Logo as string }
  },
})
</script>

<style scoped>
div {
  height: 250px;
  margin: 10px;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  border: 3px solid #045063;
}
</style>
