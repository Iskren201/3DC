import React from 'react';
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { SiGooglepay, SiApplepay } from 'react-icons/si';
import { FaTiktok, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ marginTop: '200px' }} className="bg-black text-white w-full py-8">
            <div className="flex flex-col items-center space-y-4">
                <p className="text-lg">Методи на плащане:</p>
                <div className="flex space-x-6 text-3xl">
                    <FaCcVisa />
                    <FaCcMastercard />
                    <SiGooglepay />
                    <SiApplepay />
                </div>
                <p className="text-lg mt-8">Разберете повече за нас:</p>
                <div className="flex space-x-6 text-3xl">
                    <FaTiktok />
                    <FaYoutube />
                    <FaInstagram />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
