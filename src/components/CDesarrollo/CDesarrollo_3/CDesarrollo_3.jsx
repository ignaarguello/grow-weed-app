// Estilos
import './CDesarrollo_3.css'

// Componentes
import CrearDesarrollo from '../../CrearDesarrollo/CrearDesarrollo'
import CardDesarrollo from '../../CardDesarrollo/CardDesarrollo'

// Data Estatica de Prueba
import data_desarrollo from '../../../data/data'

export default function CDesarrollo_3() {
  return (
    <div id='ContenedorGeneral_CDesarrollo_3'>
      <CrearDesarrollo />
      {/* Card de cada desarrollo individual */}
      {
        data_desarrollo.map((elem, index) =>

          <CardDesarrollo key={index}
            imagen={elem.imagen}
            nombre={elem.nombre}
            estado={elem.estado}
            genetica={elem.genetica}
            fecha_plantacion={elem.fecha_plantacion}
          />

        )
      }
    </div>
  )
}
