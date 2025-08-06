import Header from './components/Header';
import SearchForm from './components/searchForm';
import PersonajeCard from './components/PersonajeCard';
import FavoritosList from './components/FavoritosList';
import Footer from './components/Footer';
import { usePersonaje } from './hooks/contexts/personajeContextUtils';

function App() {
  const { theme } = usePersonaje();

  return (
    <div className={`flex flex-col min-h-screen ${theme}`}>
      <Header />
      <main className="flex-grow">
        <SearchForm />
        <PersonajeCard />
        <FavoritosList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
