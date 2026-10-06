import { useEffect, useState } from "react"
import { getPokemonDetails } from "../api/api"
import type { Pokemon, PokemonDetails } from "../api/api"
import { Link } from "react-router-dom"

type PokemonGalleryProps = {
  pokemon: Pokemon[]
}

function PokemonGallery({ pokemon }: PokemonGalleryProps) {
  const [details, setDetails] = useState<PokemonDetails[]>([])
  const [selectedType, setSelectedType] = useState("all")

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
      <div>
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

      {filteredDetails.map((item) => (
        <div key={item.id}>
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
  )
}

export default PokemonGallery