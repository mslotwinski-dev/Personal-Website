<template>
        <section >
            <div>
                <span id="workName">{{work.Name}}</span>
                <span id='workPostion' :style="{'color': work.Color}">{{work.Position}}</span>
            </div>
            <div>
                <span id='workTime'>{{work.HowLong}}</span>
            </div>
        </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['work']
})

</script>

<style scoped>

#workName {
    font-weight:500;
    display:block;
}

#workTime, #workPostion {
    font-size:calc(6px + 0.6vw);
}

#workPostion {
    font-weight:500;
    text-transform: uppercase;
}

</style>
