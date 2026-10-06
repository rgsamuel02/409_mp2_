import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getPokemon, getPokemonDetails } from "../api/api"
import type { Pokemon, PokemonDetails } from "../api/api"
import "./GalleryView.css"

function GalleryView() {
    const [pokemon, setPokemon] = useState<Pokemon[]>([])
    const [details, setDetails] = useState<PokemonDetails[]>([])
    const [selectedType, setSelectedType] = useState("all")

    useEffect(() => {
        getPokemon().then((data) => {
            setPokemon(data.results)
        })
    }, [])

    useEffect(() => {
        async function loadDetails() {
            const results = await Promise.all(
                pokemon.map((item) => getPokemonDetails(item.url))
        )
        setDetails(results)
    }

    loadDetails()
    }, [pokemon])

    const filteredDetails = details.filter((item) => {
        if (selectedType === "all") {
            return true
        }
        return item.types.some(
            (type) => type.type.name === selectedType
        )
    })

    return (
        <div>
            <h1>Pokémon Gen 1 Gallery</h1>
            <div className="gallery-filters">
                <button onClick={() => setSelectedType("all")}>
                    All
                </button>

                <button onClick={() => setSelectedType("fire")}>
                    Fire
                </button>

                <button onClick={() => setSelectedType("water")}>
                    Water
                </button>

                <button onClick={() => setSelectedType("grass")}>
                    Grass
                </button>

                <button onClick={() => setSelectedType("electric")}>
                    Electric
                </button>

                <button onClick={() => setSelectedType("psychic")}>
                    Psychic
                </button>
            </div>

            <div className="gallery-grid">
                {filteredDetails.map((item) => (
                    <div className="gallery-card" key={item.id}>
                        <Link to={`/pokemon/${item.id}`}>
                            <img
                                src={item.sprites.front_default}
                                alt={item.name}
                            />

                            <p>{item.name}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default GalleryView