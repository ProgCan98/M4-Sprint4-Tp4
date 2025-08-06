import axios from 'axios'; // importa la librería axios para realizar peticiones HTTP

const baseUrl = import.meta.env.VITE_BASE_URL; // variable que trae los datos seguros de .env

// Función asíncrona que realiza una petición GET para buscar personajes por nombre
export const fetchPersonajes = async (name) => {
  const url = `${baseUrl}?name=${name}&status=dead`; // construye la URL con el nombre del personaje y la API key
  const response = await axios.get(url); // Realiza la petición GET usando axios y espera la respuesta
  return response.data;
};
