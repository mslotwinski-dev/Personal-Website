<template>
    <article class="dataCell">
        <h1>Personal data</h1>
        <section>
            <div>Age:</div>
            <div>{{ age }}</div>
        </section>
        <section>
            <div>Home:</div>
            <div>{{home}}</div>
        </section>
        <section>
            <div>Contact:</div>
            <div>⮟</div>
        </section>
        <br/>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { age, home } from '../scripts/age'

export default defineComponent({
  data () {
    return { age: age, home: home }
  }
})

</script>

<style scoped>

section {
    display:flex;
    justify-content:space-between;
    padding:5px;
    border-radius:5px;
    transition: 0.2s all;
    cursor:pointer;
    font-size:calc(8px + 0.8vw);
    max-width:80vw;
    width:900px;
    margin:auto;
}
</style>
