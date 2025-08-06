Rick and Morty App
Descripción
Esta es una aplicación web desarrollada con React y Vite que permite a los usuarios buscar personajes de la serie Rick and Morty utilizando la API de Rick and Morty. La aplicación incluye funcionalidades como agregar personajes a favoritos, mostrar una lista de favoritos en un modal, limpiar resultados de búsqueda, cambiar entre temas claro y oscuro, y notificaciones para interacciones de usuario. El diseño es responsive y utiliza Tailwind CSS para los estilos, con un footer fijo en la parte inferior y un sistema de temas persistente.
Características

Búsqueda de personajes: Busca personajes por nombre usando la API de Rick and Morty.
Favoritos: Permite agregar y eliminar personajes favoritos, persistidos en localStorage.
Modal de favoritos: Muestra los personajes favoritos en un modal superpuesto.
Limpieza de búsqueda: Botón para borrar los resultados de búsqueda.
Cambio de tema: Alterna entre temas claro y oscuro, con persistencia en localStorage.
Notificaciones: Usa react-toastify para mostrar mensajes de éxito, error y advertencia.
Footer fijo: El footer permanece fijo al final de la página, ocupando todo el ancho.
Diseño responsive: Adaptado para dispositivos móviles y de escritorio con Tailwind CSS.

Tecnologías utilizadas

React: Biblioteca para construir la interfaz de usuario.
Vite: Herramienta de construcción rápida para desarrollo y producción.
Tailwind CSS: Framework de estilos utilitarios para un diseño rápido y responsive.
Axios: Cliente HTTP para realizar peticiones a la API.
React Toastify: Biblioteca para notificaciones estilizadas.
ESLint: Herramienta para mantener la calidad del código.
LocalStorage: Para persistir datos de personajes y favoritos.

Instalación
Prerrequisitos

Node.js (versión 18 o superior)
npm (versión 9 o superior)

Pasos

Clonar el repositorio:
git clone <URL_DEL_REPOSITORIO>
cd 1

Instalar dependencias:
npm install

Iniciar el servidor de desarrollo:
npm run dev

La aplicación estará disponible en http://localhost:5173 (o el puerto configurado por Vite).

Construir para producción:
npm run build

Previsualizar la build:
npm run preview

Ejecutar linter:
npm run lint

Estructura del proyecto
├── src/
│ ├── components/
│ │ ├── Header.jsx # Encabezado con botones de favoritos, limpieza y cambio de tema
│ │ ├── Footer.jsx # Footer fijo al final de la página
│ │ ├── SearchForm.jsx # Formulario para buscar personajes
│ │ ├── PersonajeCard.jsx # Tarjetas para mostrar los personajes buscados
│ │ ├── FavoritosList.jsx # Modal para mostrar la lista de favoritos
│ ├── hooks/
│ │ ├── contexts/
│ │ │ ├── personajeContext.jsx # Contexto para manejar estado global
│ │ │ ├── personajeContextUtils.js # Utilidades para el contexto (creación y hook)
│ ├── services/
│ │ ├── heroeAPI.js # Servicio para interactuar con la API de Rick and Morty
│ ├── App.jsx # Componente principal que une todos los componentes
│ ├── main.jsx # Punto de entrada de la aplicación
│ ├── index.css # Estilos globales con Tailwind CSS y temas
├── package.json # Configuración del proyecto y dependencias
├── README.md # Documentación del proyecto

Proceso de desarrollo
El desarrollo de esta aplicación se centró en crear una experiencia de usuario interactiva y visualmente atractiva para buscar y gestionar personajes de Rick and Morty. A continuación, se describen los pasos clave:

Configuración inicial:

Se utilizó Vite como herramienta de construcción para un desarrollo rápido y eficiente.
Se integró React para la construcción de componentes reutilizables y manejo del estado.
Se configuró Tailwind CSS mediante @tailwindcss/vite para estilos utilitarios.

Gestión del estado:

Se implementó un contexto global (PersonajeContext) para manejar el estado de los personajes buscados, favoritos, carga, errores, tema, y visibilidad del modal.
Los datos de personajes y favoritos se persisten en localStorage para mantener el estado tras recargar la página.

Funcionalidades:

Búsqueda: Se usa Axios para realizar peticiones a la API de Rick and Morty. Las búsquedas se validan para evitar entradas vacías o cortas.
Favoritos: Los usuarios pueden agregar/eliminar personajes favoritos, mostrados en un modal superpuesto.
Notificaciones: Se integró react-toastify para mostrar mensajes de éxito, error y advertencia.
Cambio de tema: Un botón en el header alterna entre temas claro y oscuro, con estilos dinámicos y persistencia.
Footer fijo: El footer se posicionó al final de la página con un diseño sticky usando flexbox.

Estilos:

Se usó Tailwind CSS para un diseño responsive y consistente.
Se implementaron clases dinámicas para alternar entre temas claro (colores verdes) y oscuro (colores grises).
El footer se fijó al final con fixed y w-full.

Calidad del código:

Se configuró ESLint con plugins para React y Vite para garantizar un código limpio y sin errores.
Se usaron tipos de React (@types/react, @types/react-dom) para un mejor soporte en TypeScript.

Dependencias
Dependencias de producción

@tailwindcss/vite: Plugin para integrar Tailwind CSS con Vite, permitiendo procesar estilos utilitarios y optimizar el CSS para producción.
axios: Cliente HTTP ligero para realizar peticiones a la API de Rick and Morty, usado en heroeAPI.js para buscar personajes.
react: Biblioteca principal para construir la interfaz de usuario con componentes reutilizables.
react-dom: Proporciona métodos específicos del DOM para renderizar componentes React en el navegador.
react-toastify: Biblioteca para mostrar notificaciones estilizadas de éxito, error y advertencia, usadas en las búsquedas y validaciones.
tailwindcss: Framework de CSS utilitario para estilizar la aplicación de forma rápida y responsive.

Dependencias de desarrollo

@eslint/js: Proporciona las reglas base de ESLint para linting de JavaScript.
@types/react y @types/react-dom: Tipos para React y React DOM, mejorando el soporte de TypeScript y la detección de errores en el desarrollo.
@vitejs/plugin-react-swc: Plugin de Vite para soporte de React con SWC, un compilador rápido que mejora el tiempo de recarga en desarrollo.
eslint: Herramienta de linting para mantener la calidad y consistencia del código.
eslint-plugin-react-hooks: Reglas de ESLint para asegurar el uso correcto de los hooks de React.
eslint-plugin-react-refresh: Soporte para Fast Refresh en Vite, mejorando la experiencia de desarrollo.
globals: Define entornos globales para ESLint, asegurando compatibilidad con Vite y React.
vite: Herramienta de construcción para un desarrollo rápido y una build optimizada.

Uso

Buscar un personaje:

Ingresa el nombre de un personaje en el formulario de búsqueda (mínimo 3 caracteres).
Recibirás una notificación de éxito si se encuentran personajes, o de error si la búsqueda falla.

Agregar/Eliminar favoritos:

Haz clic en "Agregar a Favoritos" en una tarjeta de personaje.
Visualiza los favoritos en el modal haciendo clic en "Ver Favoritos" en el header.
Elimina favoritos desde el modal.

Limpiar búsqueda:

Usa el botón "Limpiar Búsqueda" en el header para borrar los resultados de búsqueda.

Cambiar tema:

Haz clic en "Tema Oscuro" o "Tema Claro" en el header para alternar los estilos.

Notas

Los datos de personajes y favoritos se persisten en localStorage para mantener el estado tras recargar.
El tema (claro/oscuro) también se guarda en localStorage para persistir la preferencia del usuario.
El footer está fijo al final de la página, ocupando todo el ancho, usando un diseño sticky con flexbox.
Las notificaciones de react-toastify aparecen en la esquina superior derecha y se cierran automáticamente tras 3 segundos.

Contribuciones
Si deseas contribuir, por favor:

Crea un fork del repositorio.
Crea una rama para tus cambios (git checkout -b feature/nueva-funcionalidad).
Realiza los cambios y haz commit (git commit -m "Añade nueva funcionalidad").
Envía un pull request con una descripción clara de los cambios.

Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.
