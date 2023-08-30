import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Style.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = localStorage.getItem('user');
  const Navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    localStorage.clear();
    Navigate('/signup')
  };

  return (
    <nav className={`header ${isOpen ? 'open' : ''}`}>
      <div className='nav-container'>
        <Link className="logo text-white font-italic" to="/">FoodFrenzy</Link>
        <div className='menu-icon ' onClick={toggleNavbar}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>

          {auth ?
            <>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/signup" onClick={logout} >Logout</Link></li>
            </>
            :
            <>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          }
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;
