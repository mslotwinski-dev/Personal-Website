<template>
  <div class="container">
    <div class="content" :style="{ height: lockHeight + 'px' }">
      <div class="student">
        I would like to study many faculties, but it is not about money or
        finding a job - I just enjoy science and learning new things, so I will
        probably become a
        <a href="https://en.wikipedia.org/wiki/Perpetual_student"
          >perpetual student</a
        >. You can read more about that, clicking on bold text. My plans assume
        learning and studying:
      </div>
      <article>
        <PlansEducation />
        <PlansLang />
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PlansLang from './PlansLang.vue'
import PlansEducation from './PlansEducation.vue'

export default defineComponent({
  name: 'Plans',
  components: {
    PlansLang,
    PlansEducation,
  },
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
      return '../../../assets/projects/screenshots/' + pic
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
