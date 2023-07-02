import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import "./criptopage.css"

const CriptoPage = () => {
    const API_URL = import.meta.env.VITE_API_URL


    const [cripto, setCripto] = useState()
    const [criptoRecord, setCriptoRecord] = useState([])
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
        <>
            <div className="laoding">
                <span> Cargando... </span>
            </div>

        </>
    )

    return (
        <>
            {console.log(criptoRecord)}
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
                        <table>
                            <tbody>
                                <tr>
                                    <td> <p className="label">Symbol:</p></td>
                                    <td><span>{cripto.symbol}</span></td>
                                </tr>
                                <tr>
                                    <td><p className="label">Value: </p></td>
                                    <td><span>{cripto.priceUsd}</span></td>
                                </tr>
                                <tr>
                                    <td><p className="label">Change: </p></td>
                                    <td> <span>{parseFloat(cripto.changePercent24Hr).toFixed(2)}</span></td>
                                </tr>


                            </tbody>
                        </table>

                    </div>
                    <br />

                    <div className="routes">
                        <Link to="/criptomonedas">Volver</Link>
                        <a className={
                            (cripto.explorer == null) ? ("disable") : ("")
                        }
                            target="_blacnk" href={cripto.explorer}>Más información</a>
                    </div>

                </div>
                <div className="history">
                    <div className="history-title">
                        <h2>History</h2>
                    </div>

                    <table className="table-history">
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                criptoRecord.map(({ date, priceUsd, time }) => (
                                    <tr key={time}>
                                        <td>{
                                            JSON.stringify(date).substring(1, 11)
                                        }</td>
                                        <td className="positive">$ {parseFloat(priceUsd).toFixed(3)}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )
}
export default CriptoPage