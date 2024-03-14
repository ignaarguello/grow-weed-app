import './Home.css'
import NavbarInside from '../../components/NavbarInside/NavbarInside'
import 'animate.css';


export default function Home() {
    return (
        <div>
            <NavbarInside />
            <div id='container-image-title_Home'>
                <h2 id='titulo-grow-weed' className='text-3xl font-extralight tracking-tight text-gray-900 animate__animated animate__fadeIn animate__delay-3s'>Grow Weed</h2>
                <h3 id='titulo-making-nature' className='text-1xl font-extralight tracking-tight text-gray-600 animate__animated animate__fadeIn animate__delay-3s'>Making Nature</h3>
            </div>
        </div>
    )
}
