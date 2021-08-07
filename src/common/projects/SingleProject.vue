<template>
    <article>
      <section>
        <Logo :project="project" v-if="showProject"/>
        <ProjectData :project="project" @toggleProject="toggleProject" :class="{hideDesc: !showProject}"/>
      </section>
      <div class='langs' v-if="showProject">
        <LangGroup :project="project" type="Frontend" />
        <LangGroup :project="project" type="Backend" />
        <LangGroup :project="project" type="Database" />
      </div>
      <Screenshots :project="project" v-if="showProject"/>
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
  methods: {
    toggleProject () {
      this.showProject = !this.showProject
    },
    screenEvent () {
      const w = window.innerWidth
      if (w > 725) {
        this.showProject = true
      } else {
      }
    }
  },
  created () {
    window.addEventListener('resize', this.screenEvent)
    this.screenEvent()
  },
  data () {
    return { showProject: false }
  },
  components: {
    ProjectData,
    Logo,
    LangGroup,
    Screenshots
  }
})
</script>

<style scoped>
article {
  padding:10px;
  margin:10px;
  border-radius:5px;
  background-color:#D6D8D8;
}

section {
  display:flex;
  justify-content: center;
  padding:10px;
  flex-wrap:wrap-reverse;
}

.langs {
  display: flex;
  justify-content: center;
  flex-wrap:wrap;
}

.hideDesc {
  height:60px;
  overflow: hidden;
}

</style>
