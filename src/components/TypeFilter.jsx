export default function TypeFilter({ types, activeType, onChangeType }) {
  return (
    <div className="type-filter">
      {types.map((type) => (
        <button
          key={type}
          className={`type-button ${activeType === type ? 'active' : ''}`}
          onClick={() => onChangeType(type)}
          aria-pressed={activeType === type}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
