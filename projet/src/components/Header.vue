<template>
  <header>
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/products">Produits</router-link>
      <router-link to="/cart">Panier ({{ cartItemCount }})</router-link>
      <ButtonComponent
        v-if="isLoggedIn"
        :data="logoutButtonData"
        @click="logout"
      />
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useCartStore } from '../store/cart'
import { useUserStore } from '../store/user'
import { useRouter } from 'vue-router'
import ButtonComponent from '../components/ButtonComponent.vue'
import type ButtonInterface from '../interfaces/ButtonInterface'


const cartStore = useCartStore()
const userStore = useUserStore()
const router = useRouter()


const cartItemCount = computed(() =>
  cartStore.products.reduce((sum, product) => sum + product.quantity, 0)
)


const isLoggedIn = computed(() => userStore.isLoggedIn)


const logout = () => {
  userStore.logout()
  router.push('/login')
}


const logoutButtonData: ButtonInterface = {
  id: 'logoutButton',
  textContent: 'Déconnexion',
  type: 'button',
  class: 'logout-button'
}
</script>

<style scoped>
header {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
nav {
  display: flex;
  justify-content: space-around;
}
nav a {
  text-decoration: none;
  color: #333;
}
nav a:hover {
  text-decoration: underline;
}
</style>
