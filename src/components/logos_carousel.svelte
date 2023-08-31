<script lang="ts">
  import Carousel from "svelte-carousel";

  let carousel: any;
  let logos: Array<string> = [
    "clinica_calle_real.png",
    "consultores_smg.png",
    "g4s.png",
    "ladrillera_agua_caliente.png",
    "liceo_san_nicolas.png",
    "pollo_granjero.png",
    "pollolandia.png",
    "sinax.png",
    "veterinaria_dr_fernandez.png",
  ];
</script>

<Carousel
  bind:this={carousel}
  dots={false}
  arrows={false}
  autoplay={true}
  autoplayDuration={500}
  duration={2000}
  particlesToShow={6}
>
  {#each logos as logo}
    <div class="flex items-center justify-between px-12 my-20">
      <img src={`./images/clientes/logos/${logo}`} alt={logo} class="mx-8" />
    </div>
  {/each}
</Carousel>
