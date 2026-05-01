import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';


export default function App() {
  return (

    <>
<Navbar/>
    <Routes>
      <Route path="/home" element ={<Home/>}/>
    </Routes>
    </>
  )
}
