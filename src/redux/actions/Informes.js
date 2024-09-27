import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_BASE } from "../../Api/Api";


const getInformes = createAsyncThunk('get_informes', async () => {
    try {
        const data_informes = await axios.get(`${URL_BASE}/informes`)
        const headersData = {
            contentType: data_informes.headers['content-type'],
            contentLength: data_informes.headers['content-length'],
        };
        return {
            data: data_informes.data.body,
            headers: headersData,
        };
    } catch (error) {
        console.log(error.message);
    }
})

const getInforme_ID = createAsyncThunk('getInforme_ID', async (id) => {
    try {
        const informe_id = await axios.get(`${URL_BASE}/informes/${id}`)
        const headersData = {
            contentType: informe_id.headers['content-type'],
            contentLength: informe_id.headers['content-length'],
        };
        return {
            data: informe_id.data.body,
            headers: headersData,
        };
    }
    catch (error) {
        console.log(error.message);
    }
})


export const informesActions = {
    getInformes,
    getInforme_ID
}