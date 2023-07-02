import { useEffect,useState } from "react"
import axios from "axios"

const usePetition = (endpoint)=>{
    const API_URL = import.meta.env.VITE_API_URL
    const [data, setData] = useState({})    

    useEffect(() => {        
        // General info request
        axios.get(`${API_URL}${endpoint}`)
            .then((data) => {
                setData(data.data.data)
            })
            .catch(() => {
                console.error("La petición falló")
            })},[])


    return data
}

export default usePetition