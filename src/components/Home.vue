<template>
  <div>
    <h1>Home</h1>
    <h1>{{ user?.name }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const user = ref({});

onMounted(async () => {
  const response = await axios.get('/api/user');
  console.log(response.data);

  user.value = response.data;

});
</script>
