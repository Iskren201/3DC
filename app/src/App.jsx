import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/Auth/Login';
import Home from './components/Home/Home';
import Register from './components/Auth/Register';
import Navbar from './components/navBar/navBar';
import Profile from './components/Profile/Profile';
import Product from './components/Product/Product';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CreateProduct from './components/Product/create-Product/create-Product';
import { CartProvider } from './components/addToCart/CartContext';
import Cart from './components/addToCart/addToCart';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const handleCloseRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

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
          <Navbar
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            handleOpenModal={handleOpenModal}
            handleOpenRegisterModal={handleOpenRegisterModal} />
          <div className="flex-grow">
            <Routes>
              <Route path='/' element={<Home />} />
              {/* <Route path='/register' element={<Register />} /> */}
              <Route path='/profile' element={<Profile />} />
              <Route path='/product' element={<Product />} />
              <Route path='/createProduct' element={<CreateProduct />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </div>
          <Footer />
          <Login isOpen={isModalOpen} onClose={handleCloseModal} setIsLoggedIn={setIsLoggedIn} handleOpenRegisterModal={handleOpenRegisterModal} />
          <Register isOpen={isRegisterModalOpen} onClose={handleCloseRegisterModal} />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
