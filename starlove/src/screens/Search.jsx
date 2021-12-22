import { useState, useEffect } from 'react';
import Card from '../components/Card';
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
        <div>
            <div>
                <Filter
                    list={characters}
                />
            </div>
        </div>

    );

}

export default Search;
