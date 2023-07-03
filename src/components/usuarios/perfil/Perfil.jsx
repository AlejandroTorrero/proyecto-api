import { useContext } from "react"
import "./perfil.css"
import { UserContext } from "../../../context/userContext"


const Perfil = () => {

    const usuario = useContext(UserContext)

    return (
        <>
        <div className="perfil-container">
        <h1>Perfil</h1>
        <h2>{usuario.nombre}</h2>
        <h3>{usuario.registered}</h3>
        </div>
            
        </>

    )
}

export default Perfil