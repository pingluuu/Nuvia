import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">Nuvia</Link>
      </div>
      <nav className="nav-right">
        <Link to="/login">Login</Link>
        <Link to="/Profile">Profile</Link>
      </nav>
    </header>
  );
};



export default Navbar;
