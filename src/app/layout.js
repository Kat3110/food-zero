'use client'
import './globals.scss'

import {Header} from "@/components/header/Header";
import {NavMenu} from "@/components/nav-menu/Nav-menu";
import {useState, useEffect} from 'react';

export const metadata = {
  title: 'Food Zero',
}

export default function RootLayout({children}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (isOpen) => {
    setIsMenuOpen(!isOpen);
    if (isMenuOpen) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <html lang="en">
      <link rel='icon' href='orangeLink.svg'/>
      <meta name="description" content='Healthy food restaurant' />
      <body>
        <NavMenu isOpen={isMenuOpen} onMenuToggle={handleMenuToggle} />
        <Header isOpen={isMenuOpen} onMenuToggle={handleMenuToggle} />
        {children}
      </body>
    </html>)
}
