import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Your App Name</Link>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    
                </div>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;