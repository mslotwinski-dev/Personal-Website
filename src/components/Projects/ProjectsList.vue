<template>
  <div>
      <SingleProject :project= 'project' v-for="project in projects" :key="project"/>
      <div v-for='lang in LanguageArray' :key='lang.Name' >
        <p>
          {{lang.Name}}
          <span :style="{backgroundColor: '#' + lang.Color}"></span>
        </p>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SingleProject from '../../common/projects/SingleProject.vue'
import { projects } from '../../scripts/projects/main'
import { LanguageArray } from '../../scripts/projects/langs'

export default defineComponent({
  name: 'ProjectsList',
  data () {
    return {
      projects,
      LanguageArray
    }
  },
  components: {
    SingleProject
  }
})
</script>

<style scoped>

div {
  width:1200px;
  max-width:100%;
  margin:10px auto;
  padding:10px
}

p {
  font-size:30px;
  font-weight: 800;
  margin:0;
  background: #fff;
}

span {
  display: inline-block;
  padding:10px;
  border-radius:50%
}

</style>
