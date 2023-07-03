import { useEffect, useState } from "react"
import axios from "axios"

const usePetition = (endpoint) => {
    const API_URL = import.meta.env.VITE_API_URL
    const [data, setData] = useState()
    const [cargando,setCargando] = useState(false)

    useEffect(() => {
        setCargando(true)
        // General info request        
        axios.get(`${API_URL}${endpoint}`)
            .then((data) => {
                setData(data.data.data)    
                setCargando(false)            
            })
            .catch(() => {
                console.error("La petición falló")
                setCargando(false)  
            })
    }, [])    
    return [data,cargando]
}

export default usePetition