import { useState } from "react"
import axios from "axios"
import { useNavigate,Navigate } from "react-router-dom"
import "./login.css"

const Login = () => {

    const navigation = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [cargando,setCargando] = useState(false)
    const [error, setError] = useState()

    const submit = (e) =>{
        e.preventDefault() //Evita que se envié el formulario
        setError(null)
        console.log(user)
        setCargando(true)

        axios.post(`https://reqres.in/api/login`,user)
        .then(data => {
            setCargando(false)
            localStorage.setItem("tokenTI",data.data.token) //Guardar el token de inicio de sesión
            navigation("/")            
        })
        .catch(e=>{
            console.error(e)
            setCargando(false)
            setError(e.response.data.error)
        })
    }

    //Navigate
    if(localStorage.getItem("tokenTI"))return <Navigate to="/" />


    return (
        <div className="login-container">
            <h1>Iniciar sesión</h1>
            <form action="" onSubmit={submit}>
                <div className="field">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input required onChange={(e) => {
                        setUser({
                            ...user,
                            email: e.target.value
                        })
                    }} type="email" name="email" />
                </div>
                <div className="field">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" required onChange={(e) => {
                        setUser({
                            ...user,
                            password: e.target.value
                        })
                    }} name="password" />
                </div>
                <div className="submit">
                    <input type="submit" value={
                        (cargando) ? ("cargando"):("Ingresar")
                    } />
                </div>
            </form>
            {
                error && <span className="error">Error: {error}</span>
            }
        </div>
    )
}

export default Login