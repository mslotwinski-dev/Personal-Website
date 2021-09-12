<template>
    <div>
      <span class="title">Languages</span>
      <span class="langBlock" v-for="lang in langs" :key="lang">{{lang}}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { langs } from '../../../scripts/modals/plans'

export default defineComponent({
  name: 'PlansLang',
  props: ['lang'],
  data () {
    return {
      langs
    }
  }
})
</script>

<style scoped>

div {
  width:250px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  display: block;
  text-align: center;
  font-size:calc(1vw + 10px);
}

.langBlock {
  display:block;
  text-align: center;
  margin:10px;
  padding:10px;
  width:200px;
  background-color:#c4cbcd;
  color: #6D455E;
  text-shadow: 0 0 6px #6D455E40, 0 0 10px #6D455E40;
  border-radius:5px;
  transition:.2s all;
}

.langBlock:hover {
  background-color:#cfdadd;
  cursor:pointer;
}

@media (min-width: 800px) {
.title {
  display: none;
  }
}

@media (max-width: 800px) {
  .langBlock {
    margin:4px;
  }
}
</style>
