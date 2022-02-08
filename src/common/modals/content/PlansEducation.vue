<template>
  <div>
    <span class="title">Sciences</span>
    <span v-for="level in education.Schools" :key="level" class="level">
      <span
        v-for="field in level"
        :key="field"
        class="block"
        :class="field.Classes"
        >{{ field.Name }}</span
      >
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { education } from '../../../data/modals/plans'

export default defineComponent({
  data() {
    return {
      education,
    }
  },
})
</script>

<style scoped>
div {
  width: 720px;
  max-width: 100%;
}

.title {
  display: block;
  text-align: center;
  font-size: calc(1vw + 10px);
}

.block {
  display: inline-block;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background: #c4cbcd;
  color: #00647d;
  text-shadow: 0 0 6px #00647d40, 0 0 10px #00647d40;
  width: 200px;
  text-align: center;
  transition: 0.2s all;
}

.arrow:after,
.a-both:before {
  content: '';
  display: block;
  width: 25px;
  height: 25px;
  background-image: url('../../../assets/icons/arrow.svg');
  background-size: cover;
  position: absolute;
  top: -27px;
  left: calc(50% - 15px);
}

.a-left:after,
.a-both:after {
  transform: rotate(45deg) scaleX(-1);
  left: calc(75% - 15px);
}

.a-right:after,
.a-both:before {
  transform: rotate(-45deg);
  left: calc(25% - 15px);
}

.a-long:before {
  content: '';
  display: block;
  background: #00647d;
  position: absolute;
  width: 5px;
  height: 71.5px;
  top: -97px;
  left: calc(50% + 5px);
  border-radius: 2.5px 2.5px 0 0;
}

.a-long:after {
  left: calc(50% - 5px);
}

.null {
  background: none !important;
  cursor: default !important;
  opacity: 0 !important;
  margin: 0 10px;
}

.null:after {
  display: none;
}

.level {
  display: block;
  text-align: right;
  margin-bottom: 10px;
}

.half {
  width: 100px;
  margin: 5px;
}

.block:hover {
  background-color: #cfdadd;
  cursor: pointer;
}

@media (min-width: 800px) {
  .big {
    padding: 12px 10px;
    top: -2px;
    font-size: 78.15%;
  }

  .title {
    display: none;
  }
}

.maybe {
  opacity: 0.35;
}

.maybe:after,
.maybe:before {
  opacity: 0.3;
}

@media (max-width: 800px) {
  .null {
    display: none;
  }
  .block:after,
  .block:before {
    display: none;
  }
  .block {
    margin: 4px;
  }
  .level {
    margin-bottom: 0;
    text-align: center;
  }
}
</style>
