import { useState } from 'react'
import './App.css'
import Navbar from './components/navBar/navBar'
import Hero from './components/Hero/Hero'
import Slider from './components/Slider'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Slider />} />
        <Route path="/" element={<Hero />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
