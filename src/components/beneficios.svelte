<script lang="ts">
    export let title_top: string;
    export let title_bottom: string;
    export let list: Array<string>;
    export let image: string;

   let image_route:string = `./images/${image}.png`; 
  </script>
  
  <div class="flex flex-col shadow-2xl rounded-3xl mx-6 py-6 space-y-4 max-w-sm">
   <img src={image_route} alt={image} class="h-40 self-center">
    <h4 class="font-poppins text-xl text-center px-12 font-semibold">{title_top}<br>{title_bottom}</h4>
    <ul class="list-disc pl-20 pr-12 text-base font-poppins">
        {#each list as item}
            <li>{item}</li>
        {/each}

    </ul>
    <div class="pr-8 flex justify-end grow items-end">
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2332 0C5.92292 0 0 5.86988 0 13.1147C0 20.3595 5.92292 26.2294 13.2332 26.2294C20.5435 26.2294 26.4664 20.3595 26.4664 13.1147C26.4664 5.86988 20.5435 0 13.2332 0ZM20.917 14.5954C20.917 14.9444 20.6288 15.23 20.2767 15.23H15.3676V20.0951C15.3676 20.4441 15.0794 20.7297 14.7273 20.7297H11.7391C11.3869 20.7297 11.0988 20.4441 11.0988 20.0951V15.23H6.18972C5.83754 15.23 5.5494 14.9444 5.5494 14.5954V11.634C5.5494 11.285 5.83754 10.9994 6.18972 10.9994H11.0988V6.13429C11.0988 5.78527 11.3869 5.49971 11.7391 5.49971H14.7273C15.0794 5.49971 15.3676 5.78527 15.3676 6.13429V10.9994H20.2767C20.6288 10.9994 20.917 11.285 20.917 11.634V14.5954Z" fill="#B8A150"/>
            </svg>
            
    </div>
</div> 
  
  <style>
    /* styles go here */
  </style>