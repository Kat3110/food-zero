'use client'
import React, { useState } from 'react';
import './nav-menu.scss';

export function NavMenu({ isOpen, onMenuToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(isOpen);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
    onMenuToggle(true);
  };
  return (
    <section className={`nav-menu ${isOpen ? 'nav-menu-open' : ''}`}>
      <div>{isOpen ? 'true' : 'false'}</div>
      <div className='nav-menu__close' onClick={handleMenuClose}>
        <div className="nav-menu__line nav-menu__line-1"></div>
        <div className="nav-menu__line nav-menu__line-2"></div>
      </div>
    </section>
  )
}