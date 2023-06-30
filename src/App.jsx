

import "./App.css"
import Criptogrid from "./components/criptoGrid/Criptogrid"

function App() {

  

  

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



  return(

    <>
      <Criptogrid />
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
