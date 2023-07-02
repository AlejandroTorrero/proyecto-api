import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pagina404 from './components/Pagina404.jsx'
import Criptogrid from "./components/criptoGrid/Criptogrid.jsx"
import Home from './components/home/Home.jsx'
import CriptoPage from './components/criptoPage/CriptoPage.jsx'
import "./main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
    <>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>      {/* Ruta principal */}
                    <Route index element={<Home />} />
                </Route>
                <Route path='/Criptomonedas' element={<App />}>
                    <Route index element={<Criptogrid />} />        
                    <Route path=':id' element ={<CriptoPage />} />
                </Route>
                <Route path='*' element={<Pagina404 />} />
            </Routes>
        </BrowserRouter>
    </>


)
