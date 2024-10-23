// Estilos
import './CrearDesarrollo.css'

/* Hooks */
import { useState } from 'react';
import useFormattedDate from '../../hooks/FormattedDate';

/* Icono */
import { IoMdAddCircle } from "react-icons/io";

export default function CrearDesarrollo() {
    /* Varbiables de Hook de Fecha */
    const myDate = new Date();
    const formattedDate = useFormattedDate(myDate);

    /* Variable de estado para mostrar - ocultar el Form */
    const [isFormVisible, setIsFormVisible] = useState(false);

    /* Variables de estado capturadas por input */
    const [NombreDesarrollo, setNombreDesarrollo] = useState('')
    const [NombreGenetica, setNombreGenetica] = useState('')
    const [TipoGenetica, setTipoGenetica] = useState('')

    /* Variable de estado para el modelo de Data */
    const dataToSend = {
        imagen: 'https://marketplace.canva.com/6bY0w/MAFksY6bY0w/1/s2/canva-closeup-of-a-cannabis-plant-in-the-sunlight-MAFksY6bY0w.jpg',
        nombre: NombreDesarrollo,
        genetica: NombreGenetica,
        tipo_genetica: TipoGenetica,
        estado: 'desarrollo',
        fecha_plantacion: formattedDate,
    }


    /* Funcion que setea el estado del formulario */
    const toggleForm = () => {
        setIsFormVisible(!isFormVisible);
    };

    /* Funciona que envia la data al servidor */
    const sendData = () => {
        console.log(dataToSend)
    }

    return (
        <div id="ContenedorPrincipal_CrearDesarrollo">
            <div id="ContenedorIcono_CrearDesarrollo" onClick={toggleForm}>
                <IoMdAddCircle id='IconoCrearInforme_CrearInforme' />
            </div>
            {/* Formulario para crear desarrollo - estado inicial (Hidden) */}
            {isFormVisible && (
                <form id='Form_CrearInformes_CrearInforme'>
                    {/* Nombre */}
                    <div className='ContenedorParaCadaInputLabel_CrearDesarrollo'>
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre_desarrollo" onInput={(event) => setNombreDesarrollo(event.target.value)} />
                    </div>
                    {/* Genetica */}
                    <div className='ContenedorParaCadaInputLabel_CrearDesarrollo'>
                        <label htmlFor="nombre">Genetica:</label>
                        <input type="text" id="genetica_desarrollo" onInput={(event) => setNombreGenetica(event.target.value)} />
                    </div>
                    {/* Tipo Genetica */}
                    <div className='ContenedorParaCadaInputLabel_CrearDesarrollo'>
                        <label htmlFor="nombre">Tipo Genetica:</label>
                        <input type="text" id="genetica_desarrollo" onInput={(event) => setTipoGenetica(event.target.value)} />
                    </div>
                    {/* Button Crear */}
                    <div id='ContenedorButtonCrear_CrearDesarrollo'>
                        <div id='ButtonCrear_CrearDesarrollo' onClick={sendData}>Crear</div>
                    </div>
                </form>
            )}
        </div>
    )
}
