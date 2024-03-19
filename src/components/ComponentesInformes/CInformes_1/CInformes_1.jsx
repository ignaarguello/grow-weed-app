import './CInformes_1.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { URL_BASE } from '../../../Api/Api'

export default function CInformes_1() {
    const [dataInformes, setDataInformes] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${URL_BASE}/informes`);
                setDataInformes(response.data);

                console.log(response.data)
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div id='Contenedor-CI_1'>
            <h2 id='titulo-seccionInformes' className='font-extralight tracking-tight text-white'>Sección Informes</h2>
            <div id='contenedor-dataInformes'>
                <ul role="list" className="divide-y divide-gray-100">
                    {dataInformes.map((item) => (
                        <li key={dataInformes.nombre} className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <img className="h-14 w-14 flex-none rounded-full bg-gray-50 border-solid border-2 border-amber-700" style={{ objectFit: 'cover' }} src={'https://marketplace.canva.com/_zKoo/MAFVqF_zKoo/1/s2/canva-sin-t%C3%ADtulo-MAFVqF_zKoo.jpg'} alt="" />
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-bold leading-6 text-gray-900">{item.nombre.toUpperCase()}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-600 font-medium">{item.fecha}</p>
                                </div>
                            </div>
                            <button
                                className="rounded-md bg-black px-3 py-2 text-sm font-light text-white shadow-sm hover:bg-lime-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Ver Más +
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
