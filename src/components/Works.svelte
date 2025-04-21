<script lang="ts">
  import { _ } from "svelte-i18n";
  import { projects } from "../data/projects";
  import Icon from "@iconify/svelte";
</script>

<section
  id="works"
  class="bg-natural-100/50 dark:bg-natural-800/50 backdrop-blur-sm"
>
  <div class="section-container">
    <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
      {$_("works.title")}
    </h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {#each projects as project}
        <div
          class="group bg-white dark:bg-natural-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div class="flex flex-col">
            <div class="w-full h-64 overflow-hidden relative">
              {#if project.image}
                <img
                  src={project.image}
                  alt={$_(project.title)}
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              {:else}
                <div
                  class="w-full h-full bg-gradient-to-br from-primary-500/90 to-secondary-500/90 flex items-center justify-center"
                >
                  <Icon icon={project.icon} class="w-16 h-16 text-white" />
                </div>
              {/if}
            </div>

            <div class="p-6">
              <h3
                class="text-xl font-semibold mb-3 text-natural-900 dark:text-natural-100"
              >
                {$_(project.title)}
              </h3>

              <p class="text-natural-600 dark:text-natural-400 mb-4">
                {$_(project.description)}
              </p>

              <div class="flex justify-end">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-4 py-2 bg-natural-200 dark:bg-natural-700 rounded-md text-natural-700 dark:text-natural-300 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                >
                  <Icon icon="mdi:github" class="w-5 h-5 mr-2" />
                  {$_("works.viewProject")}
                </a>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
