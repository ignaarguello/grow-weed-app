import './CInformes_1.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { informesActions } from '../../../redux/actions/Informes';
import { Link } from 'react-router-dom';

export default function CInformes_1() {
    const dispatch = useDispatch()
    const { informes } = useSelector(store => store.informes)
    const { getInformes } = informesActions


    useEffect(() => {
        dispatch(getInformes())
        console.log(informes)
    }, []);
    
    return (
        <div id='Contenedor-CI_1'>
            <h2 id='titulo-seccionInformes' className='font-extralight tracking-tight text-white'>Sección Informes</h2>
            <div id='contenedor-dataInformes'>
                <ul role="list" className="divide-y divide-gray-100">
                    {informes?.map((item) => (
                        <li key={item.nombre} className="flex justify-between gap-x-6 p-2 my-4">
                            <div className="flex min-w-0">
                                <img className="h-14 w-14 flex-none rounded-full bg-gray-50 border-solid border-2 border-amber-700" style={{ objectFit: 'cover' }} src={'https://marketplace.canva.com/_zKoo/MAFVqF_zKoo/1/s2/canva-sin-t%C3%ADtulo-MAFVqF_zKoo.jpg'} alt="" />
                                <div className="min-w-0 flex-auto ml-2 mt-1">
                                    <p className="text-sm font-bold leading-6 text-gray-900">{item.nombre.toUpperCase()}</p>
                                    <p className="truncate text-xs leading-5 text-lime-900 font-medium">{item.fecha}</p>
                                </div>
                            </div>
                            <Link to={`${item._id}`}
                                className="rounded-md bg-black flex items-center px-3 py-2 text-sm font-light text-white shadow-sm hover:bg-lime-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                
                            >
                                Ver Más +
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
