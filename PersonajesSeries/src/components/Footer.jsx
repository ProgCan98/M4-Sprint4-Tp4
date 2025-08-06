import { usePersonaje } from '../hooks/contexts/personajeContextUtils';

const Footer = () => {
  const { theme } = usePersonaje();

  return (
    <footer
      className={`${
        theme === 'light'
          ? 'bg-green-600 text-white'
          : 'bg-gray-800 text-gray-200'
      } p-4 fixed bottom-0 left-0 w-full shadow-md`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg font-medium">
          Rick and Morty App &copy; {new Date().getFullYear()}
        </p>
        <p className="text-sm">
          Creado con amor para los fans de Rick and Morty
        </p>
      </div>
    </footer>
  );
};

export default Footer;
