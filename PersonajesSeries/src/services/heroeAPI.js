import axios from 'axios'; // importa la librería axios para realizar peticiones HTTP

const baseUrl = import.meta.env.VITE_BASE_URL; // variable que trae los datos seguros de .env

export const fetchPersonajes = async (name) => {
  const url = `${baseUrl}?name=${name}`; // construye la URL con el nombre del personaje y la API key
  const response = await axios.get(url);
  return response.data;
};
