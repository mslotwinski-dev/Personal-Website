<template>
  <article>
    <h1>Contact [in progress]</h1>
    <section>
      <form action="">
        <div>
          <label for="Name">Name </label>
          <input type="text" id="Name" name="Name" />
        </div>
        <div>
          <label for="Email">E-mail </label>
          <input type="text" id="Email" name="Email" />
        </div>
        <div>
          <label for="Topic">Topic </label>
          <input type="text" id="Topic" name="Topic" />
        </div>
        <div>
          <label for="Content">Content </label>
          <input type="text" id="Content" name="Content" />
        </div>
      </form>
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Start'
})
</script>

<style scoped>

section {
  background-color:#c4cbcd;
  margin:25px auto;
  display:flex;
  justify-content:center;
  padding:10px;
  border-radius:5px;
  transition: 0.2s all;
  font-size:calc(8px + 0.8vw);
  max-width:80vw;
  width:900px;
}

</style>
