//Icono
import { MdOutlineArrowBackIosNew } from "react-icons/md";

//React Router Dom
import { Link } from 'react-router-dom'

//Estilos
import './BotonVolver.css'

export default function BotonVolver(props) {
    return (
        <Link to={props.url} id='ContenedorIcono_InformesID'>
            <MdOutlineArrowBackIosNew id='IconoBack_InformesID' />
        </Link>
    )
}
