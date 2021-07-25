<template>
    <article class="dataCell" id="edu">
        <h1>Software</h1>
        <ul>
            <SoftwareItem :item= 'item' v-for="software in softwares" :key="software.Name" />
        </ul>
    </article>
</template>

<script>

import SoftwareItem from './SoftwareItem.vue'
import { softwares } from '../scripts/softwares'

export default {
  data () {
    return {
      softwares
    }
  },
  components: {
    SoftwareItem
  }
}

</script>

<style scoped>
@import '../main.css';
section {
  background-color:#c4cbcd;
  flex-wrap:wrap;
  padding:10px;
  border-radius:10px;
  align-items:center;
  margin:25px auto;
}

section:last-child {
  opacity:0.65;
}

</style>
