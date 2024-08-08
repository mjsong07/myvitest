<template>
    <div>
      <p>{{ count }}</p>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'Counter',
    setup() {
      const count = ref(0);
  
      const increment = () => {
        count.value++;
      };
  
      const decrement = () => {
        count.value--;
      };
  
      return {
        count,
        increment,
        decrement
      };
    }
  });
  </script>
  
  