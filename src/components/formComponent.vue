<script setup>
import { ref, defineEmits } from 'vue';
import { useUserStore } from '@/stores/user';


const props = defineProps({
  dados: Object,
  hobbies: Array,
  linguagens: Array,
});

const dados = ref({ ...props.dados });
const store = useUserStore();
const emit = defineEmits(['views']);

const imagem = ref(false);

function submit(dados) {
  console.log(dados)
  if (dados.nome ===''){
    alert('Nome é obrigatório')
  }
  else if (dados.email ===''){
    alert('Email é obrigatório')
  }
  else if (dados.password ===''){
    alert('Senha é obrigatório')
  }
  else if (dados.password !== dados.senhaconfirma){
    alert('Senhas não conferem')
  }
  else if (dados.senhaconfirma ===''){
    alert('Confirmação de senha é obrigatório')
  }
  else if (dados.cep ===''){
    alert('CEP é obrigatório')
  }
  else if (dados.numero ===''){
    alert('Número é obrigatório')
  }
  else if (dados.hobbies.length === 0){
    alert('Hobbies é obrigatório')
  }
  else if (dados.linguagens.length === 0){
    alert('Linguagens é obrigatório')
  }
  else if (dados.picture === null){
    alert('Imagem é obrigatório')
  }
  else{
    store.submit(dados);
    emit('views');
  }
}



function handleFileChange(e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    dados.value.picture = reader.result;
  };
}

console.log(dados.value);
</script>

<template>
  <form @submit.prevent="submit(dados)" class="form-container">
    <div class="form-group">
      <label for="name">Nome:</label>
      <input type="text" id="name" name="name" v-model="dados.nome" required />
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" v-model="dados.email" required />
    </div>
    <div class="form-group">
      <label for="password">Senha:</label>
      <input type="password" id="password" name="password" v-model="dados.password" required />
    </div>
    <div class="form-group">
      <label for="passwordconfirm">Confirme a Senha:</label>
      <input type="password" id="passwordconfirm" name="passwordconfirm" v-model="dados.senhaconfirma" required />
    </div>
    <div class="form-group">
      <label for="cep">CEP:</label>
      <input type="text" id="cep" name="cep" v-model="dados.cep" required />
    </div>
    <div class="form-group">
      <label for="number">Número:</label>
      <input type="text" id="number" name="number" v-model="dados.numero" required />
    </div>
    <div class="form-group">
      <label for="hobbies">Hobbies:</label>
      <select id="hobbies" name="hobbies" v-model="dados.hobbies" multiple required>
        <option v-for="hobby in hobbies" :key="hobby.id" :value="hobby.name">{{ hobby.name }}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="linguagens">Linguagens:</label>
      <select id="linguagens" name="linguagens" v-model="dados.linguagens" multiple required>
        <option v-for="linguagem in linguagens" :key="linguagem.id" :value="linguagem.name">{{ linguagem.name }}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="picture">Imagem:</label>
      <input type="file" id="picture" name="picture" @change="handleFileChange" required />
    </div>
    <button type="submit" class="submit-button">Enviar</button>
  </form>
  <div v-if="imagem" class="image-preview">
    <img :src="dados.picture" alt="User Image" />
  </div>
  <button @click="imagem = !imagem" class="toggle-button">Image Preview</button>
</template>

<style scoped>
.form-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.form-group input[type="file"] {
  padding: 3px;
}

.submit-button,
.toggle-button {
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

.submit-button:hover,
.toggle-button:hover {
  background-color: #0056b3;
}

.image-preview {
  text-align: center;
  margin-top: 20px;
}

.image-preview img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
