<script lang="ts">
  import { browser } from "$app/environment";
  import Carousel from "svelte-carousel";
  import Hero_Banner from "./hero_banner.svelte";


  let carousel: any;

  let banners: Array<Array<string>> = [
    ['seguridad', "Seguridad", "Electrónica Integral"],
    ['macbook', "Venta de Equipo", "Tecnológico"],
    ['redes', "Soluciones en", "Tecnologia Informática"],
  ];
  let carousel_length: number = banners.length;

  let currentIndex: number = 0;

  const handleNextClick = () => {
    currentIndex == carousel_length - 1 ? (currentIndex = 0) : currentIndex++;
    carousel.goToNext();
  };
  const handlePreviousClick = () => {
    currentIndex == 0 ? (currentIndex = carousel_length - 1) : currentIndex--;
    carousel.goToPrev();
  };
</script>


  {#if browser}
    <Carousel bind:this={carousel} arrows={false} dots={false}>
      {#each banners as banner}
        <Hero_Banner imagen={banner[0]} handleNextClick={handleNextClick}
        handlePreviousClick={handlePreviousClick} texto_arriba={banner[1]} texto_abajo={banner[2]}/>
      {/each}
    </Carousel>
  {/if}


