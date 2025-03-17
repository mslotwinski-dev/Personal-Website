<template>
  <section>
    <h2>
      {{ project.Name }}
      <a :href="'https://' + project.Link"> More info ➜ </a>
    </h2>
    <span>{{ project.Desc }}</span>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['project'],
})
</script>
<style scoped>
section {
  background-color: #c4cbcd;
  padding: calc(5px + 1.2vw);
  border-radius: 10px;
  align-items: center;
  margin: 25px auto;
  display: flex;
  justify-content: space-between;
  transition: 0.2s all;
  cursor: pointer;
  font-size: calc(1px + 1vw);
  max-width: 80vw;
  width: 900px;
  flex-wrap: wrap;
}

h2 {
  font-size: calc(8.5px + 0.85vw);
  font-weight: bold;
  width: inherit;
  padding: 0;
  margin: calc(4px + 0.4vw) 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  font-size: calc(7.5px + 0.75vw);
}
a:hover {
  color: #00647d;
}

span {
  font-size: calc(6.5px + 0.65vw);
}
</style>
