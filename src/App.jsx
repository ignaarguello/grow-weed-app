//Estilos
import './App.css'

//ReactRouterDom
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Redux
import { Provider } from 'react-redux';
import { store } from './redux/store'

//Pages
import Home from './pages/Home/Home'
import Informes from './pages/Informes/Informes'
import Desarrollos from './pages/Desarrollos/Desarrollos'
import Riegos from './pages/Riegos/Riegos'
import InformesDetails from './components/InformesDetails/InformesDetails'

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/informes" element={<Informes />} />
            <Route path="/desarrollos" element={<Desarrollos />} />
            <Route path="/riegos" element={<Riegos />} />
            <Route path="/informes/:id" element={<InformesDetails />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
