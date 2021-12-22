import React from 'react'
import Home from '..src/screens/Home';

const Homefilter = (props) => {
    return (

        <div className="home-filter">
            <div className="div-gender">
                <img src={props.gender} alt={props.gender} className="home-gender"/>
            </div>
            <p>{props.name}</p>
            
        </div>
    )
}

export default Homefilter;
