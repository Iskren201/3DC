import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/img/Logo.png';
import { useCart } from '../addToCart/CartContext';

function Navbar({ isLoggedIn, setIsLoggedIn }) {
    const [showMenu, setShowMenu] = React.useState(false);
    const [showDropdown, setShowDropdown] = React.useState(false);
    // const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('access_token'));
    const navigate = useNavigate();
    const dropdownRef = React.useRef(null);
    const { cartCount } = useCart(); // Correctly call this from context

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleLogoutClick = async () => {
        try {
            await fetch('/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            localStorage.removeItem('access_token');
            setIsLoggedIn(false);
            navigate('/');

        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-black bg-opacity-25 backdrop-blur-md p-4 text-white flex justify-between items-center relative z-50">
            <Link to={'/'} className="flex items-center">
                <img src={logo} alt="Logo" className="h-16 w-80 mr-4" />
            </Link>
            <div className="hidden md:flex md:items-center md:space-x-6">
                <ul className="flex space-x-6 justify-items-center items-center">
                    <li><Link to='/product' className="hover:underline">Products</Link></li>
                    <li><a href="#contacts" className="hover:underline">Contacts</a></li>
                    <li><a href="#about-us" className="hover:underline">About Us</a></li>
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
                                        <Link to="/Profile" className="block px-4 py-2 text-black hover:bg-gray-100">Profile</Link>
                                        <Link to="/createProduct" className="block px-4 py-2 text-black hover:bg-gray-100">Create Product</Link>
                                        <Link to="/settings" className="block px-4 py-2 text-black hover:bg-gray-100">Settings</Link>
                                        <button onClick={handleLogoutClick} className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100">Logout</button>
                                    </div>
                                )}
                            </div>
                            <Link to="/cart" className="relative p-2 text-white">
                                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                        </>
                    ) : (
                        <button onClick={handleLoginClick} className="p-2 bg-blue-500 hover:bg-blue-700 text-white rounded font-proxima-nova-condensed">Login</button>
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
                        <li><Link to='/product' className="hover:underline">Products</Link></li>
                        <li><a href="#contacts" className="hover:underline">Contacts</a></li>
                        <li><a href="#about-us" className="hover:underline">About Us</a></li>
                        {isLoggedIn && (
                            <>
                                <li><Link to="/Profile" className="hover:underline">Profile</Link></li>
                                <li><Link to="/cart" className="hover:underline">Cart</Link></li>
                                <li><Link to="/createProduct" className="hover:underline">Create Product</Link></li>
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
