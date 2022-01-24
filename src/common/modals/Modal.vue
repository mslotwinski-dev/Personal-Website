<template>
  <div class="overlay">
    <div class="modal">
      <div class="title">
        <b>{{ title }}</b>
        <button v-on:click="closeModal()"></button>
      </div>
      <div class="content">
        <p>
          <component :is="content" :image="image"> </component>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Map from './content/Map.vue'
import Image from './content/Image.vue'
import Plans from './content/Plans.vue'

export default defineComponent({
  name: 'Modal',
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
  },
  props: ['content', 'title', 'image'],
  components: {
    Map,
    Image,
    Plans,
  },
  data() {
    return { currentComponent: 'Error' }
  },
})
</script>

<style scoped>
.overlay {
  z-index: 1;
  position: fixed;
  width: 100vw !important;
  height: 100vh !important;
  top: 0;
  left: 0;
  background-color: #00141a50;
  cursor: default;
}

.modal {
  background: #ffffff;
  border-radius: 0.5em;
  box-shadow: 0 10px 20px #00000014;
  left: 50%;
  max-width: 90%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 1200px;
  text-align: left;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}

button {
  align-items: center;
  background: transparent;
  color: #111827;
  display: block;
  height: calc(13px + 1.3vw);
  width: calc(13px + 1.3vw);
  justify-content: center;
  background-image: url('../../assets/icons/close.svg');
  background-size: cover;
  cursor: pointer;
}

.title {
  color: #111827;
  padding: calc(7px + 0.7vw);
  position: relative;
  width: 100%;
  font-size: calc(9px + 0.9vw);
  font-weight: 500;
  line-height: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content {
  border-top: 1px solid #e0e0e0;
  overflow-x: hidden;
  font-size: calc(7px + 0.7vw);
}

b {
  margin: 0;
  font-weight: 500;
}

p {
  width: 100%;
  margin: 0;
  position: relative;
}
</style>
