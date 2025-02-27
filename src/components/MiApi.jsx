// MiApi.jsx
import React, { useState, useEffect } from "react";
import Grilla from "./Grilla";
import Buscador from "./Buscador";

const MiApi = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const obtenerInformacion = async () => {
    try {
      let data = await fetch(
        "https://dragonball-api.com/api/characters?race=Saiyan&affiliation=Z%20fighter"
      );
      let result = await data.json();
      // Asignar imágenes a los personajes
      result.forEach((character, index) => {
        switch (index) {
          case 0:
            character.image =
              "https://depor.com/resizer/xjQQIRWQbRxeaPYA4mzr1V7zsDQ=/580x330/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DAYT2F5NUNB7VPAFKUPHNDXVQA.jpg";
            break;
          case 1:
            character.image =
              "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/12/vegeta-volvera-protagonizar-portada-serie-roja-dragon-ball-super-perfil-sabio-maduro-4271704.jpg?tf=1200x";
            break;
          case 2:
            character.image =
              "https://www.metro951.com/wp-content/uploads/2015/01/Portada1.jpg";
            break;
          case 3:
            character.image =
              "https://www.mundodeportivo.com/alfabeta/hero/2024/01/gotenks-.jpg?width=1200";
            break;
          case 4:
            character.image =
              "https://www.mdtech.news/u/fotografias/m/2024/3/5/f1280x720-38078_169753_5050.jpg";
            break;
          case 5:
            character.image =
              "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/04/dragon-ball-z-bardock-iba-ser-enemigo-goku-principio-2289389.jpg";
            break;
          case 6:
            character.image =
              "https://img.europapress.es/fotoweb/fotonoticia_20170701115654_1200.jpg";
            break;
          case 7:
            character.image =
              "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/06/Dragon-Ball-vegetto-super-saiyajin-4.jpg";
            break;
          default:
            break;
        }
      });
      
      result.sort((a, b) => a.name.localeCompare(b.name));
      setCharacters(result);
    } catch (error) {
      console.error("Error al obtener los personajes:", error);
    }
  };

  useEffect(() => {
    obtenerInformacion();
  }, []);

  return (
    <div>
      <h2 className="buscador-title">Buscador</h2>
      <Buscador characters={characters} setCharacters={setCharacters} />
      <h1 className="title">Personajes de Dragon Ball</h1>
      <Grilla characters={characters} />
    </div>
  );
};

export default MiApi;


