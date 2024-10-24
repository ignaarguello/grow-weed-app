// Estilos
import './CDesarrollo_3.css'

// Componentes
import CrearDesarrollo from '../../CrearDesarrollo/CrearDesarrollo'
import CardDesarrollo from '../../CardDesarrollo/CardDesarrollo'

// Hooks Nativos
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

// Redux - Dispatch - Store - Actions
import { desarrolloActions } from '../../../redux/actions/Desarrollos'

export default function CDesarrollo_3() {
  const dispatch = useDispatch()
  const { desarrollosTotales, nuevoDesarrollo } = useSelector(store => store.desarrollos)
  const { obtenerTodosDesarrollos } = desarrolloActions

  useEffect(() => {
    dispatch(obtenerTodosDesarrollos())
  }, [nuevoDesarrollo])


  return (
    <div id='ContenedorGeneral_CDesarrollo_3'>
      <CrearDesarrollo />
      {/* Card de cada desarrollo individual */}
      <section id='ContenedorCards_CDesarrollo_3'>
        {
          desarrollosTotales?.map((elem, index) =>
            <CardDesarrollo key={index}
              imagen={elem.imagen}
              nombre={elem.nombre}
              estado={elem.estado}
              genetica={elem.genetica}
              fecha_plantacion={elem.fecha_plantacion}
            />
          )
        }
      </section>
    </div>
  )
}
