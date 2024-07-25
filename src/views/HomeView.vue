<script setup>
import { reactive, ref } from 'vue';
import FormComponent from '@/components/formComponent.vue';
import FormViewerComponent from '@/components/formViewerComponent.vue';
const view = ref(false)
function views(){
view.value = !view.value
}

const dados = reactive({
  nome: '',
  email: '',
  picture: null,
  senha: '',
  senhaconfirma: '',
  cep: '',
  hobbies: [],
  linguagens: [],
})

const hobbies = [
  { id: 1, name: 'Futebol' },
  { id: 2, name: 'Volei' },
  { id: 3, name: 'Basquete' },
  { id: 4, name: 'Natação' },
  { id: 5, name: 'Corrida' },
  { id: 6, name: 'Ciclismo' },
  { id: 7, name: 'Musculação' },
  { id: 8, name: 'Crossfit' },
  { id: 9, name: 'Yoga' },
  { id: 10, name: 'Pilates' },
]

const linguagens = [
  { id: 1, name: 'Javascript' },
  { id: 2, name: 'Python' },
  { id: 3, name: 'Java' },
  { id: 4, name: 'C#' },
  { id: 5, name: 'Ruby' },
  { id: 6, name: 'PHP' },
  { id: 7, name: 'C++' },
  { id: 8, name: 'C' },
  { id: 9, name: 'Swift' },
  { id: 10, name: 'Kotlin' },
]
</script>
<template>
    <FormComponent v-if="!view" @views="views" :hobbies="hobbies" :linguagens="linguagens" :dados="dados"/>
    <FormViewerComponent v-if="view" :dados="dados" />
</template>
<style scoped>
    h1 {
        color: red;
    }
</style>