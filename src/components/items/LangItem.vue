<template>
  <li>
    <div class='codeName'>
      <img :src="'/assets/langs/' + lang.Name + '.png'" />
      {{lang.Name}}
      <span class="nativeText" :class="{
        notNative: !lang.Native
      }">
        Native

      </span>
    </div>
    <span class='skillRate'>
      <span :style="{'width': lang.Skill*10 + '%'}" :class="{nativeColor: lang.Native}" > </span>
    </span>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['lang']
})
</script>

<style scoped>

img {
  width:calc( 15px + 0.5vw );
  height:calc( 15px + 0.5vw );
  display:inline-block;
  margin:0 10px;
}

.langName {
  display:flex;
  align-items:center;
}

.notNative {
  display:none;
}

.nativeColor {
    background-color: #a17c93;
}

.nativeText {
    font-size:calc(6px + 0.6vw);
    text-transform:uppercase;
    color: #6d455e;
    margin:0 5px;
}
</style>
