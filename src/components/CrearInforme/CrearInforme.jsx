import './CrearInforme.css'

/* Hooks */
import { useState } from 'react';

/* Icono */
import { IoMdAddCircle } from "react-icons/io";

export default function CrearInforme() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [riego, setRiego] = useState(false);
    const [fertilizante, setFertilizante] = useState(false);

    const toggleForm = () => {
        setIsFormVisible(!isFormVisible);
    };

    const handleRiegoChange = () => {
        setRiego(!riego);
    };

    const handleFertilizanteChange = () => {
        setFertilizante(!fertilizante);
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
                    <div id="ContenedorBotonesForm_CrearInforme">
                        {/* Transplante */}
                        <div
                            className={riego ? 'boton-activo' : 'boton'}
                            onClick={handleRiegoChange}
                        >
                            Transplante
                        </div>
                        {/* Fertilizantes */}
                        <div
                            className={fertilizante ? 'boton-activo' : 'boton'}
                            onClick={handleFertilizanteChange}
                        >
                            Fertilizantes
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}