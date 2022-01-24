<template>
  <ScreenImage
    :screen="screen"
    v-on:click="renderModal(true)"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  />
  <Modal
    @closeModal="renderModal(false)"
    v-if="showModal"
    ref="modal"
    title="Screenshot"
    content="image"
    :image="screen"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Modal from '../modals/Modal.vue'
import ScreenImage from './ScreenImage.vue'

export default defineComponent({
  props: ['screen'],
  methods: {
    renderModal(arg: boolean) {
      this.showModal = arg
    },
  },
  components: {
    Modal,
    ScreenImage,
  },
  data() {
    return { showModal: false }
  },
})
</script>

<style scoped></style>
