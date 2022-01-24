<template>
  <span>
    <div class="Color" :style="{ backgroundColor: '#' + lang.Id.Color }"></div>
    <div class="Desc">{{ lang.Id.Name }}</div>
    <div class="Percentage">{{ lang.Percentage }}%</div>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SingleLang',
  props: ['lang'],
})
</script>

<style scoped>
span {
  display: inline-flex;
  align-items: center;
  margin: 0 5px;
}

.Color {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 4px;
}

.Desc {
  font-size: 16px;
  font-weight: 400;
  margin: 0 4px;
}

.Percentage {
  font-size: 16px;
  font-weight: 300;
}
</style>
