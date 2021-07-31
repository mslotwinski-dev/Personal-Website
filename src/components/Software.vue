<template>
    <article class="dataCell" id="edu">
        <h1>Software</h1>
        <h2>Frontend</h2>
        <ul>
            <SoftwareItem imgFolder= 'frontend-langs' :software= 'software' v-for="software in softwaresFront" :key="software.Name" />
        </ul>
        <h2>Backend</h2>
        <ul>
            <SoftwareItem imgFolder= 'backend-langs' :software= 'software' v-for="software in softwaresBack" :key="software.Name" />
        </ul>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import SoftwareItem from './items/SoftwareItem.vue'
import { softwaresFront, softwaresBack } from '../scripts/langs'

export default defineComponent({
  data () {
    return {
      softwaresFront,
      softwaresBack
    }
  },
  components: {
    SoftwareItem
  }
})

</script>

<style>

h2 {
  margin:0;
  text-align: center;
  font-size:calc(9px + 0.9vw);
}

ul {
  font-size:calc(8px + 0.8vw);
  max-width:80vw;
  width:900px;
  margin:auto;
  font-weight:500;
  list-style-type: none;
  padding:0;
}

</style>
