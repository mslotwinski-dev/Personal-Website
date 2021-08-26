<template>
   <div class="container">
      <div class="content" :style="{ height: lockHeight + 'px' }">
      <div class="student">
        I would like to study many faculties, but it is not about money or finding a job -
         I just enjoy science and learning new things, so I will probably become a <a href="https://en.wikipedia.org/wiki/Perpetual_student">perpetual student</a>.
         You can read more about that, clicking on bold text.
         My plans assume learning and studying:
      </div>
      <article>
        <div class=university>
          <span class="level"><span class="block">Economics</span></span>
          <span class="level"><span class="block arrow">Mathematics</span></span>
          <span class="level">
            <span class="block arrow a-left">Physics</span>
            <span class="block arrow a-right">IT</span>
          </span>
          <span class="level">
            <span class="block arrow a-left">Biophysics</span>
            <span class="block arrow a-both">Electronics</span>
            <span class="block arrow a-right">Econometrics</span>
          </span>
          <span class="level">
            <span class="block arrow">Biology</span>
            <span class="block null"></span>
            <span class="block null"></span>
          </span>
        </div>
        <div class="langs">
          <span class="langBlock">English</span>
          <span class="langBlock">Spanish</span>
          <span class="langBlock">German</span>
          <span class="langBlock">Russian</span>
          <span class="langBlock">Italian</span>
          <span class="langBlock">Norwegian</span>
        </div>
      </article>
      </div>
   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Plans',
  data () {
    return { lockHeight: 1 }
  },
  created () {
    window.addEventListener('resize', this.lockAspect)
    this.lockAspect()
  },
  methods: {
    getImgUrl (pic: string) {
      return require('../../../assets/projects/screenshots/' + pic)
    },
    resetAspect () {
      this.lockHeight = 1
    },
    lockAspect () {
      setTimeout(() => {
        const map: any = document.querySelector('.content')!
        this.lockHeight = map.offsetWidth / 1.777
      }, 1)
    }
  }
})

</script>

<style scoped>

.content {
  display: flex;
  flex-direction: column;
  align-items:center;
  padding:10px;
}

.student {
  padding:10px;
  font-weight: 400;
}

a {
  font-weight: 500;
  cursor:pointer;
}

article {
  width:100%;
  flex-grow:1;
  padding:10px;
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
}

.university {
  flex-grow:1;
  width:720px;
  max-width: 100%;
}

.block {
  display:inline-block;
  margin:10px;
  padding:10px;
  border-radius:5px;
  background: #c4cbcd;
  width: 200px;
  text-align:center;
  transition:.2s all;
}

.arrow:after, .a-both:before {
  content:'';
  display: block;
  width:25px;
  height:25px;
  background-image: url('../../../assets/icons/arrow.svg');
  background-size:cover;
  position: absolute;
  top:-27px;
  left:calc(50% - 15px);
}

.a-left:after, .a-both:after {
  transform:rotate(45deg) scaleX(-1);
  left:calc(75% - 15px);
}

.a-right:after, .a-both:before {
  transform:rotate(-45deg);
  left:calc(25% - 15px);
}

.null {
  background: none;
  margin:0 10px;
}

.null:after {
  display: none;
}

.level {
  display: block;
  text-align:center;
  margin-bottom:10px;
}

.langs {
  width:250px;
  text-align: center;
}

.langBlock {
  display:block;
  margin:10px;
  padding:10px;
  width:200px;
  background-color:#c4cbcd;
  border-radius:5px;
  transition:.2s all;
}

.langBlock:hover, .block:hover {
  background-color:#cfdadd;
  cursor:pointer;
}

@media (max-width:800px) {
  .null {
    display: none;
  }
  .block:after, .block:before {
    display:none;
  }
  .level {
    margin-bottom:0;
  }
  .container {
    overflow-Y: scroll;
  }
}

</style>
