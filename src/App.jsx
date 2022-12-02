import { useState } from 'react'
import './App.css'
import { Routes,Route,BrowserRouter,} from "react-router-dom";
//importamos las rutas desde la carpeta router:
import AdminUser from './pages/AdminUser';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RoutePrivate from './router/routePrivate';

function App() {
  
  return (
    <>
    <p>Navbar</p>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="admin" element={
      <RoutePrivate user={user}>
      <AdminUser/>
      </RoutePrivate>}/>
    <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    <p>Footer</p>
    </>
 
 
  )
}

export default App
