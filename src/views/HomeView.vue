<script setup>
import { ref } from 'vue';
import FormComponent from '@/components/formComponent.vue';
import FormViewerComponent from '@/components/formViewerComponent.vue';
const view = ref(false)
function views(){
view.value = !view.value
}

const dados = ref({
  name: '',
  email: '',
  password: '',
  picture: null
})
</script>
<template>
    <FormComponent v-if="!view" />
    <FormViewerComponent v-if="view" :dados="dados" />
</template>
<style scoped>
    h1 {
        color: red;
    }
</style>