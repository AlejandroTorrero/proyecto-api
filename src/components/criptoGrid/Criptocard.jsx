import "./card.css"

const Criptocard = ({nombre,codigo,valor}) => {

    return (
        <>
            <div className="cripto-card">
                <h1>{nombre}</h1>
                <h2>{codigo}</h2>
                <span>Value:  {valor}</span>
            </div>
            <br></br>
        </>
    )

}

export default Criptocard