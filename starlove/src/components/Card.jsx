import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

const Card = ({ name, image, id }) => {
  const idCharacter = `/detail/${id}`;

  return (
    <Link to={idCharacter} className="card-link">
      <div className="card">
        <img src={image} alt={name} />
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default Card;
