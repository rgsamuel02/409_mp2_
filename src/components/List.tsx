import { Link } from "react-router-dom"
import type { Pokemon } from "../api/api"

type PokemonListProps = {
  pokemon: Pokemon[]
}

function getPokemonId(url: string) {
  const parts = url.split("/")
  return Number(parts[parts.length - 2])
}

function PokemonList({ pokemon }: PokemonListProps) {
  return (
    <div>
      {pokemon.map((item) => {
        const id = getPokemonId(item.url)

        return (
          <div key={item.name}>
            <Link to={`/pokemon/${id}`}>
              {item.name}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default PokemonList