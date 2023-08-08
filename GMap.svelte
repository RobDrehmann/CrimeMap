<script>
   let container;
   let map;
   export let Zoom ;
   export let Cords ;
   let center = new google.maps.LatLng(Cords.lat, Cords.lng);

   
   import { onMount } from 'svelte';
   
   onMount(async () => {
      console.log(typeof Cords.lat);
      console.log(typeof Cords.lat);
       console.log(center)
       map = new google.maps.Map(container, {
           Zoom,
           center,
           
       });
   });
</script>

<style>
    .full-screen {
        width: 89vw;
        height: 50vh;
    }
    </style>
    
    <div class="full-screen" bind:this={container}></div>