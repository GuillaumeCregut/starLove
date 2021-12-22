import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";

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
        <div className="detail-card">
          <h2>{name}</h2>
          <div className="detail-img">
            <img src={image} alt={name} />
          </div>
          <div className="detail-caracteristic">
            <div className="detail-world">{homeworld}</div>
            <ul>
              <li>Genre : {gender}</li>
              <li>Taille : {height} m</li>
              <li>Poids : {mass} kg</li>
              <li>Couleur de peau : {skinColor}</li>
              <li>Couleur de cheveux : {hairColor}</li>
              <li>Couleur de yeux : {eyeColor}</li>
              <li>Espèce : {species}</li>
            </ul>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Detail;
