<template>
  <div class="container">
    <div class="content" :style="{ height: lockHeight + 'px' }">
      <div class="student">
        I would like to study several faculties, but it is not about money or
        finding a job - I just enjoy science and learning new things. My first
        and most important plan is finishing <b>physics</b> with a nuclear or
        quantum specialty. Discovering our universe and the laws by which it
        works has been my passion since I was a child. My favorite branches are
        the previously mentioned quantum and nuclear physics belonging to modern
        physics, but not only. I love astrophysics and topics related to
        electrodynamics, which leads to another major that I intend to finish.
      </div>
      <div class="student">
        When I finish physics my next goal will be <b>electronics</b> and
        <b>computer science</b>. Programming gives me a lot of joy, and issues
        related to electronics are among my favorite topics of physics research.
        Both sciences are inextricably linked.
      </div>
      <div class="student">
        I do not rule out that my future interests will go in a different
        direction, but in the end you have to have some plans.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Plans',
  data() {
    return {
      lockHeight: 1,
    }
  },
  created() {
    window.addEventListener('resize', this.lockAspect)
    this.lockAspect()
  },
  methods: {
    getImgUrl(pic: string) {
      return require('../../../assets/projects/screenshots/' + pic)
    },
    resetAspect() {
      this.lockHeight = 1
    },
    lockAspect() {
      setTimeout(() => {
        // eslint-disable-next-line
        const map: any = document.querySelector('.content')
        this.lockHeight = map.offsetWidth / 1.777
      }, 1)
    },
  },
})
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.student {
  padding: 10px;
  font-weight: 400;
}

a {
  font-weight: 500;
  cursor: pointer;
}

article {
  width: 100%;
  flex-grow: 1;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
