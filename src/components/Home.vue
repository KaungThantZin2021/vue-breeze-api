<template>
  <div>
    <h1>Home</h1>
    <h1>{{ userAuth.user?.name }}</h1>
    <h1>{{ userAuth.user?.email }}</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { userAuthStore } from '../stores/auth';

const userAuth = userAuthStore();

onMounted(async () => {
  await userAuth.getUser();

});
</script>
