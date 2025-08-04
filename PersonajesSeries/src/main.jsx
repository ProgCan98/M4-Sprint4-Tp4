import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { PersonajeProvider } from './hooks/contexts/personajeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersonajeProvider>
      <App />
    </PersonajeProvider>
  </StrictMode>
);
