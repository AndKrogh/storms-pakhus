<template>
  <Profile/>
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


<script>
import HeaderTopAfventerGodkendelse from '@/components/Titel-afventer.vue';
import HeaderTopAfvisteAnmodninger from '@/components/Titel-afviste.vue';
import HeaderTopGodkendteAnmodninger from '@/components/Titel-godkendte.vue';
import Boks1 from '@/components/Boks1.vue';
import Boks2 from '@/components/Boks2.vue';
import Boks3 from '@/components/Boks3.vue';
import Boks4 from '@/components/Boks4.vue';
import Profile from '@/components/Profile.vue';
import Titel from '@/components/Header.vue';



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
    Titel,
  }
}
</script>
