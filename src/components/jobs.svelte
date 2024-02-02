<script lang="ts">
  import { browser } from "$app/environment";
  import TrabajosCarousel from "./jobs_carousel.svelte";
</script>

<div class="text-2xl flex flex-col items-center pt-12">
  <h2 class="font-poppins font-semibold text-5xl my-2">
    Algunos de <span class="text-argold">nuestros trabajos</span>
  </h2>
  <div class="mt-8">
    <svg width="107" height="4" viewBox="0 0 107 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line
        x1="1.63921"
        y1="2.36079"
        x2="104.363"
        y2="2.36079"
        stroke="#B8A150"
        stroke-width="3.27841"
        stroke-linecap="round"
      />
    </svg>
  </div>

  <TrabajosCarousel />

</div>


