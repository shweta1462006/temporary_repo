import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';
import WhistedCard from './Component/WhistedCard.jsx';
import Login from './User_Detail/login_Page.jsx';
import Register from './User_Detail/Register_Page.jsx';


export default function App() {
  return (

    <>
<Navbar/>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/whish" element ={<WhistedCard/>}/>
      <Route path="/login" element ={<Login/>}/>
      <Route path="/register" element ={<Register/>}/>
    </Routes>
    </>
  )
}
