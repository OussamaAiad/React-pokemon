import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import PokemonCard from "./assets/componenten/PokemonCard";

function App() {
    const [pokemon, setPokemon] = useState([]);
    const [endpoint, setEndpoint] = useState(`https://pokeapi.co/api/v2/pokemon`);
    useEffect(()=> {  async function fetchPokemon() {
        try {
            const result = await axios.get(`${endpoint}`);
            console.log(result.data);
            setPokemon(result.data);
        } catch (e) {
            console.error(e);
        }
    }  fetchPokemon()
    }, [endpoint])

        return (

            <div className="PokemonCard"> <h1> Pokemon </h1>

                <button
                    type='button'
                    onClick={() => setEndpoint(pokemon.previous)}
                    >
                    Previous
                </button>
                <button
                    type="button"
                    onClick={() => setEndpoint(pokemon.next)}
                    >
                    Next
                </button>

                {pokemon.results && pokemon.results.map((poke) => {
                    return <PokemonCard url={poke.url} key={poke.name}/>
                })}
            </div>
        );
}

export default App;
