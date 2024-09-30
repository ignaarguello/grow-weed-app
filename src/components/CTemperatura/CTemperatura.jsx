import axios from "axios"
import { useEffect, useState } from "react"


export default function CTemperatura() {
    const [temperature, setTemperature] = useState('')
    const Api_key = '15cdc4fa1e9e10c37a67640127fdef9b'
    const lat = '-34.72139'
    const lon = '-58.25394'
    const Url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Api_key}&units=metric`;

    useEffect(() => {
        axios.get(Url).then(res => setTemperature(res?.data?.main?.temp.toString().slice(0, 2)))
    }, [])
    return (
        <div className="ItemDate_NI">{temperature}°C</div>
    )
}
