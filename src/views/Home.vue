<template>
  <div>
    <Start />
    <main>
      <Personal />
      <Education />
      <Experience />
      <Software />
      <Langs />
      <ProjectsLink />
      <Interests />
      <Contact />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Start from '../components/Home/Start.vue'
import Personal from '../components/Home/Personal.vue'
import Education from '../components/Home/Education.vue'
import Experience from '../components/Home/Experience.vue'
import Software from '../components/Home/Software.vue'
import Langs from '../components/Home/Langs.vue'
import ProjectsLink from '../components/Home/ProjectsLink.vue'
import Interests from '../components/Home/Interests.vue'
import Contact from '../components/Contact/Contact.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Start,
    Personal,
    Education,
    Experience,
    Software,
    Langs,
    ProjectsLink,
    Interests,
    Contact
  },
  mounted () {
    document.title = 'Mateusz Słotwiński'
  }
})
</script>
