import { Link,NavLink, useNavigate } from "react-router-dom"
import "./menu.css"
import { useContext } from "react"
import { UserContext } from "../../context/userContext"

const Menu = ()=>{

    const usuario = useContext(UserContext)
    const navigation = useNavigate()

    return (
        <>
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>                
                <li><NavLink to="/Criptomonedas">Lista de criptos</NavLink></li>              
                <li><NavLink to="/perfil">Perfil de {usuario.nombre}</NavLink></li>              
                <li><a onClick={()=>{
                    localStorage.removeItem("tokenTI")
                    navigation("/login")
                }}>Cerrar sesión</a></li>              
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