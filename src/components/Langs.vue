<template>
    <article class="dataCell">
        <h1>Languages</h1>
        <ul>
            <LangItem :lang= 'lang' v-for="lang in langs" :key="lang.Name" />
        </ul>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import LangItem from './items/LangItem.vue'
import { langs } from '../scripts/langs'

export default defineComponent({
  data () {
    return {
      langs
    }
  },
  components: {
    LangItem
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
