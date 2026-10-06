type SearchBarProps = {
  search: string
  setSearch: (search: string) => void
}

function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search Pokémon..."
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
  )
}

export default SearchBar