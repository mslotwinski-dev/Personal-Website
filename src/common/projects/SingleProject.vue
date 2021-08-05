<template>
    <article>
      <section>
        <div class='logo'>
          LOGO
        </div>
        <div class='data'>
          <div class='title'>
            Tytuł
          </div>
          <div class='desc'>
            Opis
          </div>
        </div>
      </section>
      <div class='langs'>
        <div class='langGroup'>
          Frontend
          <div class='bar'></div>
          <div class='list'>
            <span class='lang'>
              <div class='langColor'></div>
              <div class='langDesc'>HTML</div>
              <div class='langPercentage'>50%</div>
            </span>
            <span class='lang'>
              <div class='langColor'></div>
              <div class='langDesc'>CSS</div>
              <div class='langPercentage'>35%</div>
            </span>
            <span class='lang'>
              <div class='langColor'></div>
              <div class='langDesc'>JavaScript</div>
              <div class='langPercentage'>15%</div>
            </span>
          </div>
        </div>
        <div class='langGroup'>
          Backend
          <div class='bar'></div>
          <div class='list'>
            <span class='lang'>
              <div class='langColor'></div>
              <div class='langDesc'>NodeJS</div>
              <div class='langPercentage'>80%</div>
            </span>
            <span class='lang'>
              <div class='langColor'></div>
              <div class='langDesc'>ASP .NET Core</div>
              <div class='langPercentage'>20%</div>
            </span>
          </div>
        </div>
        <div class='langGroup'>
          Database
          <div class='bar'></div>
          <div class='list'>
            <span class='lang'>
              <div class='langColor'></div>
              <div class='langDesc'>MongoDB</div>
            </span>
          </div>
        </div>
      </div>
      <div class='screenshots'>
        <div>Screen</div><div>Screen</div><div>Screen</div>
        <span class='links'>
          <button>Link</button>
          <button>Code</button>
        </span>
      </div>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SingleProject',
  components: {
  }
})
</script>

<style scoped>
article {
  padding:10px;
  margin:10px;
  border-radius:5px;
  background-color:#D6D8D8;
}

section {
  display:flex;
  justify-content: space-between;
  padding:10px;
}

.logo {
  width:400px;
  height:250px;
  margin:10px;
  border-radius:10px;
  background: repeating-linear-gradient(
  45deg,
  #606dbc,
  #606dbc 10px,
  #465298 10px,
  #465298 20px
);
}

.data {
  flex-grow:1;
  margin:10px;
}

.title {
  margin:10px;
  padding:10px;
  text-align:center;
  font-weight: 500;
  font-size:30px;
}

.desc {
  margin:10px;
  padding:10px;
  font-size:20px;
}

.langs {
  display: flex;
  justify-content: space-between;
}

.langGroup {
  margin:10px;
  padding:10px;
  max-width:350px;
  flex-grow:1;
  background:#EBEAED;
  font-weight:500;
  text-align: center;
  border-radius:10px;
}

.bar {
  margin:10px;
  height:10px;
  border-radius:5px;
  background:darkgreen
}

.list {
  display:flex;
  flex-wrap:wrap;
  justify-content: space-between;
  padding:10px;
}

.lang {
  display: inline-flex;
  align-items: center;
  margin:0 5px;

}

.langColor {
  width:15px;
  height:15px;
  border-radius:50%;
  background-color:red;
  margin:4px;
}

.langDesc {
  font-size:16px;
  font-weight: 400;
  margin:0 4px;
}

.langPercentage {
  font-size:16px;
  font-weight: 300;
}

.screenshots {
  display:flex;
  justify-content: space-evenly;
  padding:10px;
}

.screenshots div {
  margin:0 10px;
  width:240px;
  height:150px;
  border-radius:10px;
  background: repeating-linear-gradient(
  45deg,
  #606dbc,
  #606dbc 10px,
  #465298 10px,
  #465298 20px
);
}

.screenshots span {
  flex-grow:1;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:flex-end
}

.screenshots button {
  display: block;
  margin:10px;
  padding:10px;
  width:50%;
  font-weight: 400;
  font-size: 20px;
  color:#e3e3e3;
  border-radius:5px;
}

.screenshots button:first-child {
  background: #00647d;
}

.screenshots button:last-child {
  background: #6D455E;
}

</style>
