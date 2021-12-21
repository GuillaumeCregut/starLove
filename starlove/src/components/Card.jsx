import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Card.css";

const Card = (props) => {
  return (
    <NavLink to="/detail/:id">
      <div className="card">
        <div className="div-img">
          <img src={props.image} alt={props.name} className="card-img" />
        </div>
        <p>{props.name}</p>
      </div>
    </NavLink>
  );
};

export default Card;
