import React, {useEffect, useState} from 'react';
import axios from "axios";
import * as url from "url";

const PokemonCard = ({url}) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(()=> {  async function getPokemonData() {
        try {
            const result = await axios.get(`${url}`);
            console.log(result.data)
            setPokemon(result.data);
        } catch (e) {
            console.error(e);
        }
    }
   getPokemonData()
    }, [])

    return (
        <div className="PokemonCard">
            {Object.keys(pokemon).length &&
                <>
                <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} alt="pokemon plaatje"/>
                    <h3> Moves: {pokemon.moves && pokemon.moves.length}</h3>
                    <h3>Weight: {pokemon.weight}</h3>
                    <h3>Abilities:</h3>
                        {pokemon.abilities.map((ability) =>{
                            return <h4> {ability.ability.name} </h4>
                        })}
                </>
            }
        </div>
    );
};

export default PokemonCard;