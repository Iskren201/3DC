import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/Auth/Login';
import Home from './components/Home/Home';
import Register from './components/Auth/Register';
import Navbar from './components/navBar/navBar';
import Profile from './components/Profile/Profile';
import Product from './components/Product/Product';
// import ProductList from './components/Product/Product-list';
// import CreateProduct from './components/Product/CreateProduct';
import Footer from './components/Footer/Footer';
import CreateProduct from './components/Product/create-Product/create-Product';
import { CartProvider } from './components/addToCart/CartContext';
import Cart from './components/addToCart/addToCart';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <div className="flex-grow">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/product' element={<Product />} />
              <Route path='/createProduct' element={<CreateProduct />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
