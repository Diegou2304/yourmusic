<template lang="pug">
  li
    h2: a(:href="artist.url" target="_blank") {{artist.name}}
    img(:src="artist.image[2]['#text']")


</template>

<script>
export default {
    name:'performer',
    //Esto le pasamos en el App.vue con el V-bind que hace referencia a cada artista
   //Nombre de la propiedad del componente
    props:['artist']




}





</script>
<style lang="stylus">
li
  display block
  margin 10px 0



</style>



