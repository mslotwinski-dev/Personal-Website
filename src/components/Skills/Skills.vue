<template>
    <article>

    <h1>Programming</h1>
    <Group v-for="group in Object.keys(general)" :key="group" :group="group" :type="general"/>

    <h1>Frameworks</h1>
    <Minor v-for="group in Object.keys(front)" :key="group" :group="group" :type="front"/>

    <h1>Human Languages</h1>
    <ul>
      <ListItem imgFolder= 'human-langs' :item= 'item' v-for="item in human" :key="item.Name" />
    </ul>

  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Group from './Group.vue'
import Minor from './Minor.vue'
import ListItem from '../../common/items/ListItem.vue'
import { softwaresOthers, human } from '../../scripts/skills/langs'
import { general, front, back, apps } from '../../scripts/skills/frameworks'

export default defineComponent({
  name: 'Projects',
  data () {
    return {
      general,
      softwaresOthers,
      human,
      front,
      back,
      apps
    }
  },
  components: {
    ListItem,
    // OtherSkills,
    Group,
    Minor
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

.others {
  font-size:calc(8px + 0.8vw);
  font-weight: 500;
  max-width:80vw;
  width:900px;
  margin:10px auto;
  background-color:#ccd1d350;
  border-radius:10px;
  padding:5px;
  display:flex;
  justify-content: space-between;
  flex-wrap:wrap;
}

</style>
