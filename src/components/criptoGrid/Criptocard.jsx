import "./card.css"

const Criptocard = ({id,nombre,codigo,valor,change}) => {

    return (
        <>
            <div key={id} className="cripto-card">
                <h1>{nombre}</h1>
                <h2>{codigo}</h2>
                <p><span className="label">Value: </span>  {parseFloat(valor).toFixed(2)}</p>
                <p>
                <span className="label">Change: </span>  
                <span className={ parseFloat(change) < 0 ? "negative" : "positive"} >{parseFloat(change).toFixed(2)}</span>                
                <span className="label"> %</span>  
                </p>
            </div>
            <br></br>
        </>
    )

}

export default Criptocard