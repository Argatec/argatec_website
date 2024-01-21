<script lang="ts">
  import { whatsapp_link } from "$lib/links";

  let logo_grande: string = "/images/logo_grande.png";
</script>

<div class="bg-black flex text-white py-20 pl-28">
  <div class="max-w-9xl">
    <div class="h-[5px] w-32 bg-argold" />
    <h2 class="font-poppins font-bold text-6xl leading-normal py-8">
      Su seguridad <br /> <span class="text-argold">no</span> es un juego.
    </h2>
    <p class="font-inter text-2xl leading-loose tracking-wider mb-10">
      Con más de una década de experiencia en el mercado, Argatec es una empresa en constante expansión que se ha
      consolidado como líder en soluciones tecnológicas y seguridad electrónica. Nuestra misión es proteger los activos
      de nuestros clientes y garantizar el funcionamiento eficiente de sus sistemas.
    </p>
    <a
      href={$whatsapp_link}
      target="_blank"
      class="px-10 my-16 py-3 rounded-lg text-black
         font-poppins font-semibold bg-argold">Conctáctenos</a
    >
  </div>
  <img class="h-[560px] ml-48" src={logo_grande} alt="" />
</div>
