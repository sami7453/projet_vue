<template>
    <article>
      <label :for="data.id"></label>
      <input
        :id="data.id" 
        @input="(event: any) => $emit('fieldChange', { 
          id: data.id, 
          val: event.target!.value  
        })"
        :type="data.type ? data.type : 'text'" 
        :placeholder="data.placeholder"
        :class="'input ' + (data.class ? data.class : '')"
      />
    </article>
  </template>
  
  <script setup lang="ts">
  import type FieldInterface from '../interfaces/FieldInterface';
  
  interface FieldComponentProperties {
    data: FieldInterface;
  }
  
  defineProps<FieldComponentProperties>();
  defineEmits(['fieldChange']);
  </script>

  <style scoped>
  .input {
    padding: 0.5rem;
    border: 1px solid #42b983;
    border-radius: 0.25rem;
    font-size: 1rem;
  }
  </style>
  