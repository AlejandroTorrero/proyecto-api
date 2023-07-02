import { NavLink } from "react-router-dom"
import "./menu.css"

const Menu = ()=>{
    return (
        <>
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>                
                <li><NavLink to="/Criptomonedas">Lista de criptos</NavLink></li>              
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