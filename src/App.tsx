import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        {/* <Route  element={<Hero/>}/> */}
        <Hero/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
