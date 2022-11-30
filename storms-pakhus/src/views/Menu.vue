<template>
    <Profile/>
    <button class="show-menu-button" @click="off()" id="show-menu-button">Se menu</button>
    <div class="content-menu">
            <div class="content">
            <div class="top-banner">
                <div class="banner-img"></div>
                <div class="logo box-shadow">
                    <img src="../assets/Images/Gyrosheroes.png" alt="" class="center-logo">
                </div>
            </div>

            <div class="menu-beskrivelse">
                    GRÆKENLAND er kommet til Pakhuset – og navnet er “Gyros Heroes”.
                    <br> Som du næsten kan gætte ud fra navnet, så har de fokus på den 
                    <br> sagnomspundne street food GYRO – med græske specialiteter i 
                    <br> hjemmelavet fladbrød. Istvan, som du måske også kender fra Holy Fish, 
                    <br> er hjernen bag konceptet.
            </div>
            <div>
                <div class="lines"></div>
                <div class="lines-box"></div>
            </div>
                <div class="menu" id="menu">
                    <div class="menu1">
                        <div class="image box-shadow">
                            <img src="https://cdn.nemtakeaway.dk/site/upload/images/xl/175104.jpg" alt="The Plate" class="center-img">
                        </div>
                        <div class="card">
                            <div class="container">
                                <div class="dish-name">
                                    <h1>The Plate</h1>
                                </div>
                                <div class="dish-price">
                                    <h2>85,-</h2>
                                </div>
                            </div>
                            <div class="dish-description">
                                <p>Vælg i mellem saftig kylling, svinekød, sprød
                                    halloumi eller aubergine . Serveres m. 
                                pommes frites, græsk salat, tzatziki, signatur
                                    dressing og græsk fladbrød til</p>
                            </div>  
                        </div>
                    </div>
                    <div class="menu2">
                        <div class="image2 box-shadow">
                            <img src="https://cdn.nemtakeaway.dk/site/upload/images/xl/144566.jpg" alt="Super Hero Combo" class="center-img">
                        </div>
                        <div class="card2">
                            <div class="container">
                                <div class="dish-name2">
                                    <h1>Super Hero Combo</h1>
                                </div>
                                <div class="dish-price2">
                                    <h2>140,-</h2>
                                </div>
                            </div>
                            <div class="dish-description2">
                                <p>Serveres m. kylling, svinekød og sprød halloumi,
                                    tzatziki, tomat, rødløg, fries og signatur dressing
                                    i græsk fladbrød. Ink. Pommes og mayo.</p>
                            </div>  
                        </div>
                    </div>
                    <div class="menu3">
                        <div class="image box-shadow">
                            <img src="https://cdn.nemtakeaway.dk/site/upload/images/xl/175092.jpg" alt="Chicken Hero" class="center-img">
                        </div>
                        <div class="card">
                            <div class="container">
                                <div class="dish-name">
                                    <h1>Chicken Hero</h1>
                                </div>
                                <div class="dish-price">
                                    <h2>85,-</h2>
                                </div>
                            </div>
                            <div class="dish-description">
                                <p>Serveres m. saftig kylling, tzatziki, 
                                    tomat, rødløg, fries og signatur dressing 
                                    i græsk fladbrød.</p>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

import Profile from '@/components/Profile.vue';

export default {
  name: 'menu-menu',
  components: {
    Profile,
  },

  props: {
    msg: String
  },

    methods: {
        off() {
            var x = document.getElementById("menu");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
                }
            var y = document.getElementById("show-menu-button");
            if (y.innerHTML === "luk menu") {            
                y.innerHTML = "Se menu";
            } else {
                y.innerHTML = "luk menu";
            }

            },
   

        } 
}  


</script>

<style scoped>

</style>