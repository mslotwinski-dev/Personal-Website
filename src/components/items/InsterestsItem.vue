<template>
  <a :href="'https://en.wikipedia.org/wiki/' + interest.Link " >
    <img class='codeImg' :src="'/assets/interests/' + interest.Name + '.svg'" />
    {{interest.Name}}
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['interest']
})

</script>
<style scoped>

a {
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#00647d;
    font-weight:bold;
    padding:5px 10px;
    border-radius:10px;
    color:#e3e3e3;
    cursor:pointer;
    margin:10px;
    flex-grow:1;
    transition: 0.2s all;
    font-size: calc(8px + 0.8vw);
}

a:hover {
    background-color:#137c96;
}

img {
    height:calc(10px + 1vw);
    display:inline-block;
    margin:5px 10px;
    filter:invert(1);
}
</style>
