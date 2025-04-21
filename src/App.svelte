<script lang="ts">
  import { onMount } from "svelte";
  import "./app.css";
  import "./i18n";

  import Loading from "./components/Loading.svelte";
  import Header from "./components/Header.svelte";
  import Navigation from "./components/Navigation.svelte";
  import Hero from "./components/Hero.svelte";
  import About from "./components/About.svelte";
  import Works from "./components/Works.svelte";
  import Skills from "./components/Skills.svelte";
  import Contributions from "./components/Contributions.svelte";
  import Contact from "./components/Contact.svelte";
  import Footer from "./components/Footer.svelte";

  let isLoading = true;

  onMount(() => {
    document.title = "Sho Miyagi | Portfolio";
    setTimeout(() => {
      isLoading = false;
    }, 2500);
  });
</script>

{#if isLoading}
  <Loading />
{:else}
  <div class="app">
    <Header />
    <Navigation />

    <main>
      <Hero />
      <About />
      <Works />
      <Skills />
      <Contributions />
      <Contact />
    </main>

    <Footer />
  </div>
{/if}
