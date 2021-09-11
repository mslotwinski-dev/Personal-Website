<template>
    <h2></h2>
    <div class="others">
      <div class="group">{{group}}</div>
      <OtherSkills :item= 'item' v-for="item in sortedProp" :key="item.Name" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OtherSkills from '../../common/items/OtherSkills.vue'

export default defineComponent({
  props: ['name', 'group', 'type'],
  components: {
    OtherSkills
  },
  data () {
    return {
      sortedProp: []
    }
  },
  mounted () {
    const array = this.type[this.group]
    // eslint-disable-next-line
    array.sort((a: any, b:any) => parseFloat(b.Skill) - parseFloat(a.Skill))
    this.sortedProp = array
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

@media (max-width:1200px) {
  .group {
    display: none;
  }
}

</style>
