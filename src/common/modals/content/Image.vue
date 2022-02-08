<template>
  <div class="container">
    <section
      :style="{
        height: lockHeight + 'px',
        backgroundImage: 'url(' + getImgUrl(image) + ')',
      }"
    ></section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Image',
  props: ['image'],
  data() {
    return { lockHeight: 1 }
  },
  created() {
    window.addEventListener('resize', this.lockAspect)
    this.lockAspect()
  },
  methods: {
    getImgUrl(pic: string) {
      return '../../../assets/projects/screenshots/' + pic
    },
    resetAspect() {
      this.lockHeight = 1
    },
    lockAspect() {
      setTimeout(() => {
        // eslint-disable-next-line
        const map: HTMLElement = document.querySelector('section')!
        this.lockHeight = map.offsetWidth / 1.777
      }, 1)
    },
  },
  components: {},
})
</script>

<style scoped>
.iconContainer {
  width: 100%;
  height: 100%;
  transition: 0.2s all;
}

.container {
  position: relative;
}

section {
  display: block;
  border-radius: 5px;
  background-position: center;
  background-image: url('../../../assets/modals/maps/extended.png');
  background-size: cover;
  width: 100%;
  transition: 0.2s all;
}
</style>
