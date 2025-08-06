import { usePersonaje } from '../hooks/contexts/personajeContextUtils';

const FavoritosList = () => {
  const {
    favoritos,
    eliminarFavorito,
    mostrarFavoritos,
    toggleFavoritos,
    theme,
  } = usePersonaje();

  if (!mostrarFavoritos) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={`${
          theme === 'light' ? 'bg-white' : 'bg-gray-700'
        } rounded-2xl shadow-lg max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto p-6`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2
            className={`text-2xl font-bold ${
              theme === 'light' ? 'text-green-800' : 'text-gray-200'
            } text-center`}
          >
            Personajes Favoritos
          </h2>
          <button
            onClick={toggleFavoritos}
            className={`${
              theme === 'light'
                ? 'bg-red-500 hover:bg-red-700'
                : 'bg-red-600 hover:bg-red-800'
            } text-white rounded-md px-4 py-2 font-bold text-lg transition-colors duration-300`}
          >
            Cerrar
          </button>
        </div>
        {favoritos.length === 0 ? (
          <p
            className={`text-center ${
              theme === 'light' ? 'text-green-700' : 'text-gray-300'
            }`}
          >
            No tienes personajes favoritos aún.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {favoritos.map((personaje) => (
              <div
                key={personaje.id}
                className={`${
                  theme === 'light'
                    ? 'bg-emerald-50 border-green-100'
                    : 'bg-gray-600 border-gray-500'
                } rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border animate-fade-in`}
              >
                <img
                  src={personaje.image}
                  alt={personaje.name}
                  className={`w-32 h-32 object-cover rounded-full border-4 ${
                    theme === 'light' ? 'border-green-200' : 'border-gray-400'
                  } mb-4 shadow`}
                />
                <h2
                  className={`text-xl font-bold ${
                    theme === 'light' ? 'text-green-800' : 'text-gray-200'
                  } mb-2 text-center`}
                >
                  {personaje.name}
                </h2>
                <p
                  className={`${
                    theme === 'light' ? 'text-green-700' : 'text-gray-300'
                  } font-medium mb-1`}
                >
                  Estado:{' '}
                  <span className="font-normal">{personaje.status}</span>
                </p>
                <p
                  className={`${
                    theme === 'light' ? 'text-green-700' : 'text-gray-300'
                  } font-medium mb-3`}
                >
                  Especie:{' '}
                  <span className="font-normal">{personaje.species}</span>
                </p>
                <button
                  className={`mt-2 px-4 py-2 ${
                    theme === 'light'
                      ? 'bg-red-400 hover:bg-red-500'
                      : 'bg-red-600 hover:bg-red-800'
                  } text-white rounded-lg transition-colors duration-200 shadow`}
                  onClick={() => eliminarFavorito(personaje.id)}
                >
                  Eliminar de Favoritos
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritosList;
