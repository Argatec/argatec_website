<script lang="ts">
  export let description: string;
  export let image: string;

  let image_route: string = `./images/${image}.png`;
</script>

<div class="flex px-12 items-center shadow-xl rounded-3xl mb-12 py-6 space-y-4 mx-6 max-w-lg h-40">
  <img src={image_route} alt={image} class="h-16 self-center" />
  <p class="font-poppins text-lg font-semibold pl-10">{description}</p>
</div>

<style>
  /* styles go here */
</style>
