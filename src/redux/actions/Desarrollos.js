import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_BASE } from "../../Api/Api";


const obtenerTodosDesarrollos = createAsyncThunk('obtener_todos_desarrollos', async () => {
    try {
        const todosInformes = await axios.get(`${URL_BASE}/desarrollo`)
        const headersData = {
            contentType: todosInformes.headers['content-type'],
            contentLength: todosInformes.headers['content-length'],
        };
        return {
            data: todosInformes.data,
            headers: headersData,
        };
    } catch (error) {
        console.log(error.message);
    }
})

const crearNuevoDesarrollo = createAsyncThunk('crear_nuevo_desarrollo', async (datos) => {
    try {
        const nuevoDesarrolloCreado = await axios.post(`${URL_BASE}/desarrollo`, datos)
        const headersData = {
            contentType: nuevoDesarrolloCreado.headers['content-type'],
            contentLength: nuevoDesarrolloCreado.headers['content-length'],
        };
        return {
            data: nuevoDesarrolloCreado.data,
            headers: headersData,
        };
    } catch (error) {
        console.log(error.message);
    }
})



export const desarrolloActions = {
    obtenerTodosDesarrollos,
    crearNuevoDesarrollo,
}