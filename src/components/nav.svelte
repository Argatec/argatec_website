<script lang="ts">
  export let logo: string;
</script>

<nav class=" text-2xl bg-black text-white z-20 font-bold flex justify-center">
  <div class="flex items-center grow max-w-9xl">
    <img src={logo} alt="Argatec" class="w-48" />
    <div class="space-x-12 pr-24 flex items-center py-16 grow justify-end">
      <a class="" href="/">Inicio</a>
      <a href="/seguridad">Seguridad</a>
      <a href="/soluciones_tecnologicas">Soluciones Tecnológicas</a>
      <a href="/equipo_informatico">Equipo Informático</a>
    </div>
  </div>
</nav>
