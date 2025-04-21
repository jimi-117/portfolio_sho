<script lang="ts">
    import { _ } from 'svelte-i18n';
    import { onMount } from 'svelte';
    import { fetchGitHubContributions } from '../lib/github';
    import type { ContributionDay } from '../types';
    
    let contributionData: ContributionDay[] = [];
    let loading = true;
    let error = false;
    
    // Only show last 3 months of contributions
    $: recentContributions = contributionData.slice(-84); // 12 weeks = ~3 months
    
    // Group contributions by week (7 days)
    $: contributionsByWeek = [];
    $: {
      for (let i = 0; i < recentContributions.length; i += 7) {
        contributionsByWeek.push(recentContributions.slice(i, i + 7));
      }
    }
    
    // Group contributions by month for display
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Determine month labels
    $: monthLabels = [];
    $: {
      let currentMonth = -1;
      recentContributions.forEach((day, index) => {
        const date = new Date(day.date);
        const month = date.getMonth();
        
        if (month !== currentMonth && index % 7 === 0) {
          currentMonth = month;
          monthLabels.push({ index: Math.floor(index / 7), month: months[month] });
        }
      });
    }
    
    // Function to determine color based on contribution count
    function getContributionColor(count: number) {
      if (count === 0) return 'bg-natural-200 dark:bg-natural-700';
      if (count <= 2) return 'bg-success-200 dark:bg-success-900';
      if (count <= 4) return 'bg-success-300 dark:bg-success-800';
      if (count <= 6) return 'bg-success-400 dark:bg-success-700';
      return 'bg-success-500 dark:bg-success-600';
    }
    
    onMount(async () => {
      try {
        contributionData = await fetchGitHubContributions();
      } catch (e) {
        error = true;
        console.error('Failed to fetch GitHub contributions:', e);
      } finally {
        loading = false;
      }
    });
  </script>
  
  <section id="contributions">
    <div class="section-container">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
        {$_('contributions.title')}
      </h2>
      
      {#if loading}
        <div class="flex justify-center items-center h-48">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        </div>
      {:else if error}
        <div class="text-center text-error-600 dark:text-error-400">
          Failed to load contribution data
        </div>
      {:else}
        <div class="overflow-x-auto pb-4">
          <div class="w-full max-w-3xl mx-auto">
            <!-- Month labels -->
            <div class="flex mb-2">
              <div class="w-12"></div>
              <div class="flex-1 flex">
                {#each monthLabels as { index, month }}
                  <div 
                    class="text-natural-500 dark:text-natural-400 text-sm"
                    style="margin-left: {index * 16}px;"
                  >
                    {month}
                  </div>
                {/each}
              </div>
            </div>
            
            <!-- Contribution grid -->
            <div class="flex">
              <!-- Weekday labels -->
              <div class="w-12 flex flex-col justify-between text-right pr-2">
                <div class="h-3 text-xs text-natural-500 dark:text-natural-400">Mon</div>
                <div class="h-3 text-xs text-natural-500 dark:text-natural-400">Wed</div>
                <div class="h-3 text-xs text-natural-500 dark:text-natural-400">Fri</div>
              </div>
              
              <!-- Contribution cells -->
              <div class="flex-1 flex space-x-1">
                {#each contributionsByWeek as week}
                  <div class="flex flex-col space-y-1">
                    {#each week as day}
                      <div 
                        class="h-3 w-3 rounded-sm {getContributionColor(day.count)} transition-colors hover:ring-2 ring-natural-400 dark:ring-natural-600"
                        title="{day.date}: {day.count} contributions"
                      ></div>
                    {/each}
                  </div>
                {/each}
              </div>
            </div>
            
            <!-- Legend -->
            <div class="flex justify-end mt-4 items-center text-sm text-natural-500 dark:text-natural-400">
              <span class="mr-2">Less</span>
              <div class="flex space-x-1">
                <div class="h-3 w-3 rounded-sm bg-natural-200 dark:bg-natural-700"></div>
                <div class="h-3 w-3 rounded-sm bg-success-200 dark:bg-success-900"></div>
                <div class="h-3 w-3 rounded-sm bg-success-300 dark:bg-success-800"></div>
                <div class="h-3 w-3 rounded-sm bg-success-400 dark:bg-success-700"></div>
                <div class="h-3 w-3 rounded-sm bg-success-500 dark:bg-success-600"></div>
              </div>
              <span class="ml-2">More</span>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </section>