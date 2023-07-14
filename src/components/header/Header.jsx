"use client"

import {useState} from 'react';
import './header.css'
import Image from "next/image";
import Logo from '../../../public/Logo.svg'

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log('1234')
  };
  return (
    <header className='header'>
      <div className='header__nav'>
        <Image src={Logo} alt='Logo'></Image>
        <div className={`header__menu ${isOpen ? 'open' : ''}`} onClick={handleClick}>
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
      </div>
      <div className='header__reserv'>
        <div className='header__phone'>
          <a href="tel:+86852346000">+86 852 346 000</a>
        </div>
        <button className='header__btn'>
          <a className='heading-five' href="#">Reservations</a>
        </button>
      </div>
    </header>
  )
}