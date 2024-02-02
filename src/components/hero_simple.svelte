<script lang="ts">
  import { browser } from "$app/environment";

  import Simple_Banner from "./simple_banner.svelte";

  export let imagen: string; 
  export let titulo_arriba: string;
  export let titulo_abajo: string;
  export let descripcion: string; 
</script>

{#if browser}
  <Simple_Banner imagen={imagen} titulo_arriba={titulo_arriba} titulo_abajo={titulo_abajo} texto_inferior={descripcion}/>
{/if}
