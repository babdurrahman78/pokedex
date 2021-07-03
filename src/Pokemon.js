import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => setPokemon([data]));
        console.log(pokemon);
    }, [])

    return ( 
        <div>
            {pokemon.map(poke => <p>{poke.weight}</p>)}
        </div>
        // <div>
        //     {pokemon.map((poke, index) => (
        //           <p>{poke.weight}</p>
        //         ))}
        // </div>
     )
}
 
export default Pokemon;