<template>
  <nav>
    <div>
      <router-link to="/">
        <LinkButton icon="projects.png" class="rotate" />
      </router-link>
      <p>Back to my CV</p>
    </div>
    <span v-on:click="emit" class="hidedumb" v-if="$route.name === 'Skills'"
      >Hide unlearned</span
    >
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LinkButton from '../../common/styled/LinkButton.vue'

export default defineComponent({
  name: 'BackButton',
  components: {
    LinkButton,
  },
  methods: {
    emit() {
      this.$emit('clicked')
    },
  },
})
</script>

<style scoped>
nav {
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 800px;
  max-width: 80vw;
}

nav div {
  display: flex;
  align-items: center;
}

.rotate {
  transform: rotate(90deg);
}

p {
  margin: 0 10px;
  font-weight: 500;
  font-size: calc(8px + 0.8vw);
}

.hidedumb {
  padding: calc(6px + 0.3vw);
  font-size: calc(8px + 0.8vw);
  background: #00647d;
  border-radius: 10px;
  color: #e3e3e3;
  cursor: pointer;
}
</style>
