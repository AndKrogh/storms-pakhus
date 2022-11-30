<template>
<body>
    <div class="signup_background">
        <form class="signup_form">
            <h1>Sign Up</h1>
            <div>
                <label for="name">Name</label><br>
                <input type="text" v-model="name" id="name" name="name">
            </div>
            <div>
                <label for="email">Email</label><br>
                <input type="email" v-model="email" name="email" id="email">
            </div>
            <div>
                <label for="password">Password</label><br>
                <input type="password" v-model="password" name="password" id="password">
            </div>
            <div>
                <label for="password_confirmation">Repeat Password</label><br>
                <input type="password" name="password_confirmation" id="password_confirmation">
            </div>
            <button v-on:click="signUp">Sign Up</button>
        </form>
    </div>
</body> 
</template>
<script>
    //import axios from 'axios'
    export default{
        // name: 'SignUp',
        // data(){
        //     return{
        //         name:'',
        //         email:'',
        //         password:''
        //     }
        // },
        //  methods:{
        //     signUp(){ 
        //     console.warn(this.name, this.email, this.password)
        //     }
        // }
    }
        //     async signUp(){
        //         let result = await axios.post(db.json, {
        //             name:this.name,
        //             email:this.email,
        //             password:this.password
        //         });

        //         console.warn(result);
        //     }
        // }

</script>
<style scoped>
</style>    
