<template>
    <article>

    <h1>Programming Languages</h1>
    <ul>
        <ListItem imgFolder= 'programming-langs' :item= 'item' v-for="item in programmingLangs" :key="item.Name" />
    </ul>

    <h1>Web Frontend</h1>
    <Group v-for="group in Object.keys(front)" :key="group" :group="group" :type="front"/>

    <h1>Web Backend</h1>
    <Group v-for="group in Object.keys(back)" :key="group" :group="group" :type="back"/>

    <h1>Apps</h1>
    <Group v-for="group in Object.keys(apps)" :key="group" :group="group" :type="apps"/>

    <h1>Human Languages</h1>
    <ul>
      <ListItem imgFolder= 'human-langs' :item= 'item' v-for="item in human" :key="item.Name" />
    </ul>

    <h1>Others and still learning :></h1>
    <div class="others">
      <OtherSkills :item="item" v-for="item in softwaresOthers" :key="item"/>
    </div>

  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Group from './Group.vue'
import ListItem from '../../common/items/ListItem.vue'
import OtherSkills from '../../common/items/OtherSkills.vue'
import { programmingLangs, softwaresOthers, human } from '../../scripts/skills/langs'
import { front, back, apps } from '../../scripts/skills/frameworks'

export default defineComponent({
  name: 'Projects',
  data () {
    return {
      programmingLangs,
      softwaresOthers,
      human,
      front,
      back,
      apps
    }
  },
  components: {
    ListItem,
    OtherSkills,
    Group
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
