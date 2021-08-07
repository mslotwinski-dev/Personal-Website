<template>
  <div class='screenshots'>
    <div v-for="screen in project.Screenshots" :key="screen" :style="{'backgroundImage': 'url(' + getImgUrl(screen) + ')'}"></div>
    <span class='links'>
      <button>Link</button>
      <button>Code</button>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Screenshots',
  props: ['project'],
  methods: {
    getImgUrl (pic: string) {
      return require('../../assets/projects/screenshots/' + pic)
    }
  }
})
</script>

<style scoped>

.screenshots {
  display:flex;
  justify-content: space-around;
  flex-wrap:wrap;
  padding:10px;
}

.screenshots div {
  margin:10px;
  width:240px;
  height:150px;
  border-radius:10px;
  background-image: url('../../assets/projects/screenshots/soulgraphy1.png');
  background-size: cover;
  background-position:center;
  border:3px solid #045063;
}

.screenshots span {
  flex-grow:1;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
}

.screenshots button {
  display: block;
  margin:10px;
  padding:10px;
  width:170px;
  max-width:90vw;
  font-weight: 400;
  font-size: 20px;
  color:#e3e3e3;
  border-radius:5px;
  background: #00647d;
}

.screenshots button:last-child {
  background: #6D455E;
}

@media (max-width:1095px) {
  .screenshots span {
    order:-1;
  }
}

</style>
