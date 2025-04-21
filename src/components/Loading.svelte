<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    
    let opacity = 0;
    
    onMount(() => {
      opacity = 1;
    });
  </script>
  
  <div 
    class="fixed inset-0 flex items-center justify-center bg-natural-50 dark:bg-natural-900 z-50"
    style="opacity: {opacity}; transition: opacity 0.5s ease-in-out;"
  >
    <div class="text-center" in:fade={{ duration: 1000 }}>
      <h1 class="text-5xl md:text-7xl font-display font-bold mb-4 tracking-wider">
        SHO MIYAGI
      </h1>
      <p class="text-xl md:text-2xl text-primary-600 dark:text-primary-400 tracking-[0.2em] uppercase">
        AI & Data | Web | Cloud
      </p>
    </div>
  </div>