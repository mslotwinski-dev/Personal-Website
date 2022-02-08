<template>
  <div :style="{ backgroundImage: 'url(' + getImgUrl(icon) + ')' }"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ModalIcon',
  methods: {
    getImgUrl(pic: string) {
      return '../../assets/icons/' + pic
    },
  },
  props: ['icon'],
})
</script>

<style scoped>
div {
  display: inline-block;
  background-color: #00647d;
  margin: 10px;
  padding: calc(10px + 1vw);
  border-radius: 50%;
  background-size: cover;
  background-image: url('../../assets/icons/projects.png');
  transition: 0.3s all;
}

div:hover {
  background-position: 0 7px;
}
</style>
