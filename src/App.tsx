import Home from './components/Home'
import Create from './components/Create'
import React from 'react'
import Update from './components/Update'
import Read from "./components/Read"
import { Routes, Route } from 'react-router-dom'
import './App.css'


function App() {
  

  return (
    
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/read/:id' element={<Read />} />
      </Routes>
    
      
  )
}

export default App
