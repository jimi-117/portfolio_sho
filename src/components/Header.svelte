<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { locale } from '../i18n';
    import { _ } from 'svelte-i18n';
    
    let datetime = '';
    let isDarkMode = false;
    let interval: number;
    
    function formatDatetime() {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      datetime = now.toLocaleDateString($locale, options);
    }
    
    function toggleTheme() {
      isDarkMode = !isDarkMode;
      document.documentElement.classList.toggle('dark', isDarkMode);
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }
    
    function toggleLanguage() {
      $locale = $locale === 'en' ? 'fr' : 'en';
      localStorage.setItem('language', $locale);
      formatDatetime(); // Update datetime format when language changes
    }
    
    onMount(() => {
      const savedTheme = localStorage.getItem('theme');
      isDarkMode = savedTheme === 'dark';
      document.documentElement.classList.toggle('dark', isDarkMode);
      
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
        $locale = savedLanguage;
      }
      
      formatDatetime();
      interval = setInterval(formatDatetime, 60000) as unknown as number;
    });
    
    onDestroy(() => {
      clearInterval(interval);
    });
  </script>
  
  <header class="fixed top-0 left-0 right-0 z-50 py-4 transition-all backdrop-blur-sm bg-natural-50/80 dark:bg-natural-900/80 border-b border-natural-200 dark:border-natural-800">
    <div class="section-container flex justify-between items-center">
      <h2 class="font-display text-xl sm:text-2xl font-semibold">
        <a href="#hero" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
          Sho Miyagi
        </a>
      </h2>
      
      <div class="flex items-center space-x-4 sm:space-x-6">
        <span class="hidden sm:inline-block text-sm text-natural-600 dark:text-natural-400">{datetime}</span>
        
        <button 
          class="p-2 rounded-full text-natural-600 dark:text-natural-400 hover:bg-natural-200 dark:hover:bg-natural-800 transition-colors"
          on:click={toggleLanguage}
          aria-label={$_('header.language')}
        >
          <span class="text-sm font-medium">{$locale === 'en' ? 'FR' : 'EN'}</span>
        </button>
        
        <button 
          class="p-2 rounded-full text-natural-600 dark:text-natural-400 hover:bg-natural-200 dark:hover:bg-natural-800 transition-colors"
          on:click={toggleTheme}
          aria-label={$_('header.theme')}
        >
          {#if isDarkMode}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          {:else}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          {/if}
        </button>
      </div>
    </div>
  </header>