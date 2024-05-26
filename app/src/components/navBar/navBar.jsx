import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/Artboard_2.png';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="bg-black bg-opacity-25 backdrop-blur-md p-4 text-white flex justify-between items-center relative z-50">
            <Link to={'/'} className="flex items-center">
                <img src={logo} alt="Logo" className="h-12 mr-4" />
                <span className="text-xl font-bold text-[#454490] uppercase font-trend-sans-one">3D Creations</span>
            </Link>
            <div className="hidden md:flex md:items-center md:space-x-6">
                <ul className="flex space-x-6">
                    <li><a href="#3d-printers" className="hover:underline">3D Принтери</a></li>
                    <li><a href="#products" className="hover:underline">Продукти</a></li>
                    <li><a href="#services" className="hover:underline">Услуги</a></li>
                    <li><a href="#contacts" className="hover:underline">Контакти</a></li>
                    <li><a href="#about-us" className="hover:underline">За нас</a></li>
                </ul>
                <div className="flex items-center space-x-2">
                    <button className="p-2 bg-blue-500 hover:bg-blue-700 text-white rounded font-proxima-nova-condensed">Вход</button>
                </div>
            </div>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="p-2 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            {showMenu && (
                <div className="md:hidden absolute top-16 right-0 left-0 bg-black bg-opacity-75 backdrop-blur-md p-4 rounded z-50">
                    <ul className="flex flex-col space-y-4">
                        <li><a href="#3d-printers" className="hover:underline">3D Принтери</a></li>
                        <li><a href="#products" className="hover:underline">Продукти</a></li>
                        <li><a href="#services" className="hover:underline">Услуги</a></li>
                        <li><a href="#contacts" className="hover:underline">Контакти</a></li>
                        <li><a href="#about-us" className="hover:underline">За нас</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
