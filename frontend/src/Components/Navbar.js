import React, { useState } from 'react'
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <div className='nav-container'>
            <h1>LOGO</h1>
            <div className='menu-icon' onClick={toggleNavbar}>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div> 
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            </div>
 
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </nav>
  )
};

export default Navbar;
