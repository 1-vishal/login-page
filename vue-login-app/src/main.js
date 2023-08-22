import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
//   apiKey: "AIzaSyCYEsu_FV9Qyj38xf8uK9HhiVJQwvRSfEU",
  authDomain: "login-db-f74fd.firebaseapp.com",
  projectId: "login-db-f74fd",
  storageBucket: "login-db-f74fd.appspot.com",
  messagingSenderId: "867533864026",
  appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
initializeApp(firebaseConfig);

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
