import { createContext, useContext } from 'react';

export const PersonajeContext = createContext();

export const usePersonaje = () => useContext(PersonajeContext);
