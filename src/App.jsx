import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importacion de Pages
import Home from './pages/Home/Home'
import Anotaciones from './pages/Anotaciones/Anotaciones';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anotaciones" element={<Anotaciones />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
