import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_BASE } from "../../Api/Api";


const getInformes = createAsyncThunk('get_informes', async () => {
    try {
        const data_informes = await axios.get(`${URL_BASE}/informes`)

        return data_informes.data
    } catch (error) {
        console.log(error.message);
    }
})


export const informesActions = {
    getInformes,
}