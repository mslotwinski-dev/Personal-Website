<template>
  <div class="cont">
    <span v-on:click="renderModal(true)">Any plans?</span>
    <Modal
      @closeModal="renderModal(false)"
      v-if="showModal"
      ref="modal"
      title="Education plans"
      content="plans"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Modal from '../modals/Modal.vue'

export default defineComponent({
  name: 'Plans',
  components: {
    Modal,
  },
  methods: {
    renderModal(arg: boolean) {
      this.showModal = arg
    },
  },
  data() {
    return {
      showModal: false,
    }
  },
})
</script>

<style scoped>
.cont {
  width: 900px;
  margin: auto;
  max-width: 80vw;
  font-size: calc(6.5px + 0.65vw);
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

span {
  background: #c4cbcd;
  padding: 7px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
