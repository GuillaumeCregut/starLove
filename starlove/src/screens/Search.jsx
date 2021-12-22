import { useState, useEffect } from 'react';

import Filter from '../components/Filter';
import "./Search.css";

function Search() {
    const [characters, setCharacters] = useState([]);
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
    )
    return (
        <Filter list={characters} />
    );
}

export default Search;
