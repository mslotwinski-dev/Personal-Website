<template>
  <main>
    <BackButton />
    <!-- <List />
    <ProjectsList :type="type" v-for="type in ProjectType" :key="type" /> -->
    <h1>Currently not available</h1>
    <h2>If you want to see my projects, you can check my github</h2>
    <h2><a href="//github.com/paprotka2137">Link</a></h2>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BackButton from '../common/styled/BackButton.vue'
// import List from '../components/Projects/List.vue'
// import ProjectsList from '../components/Projects/ProjectsList.vue'
import { ProjectType } from '../data/types/enums'

export default defineComponent({
  name: 'Projects',
  components: {
    BackButton,
    // ProjectsList,
    // List
  },
  data() {
    return {
      ProjectType,
    }
  },
  mounted() {
    document.title = 'My projects'
  },
})
</script>

<style lang="scss" scoped>
h2 {
  margin: 20px auto;
  width: 70vw;
  font-size: calc(13px + 0.65vw);
  text-align: center;
}
a {
  text-transform: uppercase;
  font-size: calc(15px + 0.75vw);
  transition: all 0.3s;
  &:hover {
    color: #00647d;
  }
}
</style>
