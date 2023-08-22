import { defineStore } from "pinia";
import { onAuthStateChanged } from "firebase/auth";


export const useHomeStore = defineStore("home", {
  state: () => ({
    isSignedIn: false,
    userEmail: null,
  }),
  getters: {
    getResponseOfSignIn:(state)=>{
        return state.isSignedIn;
    }
  },
  actions: {
    async authStateChanged(auth) {
        await onAuthStateChanged(auth, (user) => {
          this.userEmail = user.email;
          if (user) {
              this.isSignedIn = true;
          } else {
              this.isSignedIn = false;
          }
      });
    },
  },
});
