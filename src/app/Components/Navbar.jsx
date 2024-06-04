"use client"
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-semibold">
                    <a href="/" className="hover:text-gray-300">InstantQR</a>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <span className="text-white">Menu</span>
                    </button>
                </div>
                <div className={`md:flex ${isOpen ? 'block' : 'hidden'} space-x-4`}>
                    <a href="/about" className="hover:text-gray-300">About</a>
                    <a href="/contact" className="hover:text-gray-300">Contact</a>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Login
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
