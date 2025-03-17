<template>
  <section>
    <div>
      <span id="workName">{{ work.Name }}</span>
      <span id="workPostion" :style="{ color: work.Color }">{{
        work.Position
      }}</span>
    </div>
    <div>
      <span id="workTime">{{ work.HowLong }}</span>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['work'],
})
</script>

<style scoped>
#workName {
  font-weight: 500;
  display: block;
}

#workTime,
#workPostion {
  font-size: calc(6px + 0.6vw);
}

#workPostion {
  font-weight: 500;
  text-transform: uppercase;
}

section {
  background-color: #c4cbcd;
  margin: 25px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  transition: 0.2s all;
  cursor: pointer;
  font-size: calc(8px + 0.8vw);
  max-width: 80vw;
  width: 900px;
}

section:hover {
  background-color: #b8c4c7;
}
</style>
