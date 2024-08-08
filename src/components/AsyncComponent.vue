 <!--  -->
 <template>
    <div>
      <p v-if="loading">Loading...</p>
      <p v-else>{{ data }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  
  export default defineComponent({
    name: 'AsyncComponent',
    setup() {
      const loading = ref(true);
      const data = ref('');
  
      onMounted(async () => {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        data.value = result.data;
        loading.value = false;
      });
  
      return {
        loading,
        data
      };
    }
  });
  </script>
  
  