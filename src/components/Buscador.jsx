// Buscador.jsx
import React from "react";

const Buscador = ({ characters, setCharacters }) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm)
    );
    setCharacters(filteredCharacters);
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar personaje..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default Buscador;
