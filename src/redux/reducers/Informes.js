import { createReducer } from "@reduxjs/toolkit";
import { informesActions } from "../actions/Informes";


const { getInformes } = informesActions;

const initialState = {
    informes: [],
}

const informesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getInformes.fulfilled, (state, action) => {
            console.log('Action de informes', action)
            return {
                ...state,
                informes: action.payload
            }
        })
})


export default informesReducer