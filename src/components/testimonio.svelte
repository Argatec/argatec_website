<script lang="ts">
    export let nombre:string = "nombre";
    export let testimonio:string = "testimonio";
    export let imagen:string = "";
    export let fecha:string = "fecha";
</script>
<div class="w-32 items-center p-12 flex space-x-6">
    <img src={imagen} alt={nombre}>
    <div class="space-y-4">
        <h3 class="font-lato font-bold text-2xl">{nombre}</h3>
        <p class="font-lato text-lg">{testimonio}</p>
        <p class="text-xs">{fecha}</p>
    </div>

</div>
