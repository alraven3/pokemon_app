import { useState } from 'react'
import { pokemons } from "./data";
import TypeFilter from './components/TypeFilter';
import PokemonCard from './components/PokemonCard';
import './App.css'

function App() {
  const [activeType, setActiveType] = useState('All');

  const types = ['All', ...Array.from(new Set(pokemons.map((p) => p.type)))];
  const visiblePokemons = activeType === 'All' ? pokemons : pokemons.filter((p) => p.type === activeType);

  return (
    <main className="app">
      <h1>Pokemon Card Grid</h1>
      <p>{visiblePokemons.length} pokemon(s) shown</p>
      <TypeFilter types={types} activeType={activeType} onChangeType={setActiveType} />
      <div className="pokemon-grid">
        {visiblePokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </main>
  );
}

export default App