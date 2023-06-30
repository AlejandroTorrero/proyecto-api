import { useEffect, useState } from "react"
import Criptocard from "./Criptocard"
import "./grid.css"
import axios from "axios"

const Criptogrid = ()=>{
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
          <span> Cargando... </span>
        </>
      )

    return(
        <>    
        <div className="title">
            <h1>Criptomonedas</h1>
        </div>    
        {
          cripto.map(({ id, name, priceUsd }) => (
            <Criptocard 
                nombre={name}
                codigo={id}
                valor={priceUsd}
            />            
          ))
        }

        {/* <Criptocard 
            nombre="bitocin"
            codigo="BTC"
            valor="10"
        />
        <Criptocard />
        <Criptocard /> */}
        </>
    )
}

export default Criptogrid