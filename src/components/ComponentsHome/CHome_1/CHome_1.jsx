import { ClipboardDocumentListIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import NavbarInside from '../../NavbarInside/NavbarInside'

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
                <NavbarInside />
                <div className="mx-auto max-w-2xl lg:text-center p-4">
                    <h2 className="text-base font-semibold leading-7 text-lime-700  mt-4 lg:text-4xl" id='tituloGrowWeed'>Grow Weed App</h2>
                    <p className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Destinada al control y crecimiento del Cannabis
                    </p>
                    <p className="mt-8 text-lg leading-8 text-gray-600">
                        Aplicación creada para realizar informes, subir fotos y llevar un control del periodo de crecimiento de las plantas. Pudiendo saber su edad, su genetica y demás.
                    </p>
                </div>
                <div className="mx-auto mt-6 max-w-2xl sm:mt-20 lg:mt-2 lg:max-w-5xl p-2">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-18 ">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900 mt-3">
                                    <Link to={feature.url} className="absolute left-0 top-8 flex h-10 w-10 items-center justify-center rounded-lg bg-lime-600 cursor-pointer">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </Link>
                                    {feature.name}
                                </dt>
                                <dd className="text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
