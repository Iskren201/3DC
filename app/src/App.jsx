import { useState } from 'react'
import './App.css'
import ParticlesComponent from './components/Particles/particles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>3DC</h1>
        {/* <ParticlesComponent id='particles' /> */}
      </div>
    </>
  )
}

export default App
