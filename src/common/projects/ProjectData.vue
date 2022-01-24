<template>
  <div>
    <div class="title">
      {{ project.Name }}
    </div>
    <div class="desc">
      {{ project.Desc }}
    </div>
    <div class="created">
      <b>Created: </b>
      {{ project.Created }}
    </div>
    <Links
      :project="project"
      isShort="true"
      v-if="project.Screenshots.length <= 0"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Links from './Links.vue'

export default defineComponent({
  name: 'ProjectData',
  props: ['project'],
  components: {
    Links,
  },
})
</script>

<style scoped>
div {
  flex-grow: 1;
  margin: 10px;
  max-width: 680px;
}

.title {
  margin: 10px;
  padding: 10px;
  text-align: center;
  font-weight: 500;
  font-size: calc(10px + 1vw);
  cursor: pointer;
}

.desc {
  margin: 10px;
  padding: 10px;
  font-size: calc(8px + 0.8vw);
  text-align: justify;
}

.created {
  font-size: 20px;
}

@media (max-width: 1000px) {
  .created {
    display: none;
  }
}
</style>
