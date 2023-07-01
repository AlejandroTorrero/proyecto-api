import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import "./criptopage.css"

const CriptoPage = () => {
    const API_URL = import.meta.env.VITE_API_URL    

    const [cripto, setCripto] = useState()
    const [criptoRecord, setCriptoRecord] = useState()
    const params = useParams()

    useEffect(() => {
        const ID = params.id
        // General info request
        axios.get(`${API_URL}assets/${ID}`)
            .then((data) => {
                setCripto(data.data.data)
            })
            .catch(() => {
                console.error("La petición falló")                
            })

            // History Request
            axios.get(`${API_URL}assets/${ID}/history?interval=d1`)
            .then((data) => {
                setCriptoRecord(data.data.data)                
            })
            .catch(() => {
                console.error("La petición falló")                
            })
    }, [])

     if (!cripto) return (
        <h1>Cargando...</h1>
    )


    return (
        <>
            <div className="cripto-container">
                <div className="cripto-info">
                    <div className="cripto-name">
                        <h1> {cripto.name}</h1>
                        <br />
                        <h2>Rank: <span className="focus">{cripto.rank}</span></h2>
                    </div>
                    <br />
                    <br />
                    <div className="general-info">                        
                        <p>Symbol: <span>{cripto.symbol}</span></p>
                        <p>Value: <span>{cripto.priceUsd}</span></p> 
                        <p>Change: 
                        <span>{parseFloat(cripto.changePercent24Hr).toFixed(2)}</span>
                        </p>                                                                       
                    </div>
                    <br />
                    <div className="history">
                            <h2>Value record</h2>
                            {
                                console.log(criptoRecord)
                            }
                    </div>
                    <div className="routes">
                        <Link to="/criptomonedas">Volver</Link>
                        
                        <a className={
                            (cripto.explorer == null) ? ("Disable") : ("")
                            }
                         target = "_blacnk" href={cripto.explorer}>Más información</a>
                    </div>

                </div>
            </div>
        </>

    )
}
export default CriptoPage