<template>
  <article>
    <h1>Contact</h1>
      <form action="https://formspree.io/f/xgernwlz" method="POST">
          <input type="text" id="Name" name="Name" placeholder="First and last name" />
          <input type="text" id="Email" name="Email" placeholder="E-mail" />
          <input type="text" id="Subject" name="Subject" placeholder="Subject" />
          <textarea id="Content" name="Content" placeholder="Content of message" />
          <div><button type="submit">Submit</button></div>
      </form>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Start'
})
</script>

<style scoped>

form {
  background-color:#c4cbcd;
  margin:25px auto;
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  padding:10px;
  border-radius:5px;
  transition: 0.2s all;
  font-size:calc(8px + 0.8vw);
  max-width:80vw;
  width:900px;
}

input[type="text"], textarea, select, button {
  font-size:15px;
  padding:5px 8px;
  margin:5px;
  background-color:#e3e3e3;
  display:inline-block;
  cursor:pointer;
  border:none;
  border-radius:5px;
  resize: none;
}

#Name {
  width:263px;
  flex-grow:1;
}

#Email {
  width:527px;
  flex-grow:1;
}

#Subject {
  width:800px;
  flex-grow:1;
}

#Content {
  width:100%;
}

div {
  text-align: right;
  width:100%;
}

article {
  margin-bottom:10vh;
}

</style>
