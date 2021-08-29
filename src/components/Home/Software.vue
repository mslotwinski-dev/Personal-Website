<template>
    <article class="dataCell" id="edu">
        <h1>Software</h1>
        <h2>Frontend</h2>
        <ul>
            <ListItem imgFolder= 'frontend-langs' :item= 'item' v-for="item in softwaresFront" :key="item.Name" />
        </ul>
        <h2>Backend</h2>
        <ul>
            <ListItem imgFolder= 'backend-langs' :item= 'item' v-for="item in softwaresBack" :key="item.Name" />
        </ul>
        <h2>Others and still learning :></h2>
        <div class="others">
          <OtherSkills :item="item" v-for="item in softwaresOthers" :key="item"/>
        </div>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ListItem from '../../common/items/ListItem.vue'
import OtherSkills from '../../common/items/OtherSkills.vue'
import { softwaresFront, softwaresBack, softwaresOthers } from '../../scripts/home/langs'

export default defineComponent({
  data () {
    return {
      softwaresFront,
      softwaresBack,
      softwaresOthers
    }
  },
  components: {
    ListItem,
    OtherSkills
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
