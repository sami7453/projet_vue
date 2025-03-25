<template>
    <div class="cart">
      <h1>Votre Panier</h1>
      <div v-if="cartProducts.length">
        <div v-for="product in cartProducts" :key="product.id" class="cart-item">
          <img :src="product.image" alt="Image du produit" />
          <div class="details">
            <h3>{{ product.name }}</h3>
            <p>Prix: {{ product.price }} €</p>
            <p>
              Quantité:
              <button @click="decreaseQuantity(product)">-</button>
              {{ product.quantity }}
              <button @click="increaseQuantity(product)">+</button>
            </p>
            <button @click="removeProduct(product.id)">Supprimer</button>
          </div>
        </div>
        <h2>Total: {{ totalAmount }} €</h2>
      </div>
      <div v-else>
        <p>Votre panier est vide.</p>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue'
  import { useCartStore } from '../store/cart'
  import type { Product } from '../store/cart'
  
  const cartStore = useCartStore()
  
  const cartProducts = computed(() => cartStore.products)
  const totalAmount = computed(() => cartStore.totalAmount)
  
  const increaseQuantity = (product: Product) => {
    cartStore.updateQuantity(product.id, product.quantity + 1)
  }
  const decreaseQuantity = (product: Product) => {
    if (product.quantity > 1) {
      cartStore.updateQuantity(product.id, product.quantity - 1)
    } else {
      cartStore.removeProduct(product.id)
    }
  }
  const removeProduct = (id: number) => {
    cartStore.removeProduct(id)
  }
  </script>
  
  <style scoped>
  .cart {
    margin: 20px;
    text-align: center;
    width: 50%;
    margin: 0 auto;
  }
  .cart-item {
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
    margin: 5%;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 10px;
  }
  .cart-item img {
    width: 100px;
    margin-right: 20px;
  }
  .details button {
    margin: 0 5px;
    padding: 5px;
    border: none;
    background-color: #f0f0f0;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  }
  </style>
  