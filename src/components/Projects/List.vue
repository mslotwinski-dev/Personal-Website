<template>
  <article>
    <h1>
        Summary
    </h1>
    <ul>
      <li v-for="project in projects" :key="project">
        {{project.Name}}
        <div>
          <img v-if="project.Code.length > 0" v-on:click="toToAbsUrl(data.Code + project.Code)" :src="getImgUrl('code')" class="code"/>
          <img v-if="project.Link.Absolute == true && project.Link.Content.length > 0" v-on:click="toToAbsUrl('https://' + project.Link.Content)" :src="getImgUrl('link')" class="link">
          <img v-if="project.Link.Absolute == false && project.Link.Content.length > 0" v-on:click="toToMyUrl(project.Link.Content)" :src="getImgUrl('link')" class="link">
        </div>
      </li>
    </ul>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { projects } from '../../scripts/projects/main'
import { data } from '../../static/data'

export default defineComponent({
  name: 'ProjectsList',
  props: ['type'],
  data () {
    return {
      projects,
      data
    }
  },
  methods: {
    getImgUrl (pic: string) {
      return require('../../assets/icons/' + pic + '.svg')
    },
    toToAbsUrl (url: string) {
      window.location.href = url
    },
    toToMyUrl (url: string) {
      window.location.href = 'https://' + url + '.' + data.Domain
    }
  }
})
</script>

<style scoped>

article {
  margin:20px 0;
}

ul {
  display: flex;
  flex-direction: column;
  align-items:center;
}

li {
  font-weight: 400;
  font-size:calc(8px + 0.8vw);
  margin:5px;
  padding:5px;
  border-radius:5px;
  background-color:#D6D8D8;
  width:400px;
  display:flex;
  justify-content: space-between;
  align-items:center;
}

.code, .link {
  margin:2px 5px;
  height:30px;
  cursor:pointer;
}

div {
  display:flex;
  align-items:center;
}

</style>
