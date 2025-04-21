<script lang="ts">
  import { _ } from "svelte-i18n";

  const timeline = [
    { year: "2024", event: "Alternance at Laboratoire végétale Yves Rocher" },
    {
      year: "2023-2025",
      event: "Completed Simplon.co Grand Ouest: Ecole IA Microsoft by Simplon",
    },
    { year: "2015", event: "Moved to France" },
    { year: "1989", event: "Born in Okinawa, Japan" },
  ];

  const interests = [
    "Music",
    "Guitar",
    "SUP",
    "Trekking",
    "Photography",
    "Gaming",
    "Indie hacking",
  ];
</script>

<section
  id="about"
  class="min-h-screen bg-natural-100/50 dark:bg-natural-800/50 backdrop-blur-sm"
>
  <div class="section-container py-24">
    <div class="flex flex-col lg:flex-row gap-12">
      <div class="lg:w-2/3">
        <h2 class="text-3xl md:text-4xl font-bold mb-12">Bio</h2>

        <div class="space-y-8">
          {#each timeline as { year, event }}
            <div class="flex items-start space-x-8">
              <div class="w-24 flex-shrink-0">
                <span
                  class="text-xl font-bold text-primary-600 dark:text-primary-400"
                  >{year}</span
                >
              </div>
              <div class="flex-grow">
                <p class="text-lg">{event}</p>
              </div>
            </div>
          {/each}

          <div class="mt-16">
            <h3 class="text-2xl font-bold mb-4">I ♥</h3>
            <div class="flex flex-wrap gap-4">
              {#each interests as interest}
                <span
                  class="px-4 py-2 bg-white/50 dark:bg-natural-900/50 rounded-full"
                >
                  {interest}
                </span>
              {/each}
            </div>
          </div>
        </div>
      </div>

      <div class="lg:w-1/3 space-y-8">
        <div
          class="bg-white dark:bg-natural-900 rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src="/images/lagacilly-team.jpg"
            alt="Yves Rocher, la gacily"
            class="w-full h-half"
          />
        </div>
      </div>
    </div>
  </div>
</section>
