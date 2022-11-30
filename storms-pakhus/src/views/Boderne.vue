<template>
  <Profile/>
  <div>
      <button class="opret-knap" @click="on()" id="newItembtn"> Opret ny ret </button>
  </div>

  <div id="overlay">
    <a href="javascript:void(0)" class="closebtn" @click="off()">&times;</a>
    <h1 class="toptext">Opret ret</h1>
    <div class="dish-create">

      <div class="dish-name">
        <p>Navn på ret</p>
        <input type="text" id="fname" name="fname" placeholder="Ret"><br><br>
      </div>

      <div class="dish-allergies">
        <p>Allergener</p>
        <input type="text" id="fname" name="fname"><br><br>
      </div>

      <div class="dish-price">
        <p>Pris</p>
        <input type="text" id="fname" name="fname" placeholder="Pris"><br><br>
      </div>

    </div>

    <div class="dish-description">
      <p>Beskrivelse</p>
      <textarea class="txt-area" rows="4" cols="80" placeholder="Beskrivelse, evt. ingredienser"></textarea>
    </div>

    <button class="dish-savebtn" @click="off()"> Gem </button>

  </div>

  <div class="App">
    <div class='scroll-bg'>
      <!-- Header -->
      <HeaderTopAfventerGodkendelse/>
      <Titel/>
      <div class='scroll-div'>
        <div class='scroll-object'>
          <!-- boks1 -->
          <Boks1 />
          <!-- boks2 -->
          <Boks2 />
          <!-- boks3 -->
          <Boks3 />
          <!-- boks3 -->
          <Boks4 />
        </div>
      </div>
    </div>
  </div>

  <div class="App">
    <div class='scroll-bg'>
      <!-- Header -->
      <HeaderTopAfvisteAnmodninger />
      <Titel/>
      <div class='scroll-div'>
        <div class='scroll-object'>
          <!-- boks1 -->
          <Boks1 />
          <!-- boks2 -->
          <Boks2 />
          <!-- boks3 -->
          <Boks3 />
          <!-- boks3 -->
          <Boks4 />
        </div>
      </div>
    </div>
  </div>

  <div class="App">
    <div class='scroll-bg'>
      <!-- Header -->
      <HeaderTopGodkendteAnmodninger />
      <Titel/>
      <div class='scroll-div'>
        <div class='scroll-object'>
          <!-- boks1 -->
          <Boks1 />
          <!-- boks2 -->
          <Boks2 />
          <!-- boks3 -->
          <Boks3 />
          <!-- boks3 -->
          <Boks4 />
        </div>
      </div>
    </div>
  </div>
</template>

<script type ="module">
import HeaderTopAfventerGodkendelse from '@/components/Titel-afventer.vue';
import HeaderTopAfvisteAnmodninger from '@/components/Titel-afviste.vue';
import HeaderTopGodkendteAnmodninger from '@/components/Titel-godkendte.vue';
import Boks1 from '@/components/Boks1.vue';
import Boks2 from '@/components/Boks2.vue';
import Boks3 from '@/components/Boks3.vue';
import Boks4 from '@/components/Boks4.vue';
import Profile from '@/components/Profile.vue';
import Titel from '@/components/Header.vue'



export default {
  name: 'App',
  components: {
    HeaderTopAfventerGodkendelse,
    HeaderTopAfvisteAnmodninger,
    HeaderTopGodkendteAnmodninger,
    Boks1,
    Boks2,
    Boks3,
    Boks4,
    Profile,
    Titel
  },
  methods: {
  on() {
    document.getElementById("overlay").style.display = "block";
  },

  off() {
    document.getElementById("overlay").style.display = "none";
  }

  /*
  window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/
}
}


</script>
