<template>
  <div class="container">
    <section class="map" :style="{ height: lockHeight + 'px' }">
      <div class="iconContainer" :class="{ iconsHidden: !showIcons }">
        <MapIcon :city="city" v-for="city in cities" :key="city.Name" />
        <div class="rzeszow">
          <a href="https://en.wikipedia.org/wiki/Rzeszow"></a>
          <span> Rzeszow </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MapIcon from './MapIcon.vue'

import { cities } from '../../../data/modals/map'

export default defineComponent({
  name: 'Map',
  data() {
    return { lockHeight: 1, showIcons: false, cities }
  },
  created() {
    window.addEventListener('resize', this.lockAspect)
    this.lockAspect()
    this.renderIcons()
  },
  methods: {
    resetAspect() {
      this.lockHeight = 1
    },
    lockAspect() {
      setTimeout(() => {
        // eslint-disable-next-line
        const map: HTMLElement = document.querySelector('section')!
        this.lockHeight = map.offsetWidth / 1.745
      }, 1)
    },
    renderIcons() {
      setTimeout(() => {
        this.showIcons = true
      }, 400)
    },
  },
  components: {
    MapIcon,
  },
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
.map {
  display: block;
  border-radius: 5px;
  background-image: url('../../../assets/modals/maps/extended.png');
  background-size: cover;
  width: 100%;
  transition: 0.2s all;
}

.iconsHidden {
  opacity: 0;
}

.rzeszow {
  position: absolute;
  top: 60%;
  left: 81.5%;
}

.rzeszow a {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: 0.2s all;
  background-image: url('../../../assets/modals/maps/mark.svg');
  background-size: cover;
}

@media (max-width: 600px) {
  .rzeszow span {
    display: none;
  }
}

.rzeszow span {
  font-size: 23px;
  font-weight: 500;
  position: absolute;
  top: -18px;
  left: -21px;
  transition: 0.2s all;
  color: #6d455e;
}

a:hover,
a:hover ~ span {
  filter: brightness(1.4);
}
</style>
