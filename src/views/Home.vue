<template>
    <Start />
    <main>
      <Personal />
      <Education />
      <Experience />
      <Software />
      <Langs />
      <Projects />
      <Interests />
      <Contact />
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Start from '../components/Home/1_Start.vue'
import Personal from '../components/Home/2_Personal.vue'
import Education from '../components/Home/3_Education.vue'
import Experience from '../components/Home/4_Experience.vue'
import Software from '../components/Home/5_Software.vue'
import Langs from '../components/Home/6_Langs.vue'
import Projects from '../components/Home/7_Projects.vue'
import Interests from '../components/Home/8_Interests.vue'
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
    Projects,
    Interests,
    Contact
  }
})
</script>
