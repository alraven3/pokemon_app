const typeColor = {
  Grass: '#78C850',
  Fire: '#F08030',
  Water: '#6890F0',
  Electric: '#F8D030',
  Psychic: '#F85888',
  Normal: '#A8A878',
  Ghost: '#705898',
  Dragon: '#7038F8',
  Fighting: '#C03028',
  Rock: '#B8A038',
};

export default function PokemonCard({ pokemon }) {
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  const maxHP = 160;
  const maxATK = 140;
  const hpPercent = Math.min(100, Math.round((pokemon.hp / maxHP) * 100));
  const atkPercent = Math.min(100, Math.round((pokemon.attack / maxATK) * 100));

  return (
    <article className="pokemon-card" style={{ borderColor: typeColor[pokemon.type] || '#666' }}>
      <img className="pokemon-avatar" src={spriteUrl} alt={pokemon.name} />
      <div className="pokemon-info">
        <h2>{pokemon.name}</h2>
        <p>ID: {pokemon.id}</p>

        <div className="stat-row">
          <span className="stat-label">HP</span>
          <div className="stat-track">
            <div className="stat-fill hp" style={{ width: `${hpPercent}%` }} />
          </div>
          <span className="stat-value">{pokemon.hp}</span>
        </div>

        <div className="stat-row">
          <span className="stat-label">ATK</span>
          <div className="stat-track">
            <div className="stat-fill atk" style={{ width: `${atkPercent}%` }} />
          </div>
          <span className="stat-value">{pokemon.attack}</span>
        </div>

        <span className="pokemon-type" style={{ background: typeColor[pokemon.type] || '#888' }}>
          {pokemon.type}
        </span>
      </div>
    </article>
  );
}
