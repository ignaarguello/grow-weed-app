import { createReducer } from "@reduxjs/toolkit";
import { informesActions } from "../actions/Informes";


const { getInformes } = informesActions;

const initialState = {
    informes: [],
    nombre: '',
    fecha: '',
    descripcion: '',
    uso_fertilizante: '',
    transplantes: '',
}

const informesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getInformes.fulfilled, (state, action) => {
            console.log(action)
            return {
                ...state,
                informes: action.payload.data
            }
        })
})


export default informesReducer