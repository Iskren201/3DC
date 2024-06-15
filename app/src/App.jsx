import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Auth/Login';
import Home from './components/Home/Home';
import Register from './components/Auth/Register';
import Navbar from './components/navBar/navBar';
import Profile from './components/Profile/Profile';
import Product from './components/Product/Product';
import ProductList from './components/Product/Product-list';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/product' element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
