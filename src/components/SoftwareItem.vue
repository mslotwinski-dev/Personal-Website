<template>
  <li>
    <div class='codeName'>

        <img class='codeImg' :src="'/assets/software/' + software.Name + '.png'" />
        {{software.Name}}</div>
    <span class="skillRate">
        <span :style="{'width': software.Skill*10 + '%'}" >
          {{software.Skill}}
        </span>
    </span>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['software', 'backSoftware']
})
</script>

<style>
@import '../main.css';

li {
  padding:5px;
  border-radius:5px;
  width: 850px;
  max-width:75vw;
  height:calc(13px + 1.3vw);
  transition:0.2s all;
  cursor:pointer;
  display: flex;
  justify-content: space-between;
  align-items:center;
}

.dataCell li:hover, .dataCell section:hover {
  background-color: #b2bec2;
}

ul > ul {
  margin-left:40px;
}

ul > ul > li {
  width: 810px;
  max-width:calc(75vw - 40px);
}

.skillRate {
  height:calc(4px + 0.4vw);
  width:300px;
  max-width:30vw;
  border-radius:6px;
  background-color: #262626;
  margin:0;
}

.skillRate:after {
  content:'';
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  border:calc(1.6px + 0.09vw) solid black;
  border-radius: 6px;
}

.skillRate span {
  display:block;
  height:100%;
  width:100%;
  background-color: #0096bb;
  border-radius:6px;
  font-size:0;
}
</style>

<style scoped>
.codeImg {
  width:25px;
  height:25px;
  display:inline-block;
  margin:0 10px;
}

.codeName {
  display:flex;
  align-items:center;
}
</style>
