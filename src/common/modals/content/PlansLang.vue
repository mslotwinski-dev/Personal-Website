<template>
    <div>
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
  text-align: center;
}

span {
  display:block;
  margin:10px;
  padding:10px;
  width:200px;
  background-color:#c4cbcd;
  border-radius:5px;
  transition:.2s all;
}

span:hover {
  background-color:#cfdadd;
  cursor:pointer;
}
</style>
