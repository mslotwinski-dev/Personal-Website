<template>
  <div>
    <div class='title' v-on:click="toggleProject">
      {{project.Name}}
    </div>
    <div class='desc'>
      {{project.Desc}}
    </div>
    <div class="created">
      <b>Created: </b>
      {{project.Created}}
    </div>
    <Links :project="project" isShort=true v-if="project.Screenshots.length <= 0"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Links from './Links.vue'

export default defineComponent({
  name: 'ProjectData',
  props: ['project'],
  methods: {
    toggleProject () {
      this.$emit('toggleProject')
    }
  },
  components: {
    Links
  }
})
</script>

<style scoped>

div {
  flex-grow:1;
  margin:10px;
  max-width:680px;
}

.title {
  margin:10px;
  padding:10px;
  text-align:center;
  font-weight: 500;
  font-size:calc(18px + 0.6vw);
  cursor:pointer
}

.desc {
  margin:10px;
  padding:10px;
  font-size:20px;
  text-align: justify;
}

.created {
  font-size:20px;
}

</style>
