<template>
  <div class="product-card">
    <img :src="product.image" alt="Image produit" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.price }} €</p>
    <ButtonComponent :data="addButtonData" @click="addToCart" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { useCartStore } from '../store/cart'
import ButtonComponent from './ButtonComponent.vue'
import type ButtonInterface from '../interfaces/ButtonInterface'


interface Product {
  id: number
  name: string
  price: number
  image: string
}

const props = defineProps<{
  product: Product
}>()

const cartStore = useCartStore()


const addToCart = () => {
  cartStore.addProduct(props.product)
}

const addButtonData: ButtonInterface = {
  id: `add-${props.product.id}`,
  textContent: 'Ajouter au panier',
  type: 'button',
  class: 'add-button'
}
</script>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}
.product-card img {
  max-width: 100%;
  margin-bottom: 10px;
}
</style>
