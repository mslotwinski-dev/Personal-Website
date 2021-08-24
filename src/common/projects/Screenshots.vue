<template>
  <div class='screenshots' v-if="project.Screenshots.length > 0">
    <div v-for="screen in project.Screenshots" :key="screen" :style="{'backgroundImage': 'url(' + getImgUrl(screen) + ')'}"></div>
    <Links :project="project"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Links from './Links.vue'

export default defineComponent({
  name: 'Screenshots',
  props: ['project'],
  methods: {
    getImgUrl (pic: string) {
      return require('../../assets/projects/screenshots/' + pic)
    }
  },
  components: {
    Links
  }
})
</script>

<style scoped>

.screenshots {
  display:flex;
  justify-content: space-around;
  flex-wrap:wrap;
  padding:0 10px;
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

</style>
