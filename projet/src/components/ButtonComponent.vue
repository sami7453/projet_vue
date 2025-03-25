<template>
    <button
      :id="data.id"
      :type="data.type ? data.type : 'button'" 
      :class="'button ' + (data.class ? data.class : '')"
    >
      {{ data.textContent }}
    </button>
  </template>
  
  <script setup lang="ts">
  import type ButtonInterface from '../interfaces/ButtonInterface';
  
  interface ButtonComponentProperties {
    data: ButtonInterface;
  }
  
  defineProps<ButtonComponentProperties>();
  </script>

<style scoped>
.button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #42b983;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}
</style>
  