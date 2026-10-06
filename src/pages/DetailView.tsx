import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

import type { PokemonDetails } from "../api/api"

function DetailView() {
    const { id } = useParams()

    const [pokemon, setPokemon] = useState<PokemonDetails | null>(null)

    useEffect(() => {
    async function loadPokemon() {
        const response = await axios.get<PokemonDetails>(
        `https://pokeapi.co/api/v2/pokemon/${id}`
        )

        setPokemon(response.data)
    }

    loadPokemon()
    }, [id])

    if (!pokemon) {
    return <p>Loading...</p>
    }

    const currentId = Number(id)
    const previousId = currentId > 1 ? currentId - 1 : 1
    const nextId = currentId < 150 ? currentId + 1 : 150

    return (
    <div>
        <Link to="/">← Back to List</Link>

        <h1>{pokemon.name}</h1>

        <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        />

        <p>ID: #{pokemon.id}</p>

        <p>Height: {pokemon.height}</p>

        <p>Weight: {pokemon.weight}</p>

        <h2>Types</h2>

        <ul>
        {pokemon.types.map((type) => (
            <li key={type.type.name}>
            {type.type.name}
            </li>
        ))}
        </ul>

        <div>
            {currentId > 1 && (
                <Link to={`/pokemon/${previousId}`}>
                ← Previous
                </Link>
            )}

            {" | "}

            {currentId < 150 && (
                <Link to={`/pokemon/${nextId}`}>
                Next →
                </Link>
            )}
        </div>
    </div>
    )
}

export default DetailView