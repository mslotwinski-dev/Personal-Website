<template>
  <a
    :href="'https://en.wikipedia.org/wiki/' + (interest.Link || interest.Name)"
  >
    <img :src="imgSrc" />
    {{ interest.Name }}
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    async getImgUrl(pic: string) {
      const xxx = await import(/* @vite-ignore */ '../../assets/interests/' + pic + '.svg')
      const json = JSON.parse(JSON.stringify(xxx))
      console.log(json.default ? json.default : json)
      return json.default ? json.default : json
    },
  },
  data() {
    return {
      imgSrc: ''
    }
  },
  props: ['interest'],
  mounted() {
    this.getImgUrl(this.interest.Name.toLowerCase()).then(res => this.imgSrc = res)
  }  
})
</script>
<style scoped>
a {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00647d;
  font-weight: bold;
  padding: calc(2px + 0.2vw) calc(3px + 0.5vw);
  border-radius: 10px;
  color: #e3e3e3;
  cursor: pointer;
  margin: calc(4px + 0.3vw);
  flex-grow: 1;
  transition: 0.2s all;
  font-size: calc(8px + 0.8vw);
}

a:hover {
  background-color: #137c96;
}

img {
  height: calc(10px + 1vw);
  display: inline-block;
  margin: 5px 10px;
  filter: invert(1);
}
</style>
