import { usePersonaje } from '../hooks/contexts/personajeContextUtils';

const Header = () => {
  // Obtiene funciones y estados del contexto: alternar favoritos, estado de favoritos, limpiar búsqueda y alternar tema
  const {
    toggleFavoritos,
    mostrarFavoritos,
    limpiarPersonajes,
    theme,
    toggleTheme,
  } = usePersonaje();

  return (
    <header
      className={`${
        theme === 'light'
          ? 'bg-green-600 text-white'
          : 'bg-gray-800 text-gray-200'
      } p-4 shadow-md`}
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-center">
          Rick and Morty
        </h1>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <button
            onClick={toggleFavoritos}
            className={`${
              theme === 'light'
                ? 'bg-green-500 hover:bg-green-700'
                : 'bg-gray-600 hover:bg-gray-700'
            } text-white rounded-md px-4 py-2 font-bold text-lg transition-colors duration-300 w-full sm:w-auto`}
          >
            {mostrarFavoritos ? 'Ocultar Favoritos' : 'Ver Favoritos'}
          </button>
          <button
            onClick={limpiarPersonajes}
            className={`${
              theme === 'light'
                ? 'bg-orange-500 hover:bg-orange-800'
                : 'bg-orange-700 hover:bg-orange-900'
            } text-white rounded-md px-4 py-2 font-bold text-lg transition-colors duration-300 w-full sm:w-auto`}
          >
            Limpiar Búsqueda
          </button>
          <button
            onClick={toggleTheme}
            className={`${
              theme === 'light'
                ? 'bg-blue-500 hover:bg-blue-700'
                : 'bg-blue-600 hover:bg-blue-800'
            } text-white rounded-md px-4 py-2 font-bold text-lg transition-colors duration-300 w-full sm:w-auto`}
          >
            {theme === 'light' ? 'Tema Oscuro' : 'Tema Claro'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
