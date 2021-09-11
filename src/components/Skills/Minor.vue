<template>
    <h2></h2>
    <div class="others" :class="{dumb: dumb, imSoDumb: dumb && amIdumb == 'no'}">
      <div class="group">{{group}}</div>
      <OtherSkills :item= 'item' v-for="item in sortedArray" :key="item.Name" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OtherSkills from '../../common/items/OtherSkills.vue'
import { general } from '../../scripts/skills/langs'
import { LangItem } from '../../scripts/types/interfaces'

export default defineComponent({
  props: ['name', 'group', 'type'],
  components: {
    OtherSkills
  },
  data () {
    return {
      sortedArray: [],
      general,
      dumb: false,
      amIdumb: localStorage.getItem('showDumb')
    }
  },
  mounted () {
    const array = this.type[this.group]
    array.sort((a: LangItem, b:LangItem) => b.Skill - a.Skill)
    this.sortedArray = array

    const thisLang = (Object.values(this.general)).flat(1).find(element => element.Name === this.group)
    const thisLenght = this.type[this.group].filter((element: { Skill: number }) => element.Skill > 0).length

    if ((thisLang && thisLang.Skill === 0) || thisLenght === 0) {
      this.dumb = true
    }
  }
})

</script>

<style scoped>
h2 {
  max-width:80vw;
  width:900px;
  margin:0 auto;
  text-align: left;
  font-size:calc(8.5px + 0.85vw);
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
  margin:0 auto;
  border-radius:10px;
  padding:5px;
  display:flex;
  justify-content: flex-start;
  flex-wrap:wrap;
}

.group {
  display:flex;
  align-items: center;
  justify-content: flex-end;
  width:500px;
  position: absolute;
  top:30%;
  left:-500px;
}

.dumb .group {
  color: #2626365f
}

@media (max-width:1200px) {
  .group {
    display: none;
  }
}

</style>
