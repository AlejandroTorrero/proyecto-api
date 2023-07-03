import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pagina404 from './components/Pagina404.jsx'
import Criptogrid from "./components/criptoGrid/Criptogrid.jsx"
import Home from './components/home/Home.jsx'
import CriptoPage from './components/criptoPage/CriptoPage.jsx'
import "./main.css"
import Perfil from './components/usuarios/perfil/Perfil.jsx'
import { UserContextProvider } from './context/userContext.jsx'
import Login from './components/usuarios/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <UserContextProvider> 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>      {/* Ruta principal */}
                    <Route index element={<Home />} />
                    <Route path="perfil" element={<Perfil />} />
                </Route>
                <Route path='/Criptomonedas' element={<App />}>
                    <Route index element={<Criptogrid />} />                            
                    <Route path=':id' element ={<CriptoPage />} />
                </Route>
                <Route path='login' element={<Login />} />
                <Route path='*' element={<Pagina404 />} />
            </Routes>
        </BrowserRouter>
        </UserContextProvider>
       
    </>


)
