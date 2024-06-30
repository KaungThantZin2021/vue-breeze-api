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
        },
        async handleRegister(data) {
            this.getToken();
            await axios.post("/register", {
                name: data.name,
                email: data.email,
                password: data.password,
                password_confirmation: data.password_confirmation,
            })
            .then((response) => {
                console.log(response.data);
                this.router.push("/");
            })
            .catch((error) => {
                console.log(error);
            });
        },
        async handleLogin(data) {
            this.getToken();
            await axios.post("/login", {
                email: data.email,
                password: data.password,
            })
            .then((response) => {
                console.log(response.data);
                this.router.push("/");
            })
            .catch((error) => {
                console.log(error);
            });
        },
        async handleLogout() {
            this.getToken();
            await axios.post("/logout")
            .then((response) => {
                this.authUser = null;
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
})