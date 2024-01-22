<script lang="ts">
    import { browser } from "$app/environment";
    import Carousel from "svelte-carousel";
    import Hero_Banner from "./multiple_banner.svelte";
  
  
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
    const handleTargetClick = (index:number) => {
      currentIndex = index;
      carousel.goTo(index);
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
    <div class=" w-full flex space-x-4 items-center justify-center relative top-[-30px] md:top-[-50px]">
      {#each banners as puntito, i}
        {#if i == currentIndex}
          <button on:click={() => handleTargetClick(i)}>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_32_623)">
                <circle cx="11.5" cy="7.5" r="7.5" fill="#B8A150" />
              </g>
              <defs>
                <filter
                  id="filter0_d_32_623"
                  x="0"
                  y="0"
                  width="23"
                  height="23"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_32_623" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_32_623" result="shape" />
                </filter>
              </defs>
            </svg>
          </button>
        {:else}
        <button on:click={() => handleTargetClick(i)}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7.5" cy="7.5" r="7.5" fill="#C4C4C4" />
            </svg>
          </button>
        {/if}
      {/each}
    </div>
  
  