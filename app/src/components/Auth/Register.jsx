import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RegisterModal from '../Modal/Register.modal';

const Register = ({ isOpen, onClose }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/auth/register', {
                username,
                email,
                password,
            });
            setSuccess('Registration successful! Please log in.');
            setError('');
        } catch (error) {
            setError('Registration failed. Please try again.');
            setSuccess('');
        }
    };

    return (
        <RegisterModal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit} className="space-y-6 text-white font-sans">
                <h2
                    className="text-4xl font-bold text-center mb-4"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                    Register
                </h2>
                {error && <p className="text-red-500 text-xs italic">{error}</p>}
                {success && <p className="text-green-500 text-xs italic">{success}</p>}
                <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="w-full p-2 bg-transparent border-b border-gray-500 text-white focus:outline-none focus:border-blue-400"
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
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
                <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        className="w-full p-2 bg-transparent border-b border-gray-500 text-white focus:outline-none focus:border-blue-400"
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-bold"
                    style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '1px' }}
                    type="submit"
                >
                    Register
                </button>
                <div className="text-center mt-4">
                    <p className="text-sm">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-400 hover:text-blue-600">
                            Login
                        </Link>
                    </p>
                </div>
            </form>
        </RegisterModal>
    );
};

export default Register;
