import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">Nuvia</Link>
      </div>
      <nav className="nav-links">
  <Link to="/find-nannies" className="nav-btn">Find Nanny</Link>
  <Link to="/community" className="nav-btn">Community Forum</Link>
  <Link to="/find-walk-in-clinic" className="nav-btn">Walk-in Clinic</Link>
</nav>
      <nav className="nav-right">
        <Link to="/login">Login</Link>
        <Link to="/Profile">Profile</Link>
      </nav>
    </header>
  );
};



export default Navbar;
