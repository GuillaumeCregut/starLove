import React from 'react'
import "./Card.css";

const Card = (props) => {
    return (
        <div>
            <div className="size-img">
                <img src={props.image} alt={props.name} className="card-img"/>
            </div>
            <p>{props.name}</p>


        </div>
    )
}

export default Card
