import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSignOutAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/img/Artboard_2.png';

function Navbar({ isLoggedIn }) {
    const [showMenu, setShowMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleLogoutClick = () => {
        navigate('/');
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-black bg-opacity-25 backdrop-blur-md p-4 text-white flex justify-between items-center relative z-50">
            <Link to={'/'} className="flex items-center">
                <img src={logo} alt="Logo" className="h-12 mr-4" />
                <span className="text-xl font-bold text-[#454490] uppercase font-trend-sans-one">3D Creations</span>
            </Link>
            <div className="hidden md:flex md:items-center md:space-x-6">
                <ul className="flex space-x-6">
                    <li><a href="#3d-printers" className="hover:underline">3D Принтери</a></li>
                    <li><a className="hover:underline">Продукти</a></li>
                    <li><a className="hover:underline">Услуги</a></li>
                    <li><a className="hover:underline">Контакти</a></li>
                    <li><a className="hover:underline">За нас</a></li>
                </ul>
                <div className="flex items-center space-x-2">
                    {isLoggedIn ? (
                        <>
                            <div className="relative" ref={dropdownRef}>
                                <button onClick={toggleDropdown} className="p-2 text-white focus:outline-none">
                                    <FontAwesomeIcon icon={faUser} size="lg" />
                                </button>
                                {showDropdown && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                                        <Link to="Profile" className="block px-4 py-2 text-black hover:bg-gray-100">Profile</Link>
                                        <Link to="/settings" className="block px-4 py-2 text-black hover:bg-gray-100">Settings</Link>
                                        <button onClick={handleLogoutClick} className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100">Logout</button>
                                    </div>
                                )}
                            </div>
                            <Link to="/cart" className="p-2 text-white">
                                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                            </Link>
                        </>
                    ) : (
                        <button onClick={handleLoginClick} className="p-2 bg-blue-500 hover:bg-blue-700 text-white rounded font-proxima-nova-condensed">Вход</button>
                    )}
                </div>
            </div>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="p-2 focus:outline-none">
                    <FontAwesomeIcon icon={faBars} size="lg" />
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
                        {isLoggedIn && (
                            <>
                                <li><Link className="hover:underline">Profile</Link></li>
                                <li><Link className="hover:underline">Cart</Link></li>
                                <li><button onClick={handleLogoutClick} className="hover:underline">Logout</button></li>
                            </>
                        )}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
