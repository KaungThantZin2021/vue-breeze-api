import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/register',
        component: () => import('../components/Register.vue')
    },
    {
        path: '/login',
        component: () => import('../components/Login.vue')
    },
    {
        path: '/',
        component: () => import('../components/Home.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router