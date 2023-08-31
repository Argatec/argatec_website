<script lang="ts">
  let macbook: string = "/images/macbook.png";
  let camera: string = "/images/camera.png";
  let router: string = "/images/router.png";
</script>

<div
  class="hero z-20 px-12 bg-gradient-to-b/ from-black to-transparent text-white flex flex-col
justify-center bg-macbook bg-bottom bg-no-repeat bg-cover h-[630px] items-center"
>
  <div class="flex w-full justify-center max-w-9xl">
    <button>
      <svg
        width="144"
        height="144"
        viewBox="0 0 144 144"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M84.0189 47.7444L54.221 71.5827L84.0189 95.421"
          stroke="#FFFDFD"
          stroke-width="7.92761"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <div class="grow px-12 relative top-10 ">
      <p class="text-[76px] font-inter font-bold leading-normal">
        Venta de Equipo <br /> Tecnológico
      </p>
      <a href="/"
        ><p class="font-montserrat font-bold text-3xl py-4">Leer más</p></a
      >
    </div>
    <button>
      <svg
        width="144"
        height="144"
        viewBox="0 0 144 144"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M59.6124 47.7444L89.4103 71.5827L59.6124 95.421"
          stroke="#FFFDFD"
          stroke-width="7.92761"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</div>

<style>
  .hero{
    box-shadow: inset 0px 3em 3em #000;
  }
</style>