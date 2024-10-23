// Estilos
import './CrearDesarrollo.css'

/* Hooks */
import { useState } from 'react';

/* Icono */
import { IoMdAddCircle } from "react-icons/io";



export default function CrearDesarrollo() {
    /* Variable de estado para mostrar - ocultar el Form */
    const [isFormVisible, setIsFormVisible] = useState(false);

    /* Funcion que setea el estado del formulario */
    const toggleForm = () => {
        setIsFormVisible(!isFormVisible);
    };

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
                        <input type="text" id="nombre_desarrollo" />
                    </div>
                    {/* Genetica */}
                    <div className='ContenedorParaCadaInputLabel_CrearDesarrollo'>
                        <label htmlFor="nombre">Genetica:</label>
                        <input type="text" id="genetica_desarrollo" />
                    </div>
                    {/* Tipo Genetica */}
                    <div className='ContenedorParaCadaInputLabel_CrearDesarrollo'>
                        <label htmlFor="nombre">Tipo Genetica:</label>
                        <input type="text" id="genetica_desarrollo" />
                    </div>
                    {/* Button Crear */}
                    <div id='ContenedorButtonCrear_CrearDesarrollo'>
                    <div id='ButtonCrear_CrearDesarrollo'  onClick={() => alert('Desarrollo Creado')}>Crear</div>
                    </div>
                </form>
            )}
        </div>
    )
}
