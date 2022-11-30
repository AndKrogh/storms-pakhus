<template>
<div id="header-box">
    
    <div class="box-container">

        <div class="inner-box-dark"> 


            <div class="box-top">

                <div class="profile">
                    <div class="profile-img">
                      <img src="../assets/Images/Img1.jpg" alt="Peterplys" class="img1">
                    </div>
                </div>

                <div class="container">
                   <p>Taco</p>
                </div>
                
                <div class="container">
                    <p>Salat,løg </p>
                </div>

                <div class="container">
                    <p> Allergener</p>
                </div>

                <div class="container">
                    <p>75 kr.</p>
                </div>

                <div class="container">
                    <div class="edit-arrow-open" @click="on()"></div>
                </div>

            </div>
        </div>
    </div>  
</div>


<div id="inner-box-edit"> 
    <div class="box-top">
        <div class="profile">
            <div class="profile-img">
                <p>blabla</p>
            </div>
        </div>

        <div class="container">
            <h3>Navn</h3>
            <input type="text" class="input">
        </div>

        <div class="container">
            <h3>Beskrivelse</h3>
            <input type="text" class="input">
        </div>

        
        <div class="container">
            <h3>Allergener </h3>
            <input type="text" class="input">
        </div>

        <div class="container">
            <h3>Pris</h3>
            <input type="text" class="input">
        </div>
    </div>
     <div class="big-text-area">
        <textarea class="txt-area" rows="4" cols="50">Skriv kommentar her</textarea>
          <div class="box-left-edit">
            <button class="savebtn"> Gem </button>
            <button class="acceptbtn"> Godkend </button>
            <button class="denybtn"> Afvis </button>
        </div>
    </div>
  
</div>

</template>

<script>

export default {
  name: 'Boks-4',
  props: {
    msg: String
  },

  methods: {
    on() {
        var x = document.getElementById("inner-box-edit");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
            }
        }
    }
    
}
</script>

<style scoped>

 /* <div class="container">
    <div class="user-id">
        <div class="user-name">
            <p>Allergener</p>
        </div>
        <div class="dropdown-arrow"></div>
        <div class="dropdown-menu">
            <ul>
                <li>Vegetar</li>
                <li>Veganer</li>
                <li>Laktose</li>
            </ul>
        </div>
    </div>
</div> */
</style>
