import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    const id = params.id;
    console.log(id);
    const getData = () => {
      fetch(`https://miadil.github.io/starwars-api/api/id/${id}.json`)
        .then((res) => res.json())
        .then((res) => {
          setLoading(true) || setCharacter(res);
        });
    };
    getData();
  }, []);
  const {
    name,
    height,
    mass,
    gender,
    eyeColor,
    hairColor,
    skinColor,
    image,
    species,
    homeworld,
  } = character;
  return (
    <div>
      {loading ? (
        <div>
          <h2>{name}</h2>
          <div>
            <img src={image} alt={name} />
          </div>
          <div>{homeworld}</div>
          <div>Caractéristique :</div>
          <div>gender : {gender}</div>
          <div>Taille : {height}</div>
          <div>Poids : {mass}</div>
          <div>Couleur de peau : {skinColor}</div>
          <div>Couleur de cheveux : {hairColor}</div>
          <div>Couleur de yeux : {eyeColor}</div>
          <div>Espèce : {species}</div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Detail;
