import { Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* <Route element={<Hero />} /> */}
        <Route path="/" element={<Hero />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
