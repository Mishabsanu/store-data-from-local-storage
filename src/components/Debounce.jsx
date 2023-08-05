import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Debounce = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const feachData = async () => {
      if (pokemonData) {
        try {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
          );
          setPokemonData(response.data);
          console.log(response.data);
        } catch (error) {
          console.log(error);
          setPokemonData(null);
        }
      } else {
        setPokemonData(null);
      }
    };
    const debounceTime = setTimeout(() => {
      feachData();
    }, 500);

    return () => clearTimeout(debounceTime);
  }, [pokemonName]);

  const handleChange = (event) => {
    setPokemonName(event.target.value);
  };

  return (
    <div>
      <div>
        <input
          value={pokemonName}
          type="text"
          onChange={handleChange}
          placeholder="serch pokename"
        />
      </div>
      <div>
        {pokemonData ? (
          <Card
            name={pokemonName.name}
            height={pokemonName.height}
            weight={pokemonName.weight}
          />
        ) : (
          <h1>not data </h1>
        )}
      </div>
    </div>
  );
};

export default Debounce;
