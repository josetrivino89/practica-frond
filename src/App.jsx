import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import router from './router'

function App() {
  

  return (
    <RouterProvider router={router}/>   
 
 
  )
}

export default App
