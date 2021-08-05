<template>
    <article class="dataCell">
        <h1>Languages</h1>
        <ul>
            <ListItem imgFolder= 'human-langs' :item= 'item' v-for="item in humanLangs" :key="item.Name" />
        </ul>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ListItem from '../../common/items/ListItem.vue'
import { humanLangs } from '../../scripts/home/langs'

export default defineComponent({
  data () {
    return {
      humanLangs
    }
  },
  components: {
    ListItem
  }
})

</script>

<style>

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
