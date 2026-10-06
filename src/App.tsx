import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

import ListView from "./pages/ListView"
import GalleryView from "./pages/GalleryView"
import DetailView from "./pages/DetailView"

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <nav className="navbar">
        <NavLink to="/">List</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<ListView />} />
        <Route path="/gallery" element={<GalleryView />} />
        <Route path="/pokemon/:id" element={<DetailView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App