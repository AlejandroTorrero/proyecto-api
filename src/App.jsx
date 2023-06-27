import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"

function App() {

  const API_URL = import.meta.env.VITE_API_URL

  const [cripto, setCripto] = useState()

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

  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((data) => {
        // console.log(data)
        // setCripto(data.data)
        setCripto(data.data.data)
      })
      .catch(() => {
        console.error("La petición falló")
        console.log(API_URL)
      })
  }, []) 



  if (!cripto) return (
    <>
      <span> Cargando... </span>
    </>
  )

  return (
    <>
      <h1>Lista de criptomonedas</h1>

      <ol>
        {
          cripto.map(({ id,name, priceUsd }) => (
            <li key={id}>Nombre: {name} --- Precio: {priceUsd}</li>
          ))
        }
      </ol>

    </>
  )
}

export default App
