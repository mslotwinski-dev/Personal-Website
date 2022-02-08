<template>
  <li :class="{ dumb: item.Skill == 0 }" v-on:click="toogleDetails">
    <div class="codeName">
      <img :src="namesrc" />
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
  <ul class="details" v-if="item.Details && showDetails == true">
    <li v-for="details in item.Details" :key="details">
      <img :src="detsrc" />
      {{ details }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  async mounted() {
    this.getImgUrl(this.imgFolder, this.item.Name.toLowerCase()).then(res => {
      this.namesrc = res
    })
    this.getImgUrl('other-langs', this.item.details.toLowerCase()).then(res => {
      this.detsrc = res
    })
  },
  methods: {
    async getImgUrl(folder: string, pic: string): Promise<string> {
      const xxx = await import(/* @vite-ignore */ '../../assets/thumbnails/' + folder + '/' + pic + '.svg')
      const json = JSON.parse(JSON.stringify(xxx))
      console.log(json)
      return json.default ? json.default : json
    },
    toogleDetails() {
      this.showDetails = !this.showDetails
    },
  },
  data() {
    return {
      showDetails: false,
      namesrc: '',
      detsrc: '',
    }
  },
  props: ['item', 'imgFolder'],
})
</script>

<style scoped>
li {
  padding: 5px;
  border-radius: 5px;
  height: calc(13px + 1.3vw);
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
  max-width: 30vw;
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
