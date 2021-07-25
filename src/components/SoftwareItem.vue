<template>
  <li>
    {{software.Name}}
    <span class="skillRate">
        <span>
          {{software.Skill}}
        </span>
    </span>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['software']
})

var element = document.querySelector('.skillRateFunction') as HTMLElement
element.style.width = element.textContent + '0%'

</script>

<style scoped>
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
  background-color: #0096bb;
  border-radius:6px;
  font-size:0;
}

</style>
