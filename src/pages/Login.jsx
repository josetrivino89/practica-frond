import React, { useEffect } from 'react'
import instance from '../api/axios'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const login = async()=>{

        const user= {
            email: "josethugo2@gmail.com",
            password:"1234567"
        }
        try {
            const res= await instance.post("/auth/login", user)
            const user_token= res.data.token
            localStorage.setItem("token",user_token)
            navigate ("/")            
        } catch (error) {
            console.log(error);            
        }
        
    }   
  return (
    //1-Hacemos el formulario
    //2-con el usuario: nos logueamos con el mail y el passworr
    //3- si todo esta ok nos dan el token
    <div>
        <p>Login</p>
         <button onClick={login}>entrar</button>
    </div>
  )
}

export default Login