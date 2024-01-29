import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importacion de Pages
import Home from './pages/Home/Home'
import Informes from './pages/Informes/Informes'
import Desarrollo from './pages/Desarrollo/Desarrollo'
import Imagenes from './pages/Imagenes/Imagenes'
import Anotaciones from './pages/Anotaciones/Anotaciones';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/informes" element={<Informes />} />
          <Route path="/desarrollo" element={<Desarrollo />} />
          <Route path="/imagenes" element={<Imagenes />} />
          <Route path="/anotaciones" element={<Anotaciones />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
