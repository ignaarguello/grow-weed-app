import { useState, useEffect } from "react"

export default function CHora() {
    const [horaExacta, setHoraExacta] = useState({
        minutos: null,
        hora: null,
    })

    useEffect(() => {

        const fecha = new Date()
        const minutos = fecha.getMinutes().toString()
        const hora = fecha.getHours()

        if (minutos < 10) {
            setHoraExacta({ hora: hora, minutos: '0' + minutos })
        } else {
            setHoraExacta({
                minutos: minutos,
                hora: hora,
            })
        }


    }, [])

    return (
        <div className="ItemDate_NI">{horaExacta.hora}:{horaExacta.minutos}</div>
    )
}
