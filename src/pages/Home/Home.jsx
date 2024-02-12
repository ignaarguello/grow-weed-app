import { ClipboardDocumentListIcon, PhotoIcon, CalendarDaysIcon, PencilIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

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
    {
        name: 'Imagenes',
        description:
            'Sección de Imagenes de las plantas. Para controlar su crecimiento.',
        icon: PhotoIcon,
        url: "/imagenes"
    },
    {
        name: 'Anotaciones Importantes',
        description:
            'Notas Importantes, de información a tener en cuenta',
        icon: PencilIcon,
        url: "/anotaciones"
    },
]

export default function Home() {
    return (
        <div className="bg-white h-screen flex justify-center items-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-lime-700">Grow Weed App</h2>
                    <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Destinada al control y crecimiento del Cannabis
                    </p>
                    <p className="mt-8 text-lg leading-8 text-gray-600">
                        Aplicación creada para realizar informes, subir fotos y llevar un control del periodo de crecimiento de las plantas. Pudiendo saber su edad, su genetica y demás.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900 mt-3">
                                    <Link to={feature.url} className="absolute left-0 top-8 flex h-10 w-10 items-center justify-center rounded-lg bg-lime-700 cursor-pointer">
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
