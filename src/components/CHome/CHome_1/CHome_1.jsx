import './CHome_1.css';
import { Link } from 'react-router-dom';

export default function CHome_1() {
    return (
        <div id='Container-image-title_Home'>
            {/* Contenedor - 1 */}
            <section className="ContenedorInterior_CHome1">
                <h2 id='Titulo-grow-weed' className='text-3xl font-extralight tracking-tight text-gray-900 animate__animated animate__fadeIn '>Grow Weed</h2>
                <h3 id='Titulo-making-nature' className='text-1xl font-extralight tracking-tight text-gray-500 animate__animated animate__fadeIn'>Making Nature</h3>
                <nav id='BarraNavegacion_CHome1'>
                    <Link className='Anchor_CHome1' to='/informes'>Informes</Link>
                    <Link className='Anchor_CHome1' to='/riegos'>Riegos</Link>
                    {<Link className='Anchor_CHome1' to='/desarrollo'>Desarrollo</Link>}
                </nav>
            </section>
            {/* Contenedor - 2 */}
            <section className="ContenedorInterior_CHome1"></section>
        </div>
    )
}
