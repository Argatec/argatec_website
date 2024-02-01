<script lang="ts">
  import Beneficios from "./beneficios.svelte";

  let lista_seguridad: Array<string> = [
    "Sistemas de alarmas y monitoreo",
    "Cámaras de seguridad y vigilancia",
    "Control de acceso y seguridad biométrica",
  ];
  let lista_tecnologia: Array<string> = [
    "Mantenimiento de equipos, servidores e impresoras",
    "Redes, cableado estructurado y enlaces inalámbricos",
    "Servicios de cloud y telefonía IP",
    "Ciberseguridad y protección de datos",
  ];
  let lista_equipo: Array<string> = [
    "Laptops y computadoras de última generación: para gaming, oficina y hogar",
    "Celulares y tablets de alto rendimiento",
    "Amplia selección de accesorios tecnológicos",
  ];
</script>

<div class="flex pb-12 justify-center relative">
  <div class="grow flex flex-col  max-w-9xl">
    <div class="flex items-center justify-center relative">
      <div class="flex flex-col items-center m-12 grow">
        <div class="font-poppins text-5xl font-semibold text-center">
          Nuestros <span class="text-argold">servicios</span>
        </div>
        <div class="h-[5px] w-28 bg-argold mt-10" />
      </div>

    </div>
    <div class="flex justify-center">
      <Beneficios
        list={lista_seguridad}
        title_top="Seguridad"
        title_bottom="Electrónica Integral"
        image="seguridad"
      />
      <Beneficios
        list={lista_tecnologia}
        title_top="Soluciones en"
        title_bottom="Tecnología Informática"
        image="tecnologia"
      />
      <Beneficios
        list={lista_equipo}
        title_top="Venta de Equipo"
        title_bottom="Informatico"
        image="equipo"
      />
    </div>
  </div>
</div>

<style>
</style>
