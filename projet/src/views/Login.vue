<template>
  <div class="login">
    <h1>Connexion</h1>
    <FormComponent 
      :data="formData" 
      @submit="onSubmit" 
      @fieldChange="handleFieldChange" 
    />
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p>
      Pas de compte ? 
      <router-link to="/register">Inscris-toi ici</router-link>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../store/user'
import FormComponent from '../components/FormComponent.vue'
import type ButtonInterface from '../interfaces/ButtonInterface'
import type FieldInterface from '../interfaces/FieldInterface'
import type FormInterface from '../interfaces/FormInterface'


const loginData: { [key: string]: string } = reactive({
  username: '',
  password: ''
})

const errorMessage = ref<string>('')

const fields: FieldInterface[] = [
  { id: 'username', placeholder: "Nom d'utilisateur" },
  { id: 'password', placeholder: "Mot de passe", type: 'password' }
]

const buttons: ButtonInterface[] = [
  { id: 'submit', textContent: 'Se connecter', type: 'submit' }
]

const formData: FormInterface = {
  fields,
  buttons
}

const router = useRouter()
const userStore = useUserStore()


const handleFieldChange = ({ id, val }: { id: string; val: string }) => {
  loginData[id] = val
}


const onSubmit = () => {
  const registeredUser = localStorage.getItem('registeredUser')
  if (!registeredUser) {
    errorMessage.value = "Aucun compte n'a été trouvé. Veuillez vous inscrire."
    return
  }
  const parsedUser = JSON.parse(registeredUser)
  if (loginData.username === parsedUser.username && loginData.password === parsedUser.password) {
    userStore.login({ username: loginData.username })
    router.push('/')
  } else {
    errorMessage.value = "Nom d'utilisateur ou mot de passe incorrect."
  }
}
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 10%;
}

h1 {
  text-align: center;
  color: #333;
}

.error {
  color: red;
  margin-top: 10px;
  text-align: center;
}

p {
  text-align: center;
}

p a {
  color: #42b983;
  text-decoration: none;
}

p a:hover {
  text-decoration: underline;
}
</style>
