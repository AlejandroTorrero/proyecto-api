import { NavLink } from "react-router-dom"
import "./menu.css"
import { useContext } from "react"
import { UserContext } from "../../context/userContext"

const Menu = ()=>{

    const usuario = useContext(UserContext)

    return (
        <>
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>                
                <li><NavLink to="/Criptomonedas">Lista de criptos</NavLink></li>              
                <li><NavLink to="/perfil">Perfil de {usuario.nombre}</NavLink></li>              
            </ul>                                   
        </nav>           
        <hr  width="92%" />
        </>  
    )
}

export default Menu

//Link y NavLink
//NavLink es para menús
//Link para lo demás