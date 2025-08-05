import { usePersonaje } from '../hooks/contexts/personajeContextUtils';

const PersonajeCard = () => {
  const { personajeData, loading, error } = usePersonaje();
  const personajes = personajeData?.results || [];

  return (
    <>
      {loading && (
        <div className="flex justify-center items-center mt-10">
          <span className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-400 mr-2"></span>
          <p className="text-green-700 font-semibold text-lg">Cargando...</p>
        </div>
      )}
      {!loading && error && (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl mt-10 border border-red-200 animate-fade-in">
          <h2 className="text-center text-2xl text-red-700 font-bold">
            No se encontró ningún personaje con ese nombre.
          </h2>
        </div>
      )}
      {!loading && !error && personajes.length > 0 && (
        <div className="max-w-4xl mx-auto px-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {personajes.map((personaje) => (
              <div
                key={personaje.id}
                className="bg-emerald-50 rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-green-100 animate-fade-in"
              >
                <img
                  src={personaje.image}
                  alt={personaje.name}
                  className="w-32 h-32 object-cover rounded-full border-4 border-green-200 mb-4 shadow"
                />
                <h2 className="text-xl font-bold text-green-800 mb-2 text-center">{personaje.name}</h2>
                <p className="text-green-700 font-medium mb-1">Estado: <span className="font-normal">{personaje.status}</span></p>
                <p className="text-green-700 font-medium mb-3">Especie: <span className="font-normal">{personaje.species}</span></p>
                <button className="mt-2 px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500 transition-colors duration-200 shadow">
                  Ver más
                </button>
                
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PersonajeCard;
