<template>
        <section >
            <div>
                <span id='field'>{{project}}</span>
                <div>
                    <span id='spec'>{{project}}</span>
                    <span id='degree'>{{project}}</span>
                </div>
            </div>
            <div>
                <span id='year'>{{project}}</span>
                <span id='university'>{{project}}</span>
                <span id='university'>{{project}}</span>
            </div>
        </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['project']
})

</script>
<style scoped>

</style>

