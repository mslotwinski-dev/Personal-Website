<template>
    <article class="dataCell">
        <h1>Personal data</h1>
        <section>
            <div>Age:</div>
            <div>{{ myAge }}</div>
        </section>
        <section>
            <div>Home:</div>
            <div>Rzeszów, Poland</div>
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

import age from '../scripts/age'

export default defineComponent({
  data () {
    return { myAge: age }
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
