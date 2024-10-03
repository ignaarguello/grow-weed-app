import React from 'react'
import './CrearInforme.css'

/* Hooks */
import { useState } from 'react';

/* Icono */
import { IoMdAddCircle } from "react-icons/io";

export default function CrearInforme() {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleForm = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <div id='ContenedorGeneral_CrearInforme'>
            <div id="ContenedorIcono_CrearInforme" onClick={toggleForm}>
                <IoMdAddCircle id='IconoCrearInforme_CrearInforme' />
            </div>
            {isFormVisible && (
                <form action="" id='Form_CrearInformes_CrearInforme'>
                    <div className='ContenedorParaCadaInputLabel_CrearInforme'>
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" />
                    </div>
                </form>
            )}
        </div>
    );
}