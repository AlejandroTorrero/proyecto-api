import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"


const CriptoPage = () => {
    const API_URL = import.meta.env.VITE_API_URL

    const [cripto, setCripto] = useState()
    const params = useParams()

    useEffect(() => {
        axios.get(`${API_URL}assets/${params.id}`)
            .then((data) => {
                setCripto(data.data.data)                
            })
            .catch(() => {
                console.error("La petición falló")
                console.log(API_URL)
            })
    }, [])

    if (!cripto) return (
        <h1>Cargando...</h1>
    )


    return (
        <>
            <h1>Soy {params.id}</h1>
            <p>Rank: <span>{cripto.rank}</span></p>
            {
                console.log(cripto)
            }
        </>

    )
}
export default CriptoPage