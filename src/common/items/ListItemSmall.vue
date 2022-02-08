<template>
  <li :class="{ learning: learning }">
    <div class="codeName">
      <img :src="getImgUrl(item.Name.toLowerCase())" />
      {{ item.Name }}
    </div>
    <span class="skillRate">
      <span
        :style="{ backgroundColor: skillLVL }"
        v-for="item in item.Skill"
        :key="item"
      ></span>
    </span>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    getImgUrl(pic: string) {
      return '../../assets/thumbnails/other-langs/' + pic + '.png'
    },
  },
  props: ['item'],
  data() {
    if (this.item.Skill === 1) {
      return {
        skillLVL: '#9dabae',
        learning: true,
      }
    } else if (this.item.Skill === 2 || this.item.Skill === 3) {
      return {
        skillLVL: '#00647d',
        learning: false,
      }
    } else if (this.item.Skill === 4) {
      return {
        skillLVL: '#6d455e',
        learning: false,
      }
    }
  },
})
</script>

<style scoped>
li {
  padding: 5px;
  border-radius: 5px;
  height: calc(13px + 1.3vw);
  transition: 0.2s all;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skillRate {
  width: 250px;
  max-width: 25vw;
  margin: 0;
  display: flex;
}

.skillRate span {
  display: block;
  margin: 0 2px;
  height: calc(2px + 0.867vw);
  width: calc(3px + 1.3vw);
  border-radius: 8px;
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

.learning {
  opacity: 0.5;
}
</style>
