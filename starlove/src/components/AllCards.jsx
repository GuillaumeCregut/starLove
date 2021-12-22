import React from "react";

import Card from "./Card";

const AllCards = ({ filter, filterOption, characters }) => {
    let filteredArray = [];
    switch (filterOption) {
        case 0: characters.map((char) => filteredArray.push(char));
            //Retourne tableau complet
            break;
        case 1: filteredArray = characters.filter((char) => char.gender === filter);
            //Retourne le tableau filtré par genre
            break;
        case 2: filteredArray = characters.filter((char) => char.hairColor === filter);
            //retourne le tableau filtré par hair
            break;
        case 3: filteredArray = characters.filter((char) => char.species === filter);
            //Retourne le tableau filtré par species
            break
        default: break;
    }
    console.log(filteredArray);
    return (
        <div className="cards">
            {filteredArray
                // .filter(char => char.gender === filter)
                .map((character, index) => {
                    return (
                        <Card
                            image={character.image}
                            name={character.name}
                            key={index}
                            id={character.id}
                        />)
                })}
        </div>
    )
}

export default AllCards;
