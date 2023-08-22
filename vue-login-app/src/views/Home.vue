<template>
    <div  class="w-full">

        <div class="justify-between flex items-center">
            <div><h3 class="text-2xl font-extrabold">Assignment</h3></div>
            <div>
                <span>{{ userEmail }}</span>
                <button v-if="isSignedIn" class="hover:bg-violet-600 rounded-xl border-2 p-2 m-2" @click="handleSignOut">sign out</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from "vue-router";
import { storeToRefs } from 'pinia'
import { useHomeStore } from '../stores/homeStore'

const { isSignedIn, userEmail } = storeToRefs(useHomeStore())
const { authStateChanged } = useHomeStore()
const router = useRouter();
// const isSignedIn = ref(false);

let auth;
const handleSignOut = () => {
    signOut(auth).then(() => {
        router.push('/');
    });
}

onMounted(() => {
    auth = getAuth();
    authStateChanged(auth);
})

</script>

<style></style>