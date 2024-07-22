import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { CepService } from '@/services'

const cepService = CepService;
export const useUserStore = defineStore('user', () => {
  const localUser = {
    email: '',
    picture: '',
    nome: '',
    senhaconfirma: '',
    senha: '',
    cep: '',
    endereco: '',
  };

  const userStorageLocal = useStorage('user', localUser)

  async function getEndereco(cep) {
    const response = await cepService.getCep(cep)
    const data = await response.json()
    localUser.endereco = data.logradouro
  }

  function submit(dados) {
    userStorageLocal.value = dados
  }



  const username = computed(() => userStorageLocal.value.username)
  const email = computed(() => userStorageLocal.value.email)
  const picture = computed(() => userStorageLocal.value.picture)
  const nome = computed(() => userStorageLocal.value.nome)
  const senhaconfirma = computed(() => userStorageLocal.value.senhaconfirma)
  const senha = computed(() => userStorageLocal.value.senha)
  const cep = computed(() => userStorageLocal.value.cep)
  const endereco = computed(() => userStorageLocal.value.endereco)

  function setUsername(novoDado) {
    username.value = novoDado;
  }

  function setEmail(novoDado) {
    email.value = novoDado;
  }

  function setPicture(novoDado) {
    picture.value = novoDado;
  }

  function setNome(novoDado) {
    nome.value = novoDado;
  }
  
  function setSenhaConfirma(novoDado) {
    senhaconfirma.value = novoDado;
  }

  function setSenha(novoDado) {
    senha.value = novoDado;
  }

  function setCep(novoDado) {
    cep.value = novoDado;
  }

  function setEndereco(novoDado) {
    endereco.value = novoDado;
  }
 


  return { localUser, userStorageLocal, username, email, picture, nome, senhaconfirma, senha, cep, endereco, getEndereco, setUsername, setEmail, setPicture, setNome, setSenhaConfirma, setSenha, setCep, setEndereco, submit }
})