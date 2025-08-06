// Importa módulos de React necesarios
import { StrictMode } from 'react'; // Modo estricto para detectar problemas en el desarrollo
import { createRoot } from 'react-dom/client'; // Método para renderizar la aplicación
import './index.css'; // Importa los estilos globales
import App from './App.jsx'; // Componente principal
import { PersonajeProvider } from './hooks/contexts/personajeContext.jsx'; // Proveedor del contexto
import { ToastContainer } from 'react-toastify'; // Componente para notificaciones

// Renderiza la aplicación en el elemento con id 'root'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {' '}
    {/* Activa el modo estricto */}
    <PersonajeProvider>
      {' '}
      {/* Provee el contexto a toda la aplicación */}
      <App /> {/* Renderiza el componente principal */}
      {/* Configura el contenedor de notificaciones */}
      <ToastContainer
        position="top-right" // Posición de las notificaciones
        autoClose={3000} // Cierra automáticamente después de 3 segundos
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" // Tema de las notificaciones
      />
    </PersonajeProvider>
  </StrictMode>
);
