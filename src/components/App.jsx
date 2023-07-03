import "./App.css"
import Menu from "./menu/Menu"
import {Outlet} from "react-router-dom"
import { Navigate } from "react-router-dom"

function App() {

  if(!localStorage.getItem("tokenTI"))return <Navigate to="/login" />

  /*  useEffect(() => {
     fetch(`${API_URL}assets`)
       .then((res) => {
         return res.json()
       })
       .then((data) => {
         // console.log(data)
         setCripto(data.data)
       })
       .catch(() => {
         console.error("La petición falló")
         console.log(API_URL)
       })
   }, []) */


  return (
    <>
      <Menu />
      <Outlet />      
    </>
  )


  /*   
  
    return (
      <>
        <h1>Lista de criptomonedas</h1>
  
        <ol>
          {
            cripto.map(({ id, name, priceUsd }) => (
              <li key={id}>Nombre: {name} --- Precio: {priceUsd}</li>
            ))
          }
        </ol>
  
      </>
    ) */
}

export default App
