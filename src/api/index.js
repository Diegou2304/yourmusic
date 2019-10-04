//Encargado de hacer los request de la api

import config from './config'


const API_KEY=config.apikey;
const URL= 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=022e8f0faf8f7eab01c4ad1794d8494f&format=json';

export default function getArtists(country)
{
  const url=URL.replace(':country',country);
  //fecth nos devuelve varios objetos uno de ellos es json

  return fetch(url)
    //La promesa recibe una respuesta
    .then(res =>res.json()
      //Otra promesa con los resultados
      //Nos devuelve el array con todos los artistas
      .then(json => json.topartists.artist)
    )


}
