import axios from "axios";
import { defineStore } from "pinia";

export const userAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null
    }),
    getters: {
        user: (state) => state.authUser
    },
    actions: {
        async getToken() {
            await axios.get('/sanctum/csrf-cookie');
        },
        async getUser() {
            this.getToken();
            const response = await axios.get('/api/user');
            this.authUser = response.data;
        }
    }
})