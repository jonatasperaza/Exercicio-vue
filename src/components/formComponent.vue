<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
const store = useUserStore()

const imagem = ref(false)

function submit(dados) {
  store.submit(dados.value)
}

defineProps({
  dados: Object
})

function handleFileChange(e) {
    dados.value.picture = URL.createObjectURL(e.target.files[0])
}
</script>

<template>
  <form @submit.prevent="submit(dados)">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" v-model="dados.name" required />
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" v-model="dados.email" required/>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" v-model="dados.password" required />
    <label for="picture">Picture:</label>
    <input type="file" id="picture" name="picture" @change="handleFileChange" required/>

    <button type="submit">Submit</button>
  </form>
  <div v-if="imagem">
    <img :src="dados.picture" alt="User Image">
  </div>
  <br>
  <button @click="imagem = !imagem">MOSTRAR</button>
</template>
