import React from "react";

import Card from "./Card";

const AllCards = ({ filters, characters }) => {
    let filteredArray = Array.from(characters); // on part du tableau complet
    if (filters.hair!=='') filteredArray = filteredArray.filter(char => char.hairColor === filters.hair);
    if (filters.gender!=='') filteredArray = filteredArray.filter(char => char.gender === filters.gender);
    if (filters.species!=='') filteredArray = filteredArray.filter(char => char.species === filters.species);

    return (
        <div className="cards">
            {filteredArray
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
