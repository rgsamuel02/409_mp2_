type Sort = {
  sortBy: string
  setSortBy: (sortBy: string) => void
  sortOrder: string
  setSortOrder: (sortOrder: string) => void
}

function Sort({
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
}: Sort) {
  return (
    <div className="sort-controls">
      <label className="sort-option">
        Sort by:
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="name">Name</option>
          <option value="id">ID</option>
        </select>
      </label>

      <label className="sort-option">
        Order:
        <select
          value={sortOrder}
          onChange={(event) => setSortOrder(event.target.value)}
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </label>
    </div>
  )
}

export default Sort