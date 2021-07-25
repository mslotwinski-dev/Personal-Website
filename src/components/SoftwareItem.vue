<template>
    <li>
    <span id='field'>{{degree.Field}}</span>
    <div>
        <span id='spec'>{{degree.Spec}}</span>
        <span id='degree'>{{degree.Degree}}</span>
    </div>
    <div>
        <span id='year'>{{degree.Year}}</span>
        <span id='university'>{{degree.University}}</span>
        <span id='university'>{{degree.Place}}</span>
    </div>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['degree']
})

</script>

<style scoped>
@import '../main.css';


</style>
