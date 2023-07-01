import { useEffect, useState } from "react"
import Criptocard from "./Criptocard"
import "./grid.css"
import axios from "axios"

const Criptogrid = () => {
  const API_URL = import.meta.env.VITE_API_URL

  const [cripto, setCripto] = useState()

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
      <div className="laoding">
        <span> Cargando... </span>
      </div>

    </>
  )

  return (
    <>
      <div className="title">
        <h1>Criptomonedas</h1>
      </div>
      <div className="grid">
        {
          cripto.map(({ id, symbol, name, priceUsd, changePercent24Hr }) => (
            <Criptocard
              key={id}
              id={id}
              nombre={name}
              codigo={symbol}
              valor={priceUsd}
              change={changePercent24Hr}
            />
          ))
        }
      </div>
    </>
  )
}

export default Criptogrid