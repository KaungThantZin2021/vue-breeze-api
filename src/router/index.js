import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/register',
        name: 'Register',
        component: () => import('../components/Register.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../components/Login.vue')
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/Home.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router