'use client'
import './globals.scss'

import {Header} from "@/components/header/Header";
import {NavMenu} from "@/components/nav-menu/Nav-menu";
import {useState} from 'react';


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
      <title>Food Zero</title>
      <body>
        <NavMenu isOpen={isMenuOpen} onMenuToggle={handleMenuToggle} />
        <Header isOpen={isMenuOpen} onMenuToggle={handleMenuToggle} />
        {children}
      </body>
    </html>)
}
