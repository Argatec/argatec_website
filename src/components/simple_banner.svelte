<script lang="ts">
  export let titulo_arriba: string;
  export let titulo_abajo: string;
  export let texto_inferior: string;
  export let imagen: string;

  let image_path = `/images/${imagen}.png`;
</script>

<div
  class="flex flex-col items-center justify-center space-y-12 px-12 text-white bg-gray-500 bg-cover h-[600px]"
  style="background-image: url({image_path}) "
>
  <p class="text-[72px] font-inter font-bold leading-normal text-center">
    {titulo_arriba} <br />
    {titulo_abajo}
  </p>
  <div class="">
    <p class="text-inter text-xl text-center">{texto_inferior}</p>
  </div>
  <div class="w-full space-x-4 items-center flex justify-center">
    <a class="flex justify-center w-72 text-lg py-4 rounded-full font-bold font-inter bg-argray max-w-xs" href="/" target="_blank"
      >Contáctenos</a
    >
    <a class="flex justify-center w-72 text-lg py-4 rounded-full font-bold font-inter bg-white text-black max-w-xs" href="/" target="_blank"
      >Nuestros Servicios</a
    >
  </div>
</div>
