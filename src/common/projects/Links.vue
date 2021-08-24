<template>
    <span class='links' :class="{ short: isShort }">
      <div v-if="project.Link.Content.length > 0">
        <a v-if="project.Link.Absolute == false" :href="'https://' + project.Link.Content + '.' +data.Domain">Link</a>
        <a v-if="project.Link.Absolute == true" :href="'https://' + project.Link.Content">Link</a>
      </div>
      <a v-if="project.Code.length > 0" :href="data.Code + project.Code" class="code">Code</a>
    </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { data } from '../../static/data'

export default defineComponent({
  name: 'Links',
  props: ['project', 'isShort'],
  data () {
    return { data }
  }
})
</script>

<style scoped>
span {
  flex-grow:1;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
}

a {
  display: block;
  text-align: center;
  margin:10px;
  padding:10px;
  width:170px;
  max-width:90vw;
  font-weight: 400;
  font-size: 20px;
  color:#e3e3e3;
  border-radius:5px;
  background: #00647d;
}

.code {
  background: #6D455E;
}

.short {
    align-items:flex-end;
    justify-content:flex-end;
    position: absolute;
    bottom:10%;
    right:10%;
}

@media (max-width:1095px) {
span {
    order:-1;
  }
}
</style>
