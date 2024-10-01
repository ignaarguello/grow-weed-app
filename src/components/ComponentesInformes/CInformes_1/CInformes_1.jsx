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
    }, []);

    return (
        <div id='Contenedor-CI_1'>
            <h2 id='titulo-seccionInformes' className='font-extralight tracking-tight text-white'>Sección Informes</h2>
            <span id='TituloCrearInforme_CInforme1'>+</span>
            <div id='contenedor-dataInformes'>
                <ul id='ContenedorLista_CInformes1' role="list" className="divide-y divide-gray-100 mt-4">
                    {informes?.map((item) => (
                        <li id='ContenedorCadaItem_CInformes1' key={item.nombre} className="flex gap-x-2 p-2 my-4">
                            <div className="flex min-w-0">
                                <img id='ImagenItem_CInforme1' className="flex-none rounded-full bg-gray-50" style={{ objectFit: 'cover' }} src={'https://marketplace.canva.com/_zKoo/MAFVqF_zKoo/1/s2/canva-sin-t%C3%ADtulo-MAFVqF_zKoo.jpg'} alt="" />
                                <div id='ContenedorNombreYFecha_CInformes1' className="min-w-0 flex-auto ml-2 mt-1">
                                    <p id='TituloNombreItem_CInformes1' className="text-sm font-bold leading-6 text-gray-900">{item.nombre.toUpperCase()}</p>
                                    <p className="truncate text-xs leading-5 text-lime-900 font-medium">{item.fecha}</p>
                                </div>
                            </div>
                            {/* Contenedor de Botones */}
                            <div id='ContenedorBotenesAcccion_CInformes1'>
                                <Link to={`${item._id}`} id="ButtonVerMas_CInformes1">
                                    Ver Más +
                                </Link>
                                <div id='ContenedorIconoDelete_CInformes1' >
                                    Eliminar
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
