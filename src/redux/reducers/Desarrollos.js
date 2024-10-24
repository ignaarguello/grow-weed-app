import { createReducer } from "@reduxjs/toolkit";
import { desarrolloActions } from "../actions/Desarrollos"

const { obtenerTodosDesarrollos, crearNuevoDesarrollo } = desarrolloActions;

const initialState = {
    desarrollosTotales: [],
    nuevoDesarrollo: [],
}

const desarrollosReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(obtenerTodosDesarrollos.fulfilled, (state, action) => {
            return {
                ...state,
                desarrollosTotales: action.payload.data
            }
        })
        .addCase(crearNuevoDesarrollo.fulfilled, (state, action) => {
            return {
                ...state,
                nuevoDesarrollo: action.payload
            }
        })
})

export default desarrollosReducer