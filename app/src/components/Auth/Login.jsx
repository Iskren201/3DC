import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Login.modal';

const Login = ({ setIsLoggedIn, isOpen, onClose, handleOpenRegisterModal }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/login', {
                email,
                password,
            });
            if (response.data.access_token) {
                localStorage.setItem('access_token', response.data.access_token);
                setIsLoggedIn(true);
                onClose();
            } else {
                console.error('Invalid login response');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit} className="space-y-6 text-white font-sans">
                <h2
                    className="text-4xl font-bold text-center mb-4"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                    Login
                </h2>
                <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full p-2 bg-transparent border-b border-gray-500 text-white focus:outline-none focus:border-blue-400"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="w-full p-2 bg-transparent border-b border-gray-500 text-white focus:outline-none focus:border-blue-400"
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="flex items-center justify-between text-sm">
                    <div>
                        <input type="checkbox" id="remember" className="mr-2" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <div>
                        <Link to="/forgot-password" className="hover:text-gray-400">Forgot password?</Link>
                    </div>
                </div>
                <button
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-bold"
                    style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '1px' }}
                    type="submit"
                >
                    LOGIN
                </button>
                <div className="text-center mt-4">
                    <p className="text-sm">
                        Don't have an account?{' '}
                        <button
                            onClick={handleOpenRegisterModal}
                            className="text-blue-400 hover:text-blue-600"
                        >
                            Register here
                        </button>
                    </p>
                </div>
            </form>
        </Modal>
    );
};

export default Login;
