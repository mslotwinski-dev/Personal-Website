<template>
  <div
    :class="{
      dumb: item.Skill == 0,
    }"
  >
    <img :src="getImgUrl(item.Name.toLowerCase())" />
    {{ item.Name }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  methods: {
    getImgUrl(pic: string) {
      return (
        '../../assets/thumbnails/programming-langs/' +
        pic.replace(' ', '_').replace('.', 'dot').toLowerCase() +
        '.png'
      )
    },
  },
  props: ['item'],
})
</script>

<style scoped>
div {
  padding: calc(2px + 0.2vw) calc(3px + 0.5vw);
  border-radius: 10px;
  margin: calc(3px + 0.3vw);
  background: #ccd1d399;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s all;
  flex-grow: 1;
}

div:hover {
  background: #cdd4d6;
}

img {
  width: calc(15px + 0.5vw);
  height: calc(15px + 0.5vw);
  display: inline-block;
  margin: 0 10px;
  filter: brightness(0.8);
  border-radius: 15%;
}

.dumb {
  opacity: 0.35;
}
</style>
