<script lang="ts">
  import { browser } from "$app/environment";

  import Simple_Banner from "./simple_banner.svelte";

  let banner: Array<string> = ["soluciones_tecnologicas", "Soluciones en Tecnología", "Informática", "TEXTO PENDIENTE PERO ES ALGO AHI LARGO QUE DESCRIBE UNAS WEAS MISTICAS DE LAS SOLUCIONES EN TECNOLOGIA"];
</script>

{#if browser}
  <Simple_Banner imagen={banner[0]} titulo_arriba={banner[1]} titulo_abajo={banner[2]} texto_inferior={banner[3]}/>
{/if}
