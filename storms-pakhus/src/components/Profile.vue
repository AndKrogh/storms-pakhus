<template>
    <div class="profile-container">
        
        <div class="profile-pic" @click="menuToggle();">
            <img src="../assets/Images/profil3.svg" alt="profil icon">
        </div> 

        <div class="menu">
            <ul>
                <li>
                    <router-link :to="{name:'admin'}">Admin</router-link>
                </li>
                <li>
                    <router-link :to="{name:'boderne'}">Boderne</router-link>
                </li>
                <li>
                    <router-link :to="{name:'Menu'}">Menu</router-link>
                </li>
                <li>
                    <a href="#">Indstillinger</a>
                </li>
                <li>
                    <router-link :to="{name:'login'}">Log ud</router-link>
                </li>
                <li>
                    <router-link :to="{name:'signup'}">Signup</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProfilKnap',
  props: {
    msg: String
  },

  methods: {
      menuToggle(){
            const toggleMenu = document.querySelector('.menu');
            toggleMenu.classList.toggle('profile-container')
        }
    },
};
</script>

<style lang="sass">

</style>