import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

const Sidebar = () => {
  return (
    <div className="sidebar bg-success" style={{ width: '200px', height: '900px' }}>
      <nav id="sidebar">
        <ul className="nav-links list-unstyled components text-white">
        <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/add_product">Add Products</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Cart</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;


