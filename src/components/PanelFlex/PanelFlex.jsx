import { Link } from 'react-router-dom'
import './PanelFlex.css'

export default function PanelFlex(props) {
    return (
        <Link to={props.url} style={{ 'backgroundImage': `url(${props.background})` }} id='ContenedorCardImageAnchor_PanelFlex' >
            <h2 id='Titulo_PanelFlex'>{props.titulo}</h2>
        </Link >
    )
}
