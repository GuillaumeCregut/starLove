import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

const Card = ({ name, image, id }) => {
  const idCharacter = `/detail/${id}`;

  return (
    <Link to={idCharacter}>
      <div className="card">
        <div className="div-img">
          <img src={image} alt={name} className="card-img" />
        </div>
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default Card;
