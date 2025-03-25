<template>
  <div class="register">
    <h1>Création de Compte</h1>
    <FormComponent 
      :data="formData" 
      @submit="onSubmit" 
      @fieldChange="handleFieldChange" 
    />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import FormComponent from '../components/FormComponent.vue'
import type ButtonInterface from '../interfaces/ButtonInterface'
import type FieldInterface from '../interfaces/FieldInterface'
import type FormInterface from '../interfaces/FormInterface'


interface RegisterData {
  username: string;
  email: string;
  password: string;
  [key: string]: string;
}

const registerData: RegisterData = reactive({
  username: '',
  email: '',
  password: ''
})

const fields: FieldInterface[] = [
  { id: 'username', placeholder: "Nom d'utilisateur" },
  { id: 'email', placeholder: "Email", type: 'email' },
  { id: 'password', placeholder: "Mot de passe", type: 'password' }
]

const buttons: ButtonInterface[] = [
  { id: 'submit', textContent: "S'inscrire", type: 'submit' }
]

const formData: FormInterface = {
  fields,
  buttons
}

const router = useRouter()


const handleFieldChange = ({ id, val }: { id: string; val: string }) => {
  registerData[id] = val
}


const onSubmit = () => {
  localStorage.setItem('registeredUser', JSON.stringify(registerData))
  router.push('/login')
}
</script>

<style scoped>
.register {
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
