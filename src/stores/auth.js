import axios from "axios";
import { defineStore } from "pinia";

export const userAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
        authErrors: []
    }),
    getters: {
        user: (state) => state.authUser,
        errors: (state) => state.authErrors
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
                this.router.push("/");
            })
            .catch((error) => {
                if (error.response.status == 422) {
                    this.authErrors = error.response.data.errors;
                }
            });
        },
        async handleLogin(data) {
            this.getToken();
            await axios.post("/login", {
                email: data.email,
                password: data.password,
            })
            .then((response) => {
                this.router.push("/");
            })
            .catch((error) => {
                if (error.response.status == 422) {
                    this.authErrors = error.response.data.errors;
                }
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
        },
        async handleForgotPassword(data) {
            this.getToken();
            try {
                await axios.post("/forgot-password", {
                    email: data.email
                })
                .then((response) => {
                    // this.router.push("/");
                });
            } catch (error) {
                if (error.response.status == 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        }
    }
})