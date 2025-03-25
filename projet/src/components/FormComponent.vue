<template>
    <form class="custom-form" @submit.prevent="onSubmit">
      <section class="custom-form__fields-section">
        <FieldComponent
          v-for="(field, index) in data.fields" 
          :key="index"
          :data="field"
          @field-change="onFieldChange"
        />
      </section>
      <section class="custom-form__buttons-section">
        <ButtonComponent 
          v-for="(btn, index) in data.buttons"
          :key="index"
          :data="btn"
        />
      </section>
    </form>
  </template>
  
  <script lang="ts" setup>
  import type FormInterface from "../interfaces/FormInterface";
  import ButtonComponent from "./ButtonComponent.vue";
  import FieldComponent from "./FieldComponent.vue";
  
  interface FormComponentProperties {
    data: FormInterface;
  }
  
  defineProps<FormComponentProperties>();
  const emit = defineEmits(['submit']);
  
  const onFieldChange = ({ id, val }: { id: string, val: string }) => {
    console.log('Champ modifié - ID:', id, 'Valeur:', val);
  };
  
  const onSubmit = () => {
    emit('submit');
  };
  </script>

  <style scoped>
  .custom-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .custom-form__fields-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .custom-form__buttons-section {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
  }
  </style>