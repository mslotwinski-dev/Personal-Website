<template>
  <div id="app">
    <Start />
    <main>
      <Personal />
      <Education />
      <Experience />
      <Software />
      <Langs />
      <Projects />
      <Interests />
      <Contact />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Start from './components/Start.vue'
import Personal from './components/Personal.vue'
import Education from './components/Education.vue'
import Experience from './components/Experience.vue'
import Software from './components/Software.vue'
import Langs from './components/Langs.vue'
import Projects from './components/Projects.vue'
import Interests from './components/Interests.vue'
import Contact from './components/Contact.vue'

export default defineComponent({
  name: 'App',
  components: {
    Start,
    Personal,
    Education,
    Experience,
    Software,
    Langs,
    Projects,
    Interests,
    Contact
  }
})

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&display=swap');

*,*:before,*:after {
    box-sizing:border-box;
    position: relative;
}

*::-moz-selection { /* Code for Firefox */
  background: #00A3CC !important;
}

*::selection {
  background: #00A3CC !important;
}

html {
    font-family: 'Rubik', sans-serif !important;
}

body {
    padding: 0px !important;
    margin: 0px !important;
    overflow-x:hidden;
    background-color:#EBEAED;
    color:#262626;
}

a {
    text-decoration: none;
    color:#262626;
    cursor: pointer;
}

input, button, select, textarea {
    font-family: 'Rubik', sans-serif;
    border:none;
    background-color:#e3e3e3;
    color:#333;
    padding:0;
}

button, select {
    cursor:pointer;
}

button:focus, input:focus, select:focus, textarea:focus{
    outline:0 !important;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

h1 {
    font-size:calc(12px + 1.2vw);
    justify-content:center;
    display:flex;
    align-items:center;
}

h1:before, h1:after {
    content:'';
    flex-grow:1;
    margin:0 20px;
    border:1px solid #262626;
}

h3 {
    font-size:calc(8.5px + 0.85vw);
    font-weight:bold;
    width:100%;
    padding:0;
    margin:calc(4px + 0.4vw) 0;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

main {
    width:95vw;
    max-width:1700px;
    margin:auto;
}

</style>
