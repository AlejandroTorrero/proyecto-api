import "./criptopage.css"
import { Link } from "react-router-dom"

const CriptoInfo = ({ cripto }) => {

    return (
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
    )
}

export default CriptoInfo