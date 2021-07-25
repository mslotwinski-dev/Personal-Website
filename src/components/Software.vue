<template>
    <article class="dataCell" id="edu">
        <h1>Software</h1>
        <ul>
            <SoftwareItem :software= 'software' v-for="software in softwares" :key="software.Name" />
        </ul>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import SoftwareItem from './SoftwareItem.vue'
import { softwares } from '../scripts/softwares'

export default defineComponent({
  data () {
    return {
      softwares
    }
  },
  components: {
    SoftwareItem
  }
})

</script>

<style scoped>
@import '../main.css';

ul {
  font-size:calc(8px + 0.8vw);
  max-width:80vw;
  width:900px;
  margin:auto;
  font-weight:bold;
  list-style-type: none;
  padding:0;
}

</style>
