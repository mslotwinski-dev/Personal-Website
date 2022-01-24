<template>
  <article>
    <section>
      <div class="hgw52a">
        <Logo :project="project" />
        <LangGroup :project="project" />
      </div>
      <ProjectData :project="project" />
    </section>
    <Screenshots :project="project" />
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProjectData from './ProjectData.vue'
import Logo from './Logo.vue'
import LangGroup from './LangGroup.vue'
import Screenshots from './Screenshots.vue'

export default defineComponent({
  name: 'SingleProject',
  props: ['project'],
  components: {
    ProjectData,
    Logo,
    LangGroup,
    Screenshots,
  },
})
</script>

<style scoped>
article {
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  background-color: #d6d8d8;
}

section {
  display: flex;
  justify-content: center;
  padding: 0 10px;
  flex-wrap: wrap-reverse;
}

.hideDesc {
  height: 60px;
  overflow: hidden;
}

.hgw52a {
  max-width: 80vw;
  width: 400px;
}
</style>
