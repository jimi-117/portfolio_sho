<script lang="ts">
  import { _ } from "svelte-i18n";
  import Icon from "@iconify/svelte";
</script>

<section
  id="contact"
  class="bg-natural-100/50 dark:bg-natural-800/50 backdrop-blur-sm py-24"
>
  <div class="section-container">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-8">{$_("contact.me")}</h2>

      <div class="flex justify-center space-x-8">
        <a
          href="mailto:sho.jimi117@gmail.com"
          class="flex items-center space-x-2 text-natural-600 dark:text-natural-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <Icon icon="mdi:email" class="w-6 h-6" />
          <span>Email</span>
        </a>

        <a
          href="https://www.linkedin.com/in/sho-miyagi-jimi1989/"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center space-x-2 text-natural-600 dark:text-natural-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <Icon icon="mdi:linkedin" class="w-6 h-6" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/jimi-117"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center space-x-2 text-natural-600 dark:text-natural-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <Icon icon="mdi:github" class="w-6 h-6" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  </div>
</section>
