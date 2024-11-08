import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'



function App() {
  
  return (
    <>
      <Navbar/>
      <Outlet/>
     <Footer/>
    </>
  )
}

export default App
