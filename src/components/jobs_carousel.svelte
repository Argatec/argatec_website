<script lang="ts">
  import Carousel from "svelte-carousel";
  import { browser } from "$app/environment";


  let trabajos: Array<Array<string>> = [
    [
      "./images/trabajos/trabajo1.png"],
      [
        "./images/trabajos/trabajo1.png"],
      [
        "./images/trabajos/trabajo1.png"],
      [
        "./images/trabajos/trabajo1.png"],

  ];

  let carousel: any;
  let currentIndex: number = 0;
  let carousel_length: number = trabajos.length;

  const handleNextClick = () => {
    currentIndex == carousel_length - 1 ? (currentIndex = 0) : currentIndex++;
    carousel.goToNext();
  };
  const handlePreviousClick = () => {
    currentIndex == 0 ? (currentIndex = carousel_length - 1) : currentIndex--;
    carousel.goToPrev();
  };
  const handleTargetClick = (index: number) => {
    currentIndex = index;
    carousel.goTo(index);
  };
</script>


<div class="flex">
  <button class="" on:click={handlePreviousClick}>
    <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M36.25 14.5L21.75 29L36.25 43.5"
        stroke="#B8A150"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
  
  <div class="max-w-5xl mt-6 mrounded-2xl trabajo rounded-2xl">
  
    {#if browser}
      <Carousel bind:this={carousel} arrows={false} dots={false} {handleNextClick} {handlePreviousClick}>
        {#each trabajos as testimonio}
        <img src={testimonio[0]} alt="trabajo" class="rounded-2xl " />
        {/each}
      </Carousel>
    {/if}
  </div>
  
  <button on:click={handleNextClick}>
    <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.75 43.5L36.25 29L21.75 14.5"
        stroke="#B8A150"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</div>


<div class="flex mt-12">


  <div class="flex space-x-4 items-center mx-12">
    {#each trabajos as puntito, i}
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

</div>

<style>
    .trabajo {
      box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.25);
    }
  </style>