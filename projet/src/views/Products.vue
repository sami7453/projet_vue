<template>
    <div class="products">
      <h1>Nos Produits</h1>
      <div class="grid-container">
        <ProductCard 
          v-for="product in products" 
          :key="product.id" 
          :product="product"
        />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import ProductCard from '../components/ProductCard.vue'
  

  interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products = ref<Product[]>([
  {
    id: 1,
    name: 'Logitech G Pro X',
    price: 129.99,
    image: new URL('../assets/products/test.png', import.meta.url).href
  },
  {
    id: 2,
    name: 'Razer DeathAdder V2',
    price: 69.99,
    image: new URL('../assets/products/test.png', import.meta.url).href
  },
  {
    id: 3,
    name: 'Corsair K95 RGB Platinum',
    price: 199.99,
    image: new URL('../assets/products/test.png', import.meta.url).href
  },
  {
    id: 4,
    name: 'SteelSeries Arctis 7',
    price: 149.99,
    image: new URL('../assets/products/test.png', import.meta.url).href
  },
  {
    id: 5,
    name: 'HyperX Cloud II',
    price: 99.99,
    image: new URL('../assets/products/test.png', import.meta.url).href
  },
  {
    id: 6,
    name: 'Logitech G502 Hero',
    price: 79.99,
    image: new URL('../assets/products/test.png', import.meta.url).href
  },
  {
    id: 7,
    name: 'Razer BlackWidow Elite',
    price: 169.99,
    image: new URL('../assets/products/test.png', import.meta.url).href
  },
  {
    id: 8,
    name: 'Corsair HS70 Pro',
    price: 119.99,
    image: new URL('../assets/products/test.png', import.meta.url).href
  },
  {
    id: 9,
    name: 'SteelSeries Rival 600',
    price: 89.99,
    image: new URL('../assets/products/test.png', import.meta.url).href
  }
])

  </script>
  
  <style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 20px;
    margin-bottom: 10%;
  }
  </style>
  