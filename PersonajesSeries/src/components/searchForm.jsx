import { useState } from 'react';

const SearchForm = () => {
  const [name, setName] = useState(''); // define el estado para el nombre del personaje
  console.log(name); // imprime el nombre del personaje en la consola
  return (
    <form //onSubmit = {HanddleSubmit}
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
