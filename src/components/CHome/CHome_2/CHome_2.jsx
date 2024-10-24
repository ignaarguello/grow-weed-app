// Hooks
import { Link } from 'react-router-dom';

// Componentes
import PanelFlex from '../../PanelFlex/PanelFlex';

// Imagenes
import ImageInformes from '../../../images/anchors/informes.png'
import ImageRiego from '../../../images/anchors/riego.png'
import ImageDesarrollo from '../../../images/anchors/desarrollo2.png'

// Estilos
import './CHome_2.css'


export default function CHome_1() {
    const DatosCard = [
        {
            titulo: 'Informes',
            imagen: ImageInformes,
            url: '/informes'
        },
        {
            titulo: 'Riego',
            imagen: ImageRiego,
            url: '/riegos'
        },
        {
            titulo: 'Desarrollo',
            imagen: ImageDesarrollo,
            url: '/desarrollos'
        },
    ]
    return (
        <div id='ContenedorGeneral_CHome2' >
            {/* Subcontenedor - 1 */}
            <div className="Subcontenedor_CHome2">
                <span id='Titulo-SubContenedor-1_CHome1'>Grow Weed App</span>
                <p id='Texto-SubContenedor-1_CHome1'>
                    Desarrollada para el control de crecimiento de tu cultivo, ademas de poder registrar las fechas de riego y crear informes
                </p>
            </div>
            {/* Subcontenedor - 2  */}
            <div className="Subcontenedor_CHome2">
                {
                    DatosCard.map((elem, index) =>
                        <PanelFlex url={elem.url} key={index} titulo={elem.titulo} background={elem.imagen} />
                    )
                }
            </div>
        </div>
    )
}
