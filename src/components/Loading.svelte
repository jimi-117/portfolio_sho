<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let opacity = 0;

  onMount(() => {
    opacity = 1;
  });
</script>

<div
  class="fixed inset-0 flex items-center justify-center bg-natural-50 dark:bg-natural-900 z-50"
  style="opacity: {opacity}; transition: opacity 0.5s ease-in-out;"
>
  <div class="text-center space-y-12" in:fade={{ duration: 1000 }}>
    <!-- Coffee cup animation -->
    <div class="relative w-18 h-18 mx-auto">
      <div class="absolute inset-0 flex items-center justify-center">
        <!-- Cup -->
        <div
          class="w-16 h-16 border-4 border-natural-800 dark:border-natural-200 rounded-b-3xl relative"
        >
          <!-- Handle -->
          <div
            class="absolute -right-4 top-1/4 w-4 h-8 border-4 border-l-0 border-natural-800 dark:border-natural-200 rounded-r-full"
          ></div>
          <!-- Coffee -->
          <div
            class="absolute bottom-0 left-0 right-0 bg-warning-700 dark:bg-primary-400 rounded-b-2xl animate-coffee"
          >
            <div
              class="absolute -top-1 left-0 right-0 h-1 bg-white/20 transform -rotate-3"
            ></div>
          </div>
          <!-- Steam -->
          <div class="absolute -top-8 left-1/2 -translate-x-1/2 flex space-x-1">
            <div
              class="w-1 h-4 bg-natural-400 dark:bg-natural-600 rounded-full animate-steam delay-100"
            ></div>
            <div
              class="w-1 h-6 bg-natural-400 dark:bg-natural-600 rounded-full animate-steam"
            ></div>
            <div
              class="w-1 h-4 bg-natural-400 dark:bg-natural-600 rounded-full animate-steam delay-200"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h1
        class="text-5xl md:text-7xl font-display font-bold mb-4 tracking-wider"
      >
        SHO MIYAGI
      </h1>
      <p
        class="text-xl md:text-2xl text-primary-600 dark:text-primary-400 tracking-[0.2em]"
      >
        Loading caffeine.....
      </p>
    </div>
  </div>
</div>

<style>
  @keyframes steam {
    0% {
      transform: translateY(0) scaleX(1);
      opacity: 0;
    }
    20% {
      transform: translateY(-2px) scaleX(1.1);
      opacity: 0.8;
    }
    40% {
      transform: translateY(-4px) scaleX(1);
      opacity: 0.6;
    }
    60% {
      transform: translateY(-6px) scaleX(1.1);
      opacity: 0.4;
    }
    80% {
      transform: translateY(-8px) scaleX(1);
      opacity: 0.2;
    }
    100% {
      transform: translateY(-10px) scaleX(1.1);
      opacity: 0;
    }
  }

  @keyframes coffee {
    0%,
    100% {
      height: 60%;
    }
    50% {
      height: 75%;
    }
  }

  .animate-steam {
    animation: steam 2s infinite ease-out;
  }

  .animate-coffee {
    animation: coffee 3s infinite ease-in-out;
  }
</style>
