import { useState, useEffect } from 'react';
import { fetchPersonajes } from '../../services/heroeAPI';
import { PersonajeContext } from './personajeContextUtils';
import { toast } from 'react-toastify';

export const PersonajeProvider = ({ children }) => {
  const [personajeData, setPersonajeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favoritos, setFavoritos] = useState(() => {
    const storedFavoritos = localStorage.getItem('favoritos');
    return storedFavoritos ? JSON.parse(storedFavoritos) : [];
  });
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme : 'light';
  });

  // Recuperar datos de personajeData de localStorage al cargar la página
  useEffect(() => {
    const storedData = localStorage.getItem('personajeData');
    if (storedData) {
      setPersonajeData(JSON.parse(storedData));
      setLoading(false);
    }
  }, []);

  // Guardar personajeData en localStorage cuando cambie
  useEffect(() => {
    if (personajeData) {
      localStorage.setItem('personajeData', JSON.stringify(personajeData));
    }
  }, [personajeData]);

  // Guardar favoritos en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  // Guardar tema en localStorage y actualizar clase en el elemento raíz
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
  }, [theme]);

  const getPersonaje = async (name) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchPersonajes(name);
      setPersonajeData(response);
      toast.success('¡Personajes encontrados con éxito!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      setError(err.message);
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
      setLoading(false);
    }
  };

  const agregarFavorito = (personaje) => {
    setFavoritos((prev) => {
      if (!prev.some((fav) => fav.id === personaje.id)) {
        return [...prev, personaje];
      }
      return prev;
    });
  };

  const eliminarFavorito = (id) => {
    setFavoritos((prev) => prev.filter((fav) => fav.id !== id));
  };

  const toggleFavoritos = () => {
    setMostrarFavoritos((prev) => !prev);
  };

  const limpiarPersonajes = () => {
    setPersonajeData(null);
    localStorage.removeItem('personajeData');
    setError(null);
    setLoading(false);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

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
