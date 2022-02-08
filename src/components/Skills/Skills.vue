<template>
  <article>
    <h1>Programming</h1>
    <Group
      v-for="group in Object.keys(general)"
      :key="group"
      :group="group"
      :type="general"
    />

    <h1>Other libs and tools</h1>
    <Minor
      v-for="group in Object.keys(frameworks)"
      :key="group"
      :group="group"
      :type="frameworks"
    />

    <h1>Human Languages</h1>
    <ul>
      <ListItem
        imgFolder="human-langs"
        :item="item"
        v-for="item in human"
        :key="item.Name"
      />
    </ul>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Group from './Group.vue'
import Minor from './Minor.vue'
import ListItem from '../../common/items/ListItem.vue'
import { general, frameworks, human } from '../../data/skills/langs'

export default defineComponent({
  name: 'Projects',
  data() {
    return {
      general,
      frameworks,
      human,
    }
  },
  components: {
    ListItem,
    // OtherSkills,
    Group,
    Minor,
  },
})
</script>

<style scoped>
h2 {
  margin: 0;
  text-align: center;
  font-size: calc(9px + 0.9vw);
}

ul {
  max-width: 90vw;
  width: 900px;
  margin: auto;
  font-weight: 500;
  list-style-type: none;
  padding: 0;
}

.others {
  font-size: calc(8px + 0.8vw);
  font-weight: 500;
  max-width: 80vw;
  width: 900px;
  margin: 10px auto;
  background-color: #ccd1d350;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
