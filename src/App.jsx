import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Footer from './components/footer'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
