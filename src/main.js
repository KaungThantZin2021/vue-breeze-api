import { createApp, markRaw } from 'vue'
import './style.css'
import App from './App.vue'

import './axios';
import router from './router';

import { createPinia } from 'pinia';
const pinia = createPinia();

pinia.use(({store}) => {
    store.router = markRaw(router);
})

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
