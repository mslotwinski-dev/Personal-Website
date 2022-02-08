<template>
  <div>
    <span class="title">Languages</span>
    <span class="langBlock" v-for="lang in langs" :key="lang">
      <img :src="getImgUrl(lang)" />
      {{ lang }}
      <img />
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { langs } from '../../../data/modals/plans'

export default defineComponent({
  name: 'PlansLang',
  props: ['lang'],
  data() {
    return {
      langs,
    }
  },
  methods: {
    getImgUrl(pic: string) {
      return '../../../assets/thumbnails/human-langs/' +
        pic.toLowerCase() +
        '.png'
    },
  },
})
</script>

<style scoped>
div {
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  display: block;
  text-align: center;
  font-size: calc(1vw + 10px);
}

.langBlock {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
  padding: 8px;
  width: 200px;
  background-color: #c4cbcd;
  color: #6d455e;
  text-shadow: 0 0 6px #6d455e40, 0 0 10px #6d455e40;
  border-radius: 5px;
  transition: 0.2s all;
}

.langBlock:hover {
  background-color: #cfdadd;
  cursor: pointer;
}

@media (min-width: 800px) {
  .title {
    display: none;
  }
}

@media (max-width: 800px) {
  .langBlock {
    margin: 4px;
  }
}

img {
  height: calc(0.85vw + 8.5px);
  margin: 0 5px;
}
</style>
