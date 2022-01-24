<template>
  <div class="container" :style="{ left: city.x + '%', top: city.y + '%' }">
    <a class="dot" :href="'https://en.wikipedia.org/wiki/' + city.Name"></a>
    <div class="name" :style="{ transform: 'translate(' + city.right + 'px)' }">
      {{ city.Name }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MapIcon',
  props: ['city'],
})
</script>
<style scoped>
.container {
  position: relative;
}

a {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  background-color: #00647d;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s all;
}

@media (max-width: 600px) {
  .name {
    display: none;
  }
}

.name {
  font-size: 20px;
  font-weight: 500;
  position: absolute;
  top: 0;
  left: 2%;
  transition: 0.2s all;
}

.dot:hover {
  background-color: #137c96;
}

.dot:hover ~ .name {
  color: #137c96;
}
</style>
