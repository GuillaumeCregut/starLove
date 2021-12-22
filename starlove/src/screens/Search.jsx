import { useState, useEffect } from "react";
import Card from "../components/Card";
import Detail from "./Detail";
import "./Search.css";

function Search() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const getData = () => {
      fetch("https://miadil.github.io/starwars-api/api/all.json")
        .then((results) => results.json())
        .then((results) => {
          setCharacters(results);
        });
    };
    getData();
  }, []);
  return (
    <div className="search-page">
      {characters.map((character) => {
        return <Card image={character.image} name={character.name} />;
      })}
    </div>
  );
}

export default Search;
