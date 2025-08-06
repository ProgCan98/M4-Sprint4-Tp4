// Importa hooks y funciones necesarias
import { useState, useEffect } from 'react';
import { fetchPersonajes } from '../../services/heroeAPI'; // Función para obtener personajes
import { PersonajeContext } from './personajeContextUtils'; // Contexto creado
import { toast } from 'react-toastify'; // Notificaciones

// Proveedor del contexto
export const PersonajeProvider = ({ children }) => {
  // Estado para los datos de los personajes
  const [personajeData, setPersonajeData] = useState(null);
  // Estado para indicar si se está cargando
  const [loading, setLoading] = useState(true);
  // Estado para manejar errores
  const [error, setError] = useState(null);
  // Estado para los personajes favoritos, inicializado desde localStorage
  const [favoritos, setFavoritos] = useState(() => {
    const storedFavoritos = localStorage.getItem('favoritos');
    return storedFavoritos ? JSON.parse(storedFavoritos) : [];
  });
  // Estado para controlar la visibilidad del modal de favoritos
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);
  // Estado para el tema, inicializado desde localStorage
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme : 'light';
  });

  // Carga datos de personaje desde localStorage al iniciar
  useEffect(() => {
    const storedData = localStorage.getItem('personajeData');
    if (storedData) {
      setPersonajeData(JSON.parse(storedData));
      setLoading(false);
    }
  }, []);

  // Guarda personajeData en localStorage cuando cambia
  useEffect(() => {
    if (personajeData) {
      localStorage.setItem('personajeData', JSON.stringify(personajeData));
    }
  }, [personajeData]);

  // Guarda favoritos en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  // Aplica el tema y lo guarda en localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme; // Aplica la clase al elemento HTML
  }, [theme]);

  // Función para buscar personajes
  const getPersonaje = async (name) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchPersonajes(name); // Llama a la API
      setPersonajeData(response); // Actualiza los datos
      toast.success('¡Personajes encontrados con éxito!', {
        // Notificación de éxito
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      setError(err.message); // Maneja errores
      toast.error('Error al buscar personajes: ' + err.message, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setLoading(false); // Finaliza el estado de carga
    }
  };

  // Agrega un personaje a favoritos
  const agregarFavorito = (personaje) => {
    setFavoritos((prev) => {
      if (!prev.some((fav) => fav.id === personaje.id)) {
        // Evita duplicados
        return [...prev, personaje];
      }
      return prev;
    });
  };

  // Elimina un personaje de favoritos
  const eliminarFavorito = (id) => {
    setFavoritos((prev) => prev.filter((fav) => fav.id !== id));
  };

  // Alterna la visibilidad del modal de favoritos
  const toggleFavoritos = () => {
    setMostrarFavoritos((prev) => !prev);
  };

  // Limpia los datos de personajes
  const limpiarPersonajes = () => {
    setPersonajeData(null);
    localStorage.removeItem('personajeData');
    setError(null);
    setLoading(false);
  };

  // Alterna entre tema claro y oscuro
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Provee el contexto a los componentes hijos
  return (
    <PersonajeContext.Provider
      value={{
        personajeData,
        loading,
        error,
        getPersonaje,
        favoritos,
        agregarFavorito,
        eliminarFavorito,
        mostrarFavoritos,
        toggleFavoritos,
        limpiarPersonajes,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </PersonajeContext.Provider>
  );
};
