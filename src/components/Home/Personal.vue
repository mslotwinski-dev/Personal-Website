<template>
  <article>
    <h1>Personal data</h1>
    <ul>
      <li>
        <div>Age:</div>
        <div>{{ age }}</div>
      </li>
      <li>
        <div>Home:</div>
        <div v-html="home.format()" />
      </li>
    </ul>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { age, home } from '../../scripts/home/personal'

export default defineComponent({
  data() {
    return {
      age: age,
      home: home,
    }
  },
})
</script>

<style scoped>
.notHovered {
  filter: brightness(0);
}

ul {
  font-size: calc(8px + 0.8vw);
  max-width: 80vw;
  width: 900px;
  margin: auto;
  font-weight: 500;
  list-style-type: none;
  padding: 0;
}

li {
  padding: 5px;
  border-radius: 5px;
  height: calc(13px + 1.3vw);
  transition: 0.2s all;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li:hover {
  background-color: #ccd1d3;
}

div {
  display: flex;
  align-items: center;
}
</style>
