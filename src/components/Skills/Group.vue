<template>
  <h2>{{ group }}</h2>
  <ul>
    <ListItem
      :item="item"
      v-for="item in sortedArray"
      :key="item.Name"
      imgFolder="programming-langs"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListItem from '../../common/items/ListItem.vue'
import { LangItem } from '../../data/types/interfaces'

export default defineComponent({
  props: ['name', 'group', 'type'],
  components: {
    ListItem,
  },
  data() {
    return {
      sortedArray: [],
    }
  },
  mounted() {
    const array = this.type[this.group]
    array.sort((a: LangItem, b: LangItem) => b.Skill - a.Skill)
    this.sortedArray = array
  },
})
</script>

<style scoped>
h2 {
  margin-bottom: 10px;
  text-align: center;
  font-size: calc(9px + 0.9vw);
}

ul {
  /* font-size: calc(8px + 0.8vw); */
  max-width: 90vw;
  width: 900px;
  margin: auto;
  font-weight: 500;
  list-style-type: none;
  padding: 0;
}
</style>
