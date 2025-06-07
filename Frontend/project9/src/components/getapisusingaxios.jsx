import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokes = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then(response => {
        const names = response.data.results.map((pokemon) => pokemon.name);
        setPokemon(names);
      });
  }, []);

  return (
    <div>
      <h1>Pokémon Names</h1>
      <ul>
        {pokemon.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokes;
