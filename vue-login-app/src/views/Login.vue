<template>
    <div class="box-border m-4 p-4 border-2 ">
        <h1><u>Sign In</u></h1>
        <div class="justify-center flex">
            <div class="grid m-4 p-4">                
                <p v-if="errMsg" class="text-red-700">{{ errMsg }}</p>
                <input class="p-4 m-2" type="email" name="email" id="email" v-model="email" placeholder="email">
                <input class="p-4 m-2" type="password" name="password" id="password" v-model="password" placeholder="password">
                <button class="hover:bg-violet-600 rounded-md border-2 p-4 m-2 mt-4" type="submit" @click="login()">Sign In</button>
                <br>
                <Span>Need an account <router-link class="text-violet-600 hover:text-violet-300" to="/register">Sign up</router-link></Span>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref('');
const password = ref('');
const errMsg = ref();

const login = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Successfully registered!");
            router.push('/home');
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found"
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect password";
                    break;
                default:
                    errMsg.value = "Email or password was incorrect"
                    break;
            }
        })
}
</script>
  
<style></style>