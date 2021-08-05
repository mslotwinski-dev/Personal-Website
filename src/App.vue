<template>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="in-out">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>

/* Animations */

.route-enter-from {
  opacity:0;
  transform:translateX(2em);
}

.route-leave-to {
  opacity:0;
  transform:translateX(-2em);
}

.route-enter-active, .route-leave-active {
  transition: .3s all ease
}

/* Global styles */

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

main {
    width:95vw;
    max-width:1700px;
    margin:auto;
    min-height: 100vh;
}
</style>
