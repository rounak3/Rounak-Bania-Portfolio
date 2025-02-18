import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Test from './Pages/Test'
import PentestWork from './Components/PentestWork'
import Resume from './Components/Resume'


function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/gta' element={<Test />} />
      <Route path='/' element={<Home />} />
      <Route path='/pentest/works' element={<PentestWork />} />
      <Route path='/resumes' element={<Resume />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
