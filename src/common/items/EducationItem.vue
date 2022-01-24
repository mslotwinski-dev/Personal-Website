<template>
  <section>
    <div>
      <span id="field">{{ degree.Field }}</span>
      <div>
        <span id="spec">{{ degree.Spec }}</span>
        <span id="degree">{{ degree.Degree }}</span>
      </div>
    </div>
    <div>
      <span id="year">{{ degree.Year }}</span>
      <span id="university">{{ degree.University }}</span>
      <span id="university">{{ degree.Place }}</span>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['degree'],
})
</script>

<style scoped>
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

#field {
  font-weight: 500;
}

#year,
#spec,
#degree,
#university {
  font-size: calc(6px + 0.6vw);
}

#university {
  display: block;
}

#degree {
  color: #00647d;
  margin: 0 10px;
}

div:last-child {
  text-align: right;
}
</style>
