import { useEffect, useState } from "react"
import { getPokemon } from "../api/api"
import type { Pokemon } from "../api/api"

import SearchBar from "../components/SearchBar"
import SortControls from "../components/Sort"
import PokemonList from "../components/List"

function getPokemonId(url: string) {
    const parts = url.split("/")
    return Number(parts[parts.length - 2])
}

function ListView() {
    const [pokemon, setPokemon] = useState<Pokemon[]>([])
    const [search, setSearch] = useState("")
    const [sortBy, setSortBy] = useState("name")
    const [sortOrder, setSortOrder] = useState("ascending")

    useEffect(() => {
        getPokemon().then((data) => {
          setPokemon(data.results)
        })
    }, [])

    const filteredPokemon = pokemon.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    )

    const sortedPokemon = [...filteredPokemon].sort((a, b) => {
    let comparison = 0

    if (sortBy === "name") {
      comparison = a.name.localeCompare(b.name)
    } else if (sortBy === "id") {
      comparison = getPokemonId(a.url) - getPokemonId(b.url)
    }

    if (sortOrder === "descending") {
      comparison = comparison * -1
    }

    return comparison
  })
  return (
    <div>
      <h1>Pokémon Gen 1 List</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <SortControls
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <PokemonList pokemon={sortedPokemon} />
    </div>
  )
}
export default ListView