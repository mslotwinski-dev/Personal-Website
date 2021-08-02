<template>
    <article class="dataCell">
        <h1>Personal data</h1>
        <section>
            <div>Age:</div>
            <div>{{ age }}</div>
        </section>
        <section>
            <div>Home:</div>
            <div v-on:click="showPlace">
                <span @mouseover="isHovered = true" @mouseleave="isHovered = false" :class="{notHovered: !isHovered}"></span>
                <Modal ref="map" title='Rzeszów on map' image="maps/blank" content='' />
                {{home.format()}}
            </div>
        </section>
        <section>
            <div>Contact:</div>
            <div>⮟</div>
        </section>
        <br/>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Modal from './modals/Modal.vue'
import { age, home } from '../scripts/age'

export default defineComponent({
  methods: {
    showPlace () {
      const child:any = this.$refs.map
      child.toogleModal()
    }
  },
  data () {
    return { age: age, home: home, isHovered: false }
  },
  components: {
    Modal
  }
})

</script>

<style scoped>

section {
    display:flex;
    justify-content:space-between;
    padding:5px;
    border-radius:5px;
    transition: 0.2s all;
    cursor:pointer;
    font-size:calc(8px + 0.8vw);
    max-width:80vw;
    width:900px;
    margin:auto;
}

div {
    display:flex;
    align-items:center;
}

span {
    display:inline-block;
    width:calc( 15px + 0.5vw );
    height:calc( 15px + 0.5vw );
    background-image:url('../assets/icons/question.svg');
    background-size:cover;
    margin:0 10px;
    transition: 0.2s all linear;
}

.notHovered {
    filter: brightness(0)
}

</style>
