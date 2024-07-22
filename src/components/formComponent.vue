<script setup>
import { ref } from 'vue';
import {useUserStore} from '@/stores/user';
const store = useUserStore();

function submit(dados) {
    store.submit(dados)
}
function onChangeFile(event) {
      this.$emit('update:picture', event.target.files[0])
    }

const dados = ref({
    name: '',
    email: '',
    password: '',
    picture: File
})
</script>
<template>
    <form @submit.prevent="">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" v-model="name">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" v-model="email">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" v-model="password">
        <label for="picture">picture</label>
        <input type="file" id="picture" name="picture" @change="onChangeFile">
        <button type="submit" @click="submit(dados)">Submit</button>
        <button type="submit">Submit</button>
    </form>
</template>
