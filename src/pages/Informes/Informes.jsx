// Componentes
import CInformes_1 from '../../components/CInformes/CInformes_1/CInformes_1'
import BotonVolver from '../../components/BotonVolver/BotonVolver'

//Estilos
import './Informes.css'

export default function Informes() {
  return (
    <div id='ContenedorPrincipal_PageInformes'>
      <BotonVolver url='/' />
      <CInformes_1 />
    </div>
  )
}
