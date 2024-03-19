import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store'

// Importacion de Pages
import Home from './pages/Home/Home'
import Informes from './pages/Informes/Informes'
import Desarrollo from './pages/Desarrollo/Desarrollo'
import Imagenes from './pages/Imagenes/Imagenes'
import Anotaciones from './pages/Anotaciones/Anotaciones';

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/informes" element={<Informes />} />
            <Route path="/desarrollo" element={<Desarrollo />} />
            <Route path="/imagenes" element={<Imagenes />} />
            <Route path="/anotaciones" element={<Anotaciones />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
