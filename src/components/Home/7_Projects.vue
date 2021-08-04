<template>
  <article>
    <h1>Projects</h1>
    <section>
      <p>
        Click here to check my projects!
      </p>
      <button>
        ABC
      </button>
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
button {
  background: red;
}

p {
  margin:0;
}

</style>
