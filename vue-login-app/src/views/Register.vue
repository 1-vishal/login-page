<template>
    <div class="box-border m-4 p-4 border-2 ">
        <h1><u>Register</u></h1>
        <div class="justify-center flex">
            <div class="grid m-4 p-4">
                <p v-if="errMsg" class="text-red-700">{{ errMsg }}</p>
                <input class="p-4 m-2" type="email" name="email" id="email" v-model="email" placeholder="email">
                <input class="p-4 m-2" type="password" name="password" id="password" v-model="password"
                    placeholder="password">
                <input class="p-4 m-2" type="password" name="confirm_password" id="confirm_password"
                    v-model="confirmPassword" placeholder="confirm password">
                <button class="hover:bg-violet-600 rounded-md border-2 p-4 m-2 mt-4" type="submit" @click="register()">Sign Up</button>
                <Br></Br>
                <Span>Already have an account <router-link class="text-violet-600 hover:text-violet-300" to="/">Sign In</router-link></Span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errMsg = ref('');

const register = () => {
    if (confirmPassword.value === password.value) {
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
            .then((data) => {
                console.log("Successfully registered!");
                console.log(data.user.auth.currentUser);
                router.push('/home');
            })
            .catch((error) => {
                console.log(error.code);
                alert(error.message);
            })
    } else {
        errMsg.value = "password didn't match!"
    }
}
</script>

<style></style>