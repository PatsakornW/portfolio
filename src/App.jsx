import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Project from './pages/project'
import Contact from './pages/contact'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
