import "./perfil.css"
import { useState,useEffect } from "react"


const Perfil = () => {
    const [usuario,setUsuario] = useState({})

    useEffect(()=>{
        setUsuario({
            nombre:"Diego Torrero",
            registered:"15/Agosto/2022"
        })
    },[])
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