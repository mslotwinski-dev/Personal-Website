<template>
  <li
    :class="{
      dumb: item.Skill == 0,
    }"
    v-on:click="toogleDetails"
  >
    <div class="codeName">
      <img :src="getImgUrl(imgFolder, item.Name)" />
      {{ item.Name }}
      <span class="nativeText" :class="{ notNative: !item.Native }">
        Native
      </span>
    </div>
    <span class="skillRate">
      <span
        :style="{ width: item.Skill * 10 + '%' }"
        :class="{ nativeColor: item.Native }"
      ></span>
    </span>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    getImgUrl(folder: string, pic: string) {
      return '../../assets/thumbnails/' + folder + '/' + pic.replace(' ', '_').replace('.', 'dot').replace('#', 'sharp').toLowerCase() + '.png'
    },
  },
  props: ['item', 'imgFolder'],
})
</script>

<style scoped>
li {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  font-size: calc(11px + 0.65vw);
  height: calc(19px + 1.2vw);
  transition: 0.2s all;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li:hover {
  background-color: #c9d4d8;
}

.skillRate {
  height: calc(4px + 0.4vw);
  width: 300px;
  max-width: 38vw;
  border-radius: 4px;
  overflow: hidden;
  background-color: #aeb8c0;
  margin: 0;
}

.skillRate span {
  display: block;
  height: 100%;
  width: 100%;
  background-color: #0080a0;
  font-size: 0;
}

img {
  width: calc(15px + 0.5vw);
  height: calc(15px + 0.5vw);
  display: inline-block;
  margin: 0 10px;
}

.codeName {
  display: flex;
  align-items: center;
}

.nativeColor {
  background-color: #a17c93 !important;
}

.nativeText {
  font-size: calc(6px + 0.6vw);
  text-transform: uppercase;
  color: #6d455e;
  margin: 0 5px;
}

.notNative {
  display: none;
}

.dumb {
  opacity: 0.35;
}

.details li {
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  flex-grow: 1;
  justify-content: flex-start;
}
</style>
