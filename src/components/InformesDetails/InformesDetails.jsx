//Estilos
import './InformesDetails.css'

//Use params para captar el valor que llega por url
import { useParams } from 'react-router-dom'

//Hooks 
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//Redux - Actions 
import { informesActions } from '../../redux/actions/Informes'

//Componentes
import BotonVolver from '../BotonVolver/BotonVolver'


export default function InformesDetails() {
  const _id = useParams()
  const { getInforme_ID } = informesActions
  const { informe_id } = useSelector(store => store.informes)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getInforme_ID(_id.id))
  }, [])

  return (
    <div id='ContenedorGeneral_InformesID'>
      <BotonVolver url='/informes' />
      <h2 id='TituloDetalleInforme_InformesID'>Detalle de Informe</h2>
      {/* Contenedor de los Detalles */}
      <div id='ContenedorDetalles_InformesID'>
        <h2 className='LabelItem_InformesID'>Nombre:</h2>
        <h3 className='ItemBold_InformerID'>{informe_id.nombre}</h3>
        <h2 className='LabelItem_InformesID'>Fecha:</h2>
        <h3 className='ItemBold_InformerID'>{informe_id.fecha}</h3>
        <h2 className='LabelItem_InformesID'>Transplante:</h2>
        {informe_id.transplantes ? (
          <h2 className='ItemBold_InformerID'>Hay datos de transplantes</h2>
        ) : (
          <h2 className='ItemBold_InformerID'>No hay datos de transplantes</h2>
        )}
        <h2 className='LabelItem_InformesID'>Fertilizantes:</h2>
        {informe_id.uso_fertilizantes ? (
          <h2 className='ItemBold_InformerID'>Positivo de Fertilizantes</h2>
        ) : (
          <h2 className='ItemBold_InformerID'>No hay datos de uso de fertilizantes</h2>
        )}
      </div>
    </div>
  )
}
