import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <nav className={`navBar ${isOpen ? 'open' : ''}`}>
        <div className='nav-container'>
            <h1>LOGO</h1>
            <div className='menu-icon' onClick={toggleNavbar}>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div> 
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            </div>
 
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add_new">Add New</Link></li>
                <li><Link to="/update">Update</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
    </nav>
  )
};

export default Navbar;
