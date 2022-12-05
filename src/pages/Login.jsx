import React, { useEffect } from 'react'
import instance from '../api/axios'

const Login = () => {

    const login = async()=>{
        try {
            const res= await instance.get("/users")
            
        } catch (error) {
            console.log(error);
            
        }
        
    }
    useEffect(() => {
      login()
    
      return () => {
        
      }
    }, [])
    
  return (
    //1-Hacemos el formulario
    //2-con el usuario: nos logueamos con el mail y el passworr
    //3- si todo esta ok nos dan el token
    <div>login</div>
  )
}

export default Login