<template>
  <div>
    <Start />
    <main>
      <Personal />
      <Education />
      <Experience />
      <Link link="skills" />
      <Link link="projects" />
      <Interests />
      <!-- <Contact /> -->
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Start from '../components/Home/Start.vue'
import Personal from '../components/Home/Personal.vue'
import Education from '../components/Home/Education.vue'
import Experience from '../components/Home/Experience.vue'
import Link from '../common/styled/Link.vue'
import Interests from '../components/Home/Interests.vue'
// import Contact from '../components/Contact/Contact.vue'

export default {
  name: 'Home',
  components: {
    Start,
    Personal,
    Education,
    Experience,
    Link,
    Interests,
    // Contact,
  },
  mounted() {
    document.title = 'Mateusz Słotwiński'
  },
}
</script>
