import { useState } from 'react';
import { usePersonaje } from '../hooks/contexts/personajeContextUtils';
import { toast } from 'react-toastify';

const SearchForm = () => {
  const [name, setName] = useState('');
  const { getPersonaje, theme } = usePersonaje();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.warn('Por favor, ingresa un nombre de personaje', {
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

    getPersonaje(name);
  };

  return (
    <div
      className={`max-w-md mx-auto p-4 ${
        theme === 'light' ? 'bg-emerald-50' : 'bg-gray-700'
      } shadow-md rounded-lg mt-10`}
    >
      <input
        type="text"
        placeholder="Buscar Personaje"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={`border-2 ${
          theme === 'light'
            ? 'text-green-700 border-gray-300 focus:border-green-600'
            : 'text-gray-200 border-gray-500 focus:border-gray-400'
        } rounded-md p-2 w-full mb-4 focus:outline-none transition-colors duration-300`}
      />
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

export default SearchForm;
