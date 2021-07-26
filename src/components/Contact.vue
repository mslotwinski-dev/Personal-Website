<template>
  <article>
    <h1>Contact</h1>
      <form class='contact-form' @submit.prevent="sendEmail">
          <input type="text" id="Name" name="user_name" placeholder="First and last name" />
          <input type="email" id="Email" name="user_email" placeholder="E-mail" />
          <input type="text" id="Subject" name="subject" placeholder="Subject" />
          <textarea id="Content" name="message" placeholder="Content of message" />
          <div><input type="submit" value="Send"/></div>
      </form>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import emailjs from 'emailjs-com'

export default defineComponent({
  methods: {
    sendEmail: (e:any) => {
      emailjs.sendForm('service_fsc7z1s', 'template_o4685da', e.target, 'user_p0k5jW3dTiblvpU5h4UvO')
        .then((result) => {
          alert('SUCCESS!')
        }, (error) => {
          alert('FAILED...' + error)
        })
    }
  },
  name: 'Contact'
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

input[type="text"], input[type="email"], textarea, select, input[type="submit"] {
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
