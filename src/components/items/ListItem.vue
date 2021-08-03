<template>
  <li>
    <div class='codeName'>
        <img :src="getImgUrl(imgFolder, item.Name.toLowerCase())" />
        {{item.Name}}
        <span class="nativeText" :class="{ notNative: !item.Native }">
            Native
        </span>
    </div>
    <span class="skillRate">
        <span :style="{'width': item.Skill*10 + '%'}" :class="{nativeColor: item.Native}" ></span>
    </span>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    getImgUrl (folder:string, pic: string) {
      return require('../../assets/thumbnails/' + folder + '/' + pic + '.png')
    }
  },
  props: ['item', 'imgFolder']
})
</script>

<style scoped>

li {
  padding:5px;
  border-radius:5px;
  height:calc(13px + 1.3vw);
  transition:0.2s all;
  cursor:pointer;
  display: flex;
  justify-content: space-between;
  align-items:center;
}

.dataCell li:hover, .dataCell section:hover {
  background-color: #b2bec2;
}

.skillRate {
  height:calc(4px + 0.4vw);
  width:300px;
  max-width:30vw;
  border-radius:6px;
  background-color: #262626;
  margin:0;
}

.skillRate:after {
  content:'';
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  border:calc(1.6px + 0.09vw) solid black;
  border-radius: 6px;
}

.skillRate span {
  display:block;
  height:100%;
  width:100%;
  background-color: #0096bb;
  border-radius:6px;
  font-size:0;
}

img {
  width:calc( 15px + 0.5vw );
  height:calc( 15px + 0.5vw );
  display:inline-block;
  margin:0 10px;
}

.codeName {
  display:flex;
  align-items:center;
}

.nativeColor {
    background-color: #a17c93 !important;
}

.nativeText {
    font-size:calc(6px + 0.6vw);
    text-transform:uppercase;
    color: #6d455e;
    margin:0 5px;
}

.notNative {
  display:none;
}

</style>
