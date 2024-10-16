import './Home.css'
import 'animate.css';

// Import de componentes
import NavbarInside from '../../components/NavbarInside/NavbarInside'
import CHome_1 from '../../components/CHome/CHome_1/CHome_1'
import CHome_2 from '../../components/CHome/CHome_2/CHome_2'
import CHome_3 from '../../components/CHome/CHome_3/CHome_3';


export default function Home() {
    return (
        <>
            <NavbarInside />
            <CHome_1 />
            <CHome_2 />
            <CHome_3 />
        </>
    )
}
