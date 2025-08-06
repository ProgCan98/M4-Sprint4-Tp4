// Importa el hook para acceder al contexto
import { usePersonaje } from '../hooks/contexts/personajeContextUtils';

const PersonajeCard = () => {
  // Obtiene datos y funciones del contexto
  const { personajeData, loading, error, agregarFavorito, theme } =
    usePersonaje();
  // Extrae la lista de personajes de los datos, o un array vacío si no hay datos
  const personajes = personajeData?.results || [];

  return (
    <>
      {/* Muestra un indicador de carga si está cargando */}
      {loading && (
        <div className="flex justify-center items-center mt-10">
          <span
            className={`animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 ${
              theme === 'light' ? 'border-green-400' : 'border-gray-400'
            } mr-2`}
          ></span>
          <p
            className={`${
              theme === 'light' ? 'text-green-700' : 'text-gray-200'
            } font-semibold text-lg`}
          >
            Cargando...
          </p>
        </div>
      )}
      {/* Muestra un mensaje de error si ocurrió un error */}
      {!loading && error && (
        <div
          className={`max-w-md mx-auto p-6 ${
            theme === 'light'
              ? 'bg-white border-red-200'
              : 'bg-gray-700 border-red-600'
          } shadow-lg rounded-xl mt-10 border animate-fade-in`}
        >
          <h2
            className={`text-center text-2xl ${
              theme === 'light' ? 'text-red-700' : 'text-red-400'
            } font-bold`}
          >
            No se encontró ningún personaje con ese nombre.
          </h2>
        </div>
      )}
      {/* Muestra las tarjetas de los personajes si no hay error ni carga */}
      {!loading && !error && personajes.length > 0 && (
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {personajes.map((personaje) => (
              <div
                key={personaje.id}
                className={`${
                  theme === 'light'
                    ? 'bg-emerald-50 border-green-100'
                    : 'bg-gray-600 border-gray-500'
                } rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border animate-fade-in`}
              >
                {/* Imagen del personaje */}
                <img
                  src={personaje.image}
                  alt={personaje.name}
                  className={`w-32 h-32 object-cover rounded-full border-4 ${
                    theme === 'light' ? 'border-green-200' : 'border-gray-400'
                  } mb-4 shadow`}
                />
                {/* Nombre del personaje */}
                <h2
                  className={`text-xl font-bold ${
                    theme === 'light' ? 'text-green-800' : 'text-gray-200'
                  } mb-2 text-center`}
                >
                  {personaje.name}
                </h2>
                {/* Estado del personaje */}
                <p
                  className={`${
                    theme === 'light' ? 'text-green-700' : 'text-gray-300'
                  } font-medium mb-1`}
                >
                  Estado:{' '}
                  <span className="font-normal">{personaje.status}</span>
                </p>
                {/* Especie del personaje */}
                <p
                  className={`${
                    theme === 'light' ? 'text-green-700' : 'text-gray-300'
                  } font-medium mb-3`}
                >
                  Especie:{' '}
                  <span className="font-normal">{personaje.species}</span>
                </p>
                {/* Botones para agregar a favoritos y ver más */}
                <div className="flex gap-2">
                  <button
                    className={`mt-2 px-4 py-2 ${
                      theme === 'light'
                        ? 'bg-green-400 hover:bg-green-500'
                        : 'bg-gray-500 hover:bg-gray-600'
                    } text-white rounded-lg transition-colors duration-200 shadow`}
                    onClick={() => agregarFavorito(personaje)}
                  >
                    Agregar a Favoritos
                  </button>
                  <button
                    className={`mt-2 px-4 py-2 ${
                      theme === 'light'
                        ? 'bg-green-400 hover:bg-green-500'
                        : 'bg-gray-500 hover:bg-gray-600'
                    } text-white rounded-lg transition-colors duration-200 shadow`}
                  >
                    Ver más
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

// Exporta el componente
export default PersonajeCard;
