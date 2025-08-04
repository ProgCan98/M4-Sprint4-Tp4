import { useState, useEffect } from 'react';
import { fetchPersonajes } from '../../services/heroeAPI';
import { PersonajeContext } from './personajeContextUtils';

export const PersonajeProvider = ({ children }) => {
  const [personajeData, setPersonajeContext] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Recuperar datos de localStorage al cargar la página
  useEffect(() => {
    const storedData = localStorage.getItem('personajeData');
    if (storedData) {
      setPersonajeContext(JSON.parse(storedData));
      setLoading(false);
    }
  }, []);

  // Guardar datos en localStorage cuando cambian
  useEffect(() => {
    if (personajeData) {
      localStorage.setItem('personajeData', JSON.stringify(personajeData));
    }
  }, [personajeData]);

  const getPersonaje = async (name) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchPersonajes(name);
      setPersonajeContext(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PersonajeContext.Provider
      value={{ personajeData, loading, error, getPersonaje }}
    >
      {children}
    </PersonajeContext.Provider>
  );
};
