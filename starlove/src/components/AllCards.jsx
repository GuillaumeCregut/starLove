import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";

const AllCards = ({ filter, filterOption, characters }) => {
    //const filter = props.filter;
    let filteredArray = [];
    /*     const [characters, setCharacters] = useState([]);
         useEffect(() => {
             const getData = () => {
                 fetch('https://miadil.github.io/starwars-api/api/all.json')
                     .then((results) => results.json())
                     .then((results) => {
                         setCharacters(results)
                     })
             }
             getData()
         }, []
         )*/
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
    }
    console.log(filteredArray);
    return (
        <div>
            <div>
            </div>
            <div className="search-page">
                {filteredArray
                    // .filter(char => char.gender === filter)
                    .map((character, index) => {
                        return (
                            <Card
                                image={character.image}
                                name={character.name}
                                key={index}
                            />)
                    })}
            </div>
        </div>


export default AllCards;
