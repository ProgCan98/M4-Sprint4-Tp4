// Importa hooks y librerías necesarias
import { useState } from 'react'; // Hook para manejar el estado local
import { usePersonaje } from '../hooks/contexts/personajeContextUtils'; // Hook para acceder al contexto
import { toast } from 'react-toastify'; // Librería para mostrar notificaciones

const SearchForm = () => {
  // Estado para almacenar el valor del campo de búsqueda
  const [name, setName] = useState('');
  // Obtiene la función para buscar personajes y el tema desde el contexto
  const { getPersonaje, theme } = usePersonaje();

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    // Valida que el campo no esté vacío
    if (!name.trim()) {
      toast.warn('Por favor, ingresa un nombre de personaje', {
        position: 'top-right', // Posición de la notificación
        autoClose: 3000, // Cierra automáticamente después de 3 segundos
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    // Valida que el nombre tenga al menos 3 caracteres
    if (name.trim().length < 3) {
      toast.warn('El nombre debe tener al menos 3 caracteres', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    // Llama a la función para buscar personajes
    getPersonaje(name);
  };

  return (
    // Contenedor del formulario con estilos dinámicos según el tema
    <div
      className={`max-w-md mx-auto p-4 ${
        theme === 'light' ? 'bg-emerald-50' : 'bg-gray-700'
      } shadow-md rounded-lg mt-10`}
    >
      {/* Campo de entrada para el nombre del personaje */}
      <input
        type="text"
        placeholder="Buscar Personaje"
        value={name}
        onChange={(e) => setName(e.target.value)} // Actualiza el estado con el valor ingresado
        className={`border-2 ${
          theme === 'light'
            ? 'text-green-700 border-gray-300 focus:border-green-600'
            : 'text-gray-200 border-gray-500 focus:border-gray-400'
        } rounded-md p-2 w-full mb-4 focus:outline-none transition-colors duration-300`}
      />
      {/* Botón para enviar el formulario */}
      <button
        type="submit"
        onClick={handleSubmit}
        className={`${
          theme === 'light'
            ? 'bg-green-500 hover:bg-green-700'
            : 'bg-gray-600 hover:bg-gray-700'
        } text-white rounded-md p-2 w-full font-bold text-lg transition-colors duration-300`}
      >
        Buscar
      </button>
    </div>
  );
};

// Exporta el componente
export default SearchForm;
