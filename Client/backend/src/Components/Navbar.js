import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div>
                <Link className="logo text-white" to="/">FoodFrenzy</Link>
            </div>
        </nav>
    );
};

export default Navbar;

