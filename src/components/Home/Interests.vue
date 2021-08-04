<template>
  <article>
    <h1>Interests</h1>
      <section>
        <InsterestsItem :interest= 'interest' v-for="interest in interests" :key="interest.Name" />
      </section>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import InsterestsItem from '../../common/items/InsterestsItem.vue'
import { interests } from '../../scripts/interests'

export default defineComponent({
  data () {
    return {
      interests
    }
  },
  components: {
    InsterestsItem
  }
})

</script>

<style scoped>
section {
    background-color:#c4cbcd;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    padding:5px;
    border-radius:10px;
    width:900px;
    max-width:80vw;
    margin:auto;
}

</style>
