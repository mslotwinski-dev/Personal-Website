<template>
  <nav>

    <router-link to="/">
      <LinkButton icon="projects.png" class="rotate"/>
    </router-link>
    <p>
        Back to my CV
    </p>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LinkButton from '../../common/styled/LinkButton.vue'

export default defineComponent({
  name: 'BackButton',
  components: {
    LinkButton
  }
})
</script>

<style scoped>

nav {
    margin:10px;
    display:flex;
    align-items:center;
    width:800px;
}

.rotate {
    transform: rotate(90deg);
}

p {
    margin:0 10px;
    font-weight: 500;
    font-size:calc(8px + 0.8vw)
}

</style>
