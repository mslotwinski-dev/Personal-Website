<template>
    <h2>{{group}}</h2>
    <ul>
      <ListItem :item= 'item' v-for="item in type[group]" :key="item.Name" imgFolder="programming-langs"/>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListItem from '../../common/items/ListItem.vue'

export default defineComponent({
  props: ['name', 'group', 'type'],
  components: {
    ListItem
  }
})
</script>

<style scoped>
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
