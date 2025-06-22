import { useEffect, useState } from "react";

const Poke = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((response) => response.json())
      .then((data) => {
        const names = data.results.map((pokemon) => pokemon.name);
        setPokemon(names);
      });
  }, []);

  return (
    <div>
      <ul>
        {pokemon.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Poke;
