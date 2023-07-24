"use client"

import {useState} from 'react';
import './header.scss'
import Image from "next/image";
import Logo from '../../../public/Logo.svg'

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className='header content'>
      <div className='header__nav'>
        <Image src={Logo} alt='Logo'></Image>
        <div className={`header__menu ${isOpen ? 'header__open' : ''}`} onClick={handleClick}>
          <div className="header__line header__line-1"></div>
          <div className="header__line header__line-2"></div>
          <div className="header__line header__line-3"></div>
        </div>
      </div>
      <div className='header__reserv'>
        <a className='header__phone' href="tel:+86852346000">+86 852 346 000</a>
        <button className='heading-five btn header__btn'>Reservations</button>
      </div>
    </header>
  )
}