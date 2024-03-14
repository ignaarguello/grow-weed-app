import './Home.css'
import NavbarInside from '../../components/NavbarInside/NavbarInside'


export default function Home() {
    return (
        <div>
            <NavbarInside />
            <div id='container-image-title_Home'>
                <h2 id='titulo-grow-weed' className='text-3xl font-extralight tracking-tight text-gray-900'>Grow Weed</h2>
                <h3 className='text-1xl font-extralight tracking-tight text-gray-600'>Making Nature</h3>
            </div>
        </div>
    )
}
