<script lang="ts">
    import { _ } from 'svelte-i18n';
    import { timelineItems } from '../data/timeline';
    import { onMount } from 'svelte';
    
    let timelineRefs: HTMLElement[] = [];
    
    onMount(() => {
      // Add fade-in animation for timeline items
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      timelineRefs.forEach(item => {
        observer.observe(item);
      });
      
      return () => {
        timelineRefs.forEach(item => {
          observer.unobserve(item);
        });
      };
    });
  </script>
  
  <section id="timeline" class="bg-natural-100/50 dark:bg-natural-800/50 backdrop-blur-sm">
    <div class="section-container">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
        {$_('timeline.title')}
      </h2>
      
      <div class="max-w-3xl mx-auto">
        {#each timelineItems as item, i}
          <div 
            class="flex mb-8 opacity-0 translate-y-4 transition-all duration-700"
            style="transition-delay: {i * 100}ms"
            bind:this={timelineRefs[i]}
          >
            <div class="w-24 md:w-32 flex-shrink-0 text-right pr-4 text-natural-500 dark:text-natural-400 font-medium">
              {item.date.split('-')[0]}
            </div>
            
            <div class="w-10 flex-shrink-0 relative flex items-center justify-center">
              <div class="h-full w-px bg-primary-300 dark:bg-primary-700 absolute"></div>
              <div class="h-3 w-3 rounded-full bg-primary-500 dark:bg-primary-400 relative z-10"></div>
            </div>
            
            <div class="flex-grow pl-4">
              <div class="bg-white dark:bg-natural-900 p-4 rounded-lg shadow-sm">
                <p class="text-natural-800 dark:text-natural-200">{item.content}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>