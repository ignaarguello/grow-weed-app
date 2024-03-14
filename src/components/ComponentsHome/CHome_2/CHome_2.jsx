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
        <div className="bg-white h-full flex justify-center items-center mt-2 lg:mt-10">
            <div className="mx-auto max-w-7xl px-2 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center p-4">
                    <h2 className="text-base font-semibold leading-7 text-lime-700  mt-4 lg:text-4xl" id='tituloGrowWeed'>Grow Weed App</h2>
                    <p className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Destinada al control y crecimiento del Cannabis
                    </p>
                    <p className="mt-8 text-lg leading-8 text-gray-600">
                        Creada para dar seguimiento y apoyo al cultivo durante todo su ciclo. Pudiendo realizar informes y controles de desarrollo.
                    </p>
                </div>
                <div id='contenedor-cards-refs'>
                    {
                        features.map((elem, index) =>
                            <Link className="card-ref" key={index} to={elem.url}>
                                <elem.icon className="text-white" id='icon-card-refs' aria-hidden="true" />
                                <div id='contenedor-info-cards'>
                                    <h2 className='font-medium tracking-tight text-gray-300 text-base'>{elem.name}</h2>
                                    <h4 className='font-normal tracking-tight text-gray-400 text-sm mt-2'>{elem.description}</h4>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
