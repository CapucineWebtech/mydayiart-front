import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../css/navbar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('i18nextLng', language);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest('.nav-menu-icon') && !event.target.closest('.nav-links')) {
        closeMenu();
      }
    };
    if (isOpen) {document.addEventListener('mousedown', handleOutsideClick);}

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
        <img src="/logo512.png" alt="logo MyDayIArt" height="60px" width="60px" className="nav-logo" />
        <div className="nav-app-name">{t('app-name')}</div>
        <div className="nav-menu-icon" onClick={toggleMenu}>
            <div className="nav-hamburger-line"></div>
            <div className="nav-hamburger-line"></div>
            <div className="nav-hamburger-line"></div>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link-active' : '')} onClick={closeMenu}>{t('nav-bar.home')}</NavLink></li>
            <div className="nav-separator"></div>
            <li><NavLink to="/draw" className={({ isActive }) => (isActive ? 'nav-link-active' : '')} onClick={closeMenu}>{t('nav-bar.draw')}</NavLink></li>
            <div className="nav-separator"></div>
            <li><NavLink to="/vote" className={({ isActive }) => (isActive ? 'nav-link-active' : '')} onClick={closeMenu}>{t('nav-bar.vote')}</NavLink></li>
            <div className="nav-separator"></div>
            <li><a href="mailto:mydayiart@gmail.com" className="nav-link" onClick={closeMenu}>{t('nav-bar.contact')}</a></li>

            {i18n.language !== 'en' && 
              <>
                <div className="nav-separator"></div>
                <li><span className="nav-link" onClick={() => changeLanguage('en')}>Switch to English</span></li>
              </>
            }
            {i18n.language !== 'fr' && 
              <>
                <div className="nav-separator"></div>
                <li><span className="nav-link" onClick={() => changeLanguage('fr')}>Passer en Français</span></li>
              </>
            }
        </ul>
    </nav>
  );
};

export default NavBar;