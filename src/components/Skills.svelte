<script lang="ts">
    import { _ } from 'svelte-i18n';
    import Icon from '@iconify/svelte';
    import { skillCategories } from '../data/skills';
  </script>
  
  <section id="skills">
    <div class="section-container">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
        {$_('skills.title')}
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each skillCategories as category}
          <div class="bg-white/80 dark:bg-natural-800/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            <h3 class="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">
              {$_(category.name)}
            </h3>
            
            <div class="flex flex-wrap gap-3">
              {#each category.skills as skill}
                <div class="flex items-center space-x-2 px-3 py-2 bg-natural-100 dark:bg-natural-700 rounded-md text-natural-700 dark:text-natural-300 transition-all hover:scale-105">
                  <Icon icon={skill.icon} class="w-5 h-5" />
                  <span>{skill.name}</span>
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>