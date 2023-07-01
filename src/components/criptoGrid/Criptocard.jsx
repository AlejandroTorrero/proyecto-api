import "./card.css"
import { Link } from "react-router-dom"

const Criptocard = ({ id, nombre, codigo, valor, change }) => {

    return (
        <>
            <Link to={`/Criptomonedas/${id}`}>
                <div className="cripto-card">
                    <h1>{nombre}</h1>
                    <h2>{codigo}</h2>
                    <p><span className="label">Value: </span>  {parseFloat(valor).toFixed(2)}</p>
                    <p>
                        <span className="label">Change: </span>
                        <span className={parseFloat(change) < 0 ? "negative" : "positive"} >{parseFloat(change).toFixed(2)}</span>
                        <span className="label"> %</span>
                    </p>

                </div>
            </Link>
            <br></br>
        </>
    )

}

export default Criptocard