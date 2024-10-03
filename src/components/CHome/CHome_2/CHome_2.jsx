import { ClipboardDocumentListIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import './CHome_2.css'

const features = [
    {
        name: 'Informes',
        description:
            'Sección para realizar informes de riegos o días de aplicación de fertilizantes.',
        icon: ClipboardDocumentListIcon,
        url: "/informes"
    },
    {
        name: 'Control de Desarrollo',
        description:
            'Aca podés consultar la edad de cada planta.',
        icon: CalendarDaysIcon,
        url: "/desarrollo"
    },
]

export default function CHome_1() {
    return (
        <div id='ContenedorGeneral_CHome2' >
            {/* Subcontenedor - 1 */}
            <div id='SubContenedor-1_CHome2'>
                <div className="mx-auto max-w-2xl lg:text-center p-4">
                    <h2 className="text-base font-semibold leading-7 text-lime-700  mt-4 lg:text-4xl" id='tituloGrowWeed'>Grow Weed App</h2>
                    <p className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Destinada al control y crecimiento del Cannabis
                    </p>
                    <p className="mt-8 text-lg leading-8 text-gray-600">
                        <p className='text-lime-800'>1. Cultivo Preciso ✓</p>
                        <p className='text-lime-800'>2. Seguimiento de Riego ✓</p>
                        <p className='text-lime-800'>3. Control de Desarrollo ✓</p>
                    </p>
                </div>
            </div>
            {/* Subcontenedor - 2 */}
            <div id='SubContenedor-2_CHome2'>
                <Link className="Anchor_CHome2">Informes</Link>
                <Link className="Anchor_CHome2">Riego</Link>
                <Link className="Anchor_CHome2">Desarrollo</Link>
                <Link className="Anchor_CHome2">Sobre Mi</Link>
            </div>
        </div>
    )
}
