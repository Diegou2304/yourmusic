<template lang="pug">
  #app
    img(src='./assets/logo.png')
    h1 Your Music
    //ul lista no ordenada de items
      //Aqui lo linkeamos con el atributo de data para que agarre el valor
    select(v-model="selectedCountry")
      //Por cada conuntry, el atributo value es del option que esta ligado con el valor, no con el nombre
      option(v-for="country in countries" v-bind:value="country.value") {{country.name}}
    spinner(v-show="cargando" )
    ul
      //Elemento de la lista
        //Hace referencia a todos los artists
      performer(v-for="artist in artists"
        v-bind:artist="artist" v-bind:key="artist.mbid")
       //V-bind Hace referencia al artist del v-for


</template>

<script>
import getArtists from "./api";
import Performer from "./components/Performer";
import Spinner from "./components/Spinner";
export default {
  name: 'app',
    components: {Performer,Spinner},
    data () {
    return {
      artists:[],
        countries:[
            {name:'Argentina',value:'argentina'},
            {name:'Bolivia',value:'bolivia'},

            {name:'Colombia',value:'colombia'}


        ],
        cargando:true,
        //Un simpe atributo al cual va ir ligado la respuesta del combo box
        selectedCountry:'argentina'
    }
  },
    methods:
        {
            refreshArtists(){
                //Hace referencia al componente no al global
                const self = this;
                this.cargando=true;
                this.artists=[];

                //Queremos obtener los artistas
                //Este valor cambia con la seleccion del option porque esta v-model en el
                getArtists(this.selectedCountry)
                //De alguna forma ese function funciones
                //Dentro del resultado que nos da el metodo
                //y la variable de parametro lleva los resultados
                    .then(function (artistas){
                        self.cargando=false;
                        self.artists=artistas;
                    })
            }
        },
    //Cunando fue ejecutado
    mounted: function()
    {


    },
    watch:
        {
            //Esta atento a los cambios
            selectedCountry()
            {
                this.refreshArtists()
            }

        }

}
</script>

<style lang="stylus">
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #000000 !important
    margin-top 60px
  h1, h2
    font-weight normal
  ul
    list-style-type none
    padding 0
  li
    display inline-block
    margin 0 10px
  a
    color #42b983

</style>
