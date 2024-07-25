import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { CepService } from '@/services'

const cepService = new CepService;
export const useUserStore = defineStore('user', () => {
  const localUser = {
    nome: '',
    email: '',
    picture: '',
    senha: '',
    senhaconfirma: '',
    cep: '',
    numero: '',
    endereco: {},
    hobbies: [],
    linguagens: [],
  }

  const userStorageLocal = useStorage('user', localUser)

  async function getEndereco(cep) {
    const response = await cepService.getCep(cep)
    return await response
  }

  async function submit(dados) {
    userStorageLocal.value = {
      nome: dados.nome,
      email: dados.email,
      picture: dados.picture,
      senha: dados.senha,
      senhaconfirma: dados.senhaconfirma,
      cep: dados.cep,
      numero: dados.numero,
      endereco: await getEndereco(dados.cep),
      hobbies: dados.hobbies,
      linguagens: dados.linguagens,
    }
  }

  function logout() {
    userStorageLocal.value = {
      nome: '',
      email: '',
      picture: '',
      senha: '',
      senhaconfirma: '',
      cep: '',
      endereco: {},
      hobbies: [],
      linguagens: [],
    }
  }


  const email = computed(() => userStorageLocal.value.email)
  const picture = computed(() => userStorageLocal.value.picture)
  const nome = computed(() => userStorageLocal.value.nome)
  const senhaconfirma = computed(() => userStorageLocal.value.senhaconfirma)
  const senha = computed(() => userStorageLocal.value.senha)
  const cep = computed(() => userStorageLocal.value.cep)
  const endereco = computed(() => userStorageLocal.value.endereco)
  const hobbies = computed(() => userStorageLocal.value.hobbies)
  const linguagens = computed(() => userStorageLocal.value.linguagens)


  function setEmail(novoDado) {
    email.value = novoDado;
  }

  function setPicture(novoDado) {
    picture.value = novoDado;
  }

  function setNome(novoDado) {
    nome.value = novoDado
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

  function setHobbies(novoDado) {
    hobbies.value = novoDado
  }

  function setLinguagens(novoDado) {
    hobbies.value = novoDado
  }
 
  return { localUser, userStorageLocal, email, picture, nome, senhaconfirma, senha, cep, endereco, getEndereco, setEmail, setPicture, setNome, setSenhaConfirma, setSenha, setCep, setEndereco, submit, hobbies, setHobbies, linguagens, setLinguagens, logout }
})