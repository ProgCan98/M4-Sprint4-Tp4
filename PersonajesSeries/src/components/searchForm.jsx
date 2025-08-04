import { useState } from 'react';
import { usePersonaje } from '../hooks/contexts/personajeContextUtils';

const SearchForm = () => {
  const [name, setName] = useState(''); // define el estado para el nombre del personaje
  const { getPersonaje } = usePersonaje(); // usa el contexto para obtener la función getPersonaje

  const HanddleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Por favor, ingresa un nombre de personaje');
      return;
    }
    // Validación: mínimo 3 caracteres
    if (name.trim().length < 3) {
      alert('El nombre debe tener al menos 3 caracteres');
      return;
    }

    getPersonaje(name); // llama a la función getPersonaje con el nombre ingresado
  };
  return (
    <form
      onSubmit={HanddleSubmit}
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg mt-10"
    >
      <h1 className="text-center text-6xl text-green-700 font-bold">
        Rick and Morty
      </h1>
      <br />
      <input
        type="text"
        placeholder="Buscar Personaje"
        value={name} // establece el valor del input al estado name
        onChange={(e) => setName(e.target.value)} // actualiza el estado name al cambiar el input
        className="border-2 border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:border-green-600 transition-colors duration-300"
      />
      <button
        type="submit"
        className="bg-green-600 text-amber-400 rounded-md p-2 w-full font-bold text-lg hover:bg-green-700 transition-colors duration-300"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchForm;
