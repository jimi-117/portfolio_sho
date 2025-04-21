<script lang="ts">
    import { _ } from 'svelte-i18n';
    
    const sections = [
      { id: 'hero', label: 'nav.about' },
      { id: 'works', label: 'nav.works' },
      { id: 'skills', label: 'nav.skills' },
      { id: 'timeline', label: 'nav.timeline' },
      { id: 'contributions', label: 'nav.contributions' },
    ];
    
    let activeSection = 'hero';
    let isMenuOpen = false;
    
    function setActiveSection(section: string) {
      activeSection = section;
      if (window.innerWidth < 768) {
        isMenuOpen = false;
      }
    }
    
    function toggleMenu() {
      isMenuOpen = !isMenuOpen;
    }
  </script>
  
  <nav class="fixed bottom-8 left-0 right-0 z-40 flex justify-center md:right-8 md:left-auto md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:flex-col">
    <div class="relative">
      <!-- Mobile menu button -->
      <button 
        class="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white shadow-lg"
        on:click={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        {#if isMenuOpen}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        {/if}
      </button>
      
      <!-- Navigation links -->
      <div class="md:block {isMenuOpen ? 'block' : 'hidden'}">
        <ul class="flex md:flex-col p-2 mt-2 md:mt-0 mb-2 md:mb-0 md:p-0 md:space-y-2 space-x-2 md:space-x-0 bg-white/90 dark:bg-natural-800/90 backdrop-blur-sm md:bg-transparent md:dark:bg-transparent md:backdrop-filter-none rounded-full shadow-lg md:shadow-none">
          {#each sections as { id, label }}
            <li>
              <a 
                href={`#${id}`} 
                class="flex items-center justify-center w-10 h-10 rounded-full
                  {activeSection === id 
                    ? 'bg-primary-600 text-white'
                    : 'bg-natural-100 dark:bg-natural-700 text-natural-600 dark:text-natural-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-300'
                  }
                  transition-all duration-200"
                on:click={() => setActiveSection(id)}
                aria-label={$_(label)}
              >
                {#if id === 'hero'}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                {:else if id === 'works'}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                  </svg>
                {:else if id === 'skills'}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                  </svg>
                {:else if id === 'timeline'}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                {:else if id === 'contributions'}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                  </svg>
                {/if}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </nav>