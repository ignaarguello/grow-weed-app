import './Desarrollos.css'

//Componentes
import CDesarrollo_1 from '../../components/CDesarrollo/CDesarrollo_1/CDesarrollo_1'
import CDesarrollo_2 from '../../components/CDesarrollo/CDesarrollo_2/CDesarrollo_2'
import CDesarrollo_3 from '../../components/CDesarrollo/CDesarrollo_3/CDesarrollo_3'
import BotonVolver from '../../components/BotonVolver/BotonVolver'

export default function Desarrollos() {
  return (
    <div id='ContenedorPageDesarrollo_Desarrollo'>
      <BotonVolver url='/' />
      <CDesarrollo_1 />
      <CDesarrollo_2 />
      <CDesarrollo_3 />
    </div>
  )
}
