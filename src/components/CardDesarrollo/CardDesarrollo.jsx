// Estilos
import './CardDesarrollo.css'

// Iconos
import { TbProgressAlert } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function CardDesarrollo(props) {
    return (
        <div id='ContenedorPrincipal_CardDesarrollo'>
            <div id='SubcontenedorIndividual_CardDesarrollo'>
                {/* Imagen */}
                <img id='ImageProfileDesarrollo_CardDesarrollo' src={props.imagen} alt="Imagen Individuo Desarrollo - GWA" />
                {/* Contenedor del Nombre y el estado del sujeto */}
                <div id="ContenedorNombreyEstado_CardDesarrollo">
                    <h2 id='NombreDesarrollo_CardDesarrollo'>{props.nombre}</h2>
                    {props.estado === 'desarrollo' ? (
                        <TbProgressAlert id='IconDesarrollo_CardDesarrollo' />
                    ) : (
                        <IoIosCheckmarkCircleOutline id='IconCosecha_CardDesarrollo' /> // O cualquier otro mensaje más apropiado
                    )}
                </div>
                {/* Contenedor Genetica y Fecha de plantacion */}
                <div id='ContenedorGeneticayFechaPlantacion'>
                    <span id='FechaDesarrollo_CardDesarrollo'>{props.fecha_plantacion}</span>
                    <span id='GeneticaDesarrollo_CardDesarrollo'>{props.genetica}</span>
                </div>
            </div>
        </div>
    )
}
