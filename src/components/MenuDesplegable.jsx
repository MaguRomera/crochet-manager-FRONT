import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css'; 
import menuIcon from '../assets/menu.svg';

export function MenuDesplegable() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  return (
    <>
      <button className="menuToggle" onClick={toggleMenu}>
        <img src={menuIcon} alt="Menú" className="menuIcon" />
      </button>

      <div className={`container ${isOpen ? 'open' : ''}`}>
        <a href="#" className="closeButton" onClick={toggleMenu}>&times;</a>
        <div className="menuContent">
          <Link to="/" className="menuItem" onClick={handleLinkClick}>Home</Link>
          <Link to="/stock" className="menuItem" onClick={handleLinkClick}>Stock</Link>
          <Link to="/proyecto" className="menuItem" onClick={handleLinkClick}>Proyecto</Link>
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}