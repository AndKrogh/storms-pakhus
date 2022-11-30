<template>
    <div class="login_background">
        <form class="login_form">
            <h1>Login</h1>
            <div>
                <label for="email">Email</label><br>
                <input type="email" v-model="email" name="email" id="email">
            </div>
            <div>
                <label for="password">Password</label><br>
                <input type="password" v-model="password" name="password" id="password">
            </div>

            <button v-on:click="signUp">Login</button>
        </form>
    </div>
</template>
<script>
export default{};

//     import bcrypt from 'bcryptjs';

// export default {
//   data() {
//     return {
//        password: null
//     }
//   },
//   methods: {
//     addUser(){
//        console.log(this.encryptPassword(this.password))
//     },
//     encryptPassword(password)          
//       const salt = bcrypt.genSaltSync(10)
//       return bcrypt.hashSync(password, salt)
//     },
//   }
</script>

<style scoped>
</style>
