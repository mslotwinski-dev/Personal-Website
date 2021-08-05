<template>
  <article>
    <h1>Projects</h1>
    <section>
      <p>
        Click here to check my projects!
      </p>
      <a href="/projects">
      </a>
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { projects } from '../../scripts/projects'

export default defineComponent({
  data () {
    return {
      projects
    }
  },
  components: {
  }
})

</script>

<style scoped>
section {
  font-size:calc(7px + 0.7vw);
  text-align:center;
}
a {
  display: inline-block;
  background-color: #00647d;
  margin:10px;
  padding:calc(10px + 1vw);
  border-radius:50%;
  background-size:cover;
  background-image:url('../../assets/icons/projects.png');
  transition:.3s all;
}

a:hover {
  background-position: 0 7px;
}

p {
  margin:0;
}

</style>
