import { usePersonaje } from '../hooks/contexts/personajeContextUtils'; // Importa el hook personalizado para acceder al contexto del personaje

const PersonajeCard = () => {
  // Componente funcional que muestra la tarjeta del personaje
  const { personajeData, loading, error } = usePersonaje(); // Obtiene los datos, estado de carga y error desde el contexto

  const personajes = personajeData?.results || []; // Extrae el array de personajes, o un array vacío si no existe

  return (
    <>
      {loading && <p>Cargando...</p>}
      {!loading && error && (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg mt-10">
          <h2 className="text-center text-2xl text-red-700">
            No se encontró ningún personaje con ese nombre.
          </h2>
        </div>
      )}
      {!loading && !error && personajes.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {personajes.map((personaje) => (
            <div
              key={personaje.id}
              className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg"
            >
              <h2>{personaje.name}</h2>
              <img src={personaje.image} alt={personaje.name} />
              <p>Estado: {personaje.status}</p>
              <p>Especie: {personaje.species}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PersonajeCard; // Exporta el componente para su uso en otras partes de la aplicación
