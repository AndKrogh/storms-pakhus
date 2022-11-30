<template>
  <div className="App">
    <div className='scroll-bg'>
      <!-- Header -->   
      <HeaderTopAfventerGodkendelse/>
      <div className='scroll-div'>
        <div className='scroll-object'>
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

  <div className="App">
    <div className='scroll-bg'>
      <!-- Header -->   
      <HeaderTopAfvisteAnmodninger />
      <div className='scroll-div'>
        <div className='scroll-object'>
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

  <div className="App">
    <div className='scroll-bg'>
      <!-- Header -->   
      <HeaderTopGodkendteAnmodninger />
      <div className='scroll-div'>
        <div className='scroll-object'>
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
  }
}
</script>
