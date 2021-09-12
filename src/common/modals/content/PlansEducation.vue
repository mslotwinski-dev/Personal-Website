<template>
  <div>
    <span v-for="level in education.Schools" :key="level" class="level">
      <span v-for="field in level" :key="field" class="block" :class="field.Classes">{{field.Name}}</span>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { education } from '../../../scripts/modals/plans'

export default defineComponent({
  data () {
    return {
      education
    }
  }
})
</script>

<style scoped>

div {
  width:720px;
  max-width: 100%;
}

.block {
  display:inline-block;
  margin:10px;
  padding:10px;
  border-radius:5px;
  background: #c4cbcd;
  width: 200px;
  text-align:center;
  transition:.2s all;
}

.arrow:after, .a-both:before {
  content:'';
  display: block;
  width:25px;
  height:25px;
  background-image: url('../../../assets/icons/arrow.svg');
  background-size:cover;
  position: absolute;
  top:-27px;
  left:calc(50% - 15px);
}

.a-left:after, .a-both:after {
  transform:rotate(45deg) scaleX(-1);
  left:calc(75% - 15px);
}

.a-right:after, .a-both:before {
  transform:rotate(-45deg);
  left:calc(25% - 15px);
}

.null {
  background: none !important;
  cursor:default !important;
  margin:0 10px;
}

.null:after {
  display: none;
}

.level {
  display: block;
  text-align:right;
  margin-bottom:10px;
}

.half {
  width: 100px;
  margin: 5px;
}

.block:hover {
  background-color:#cfdadd;
  cursor:pointer;
}

.big {
  padding:12px 10px;
  top:-2px;
  font-size:78.15%;
}

.maybe {
  opacity:.6;
}

@media (max-width:800px) {
  .null {
    display: none;
  }
  .block:after, .block:before {
    display:none;
  }
  .level {
    margin-bottom:0;
  }
}
</style>
