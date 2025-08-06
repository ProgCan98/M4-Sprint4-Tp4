// Importa funciones de React para crear y usar contextos
import { createContext, useContext } from 'react';

// Crea el contexto para gestionar el estado global de los personajes
export const PersonajeContext = createContext();

// Hook personalizado para acceder al contexto desde cualquier componente
export const usePersonaje = () => useContext(PersonajeContext);
