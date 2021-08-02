<template>
    <div class="overlay" :class="{hidden: !showModal}" >
        <div class="modal">
            <div class="title">
                <b>{{title}}</b>
                <button v-on:click="toogleModal()" class="close"></button>
            </div>
                <div class="content">
                    <p>
                        {{content}}
                        <img :src="getImgUrl(image.toLowerCase())">
                    </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Modal',
  methods: {
    toogleModal () {
      this.showModal = !this.showModal
    },
    getImgUrl (pic: string) {
      return require('../../assets/modals/' + pic + '.png')
    }
  },
  props: ['content', 'title', 'image'],
  data () {
    return { showModal: false }
  }
})

</script>

<style scoped>

.hidden {
    display:none;
}

.overlay {
    z-index:1;
    position: fixed;
    width:100vw;
    height:100vh;
    top:0;
    left:0;
    background-color:#00141a50
}

.modal {
  background: #ffffff;
  border-radius: 0.5em;
  box-shadow: 0 10px 20px #00000014;
  left: 50%;
  max-width: 90%;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width:1000px;
  text-align: left;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}

.close {
    align-items: center;
    background: transparent;
    color: #111827;
    display: block;
    height:calc(13px + 1.3vw);
    width: calc(13px + 1.3vw);
    justify-content: center;
    pointer-events: none;
    background-image:url('../../assets/icons/close.svg');
    background-size:cover;
}

.title {
    color: #111827;
    padding:calc(7px + 0.7vw);
    pointer-events: all;
    position: relative;
    width:100%;
    font-size:calc(9px + 0.9vw);
    font-weight: 500;
    line-height: normal;
    display: flex;
    justify-content: space-between;
    align-items:center;
}

.content {
    border-top: 1px solid #e0e0e0;
    padding:calc(7px + 0.7vw);
    pointer-events: all;
    overflow: auto;
    font-size:calc(7px + 0.7vw);
}

b {
    margin:0;
    font-weight: 500;
}

img {
    margin:10px auto;
    width:95%;
    display: block;
    border-radius:5px;
}

p {
    width:100%;
    margin:0;
    position: relative;
}

</style>
