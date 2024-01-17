import { ClipboardDocumentListIcon, PhotoIcon, CalendarDaysIcon, PencilIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Informes',
        description:
            'Sección para realizar informes de riegos o días de aplicación de fertilizantes.',
        icon: ClipboardDocumentListIcon,
    },
    {
        name: 'Imagenes',
        description:
            'Sección de Imagenes de las plantas. Para controlar su crecimiento.',
        icon: PhotoIcon,
    },
    {
        name: 'Control de Edades',
        description:
            'Aca podés consultar la edad de cada planta.',
        icon: CalendarDaysIcon,
    },
    {
        name: 'Anotaciones Importantes',
        description:
            'Notas Importantes, de información a tener en cuenta',
        icon: PencilIcon,
    },
]

export default function Home() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-lime-700">Weed Grow App</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Destinada al control y crecimiento del Cannabis
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Una aplicación creada para realizar informes, subir fotos y llevar un control del periodo de crecimiento de las plantas. Pudiendo saber su edad, su genetica y demás.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-lime-700">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
