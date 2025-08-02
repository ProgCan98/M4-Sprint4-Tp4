// http:gateway.marvel.com:443/v1/public/characters?apikey=3e254cc1ee237142ab7b045ee75a282d
// key private: 3f1b0a1f01a93f4a049c04d98762b38c896fcfd7
// key public: 3e254cc1ee237142ab7b045ee75a282d
// ts: 1
// md5: 13f1b0a1f01a93f4a049c04d98762b38c896fcfd73e254cc1ee237142ab7b045ee75a282d
// hash: 42846908569d7a5e002f071ecd3f1da0
import axios from 'axios'; // importa la librería axios para realizar peticiones HTTP

const baseUrl = import.meta.env.VITE_BASE_URL; // variable que trae los datos seguros de .env

export const fetchPersonajes = async (name) => {
  const url = `${baseUrl}?q=${name}`; // construye la URL para la petición a la API de rickandmorty
  const response = await axios.get(url); // realiza la petición a la API de rickandmorty
  return response.data; // devuelve los datos de la respuesta
};
