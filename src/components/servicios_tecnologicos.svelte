<script lang="ts">
  import ServicioTecnologico from "./servicio_tecnologico.svelte";
</script>

<div class="flex pb-12 justify-center relative">
  <div class="grow flex flex-col  max-w-9xl ">
    <div class="flex items-center justify-center relative">
      <div class="flex flex-col items-center m-12 grow">
        <div class="font-poppins text-5xl font-semibold text-center">
          Nuestros <span class="text-argold">servicios de TI</span>
        </div>
        <div class="h-[5px] w-28 bg-argold mt-10" />
      </div>

    </div>
    <div class="flex justify-evenly">
      <div class="">
        <ServicioTecnologico
          description="Mantenimiento de equipos, servidores e impresoras."
          image="monitor"
        />
        <ServicioTecnologico
          description="Redes, cableado estructurado y enlaces inalámbricos"
          image="network"
        />
      </div>
      <div>
        <ServicioTecnologico
        description="Redes, cableado estructurado y enlaces inalámbricos"
        image="cloud"
      />

        <ServicioTecnologico
        description="Ciberseguridad y protección de datos"
        image="security"
            />
      </div>
    </div>
  </div>
</div>

<style>
</style>
