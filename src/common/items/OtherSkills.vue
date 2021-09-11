<template>
  <div :class="{dumb: item.Skill == 0, imSoDumb: item.Skill == 0 && amIdumb == 'no'}">
    <img v-if="item.Name != 'ASP .NET'" :src="getImgUrl(item.Name.toLowerCase())">
    <img v-if="item.Name == 'ASP .NET'" :src="getImgUrl('dotnet')">
    {{item.Name}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  methods: {
    getImgUrl (pic: string) {
      return require('../../assets/thumbnails/other-langs/' + pic + '.png')
    }
  },
  props: ['item'],
  data () {
    return {
      amIdumb: localStorage.getItem('showDumb')
    }
  }
})
</script>

<style scoped>

div {
    padding:calc(2px + 0.2vw) calc(3px + 0.5vw);
    border-radius:10px;
    margin:calc(5px + 0.5vw);
    background: #ccd1d399;
    display: flex;
    justify-content:center;
    align-items: center;
    cursor: pointer;
    transition:.2s all;
}

div:hover {
  background: #cdd4d6;
}

img {
  width:calc( 15px + 0.5vw );
  height:calc( 15px + 0.5vw );
  display:inline-block;
  margin:0 10px;
  filter: brightness(0.8);
  border-radius:15%;
}

.dumb {
  opacity:.35;
}

</style>
