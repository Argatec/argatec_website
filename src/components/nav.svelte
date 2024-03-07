<script lang="ts">
  export let logo: string;
</script>

<nav class=" text-lg bg-black text-white z-20 font-poppins flex justify-center">
  <div class="flex items-center grow max-w-9xl">
    <img src={logo} alt="Argatec" class="w-32 my-3" />
    <div class="space-x-12 pr-24 flex items-center grow justify-end">
      <a class="" href="/">Inicio</a>
      <!-- <a href="/seguridad">Seguridad</a> -->
      <a href="/soluciones_tecnologicas">Soluciones Tecnológicas</a>
      <!-- <a href="/equipo_informatico">Equipo Informático</a> -->
    </div>
  </div>
</nav>
