import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Seguros from './pages/Seguros'

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/seguros' element={<Seguros/>}/>
          </Routes>
        <Footer/>

    </BrowserRouter>
    
    </>
  )
}

export default App