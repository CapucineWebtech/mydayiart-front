import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Remplacer Link par NavLink
import '../css/navbar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
        <img src="/logo512.png" alt="logo MyDayIArt" height="60px" width="60px" className="nav-logo" />
        <div className="nav-app-name">MyDayArt</div>
        <div className="nav-menu-icon" onClick={toggleMenu}>
            <div className="nav-hamburger-line"></div>
            <div className="nav-hamburger-line"></div>
            <div className="nav-hamburger-line"></div>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link-active' : '')} onClick={closeMenu}>Accueil</NavLink></li>
            <div className="nav-separator"></div>
            <li><NavLink to="/draw" className={({ isActive }) => (isActive ? 'nav-link-active' : '')} onClick={closeMenu}>Image</NavLink></li>
            <div className="nav-separator"></div>
            <li><NavLink to="/vote" className={({ isActive }) => (isActive ? 'nav-link-active' : '')} onClick={closeMenu}>Vote</NavLink></li>
        </ul>
    </nav>
  );
};

export default NavBar;