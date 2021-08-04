<template>
  <article>
    <h1>Projects</h1>
    <section>
      <p>
        Click here to check my projects!
      </p>
      <button>
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
  background-color: #00647d;
  margin:10px;
  padding:30px;
  border-radius:50%;
  background-size:cover;
  background-image:url('../../assets/icons/projects.png');
  transition:.2s all;
}

button:hover {
  background-position: 0 7px;
}

p {
  margin:0;
}

</style>
