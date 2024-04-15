// MyCard.jsx
import React from "react";

const MyCard = ({ character }) => {
  return (
    <div className="col-md-4 mt-5">
      <div className="card">
        <img
          src={character.image}
          className="card-img-top"
          alt={character.name}
        />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">
            <strong>Ki:</strong> {character.ki}
          </p>
          <p className="card-text">
            <strong>Raza:</strong> {character.race}
          </p>
          <p className="card-text">
            <strong>Descripción:</strong> {character.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyCard;

