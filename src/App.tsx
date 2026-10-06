import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import ListView from "./pages/ListView"
import GalleryView from "./pages/GalleryView"
import DetailView from "./pages/DetailView"
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">List</Link>
        <Link to="/gallery">Gallery</Link>
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