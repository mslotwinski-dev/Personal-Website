<template>
  <span :style="{ backgroundImage: 'url(' + getImgUrl(icon) + ')' }"> </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ModalIcon',
  methods: {
    getImgUrl(pic: string) {
      return '../../assets/icons/' + pic + '.svg'
    },
  },
  props: ['icon'],
})
</script>

<style scoped>
span {
  display: inline-block;
  width: calc(15px + 0.5vw);
  height: calc(15px + 0.5vw);
  background-size: cover;
  margin: 0 10px;
  transition: 0.2s all linear;
  cursor: pointer;
}
</style>
