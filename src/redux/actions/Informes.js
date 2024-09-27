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
            data: data_informes.data,
            headers: headersData,
        };
    } catch (error) {
        console.log(error.message);
    }
})


export const informesActions = {
    getInformes,
}