<script setup>
import { useUserStore } from '@/stores/user';
const store = useUserStore();
const emit = defineEmits(['views']);
console.log(store)
function logout(){
  store.logout()
  emit('views');
}
</script>

<template>
  <div class="profile-card">
    <div class="profile-header">
      <img class="profile-picture" :src="store.picture" alt="User Picture" />
    </div>
    <div class="profile-body">
      <h2 class="profile-name">{{ store.nome }}</h2>
      <p class="profile-email">{{ store.email }}</p>
      <p class="profile-address">
        {{ store.endereco.logradouro }}, {{ store.endereco.bairro }}<br>
        {{ store.endereco.localidade }} - {{ store.endereco.uf }}<br>
        CEP: {{ store.endereco.cep }}
      </p>
      <p>{{ store.hobbies }}</p>
      <p>{{ store.linguagens }}</p>
      <p>{{ store.hobbies }}</p>
      <button style="display: flex;margin: auto; width: auto; text-align: center;" @click="logout()">Logout</button>
    </div>
  </div>
</template>

<style scoped>
.profile-card {
  width: 350px;
  margin: 0 auto;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  overflow: hidden;
  margin-top: 12%
}

.profile-header {
  text-align: center;
  background-color: #f5f5f5;
  padding: 20px;
}

.profile-picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile-body {
  padding: 20px;
}

.profile-name {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
}

.profile-email {
  font-size: 14px;
  color: #777;
  margin-bottom: 20px;
  text-align: center;
}

.profile-address {
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  text-align: center;
}
</style>
