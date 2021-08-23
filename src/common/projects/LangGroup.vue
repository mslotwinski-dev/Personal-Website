<template>
  <div class='langGroup' v-if="project.Langs.length > 0">
    Languages
    <div class='bar'>
        <div v-for="lang in project.Langs" :key='lang.Id.Name' class='singleBar' :style="{'backgroundColor': '#' + lang.Id.Color, 'width': lang.Percentage + '%'}"></div>
    </div>
    <div class='list'>
      <SingleLang :lang="lang" v-for="lang in project.Langs" :key="lang.Id.Name"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SingleLang from './SingleLang.vue'

export default defineComponent({
  name: 'LangGroup',
  props: ['project'],
  components: {
    SingleLang
  }
})
</script>

<style scoped>

.langGroup {
  margin:15px 10px;
  padding:10px;
  max-width:350px;
  flex-grow:1;
  background:#EBEAED;
  font-weight:500;
  text-align: center;
  border-radius:10px;
  border:3px solid #045063;
}

.bar {
  margin:10px;
  height:10px;
  border-radius:5px;
  overflow: hidden;
  display: flex;
}

.singleBar {
    height:100%;
}

.list {
  display:flex;
  flex-wrap:wrap;
  padding:10px;
}

</style>
