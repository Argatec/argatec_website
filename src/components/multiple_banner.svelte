<script lang="ts">
  export let handlePreviousClick: () => void;
  export let handleNextClick: () => void;
  export let texto_arriba: string;
  export let texto_abajo: string;
  export let imagen: string;
</script>

<div
  class={`hero flex px-12 bg-gradient-to-b/ from-black to-transparent text-white
justify-center bg-gray-500 bg-cover items-center h-[500px] ${imagen}`}
>
  <div class="flex w-full justify-center max-w-9xl">
    <button on:click={handlePreviousClick}>
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
    <div class="grow px-12 relative top-10">
      <p class="text-[76px] font-inter font-bold leading-normal">
        {texto_arriba} <br />
        {texto_abajo}
      </p>
      <a href="/"
        ><p class="font-montserrat font-bold text-3xl py-4">Leer más</p></a
      >
    </div>
    <button on:click={handleNextClick}>
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
  .hero {
    /* box-shadow: inset 0px 10px 10px #000; */
    background-image: url('/images/hero/macbook.png');
  }

  .macbook {
    background-image: url('/images/hero/macbook.png');
  }

  .redes {
    background-image: url('/images/hero/redes.png');
    background-position: bottom;
  }

  .seguridad {
    background-image: url('/images/hero/seguridad.png');
  }
</style>
