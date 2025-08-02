import { createContext, useContext, useState } from 'react';
import { fetchPersonajes } from '../../services/heroeAPI';

const PersonajeContext = createContext();

export const PersonajeProvider = ({ children }) => {
  const [PersonajeData, setPersonajeContext] = useState(null); // define el estado del contexto
  const [loading, setLoading] = useState(true); // define el estado de carga
  const [error, setError] = useState(null); // define el estado de error

  const getPersonaje = async (name) => {
    setLoading(true); // establece el estado de carga a true
    setError(null); // resetea el estado de error
    try {
      const response = await fetchPersonajes(name); // llama a la función para obtener los personajes
      setPersonajeContext(response); // actualiza el contexto con los datos obtenidos
    } catch (err) {
      setError(err.message); // captura y establece el error en caso de fallo
    } finally {
      setLoading(false); // establece el estado de carga a false al finalizar
    }
  };
  return (
    <PersonajeContext.Provider
      value={{ PersonajeData, loading, error, getPersonaje }}
    >
      {children} {/* renderiza los componentes hijos */}
    </PersonajeContext.Provider>
  );
};

export const usePersonaje = () => useContext(PersonajeContext);
