import { Link } from "react-router-dom"
import "./home.css"

const Home = () => {
    return (
        <>
            <div className="welcome-container">
                <div className="info">
                    <h1>Hola, bienvenido a Torrero Industries</h1>
                    <p>Conoce las 100 criptos más usadas</p>
                    <br />
                    <Link to="/Criptomonedas"><span className="btn-label">Ver listado</span></Link>
                </div>
            </div>

        </>
    )
}
export default Home