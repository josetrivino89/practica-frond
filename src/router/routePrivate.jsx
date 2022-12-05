import React from 'react'
import { Navigate } from 'react-router-dom';

const RoutePrivate =  ({user, children}) => {
    console.log("llegue");
    //si el usuario no existe lo mandamos al login con un return y usando el mtodo navigate le decimos donde lo mandamos:
    if (!user) {
        return <Navigate to="/login" replace/>
    }
  return  children
}

export default RoutePrivate