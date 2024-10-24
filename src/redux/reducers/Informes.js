import { createReducer } from "@reduxjs/toolkit";
import { informesActions } from "../actions/Informes";


const { getInformes, getInforme_ID } = informesActions;

const initialState = {
    informes: [],
    informe_id: [],
}

const informesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getInformes.fulfilled, (state, action) => {
            return {
                ...state,
                informes: action.payload.data
            }
        })
        .addCase(getInforme_ID.fulfilled, (state, action) => {
            return {
                ...state,
                informe_id: action.payload.data
            }
        })
})


export default informesReducer