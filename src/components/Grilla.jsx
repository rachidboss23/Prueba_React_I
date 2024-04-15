// Grilla.jsx
import React from "react";
import MyCard from "./MyCard";

const Grilla = ({ characters }) => {
  return (
    <div className="row">
      {characters.map((character) => (
        <MyCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Grilla;
