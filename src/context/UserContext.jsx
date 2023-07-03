import { createContext } from "react";
import { useEffect,useState } from "react";

//Información compartida entre componentes

const UserContext = createContext()
//Un contexto almacena el provider

const UserContextProvider = ({children}) =>{

    const [usuario,setUsuario] = useState({})

    useEffect(()=>{
        setUsuario({
            nombre:"Diego Torrero",
            registered:"15/Agosto/2022"
        })
    },[])

    return(
        <UserContext.Provider value={usuario}>
            {
                children
            }
        </UserContext.Provider>
    )
}

export {UserContext,UserContextProvider}