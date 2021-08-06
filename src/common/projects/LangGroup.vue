<template>
  <div class='langGroup' v-if="TheseLangs.length > 0">
    {{type}}
    <div class='bar'>
        <div v-for="lang in TheseLangs" :key='lang.Id.Name' class='singleBar' :style="{'backgroundColor': '#' + lang.Id.Color, 'width': lang.Percentage + '%'}"></div>
    </div>
    <div class='list'>
      <SingleLang :lang="lang" v-for="lang in TheseLangs" :key="lang.Id.Name"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LangType } from '../../scripts/data/data'
import SingleLang from './SingleLang.vue'

export default defineComponent({
  name: 'LangGroup',
  props: ['project', 'type'],
  data () {
    return { TheseLangs: this.project.Langs.filter((value: { Id: { Type: LangType } }) => value.Id.Type === this.type as LangType) }
  },
  components: {
    SingleLang
  }
})
</script>

<style scoped>

.langGroup {
  margin:10px;
  padding:10px;
  max-width:350px;
  flex-grow:1;
  background:#EBEAED;
  font-weight:500;
  text-align: center;
  border-radius:10px;
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
  justify-content: space-between;
  padding:10px;
}

</style>
