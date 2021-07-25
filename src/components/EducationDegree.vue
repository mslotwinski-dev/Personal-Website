<template>
        <section >
            <div>
                <span id='field'>{{degree.Field}}</span>
                <div>
                    <span id='spec'>{{degree.Spec}}</span>
                    <span id='degree'>{{degree.Degree}}</span>
                </div>
            </div>
            <div>
                <span id='year'>{{degree.Year}}</span>
                <span id='university'>{{degree.University}}</span>
                <span id='university'>{{degree.Place}}</span>
            </div>
        </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['degree']
})

</script>

<style scoped>
@import '../main.css';

#field {
    font-weight:500;
}

#year, #spec, #degree, #university {
    font-size:calc(6px + 0.6vw);
}

#university {
    display:block;
}

#degree {
    color:#00647d;
    margin:0 10px;
}

div:last-child {
    text-align:right;
}

</style>
