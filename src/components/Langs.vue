<template>
    <article class="dataCell">
        <h1>Languages</h1>
        <ul>
            <SoftwareItem imgFolder= 'human-langs' :software= 'software' v-for="software in humanLangs" :key="software.Name" />
        </ul>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import SoftwareItem from './items/SoftwareItem.vue'
import { humanLangs } from '../scripts/langs'

export default defineComponent({
  data () {
    return {
      humanLangs
    }
  },
  components: {
    SoftwareItem
  }
})

</script>

<style>

h2 {
  text-align: center;
  font-size:calc(10px + 1vw);
}

ul {
  font-size:calc(8px + 0.8vw);
  margin:auto;
  font-weight:500;
  list-style-type: none;
  padding:0;
}

</style>
